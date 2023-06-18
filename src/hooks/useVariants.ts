import {
  CSSClass,
  CSSClasses,
  CSSClassKeyValuePair,
  CSSRawClassesList,
} from './../types/variant'
import { EqualUIConfiguration } from '@/types/variant'
import { inject } from 'vue'
import { Components } from '@/models/enums'
import { VariantJSWithClassesListProps } from '@/helpers/getVariantProps'
import { twMerge } from 'tailwind-merge'

export const selectClasses = (
  classesObject: CSSClassKeyValuePair,
): CSSClasses =>
  Object.keys(classesObject).filter(
    (className: string) => !!classesObject[className],
  )

const mergeClasses = (...classes: CSSClasses): string =>
  classes
    .map((className: CSSClass): string => {
      if (typeof className === 'string' || className === undefined) {
        return className || ''
      }

      if (Array.isArray(className)) {
        return mergeClasses(...className)
      }

      return mergeClasses(...selectClasses(className))
    })
    .join(' ')
    .replace(/  +/g, ' ')
    .trim()

export const useVariants = <T>(
  name: Components,
  props: VariantJSWithClassesListProps<T> = {},
): {
  transitions?: Record<string, Record<string, string>>
} & CSSRawClassesList<T> => {
  const config = inject<EqualUIConfiguration>(
    'config',
    {} as EqualUIConfiguration,
  )
  const globalVariant = config && config[name] // FIXME: Not gonna work with nuxt?

  let finalResult: {
    transitions?: Record<string, Record<string, string>>
  } & CSSRawClassesList<T> = {}

  if (globalVariant) {
    for (let [key, value] of Object.entries(globalVariant.base || {})) {
      // @ts-ignore
      const result = props.base?.[key]
        ? // @ts-ignore
          [props.base[key]]
        : [value]

      const variant = props.variant || 'default'
      result.push(
        Array.isArray(variant)
          ? variant.map(
              (el) =>
                // @ts-ignore
                props.variants?.[el]?.[key] ||
                globalVariant?.variants?.[el]?.[key],
            )
          : // @ts-ignore
            props.variants?.[variant]?.[key] ||
              // @ts-ignore
              globalVariant?.variants?.[variant]?.[key],
      )

      // @ts-ignore
      finalResult[key as keyof T] = result.filter((el) => !!el)
    }
  }

  for (let [key, value] of Object.entries(finalResult)) {
    // @ts-ignore
    finalResult[key] = twMerge(mergeClasses(value))
  }

  finalResult.transitions = config?.transitions || {}

  return finalResult
}

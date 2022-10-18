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

export let useVariants = <T>(
  name: Components,
  props: VariantJSWithClassesListProps<T> = {},
): {
  transitions?: Record<string, Record<string, string>>
} & CSSRawClassesList<T> => {
  const config = inject<EqualUIConfiguration>(
    'config',
    {} as EqualUIConfiguration,
  )
  const globalVariant = config[name] // FIXME: Not gonna work with nuxt

  let finalResult: {
    transitions?: Record<string, Record<string, string>>
  } & CSSRawClassesList<T> = {}

  if (globalVariant) {
    for (let [key, value] of Object.entries(globalVariant.fixedClasses || {})) {
      // @ts-ignore
      const result = props.fixedClasses?.[key]
        ? // @ts-ignore
          [props.fixedClasses[key]]
        : [value]
      if (props.variant) {
        result.push(
          // @ts-ignore
          props.classes?.[key] || globalVariant?.classes?.[key],
          Array.isArray(props.variant)
            ? props.variant.map(
                (el) =>
                  // @ts-ignore
                  props.variants?.[el]?.[key] ||
                  globalVariant?.variants?.[el]?.[key],
              )
            : // @ts-ignore
              props.variants?.[props.variant]?.[key] ||
                // @ts-ignore
                globalVariant?.variants?.[props.variant]?.[key],
        )
      }

      // @ts-ignore
      finalResult[key as keyof T] = result.filter((el) => !!el)
    }
  }

  for (let [key, value] of Object.entries(finalResult)) {
    // @ts-ignore
    finalResult[key] = mergeClasses(value)
  }

  finalResult.transitions = config.transitions

  return finalResult
}

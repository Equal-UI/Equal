import {
  CSSClass,
  CSSClasses,
  CSSClassKeyValuePair,
  CSSRawClassesList,
  WithVariantProps,
} from './../types/variant'
import { EqualUIConfiguration } from '@/types/variant'
import { inject } from 'vue'
import { Components } from '@/models/enums'
import {
  parseVariantWithClassesList,
  VariantJSWithClassesListProps,
} from '@/helpers/getVariantProps'

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

export var useVariants = <T>(
  name: Components,
  props: VariantJSWithClassesListProps<T> = {},
): CSSRawClassesList<T> => {
  // TODO: merge global and local class props
  const config = inject<EqualUIConfiguration>('config', {})
  const globalVariant = config[name]

  let finalResult: CSSRawClassesList<T> = {}

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
          // @ts-ignore
          props.variants?.[props.variant]?.[key] ||
            // @ts-ignore
            globalVariant?.variants?.[props.variant]?.[key],
        )
      }

      finalResult[key as keyof T] = result.filter((el) => !!el)
    }
  }

  for (let [key, value] of Object.entries(finalResult)) {
    // @ts-ignore
    finalResult[key] = mergeClasses(value)
  }

  return finalResult
}

import { Components } from '@/models/enums'
import { VariantJSWithClassesListProps } from '@/helpers/getVariantProps'
import {
  CSSClass,
  CSSClasses,
  CSSClassKeyValuePair,
  CSSRawClassesList,
  EqualUIConfiguration,
  WithVariantProps,
} from '@/types/variant'
import { assert, describe, expect, it } from 'vitest'

describe('suite name', () => {
  it('Without variant', () => {
    const defVariant = useVariants(Components.ITAlert, {})
    expect(defVariant).toMatchInlineSnapshot(`
      {
        "body": "text-sm text-gray-900 leading-none mt-2.5",
        "closeIcon": "select-none cursor-pointer",
        "icon": "text-2xl",
        "iconbox": "mr-3.5 select-none",
        "root": "rounded border flex bg-white px-4 py-5",
        "title": "text-sm font-semibold text-gray-900 leading-none",
      }
    `)
  })

  it('With variant', () => {
    const defVariant = useVariants(Components.ITAlert, { variant: 'primary' })
    expect(defVariant).toMatchInlineSnapshot(`
      {
        "body": "text-sm text-gray-900 leading-none mt-2.5",
        "closeIcon": "select-none cursor-pointer",
        "icon": "text-2xl",
        "iconbox": "mr-3.5 select-none",
        "root": "rounded border flex bg-white px-4 py-5 border-blue-600",
        "title": "text-sm font-semibold text-gray-900 leading-none",
      }
    `)
  })

  it('Props fixedClasses override global', () => {
    const defVariant = useVariants(Components.ITAlert, {
      fixedClasses: { title: { 'text-xl': true }, icon: ['text-xl'] },
    })
    expect(defVariant).toMatchInlineSnapshot(`
      {
        "body": "text-sm text-gray-900 leading-none mt-2.5",
        "closeIcon": "select-none cursor-pointer",
        "icon": "text-xl",
        "iconbox": "mr-3.5 select-none",
        "root": "rounded border flex bg-white px-4 py-5",
        "title": "text-xl",
      }
    `)
  })

  it('Props fixedClasses override global', () => {
    const defVariant = useVariants(Components.ITAlert, {
      fixedClasses: { title: 'text-xl' },
    })
    expect(defVariant).toMatchInlineSnapshot(`
      {
        "body": "text-sm text-gray-900 leading-none mt-2.5",
        "closeIcon": "select-none cursor-pointer",
        "icon": "text-2xl",
        "iconbox": "mr-3.5 select-none",
        "root": "rounded border flex bg-white px-4 py-5",
        "title": "text-xl",
      }
    `)
  })
})

const deff: EqualUIConfiguration = {
  'it-alert': {
    fixedClasses: {
      root: 'rounded border flex bg-white px-4 py-5',
      title: 'text-sm font-semibold text-gray-900 leading-none',
      body: 'text-sm text-gray-900 leading-none mt-2.5',
      iconbox: 'mr-3.5 select-none',
      icon: 'text-2xl',
      closeIcon: 'select-none cursor-pointer',
    },
    classes: {},
    variants: {
      primary: {
        root: 'border-blue-600',
      },
    },
  },
}

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
  props: VariantJSWithClassesListProps<T> & {
    variant?: string
  } = {},
): CSSRawClassesList<T> => {
  // TODO: merge global and local class props
  const config = deff // inject('config', {})
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
    finalResult[key] = mergeClasses(...value)
  }

  return finalResult
}

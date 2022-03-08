import {
  CSSClassesList,
  CSSRawClassesList,
  WithVariantProps,
} from '@/types/variant'
import { PropType } from 'vue'

export type VariantJSWithClassesListProps<ClassesKeys> = {
  classes?: {
    type: PropType<CSSRawClassesList<ClassesKeys>>
    default: undefined
  }
  fixedClasses?: {
    type: PropType<CSSRawClassesList<ClassesKeys>>
    default: undefined
  }
  variants?: {
    type: PropType<CSSRawClassesList<ClassesKeys>>
    default: undefined
  }
  variant?: {
    type: PropType<string | undefined>
    default: undefined
  }
}

declare type ObjectWithClassesList = {
  classesList?: CSSClassesList
}

export declare const parseVariantWithClassesList: <
  P extends ObjectWithClassesList,
>() => P

export const getVariantPropsWithClassesList = <
  ClassesKeys extends Record<string, unknown>,
>(): VariantJSWithClassesListProps<ClassesKeys> => ({
  classes: {
    type: Object as PropType<CSSRawClassesList<ClassesKeys>>,
    default: undefined,
  },
  fixedClasses: {
    type: Object as PropType<CSSRawClassesList<ClassesKeys>>,
    default: undefined,
  },
  variants: {
    type: Object as PropType<WithVariantProps<ClassesKeys>>,
    default: undefined,
  },
  variant: {
    type: String as PropType<string | undefined>,
    default: undefined,
  },
})

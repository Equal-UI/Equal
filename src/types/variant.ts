import { Components } from '@/models/enums'
import {
  ITIconVariants,
  ITTagVariants,
  ITAvatarVariants,
  ITAlertVariants,
  ITDividerVariants,
  ITBadgeVariants,
  ITButtonVariants,
} from './components/components'

export declare type CSSClassKeyValuePair = {
  [key: string]: any
}
export declare type CSSClasses = CSSClass[]
export declare type CSSClass =
  | CSSClassKeyValuePair
  | string
  | CSSClasses
  | undefined

export declare type CSSClassesList<ClassesKeys extends string = string> = {
  [key in ClassesKeys]?: CSSClass
}

export declare type CSSRawClassesList<ClassesKeys> = {
  [T in keyof ClassesKeys]?: CSSClass
}

export type WithVariantProps<P> = {
  classes?: CSSRawClassesList<P>
  fixedClasses?: CSSRawClassesList<P>
  variants?: Variants<P>
} & P

export interface Variants<P> {
  [key: string]: CSSRawClassesList<P> | undefined
}

export type EqualUIConfiguration = {
  [Components.ITAlert]?: ITAlertVariants
  [Components.ITAvatar]?: ITAvatarVariants
  [Components.ITIcon]?: ITIconVariants
  [Components.ITTag]?: ITTagVariants
  [Components.ITCheckbox]?: ITTagVariants
  [Components.ITDivider]?: ITDividerVariants
  [Components.ITBadge]?: ITBadgeVariants
  [Components.ITButton]?: ITButtonVariants
}

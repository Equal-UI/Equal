import { Components } from '@/models/enums'
import {
  ITIconVariants,
  ITTagVariants,
  ITAvatarVariants,
  ITAlertVariants,
  ITDividerVariants,
  ITBadgeVariants,
  ITButtonVariants,
  ITSpinnerVariants,
  ITCollapseVariants,
  ITCollapseItemVariants,
  ITTextareaVariants,
  ITRadioVariants,
  ITButtonGroupVariants,
  ITAvatarGroupVariants,
  ITDrawerVariants,
  ITInputVariants,
  ITNumberInputVariants,
  ITSliderVariants,
  ITSwitchVariants,
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
  transitions: Record<string, Record<string, string>>
  [Components.ITAlert]?: ITAlertVariants
  [Components.ITAvatar]?: ITAvatarVariants
  [Components.ITAvatarGroup]?: ITAvatarGroupVariants
  [Components.ITIcon]?: ITIconVariants
  [Components.ITTag]?: ITTagVariants
  [Components.ITCollapse]?: ITCollapseVariants
  [Components.ITCollapseItem]?: ITCollapseItemVariants
  [Components.ITCheckbox]?: ITTagVariants
  [Components.ITCheckbox]?: ITTagVariants
  [Components.ITDivider]?: ITDividerVariants
  [Components.ITDrawer]?: ITDrawerVariants
  [Components.ITBadge]?: ITBadgeVariants
  [Components.ITButton]?: ITButtonVariants
  [Components.ITButtonGroup]?: ITButtonGroupVariants
  [Components.ITSpinner]?: ITSpinnerVariants
  [Components.ITSlider]?: ITSliderVariants
  [Components.ITSwitch]?: ITSwitchVariants
  [Components.ITTextarea]?: ITTextareaVariants
  [Components.ITRadio]?: ITRadioVariants
  [Components.ITInput]?: ITInputVariants
  [Components.ITNumberInput]?: ITNumberInputVariants
}

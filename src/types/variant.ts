import { Components } from '@/models/enums'
import {
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
  ITToggleVariants,
  ITTabsVariants,
  ITLoadingbarVariants,
  ITColorpickerVariants,
  ITTooltipVariants,
  ITProgressBarVariants,
  ITSelectVariants,
  ITModalVariants,
  ITMessageVariants,
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
  base?: CSSRawClassesList<P>
  variants?: Variants<P>
} & P

export interface Variants<P> {
  [key: string]: CSSRawClassesList<P> | undefined
}

export interface EqualUIConfiguration {
  transitions: Record<string, Record<string, string>>
  [Components.ITAlert]?: ITAlertVariants
  [Components.ITAvatar]?: ITAvatarVariants
  [Components.ITAvatarGroup]?: ITAvatarGroupVariants
  [Components.ITTabs]?: ITTabsVariants
  [Components.ITTag]?: ITTagVariants
  [Components.ITCollapse]?: ITCollapseVariants
  [Components.ITCollapseItem]?: ITCollapseItemVariants
  [Components.ITColorpicker]?: ITColorpickerVariants
  [Components.ITLoadingbar]?: ITLoadingbarVariants
  [Components.ITProgressbar]?: ITProgressBarVariants
  [Components.ITTooltip]?: ITTooltipVariants
  [Components.ITCheckbox]?: ITTagVariants
  [Components.ITCheckbox]?: ITTagVariants
  [Components.ITDivider]?: ITDividerVariants
  [Components.ITDrawer]?: ITDrawerVariants
  [Components.ITBadge]?: ITBadgeVariants
  [Components.ITButton]?: ITButtonVariants
  [Components.ITButtonGroup]?: ITButtonGroupVariants
  [Components.ITSpinner]?: ITSpinnerVariants
  [Components.ITSlider]?: ITSliderVariants
  [Components.ITModal]?: ITModalVariants
  [Components.ITMessage]?: ITMessageVariants
  [Components.ITSwitch]?: ITSwitchVariants
  [Components.ITTextarea]?: ITTextareaVariants
  [Components.ITToggle]?: ITToggleVariants
  [Components.ITRadio]?: ITRadioVariants
  [Components.ITSelect]?: ITSelectVariants
  [Components.ITInput]?: ITInputVariants
  [Components.ITNumberInput]?: ITNumberInputVariants
}

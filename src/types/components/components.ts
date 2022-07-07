import { WithVariantProps } from '../variant'

interface IComponentWithRoot extends Record<string, unknown> {
  root: string
}

export interface ITAlertOptions extends IComponentWithRoot {
  iconbox?: string
  icon?: string
  title?: string
  body?: string
  closeIcon?: string
}

export type ITAlertVariants = WithVariantProps<ITAlertOptions>

export interface ITAvatarOptions extends IComponentWithRoot {
  img?: string
  text?: string
  placeholder?: string
}

export type ITAvatarVariants = WithVariantProps<ITAvatarOptions>

export interface ITAvatarGroupOptions extends IComponentWithRoot {
  count?: string
}

export type ITAvatarGroupVariants = WithVariantProps<ITAvatarOptions>

export interface ITIconOptions extends IComponentWithRoot {
  box?: string
}

export type ITIconVariants = WithVariantProps<ITIconOptions>

export interface ITSelectOptions extends IComponentWithRoot {
  label?: string
}

export type ITSelectVariants = WithVariantProps<ITSelectOptions>

export interface ITTagOptions extends IComponentWithRoot {
  box?: string
}

export type ITTagVariants = WithVariantProps<ITTagOptions>

export interface ITLoadingbarOptions extends IComponentWithRoot {}

export type ITLoadingbarVariants = WithVariantProps<ITLoadingbarOptions>

export interface ITCheckboxOptions extends IComponentWithRoot {
  checkbox?: string
  checkIconActive?: string
  checkIcon?: string
  checkLabelGroup?: string
  label?: string
  subLabel?: string
  lineThrough?: string
}

export type ITCheckboxVariants = WithVariantProps<ITCheckboxOptions>

export interface ITRadioOptions extends IComponentWithRoot {
  border?: string
  circle?: string
  activeCircle?: string
  radioLabelGroup?: string
  label?: string
  subLabel?: string
}

export type ITRadioVariants = WithVariantProps<ITRadioOptions>

export interface ITProgressBarOptions extends IComponentWithRoot {
  border?: string
}

export type ITProgressBarVariants = WithVariantProps<ITProgressBarOptions>

export interface ITDividerOptions extends IComponentWithRoot {
  vertical?: string
}

export type ITDividerVariants = WithVariantProps<ITCheckboxOptions>

export interface ITDrawerOptions extends IComponentWithRoot {
  mask?: string
  body?: string
  right?: string
  left?: string
}

export type ITDrawerVariants = WithVariantProps<ITDrawerOptions>

export interface ITInputOptions extends IComponentWithRoot {
  label?: string
  prefixWrapper?: string
  inputWrapper?: string
  icon?: string
  iconWrapper?: string
  input?: string
  affix?: string
  message?: string
}

export type ITInputVariants = WithVariantProps<ITInputOptions>

export interface ITNumberInputOptions extends IComponentWithRoot {
  label?: string
  controlsWrapper?: string
}

export type ITNumberInputVariants = WithVariantProps<ITNumberInputOptions>

export interface ITSwitchOptions extends IComponentWithRoot {
  checkLabelGroup?: string
  label?: string
  subLabel?: string
}

export type ITSwitchVariants = WithVariantProps<ITSwitchOptions>

export interface ITTabsOptions extends IComponentWithRoot {
  tab?: string
}

export type ITTabsVariants = WithVariantProps<ITTabsOptions>

export interface ITToggleOptions extends IComponentWithRoot {
  checkLabelGroup?: string
}

export type ITToggleVariants = WithVariantProps<ITToggleOptions>

export interface ITColorpickerOptions extends IComponentWithRoot {
  checkLabelGroup?: string
}

export type ITColorpickerVariants = WithVariantProps<ITColorpickerOptions>

export interface ITSliderOptions extends IComponentWithRoot {
  label?: string
  controller?: string
  sliderLine?: string
}

export type ITSliderVariants = WithVariantProps<ITSliderOptions>

export interface ITBadgeOptions extends IComponentWithRoot {
  square?: string
  point?: string
  body?: string
}

export type ITBadgeVariants = WithVariantProps<ITCheckboxOptions>

export interface ITButtonOptions extends IComponentWithRoot {
  outlined?: string
  big?: string
  normal?: string
  small?: string
  round?: string
  empty?: string
  loading?: string
}

export type ITButtonVariants = WithVariantProps<ITButtonOptions>
export interface ITButtonGroupOptions extends IComponentWithRoot {
  button?: string
}

export type ITButtonGroupVariants = WithVariantProps<ITButtonOptions>

export interface ITTooltipOptions extends IComponentWithRoot {
  innerSlot?: string
}

export type ITTooltipVariants = WithVariantProps<ITButtonOptions>

export interface ITSpinnerOptions extends IComponentWithRoot {}

export type ITSpinnerVariants = WithVariantProps<ITSpinnerOptions>

export interface ITCollapseOptions extends IComponentWithRoot {}

export type ITCollapseVariants = WithVariantProps<ITCollapseOptions>

export interface ITCollapseItemOptions extends IComponentWithRoot {
  body?: string
  icon?: string
  expanded?: string
  activator?: string
}

export type ITCollapseItemVariants = WithVariantProps<ITCollapseItemOptions>

export interface ITTextareaOptions extends IComponentWithRoot {
  label?: string
  textarea?: string
  mask?: string
}

export type ITTextareaVariants = WithVariantProps<ITTextareaOptions>

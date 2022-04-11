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

export interface ITIconOptions extends IComponentWithRoot {
  box?: string
}

export type ITIconVariants = WithVariantProps<ITIconOptions>

export interface ITTagOptions extends IComponentWithRoot {
  box?: string
}

export type ITTagVariants = WithVariantProps<ITTagOptions>

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

export interface ITDividerOptions extends IComponentWithRoot {
  vertical?: string
}

export type ITDividerVariants = WithVariantProps<ITCheckboxOptions>

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

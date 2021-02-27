import { Colors } from '@/models/enums'

export const ICON_NAME_BY_COLOR: Partial<Record<Colors, string>> = {
  [Colors.PRIMARY]: 'info_outline',
  [Colors.SUCCESS]: 'done',
  [Colors.WARNING]: 'error_outline',
  [Colors.DANGER]: 'clear',
}

export const ALLOWED_TYPES = [
  Colors.PRIMARY,
  Colors.SUCCESS,
  Colors.DANGER,
  Colors.WARNING,
]

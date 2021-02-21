import { Colors } from '@/models/enums'

export const typeIcon: { [key in Colors]?: string } = {
    [Colors.PRIMARY]: 'info_outline',
    [Colors.SUCCESS]: 'done',
    [Colors.WARNING]: 'error_outline',
    [Colors.DANGER]: 'clear',
  }

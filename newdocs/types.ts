export enum componentGroup {
  General = 'General',
  Base = 'Base',
  Form = 'Form',
  Feedback = 'Feedback',
  DataDisplay = 'Data Display',
  Navigation = 'Navigation',
}

export interface IComponentListItem {
  name: string
  icon: string
  icon_outlined?: boolean
  route: string
  group: componentGroup
  examples?: number
}

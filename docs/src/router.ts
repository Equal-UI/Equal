import { createRouter, createWebHistory } from 'vue-router'
import Pages from './pages/index'

const routes = [
  {
    path: '/',
    component: Pages.Home,
    children: [
      {
        path: '',
        component: Pages.Landing,
      },
      {
        path: 'introduction',
        component: Pages.Introduction,
      },
      {
        path: 'start',
        component: Pages.Start,
      },
      {
        path: 'components',
        component: Pages.Components,
        children: [
          {
            path: 'avatar',
            component: Pages.AvatarDoc,
          },
          {
            path: 'badge',
            component: Pages.BadgeDoc,
          },
          {
            path: 'breadcrumbs',
            component: Pages.BreadcrumbsDoc,
          },
          {
            path: 'button',
            component: Pages.ButtonDoc,
          },
          {
            path: 'icon',
            component: Pages.IconDoc,
          },
          {
            path: 'collapse',
            component: Pages.CollapseDoc,
          },
          {
            path: 'divider',
            component: Pages.DividerDoc,
          },
          {
            path: 'dropdown',
            component: Pages.DropdownDoc,
          },
          {
            path: 'colorpicker',
            component: Pages.ColorpickerDoc,
          },
          {
            path: 'input',
            component: Pages.InputDoc,
          },
          {
            path: 'numberinput',
            component: Pages.NumberInputDoc,
          },
          {
            path: 'checkbox',
            component: Pages.CheckboxDoc,
          },
          {
            path: 'radio',
            component: Pages.RadioDoc,
          },
          {
            path: 'select',
            component: Pages.SelectDoc,
          },
          {
            path: 'slider',
            component: Pages.SliderDoc,
          },
          {
            path: 'switch',
            component: Pages.SwitchDoc,
          },
          {
            path: 'tag',
            component: Pages.TagDoc,
          },
          {
            path: 'tabs',
            component: Pages.TabsDoc,
          },
          {
            path: 'textarea',
            component: Pages.TextareaDoc,
          },
          {
            path: 'tooltip',
            component: Pages.TooltipDoc,
          },
          {
            path: 'alert',
            component: Pages.AlertDoc,
          },
          {
            path: 'drawer',
            component: Pages.DrawerDoc,
          },
          {
            path: 'loading',
            component: Pages.LoadingDoc,
          },
          {
            path: 'loadingbar',
            component: Pages.LoadingbarDoc,
          },
          {
            path: 'message',
            component: Pages.MessageDoc,
          },
          {
            path: 'modal',
            component: Pages.ModalDoc,
          },
          {
            path: 'notification',
            component: Pages.NotificationDoc,
          },
          {
            path: 'popover',
            component: Pages.PopoverDoc,
          },
          {
            path: 'progressbar',
            component: Pages.ProgressbarDoc,
          },
          {
            path: 'toggle',
            component: Pages.ToggleDoc,
          },
        ],
      },
    ],
  },
]

export const router = createRouter({
  history: createWebHistory('/Equal/'),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 }
  },
})

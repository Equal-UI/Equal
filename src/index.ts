import { IEqual } from './types/global'
import Alert from './components/alert'
import Avatar from './components/avatar'
import AvatarGroup from './components/avatar-group'
import Button from './components/button'
import ButtonGroup from './components/button-group'
import Badge from './components/badge'
import Checkbox from './components/checkbox'
import Collapse from './components/collapse'
import CollapseItem from './components/collapse-item'
import ColorPicker from './components/colorpicker'
// import Breadcrumbs from './components/breadcrumbs/'
import Divider from './components/divider'
import Drawer from './components/drawer'
import Dropdown from './components/dropdown'
import Input from './components/input'
import Spinner from './components/spinner'
import Loadingbar from './components/loadingbar'
import Message from './components/message'
import Modal from './components/modal'
import Notification from './components/notification'
import NumberInput from './components/numberinput'
import Popover from './components/popover'
import Progressbar from './components/progressbar'
import Radio from './components/radio'
import Select from './components/select'
import Slider from './components/slider'
import Switch from './components/switch'
import Tabs from './components/tabs'
import Tab from './components/tab'
import Tag from './components/tag'
import Textarea from './components/textarea'
import Toggle from './components/toggle'
import Tooltip from './components/tooltip'
import { tooltip } from './directives/tooltip'

import './styles/index.less'
import { App, defineComponent } from 'vue'
import { EqualUIConfiguration } from './types/variant'

const components: Record<string, ReturnType<typeof defineComponent>> = {
  Alert,
  Avatar,
  AvatarGroup,
  Badge,
  Button,
  ButtonGroup,
  Checkbox,
  Collapse,
  CollapseItem,
  ColorPicker,
  Divider,
  Drawer,
  ...Dropdown,
  Input,
  Loadingbar,
  Spinner,
  Modal,
  NumberInput,
  Popover,
  Progressbar,
  Radio,
  Select,
  Slider,
  Switch,
  Tabs,
  Tab,
  Tag,
  Textarea,
  Toggle,
  Tooltip,
}

function install(Vue: App, configuration: EqualUIConfiguration) {
  for (const component in components) {
    Vue.component(components[component].name, components[component])
  }
  Vue.config.globalProperties.$Message = Message(configuration)
  Vue.config.globalProperties.$Notification = Notification(configuration)
  Vue.config.globalProperties.$Equal = {
    drawers: [],
    modals: [],
  } as IEqual

  Vue.provide('config', configuration)
  Vue.directive('tooltip', tooltip(configuration))
}

export default { install }

export { default as Alert } from './components/alert'
export { default as Avatar } from './components/avatar'
export { default as AvatarGroup } from './components/avatar-group'
export { default as Button } from './components/button'
export { default as ButtonGroup } from './components/button-group'
export { default as Badge } from './components/badge'
export { default as Checkbox } from './components/checkbox'
export { default as Collapse } from './components/collapse'
export { default as CollapseItem } from './components/collapse-item'
export { default as ColorPicker } from './components/colorpicker'
export { default as Divider } from './components/divider'
export { default as Drawer } from './components/drawer'
export { default as Dropdown } from './components/dropdown'
export { default as Input } from './components/input'
export { default as Spinner } from './components/spinner'
export { default as Loadingbar } from './components/loadingbar'
export { default as Message } from './components/message'
export { default as Modal } from './components/modal'
export { default as Notification } from './components/notification'
export { default as NumberInput } from './components/numberinput'
export { default as Popover } from './components/popover'
export { default as Progressbar } from './components/progressbar'
export { default as Radio } from './components/radio'
export { default as Select } from './components/select'
export { default as Slider } from './components/slider'
export { default as Switch } from './components/switch'
export { default as Tabs } from './components/tabs'
export { default as Tab } from './components/tab'
export { default as Tag } from './components/tag'
export { default as Textarea } from './components/textarea'
export { default as Toggle } from './components/toggle'
export { default as Tooltip } from './components/tooltip'

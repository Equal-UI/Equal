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
import Icon from './components/icon'
import Input from './components/input'
import Loading from './components/loading'
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

import './styles/index.less'
import { App } from 'vue'

const components = {
  Alert,
  Avatar,
  AvatarGroup,
  Badge,
  // Breadcrumbs,
  Button,
  ButtonGroup,
  Checkbox,
  Collapse,
  CollapseItem,
  ColorPicker,
  Divider,
  Drawer,
  ...Dropdown,
  Icon,
  Input,
  Loading,
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

function install(Vue: App) {
  // tslint:disable-next-line: forin
  for (const component in components) {
    // @ts-expect-error
    Vue.component(components[component].name, components[component])
  }
  Vue.config.globalProperties.$Message = Message
  Vue.config.globalProperties.$Notification = Notification
  Vue.config.globalProperties.$Loading = Loadingbar
  Vue.config.globalProperties.$Equal = {
    drawers: [],
    modals: [],
  } as IEqual
}

export default { install }

export { default as Alert } from './components/alert'
export { default as Avatar } from './components/avatar'
export { default as AvatarGroup } from './components/avatar-group'
export { default as Button } from './components/button'
export { default as ButtonGroup } from './components/button-group'
export { default as Badge } from './components/badge'
// export { default as Breadcrumbs } from './components/breadcrumbs'
export { default as Checkbox } from './components/checkbox'
export { default as Collapse } from './components/collapse'
export { default as CollapseItem } from './components/collapse-item'
export { default as ColorPicker } from './components/colorpicker'
export { default as Divider } from './components/divider'
export { default as Drawer } from './components/drawer'
export { default as Dropdown } from './components/dropdown'
export { default as Icon } from './components/icon'
export { default as Input } from './components/input'
export { default as Loading } from './components/loading'
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

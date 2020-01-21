import Alert from './components/alert'
import Avatar from './components/avatar'
import Button from './components/button'
import Badge from './components/badge'
import Checkbox from './components/checkbox'
import Dropdown from './components/dropdown'
import Icon from './components/icon'
import Input from './components/input'
import Loading from './components/loading'
import Loadingbar from './components/loadingbar'
import Message from './components/message'
import Modal from './components/modal'
import Notification from './components/notification'
import NumberInput from './components/numberinput'
import Progressbar from './components/progressbar'
import Radio from './components/radio'
import Select from './components/select'
import Slider from './components/slider'
import Switch from './components/switch'
import Tag from './components/tag'
import Textarea from './components/textarea'
import Tooltip from './components/tooltip'

const components = {
  Alert,
  Avatar,
  Button,
  Badge,
  Checkbox,
  ...Dropdown,
  Icon,
  Input,
  Loading,
  NumberInput,
  Progressbar,
  Radio,
  ...Select,
  Slider,
  Switch,
  Tag,
  Textarea,
  Tooltip
}

function install(Vue: any) {
  for (const component in components) {
    if (components[component]) {
      Vue.component(components[component].name, components[component])
    }
  }
  Vue.prototype.$Message = Message
  Vue.prototype.$Modal = Modal
  Vue.prototype.$Notification = Notification
  Vue.prototype.$Loading = Loadingbar
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default { install }

export { default as Alert } from './components/alert'
export { default as Avatar } from './components/avatar'
export { default as Button } from './components/button'
export { default as Badge } from './components/badge'
export { default as Checkbox } from './components/checkbox'
export { default as Dropdown } from './components/dropdown'
export { default as Icon } from './components/icon'
export { default as Input } from './components/input'
export { default as Loading } from './components/loading'
export { default as Loadingbar } from './components/loadingbar'
export { default as Message } from './components/message'
export { default as Modal } from './components/modal'
export { default as Notification } from './components/notification'
export { default as NumberInput } from './components/numberinput'
export { default as Progressbar } from './components/progressbar'
export { default as Radio } from './components/radio'
export { default as Select } from './components/select'
export { default as Slider } from './components/slider'
export { default as Switch } from './components/switch'
export { default as Tag } from './components/tag'
export { default as Textarea } from './components/textarea'
export { default as Tooltip } from './components/tooltip'

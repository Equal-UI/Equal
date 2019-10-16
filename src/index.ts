import Alert from './components/alert'
import Button from './components/button'
import Checkbox from './components/checkbox'
import Dropdown from './components/dropdown'
import Icon from './components/icon'
import Input from './components/input'
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
  Button,
  Checkbox,
  ...Dropdown,
  Icon,
  Input,
  Message,
  Modal,
  Notification,
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
      Vue.use(components[component])
    }
  }
  Vue.prototype.$Message = Message
  Vue.prototype.$Modal = Modal
  Vue.prototype.$Notification = Notification
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}

import Vue from 'vue'
import {
  Alert,
  Avatar,
  Button,
  Badge,
  Checkbox,
  Dropdown,
  Icon,
  Input,
  Loading,
  NumberInput,
  Progressbar,
  Radio,
  Select,
  Slider,
  Switch,
  Tag,
  Textarea,
  Tooltip,
  Message,
  Modal,
  Notification,
  Loadingbar
} from '../../src'

Vue.component('it-alert', Alert)
Vue.component('it-avatar', Avatar)
Vue.component('it-button', Button)
Vue.component('it-badge', Badge)
Vue.component('it-checkbox', Checkbox)
Vue.component('it-dropdown', Dropdown.Dropdown)
Vue.component('it-dropdown-menu', Dropdown.DropdownMenu)
Vue.component('it-dropdown-item', Dropdown.DropdownItem)
Vue.component('it-icon', Icon)
Vue.component('it-input', Input)
Vue.component('it-loading', Loading)
Vue.component('it-number-input', NumberInput)
Vue.component('it-progressbar', Progressbar)
Vue.component('it-radio', Radio)
Vue.component('it-select', Select.Select)
Vue.component('it-select-option', Select.SelectOption)
Vue.component('it-slider', Slider)
Vue.component('it-switch', Switch)
Vue.component('it-tag', Tag)
Vue.component('it-textarea', Textarea)
Vue.component('it-tooltip', Tooltip)

Vue.prototype.$Message = Message
Vue.prototype.$Modal = Modal
Vue.prototype.$Notification = Notification
Vue.prototype.$Loading = Loadingbar

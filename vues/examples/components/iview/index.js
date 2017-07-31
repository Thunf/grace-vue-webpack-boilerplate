/* eslint-disable */

import 'core-js/fn/array/find-index'

// 由于此组件内也引用了vue，所以要取到本项目内进行import
import LoadingBar from './components/loading-bar'

// import Affix from './components/affix'
// import Alert from './components/alert'
// import BackTop from './components/back-top'
// import Badge from './components/badge'
// import Breadcrumb from './components/breadcrumb'
import Button from 'iview/src/components/button'
// import Card from 'iview/src/components/card'
// import Carousel from './components/carousel'
// import Cascader from './components/cascader'
import Checkbox from 'iview/src/components/checkbox'
// import Circle from './components/circle'
// import Collapse from './components/collapse'
import DatePicker from 'iview/src/components/date-picker'
// import Dropdown from 'iview/src/components/dropdown'
import Form from 'iview/src/components/form'
import Icon from 'iview/src/components/icon'
import Input from 'iview/src/components/input'
// import InputNumber from './components/input-number'
// import Menu from './components/menu'
// import Message from './components/message'
// import Modal from './components/modal'
// import Notice from 'iview/src/components/notice'
// import Page from 'iview/src/components/page'
// import Poptip from './components/poptip'
// import Progress from './components/progress'
import Radio from 'iview/src/components/radio'
// import Rate from './components/rate'
import Slider from 'iview/src/components/slider'
// import Spin from './components/spin'
// import Steps from './components/steps'
import Switch from 'iview/src/components/switch'
// import Table from 'iview/src/components/table'
// import Tabs from 'iview/src/components/tabs'
// import Tag from 'iview/src/components/tag'
// import Timeline from './components/timeline'
import TimePicker from 'iview/src/components/time-picker'
// import Tooltip from './components/tooltip'
// import Transfer from './components/transfer'
// import Tree from './components/tree'
// import Upload from './components/upload'
import { Row, Col } from 'iview/src/components/grid'
import { Select, Option, OptionGroup } from 'iview/src/components/select'
// import locale from './locale'

const iview = {
  // Affix,
  // Alert,
  // BackTop,
  // Badge,
  // Breadcrumb,
  // BreadcrumbItem: Breadcrumb.Item,
  // iButton: Button,
  Button,
  // ButtonGroup: Button.Group,
  // Card,
  // Carousel,
  // CarouselItem: Carousel.Item,
  // Cascader,
  Checkbox,
  CheckboxGroup: Checkbox.Group,
  // iCircle: Circle,
  DatePicker,
  // Dropdown,
  // DropdownItem: Dropdown.Item,
  // DropdownMenu: Dropdown.Menu,
  Form,
  iForm: Form,
  FormItem: Form.Item,
  Col,
  // iCol: Col,
  // Collapse,
  Icon,
  Input,
  // iInput: Input,
  // InputNumber,
  // LoadingBar,
  // Menu,
  // iMenu: Menu,
  // MenuGroup: Menu.Group,
  // MenuItem: Menu.Item,
  // Submenu: Menu.Sub,
  // Message,
  // Modal,
  // Notice,
  Option: Option,
  // iOption: Option,
  // OptionGroup,
  // Page,
  // Panel: Collapse.Panel,
  // Poptip,
  // Progress,
  // iProgress: Progress,
  Radio,
  RadioGroup: Radio.Group,
  // Rate,
  Row,
  Select,
  // iSelect: Select,
  Slider,
  // Spin,
  // Step: Steps.Step,
  // Steps,
  // Switch,
  iSwitch: Switch,
  // iTable: Table,
  // Table,
  // Tabs: Tabs,
  // TabPane: Tabs.Pane,
  // Tag,
  // Timeline,
  // TimelineItem: Timeline.Item,
  TimePicker,
  // Tooltip,
  // Transfer,
  // Tree,
  // Upload
}

const install = function (Vue) {
  // locale.use(opts.locale)
  // locale.i18n(opts.i18n)

  Object.keys(iview).forEach((key) => {
    Vue.component(key, iview[key])
  })

  Vue.prototype.$Loading = LoadingBar
  // Vue.prototype.$Message = Message
  // Vue.prototype.$Modal = Modal
  // Vue.prototype.$Notice = Notice
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  ...iview,
  install
}
/* eslint-enable */

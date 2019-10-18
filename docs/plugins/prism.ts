import Vue from 'vue'
import Prism from 'vue-prism-component'

import 'prismjs'

import 'prismjs/plugins/autolinker/prism-autolinker.min'
import 'prismjs/plugins/autolinker/prism-autolinker.css'
import 'prismjs/components/prism-bash.min.js'

Vue.component('prism', Prism)

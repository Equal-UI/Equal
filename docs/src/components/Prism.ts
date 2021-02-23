import { defineComponent, h } from 'vue'

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex.default : ex
}

import 'prismjs'
import 'prismjs/components/prism-bash.min.js'
import 'prismjs/plugins/autolinker/prism-autolinker.min'
import 'prismjs/plugins/autolinker/prism-autolinker.css'

function assign(obj) {
  for (let i = 1; i < arguments.length; i++) {
    // eslint-disable-next-line guard-for-in, prefer-rest-params
    for (const p in arguments[i]) {
      obj[p] = arguments[i][p]
    }
  }

  return obj
}

export default defineComponent({
  name: 'prism',
  props: {
    code: {
      type: String,
    },
    inline: {
      type: Boolean,
      default: false,
    },
    language: {
      type: String,
      default: 'markup',
    },
  },
  render: function render(ctx) {
    const code =
      ctx.$props.code ||
      (ctx.children && ctx.children.length > 0 ? ctx.children[0].text : '')
    const inline = ctx.$props.inline
    const language = ctx.$props.language
    const prismLanguage = Prism.languages[language]
    const className = 'language-'.concat(language)

    if (process.env.NODE_ENV === 'development' && !prismLanguage) {
      throw new Error(
        'Prism component for language "'.concat(
          language,
          '" was not found, did you forget to register it? See all available ones: https://cdn.jsdelivr.net/npm/prismjs/components/',
        ),
      )
    }

    if (inline) {
      return h(
        'code',
        assign({}, ctx.$data, {
          class: [ctx.$data.class, className],
          domProps: assign({}, ctx.$data.domProps, {
            innerHTML: Prism.highlight(code, prismLanguage),
          }),
        }),
      )
    }

    return h(
      'pre',
      assign({}, ctx.$data, {
        class: [ctx.$data.class, className],
      }),
      [
        h('code', {
          class: className,
          innerHTML: Prism.highlight(code, prismLanguage),
        }),
      ],
    )
  },
})

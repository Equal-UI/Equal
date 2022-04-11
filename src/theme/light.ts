import { EqualUIConfiguration } from '@/types/variant'

export default <EqualUIConfiguration>(<unknown>{
  'it-alert': {
    fixedClasses: {
      root: 'rounded border flex bg-white px-4 py-4',
      title: 'text-sm font-semibold text-gray-900 leading-none',
      body: 'text-sm text-gray-900 leading-none mt-2.5',
      iconbox: 'p-1.5 rounded',
      icon: 'select-none mr-3.5 text-2xl leading-none',
      closeIcon: 'select-none cursor-pointer',
    },
    classes: {
      root: 'bg-opacity-5',
      iconbox: '!text-white',
    },
    variants: {
      primary: {
        root: 'border-blue-600 bg-blue-600',
        body: 'text-sm text-gray-900 leading-none mt-2.5',
        iconbox: 'bg-blue-600 ',
        icon: 'text-blue-600',
      },
      success: {
        root: 'border-green-500 bg-green-600',
        iconbox: 'bg-green-500',
        icon: 'text-green-500',
      },
      warning: {
        root: 'border-yellow-500 bg-yellow-500',
        iconbox: 'bg-yellow-500',
        icon: 'text-yellow-500',
      },
      danger: {
        root: 'border-red-500 bg-red-500',
        iconbox: 'bg-red-500',
        icon: 'text-red-500',
      },
    },
  },
  'it-icon': {
    fixedClasses: {
      root: 'text-base leading-none select-none',
      box: 'rounded p-2',
    },
    classes: { root: 'leading-none' },
    variants: {},
  },
  'it-tag': {
    fixedClasses: {
      root: 'text-xs border rounded px-2 py-1 font-medium inline-flex items-center bg-white leading-none',
      filled: '',
      closeIcon: 'cursor-pointer select-none text-sm ml-1 leading-3',
    },
    classes: {
      root: '',
    },
    variants: {
      primary: {
        root: 'border-blue-600',
        filled: 'bg-blue-600 text-white',
      },
      success: {
        root: 'border-green-500',
        filled: 'bg-green-500 text-white',
      },
      warning: {
        root: 'border-yellow-500',
        filled: 'bg-yellow-500 text-white',
      },
      danger: {
        root: 'border-red-500',
        filled: 'bg-red-500 text-white',
      },
    },
  },
  'it-checkbox': {
    fixedClasses: {
      root: 'relative flex cursor-pointer',
      checkbox: [
        'relative flex  items-center justify-center transition-all select-none h-[1.125rem] w-[1.125rem] overflow-hidden',
        'border shadow-sm shadow-slate-600/10 border-slate-300 rounded-sm bg-white hover:border-blue-600 active:peer-checked:pt-3',
        'active:bg-blue-100 active:border-blue-600 peer-checked:border-blue-600',
        'peer-focus-visible:border-blue-600 peer-focus-visible:shadow-[0_1px_1px_0,0_0_0_3px] peer-focus-visible:shadow-blue-600/30',
      ],
      checkIcon: 'mt-5 opacity-0',
      checkIconActive: '!mt-0 opacity-100 text-blue-600',
      label:
        "relative flex items-center transition-all before:content-[''] before:absolute before:w-0 before:h-0.5 before:rounded-3xl before:bg-gray-300",
      subLabel: 'text-gray-500',
      labelGroup: 'ml-2 flex flex-col space-y-0.5 text-sm',
      lineThrough: 'text-gray-300 before:w-full before:transition-all',
    },
    classes: {
      checkIconActive: '[text-shadow:0_1px_0_rgba(0,0,0,0.07)]',
    },
    variants: {
      primary: {
        checkbox: 'peer-checked:bg-blue-600 active:peer-checked:bg-blue-600',
        checkIcon: '!text-white',
      },
      success: {
        checkbox:
          'active:bg-green-100 active:!border-green-500 hover:border-green-500 active:peer-checked:bg-green-500 peer-checked:bg-green-500 peer-checked:!border-green-500 peer-focus-visible:border-green-500 peer-focus-visible:shadow-green-500/30',
        checkIcon: '!text-white',
      },
      warning: {
        checkbox:
          'active:bg-yellow-100 active:!border-yellow-500 hover:border-yellow-500 active:peer-checked:bg-yellow-500 peer-checked:bg-yellow-500 peer-checked:!border-yellow-500 peer-focus-visible:border-yellow-500 peer-focus-visible:shadow-yellow-500/30',
        checkIcon: '!text-white',
      },
      danger: {
        checkbox:
          'active:bg-red-100 active:!border-red-500 hover:border-red-500 peer-checked:bg-red-500 active:peer-checked:bg-red-500 peer-checked:!border-red-500 peer-focus-visible:border-red-500 peer-focus-visible:shadow-red-500/30',
        checkIcon: '!text-white',
      },
      disabled: {
        checkbox:
          'cursor-not-allowed border-gray-300 active:border-gray-300 bg-gray-100 active:bg-gray-100 peer-checked:border-gray-300 hover:border-gray-300 active:!pt-0',
        checkIcon: '!text-gray-300 [text-shadow:none]',
        label: 'text-gray-300',
        subLabel: 'text-gray-300',
        lineThrough: '',
      },
    },
  },
  'it-divider': {
    fixedClasses: {
      root: 'bg-gray-200 w-full h-px',
      vertical: 'relative !w-px !h-4 !inline-block align-middle -top-0.5',
    },
    classes: {},
    variants: {},
  },
  'it-badge': {
    fixedClasses: {
      root: 'relative flex',
      body: 'text-white text-[10px] rounded-xl px-1.5 leading-4 border border-white bg-red-500 inline-block',
      square: '!rounded-[5px]',
      point: 'w-3 h-3 !p-0',
      'top-left': 'absolute top-0 left-0 -translate-x-[45%] -translate-y-[45%]',
      'top-right':
        'absolute top-0 right-0 translate-x-[45%] -translate-y-[45%]',
      'bottom-right':
        'absolute bottom-0 right-0 translate-x-[45%] translate-y-[45%]',
      'bottom-left':
        'absolute bottom-0 left-0 -translate-x-[45%] translate-y-[45%]',
    },
    classes: {},
    variants: {
      primary: {
        body: '!bg-blue-600',
      },
      success: {
        body: '!bg-green-500',
      },
      warning: {
        body: '!bg-yellow-500',
      },
      danger: {
        body: '!bg-red-500',
      },
    },
  },
  'it-button': {
    fixedClasses: {
      root: [
        'py-2 px-5 text-slate-900 shadow-sm shadow-slate-600/10 active:bg-gray-100',
        'focus-visible:border-slate-400 focus-visible:outline-none focus-visible:shadow-[0_1px_1px_0,0_0_0_3px] focus-visible:shadow-slate-200/60',
        'border border-slate-300 bg-white',
        'max-w-full relative flex justify-center items-center font-medium text-sm leading-none cursor-pointer rounded select-none transition-all duration-200 outline-0 font-sans',
      ],
      outlined: 'bg-transparent hover:bg-transparent active:bg-transparent',
      text: 'empty:!hidden flex flex-row space-x-2',
      round: 'rounded-3xl',
      small: '!px-3.5 !py-1',
      big: '!px-7 !py-3.5 text-base',
      empty: '!p-2',
      loading: 'absolute !w-6 !h-6',
    },
    classes: {
      root: 'active:shadow-none',
    },
    variants: {
      primary: {
        root: [
          'bg-blue-600 shadow-md hover:bg-blue-500 hover:!border-blue-500 !shadow-blue-600/40 !border-blue-600',
          'active:bg-blue-700 active:!border-blue-700 focus-visible:border-blue-600 !text-white',
        ],
        outlined: '!text-blue-600 hover:bg-blue-400/10 active:bg-blue-400/20',
        loading: '!border-r-white !border-blue-600',
      },
      'primary-text': {
        root: [
          'bg-transparent shadow-none !shadow-blue-600/40 !text-blue-600 hover:bg-blue-400/10 !border-none hover:!border-none',
          'active:bg-blue-400/20 focus-visible:border-none',
        ],
      },
      text: {
        root: [
          'bg-transparent shadow-none hover:bg-gray-400/10 !border-none hover:!border-none',
          'active:bg-gray-400/20 focus-visible:border-none',
        ],
      },
      success: {
        root: [
          'bg-green-500 shadow-md hover:bg-green-400 hover:!border-green-400 !shadow-green-500/40 !border-green-500',
          'active:bg-green-600 active:!border-green-600 focus-visible:border-green-500 !text-white',
        ],
        outlined:
          '!text-green-500 hover:bg-green-400/10 active:bg-green-400/20',
        loading: '!border-r-white !border-green-500',
      },
      'success-text': {
        root: [
          'bg-transparent shadow-none !shadow-green-500/40 !text-green-500 hover:bg-green-400/10 !border-none hover:!border-none',
          'active:bg-green-400/20 focus-visible:border-none',
        ],
      },
      warning: {
        root: [
          'bg-yellow-500 shadow-md hover:bg-yellow-400 hover:!border-yellow-400 !shadow-yellow-500/40 !border-yellow-500',
          'active:bg-yellow-600 active:!border-yellow-600 focus-visible:border-yellow-500 !text-white',
        ],
        outlined:
          '!text-yellow-500 hover:bg-yellow-400/10 active:bg-yellow-400/20',
        loading: '!border-r-white !border-yellow-500',
      },
      'warning-text': {
        root: [
          'bg-transparent shadow-none !shadow-yellow-500/40 !text-yellow-500 hover:bg-yellow-400/10 !border-none hover:!border-none',
          'active:bg-yellow-400/20 focus-visible:border-none',
        ],
      },
      danger: {
        root: [
          'bg-red-500 shadow-md hover:bg-red-400 hover:!border-red-400 !shadow-red-500/40 !border-red-500',
          'active:bg-red-600 active:!border-red-600 focus-visible:border-red-500 !text-white',
        ],
        outlined: '!text-red-500 hover:bg-red-400/10 active:bg-red-400/20',
        loading: '!border-r-white !border-red-500',
      },
      'danger-text': {
        root: [
          'bg-transparent shadow-none !shadow-red-500/40 !text-red-500 hover:bg-red-400/10 !border-none hover:!border-none',
          'active:bg-red-400/20 focus-visible:border-none',
        ],
      },
      disabled: {
        root: [
          'shadow-none cursor-not-allowed border-gray-300 active:border-gray-300 bg-gray-100 active:bg-gray-100 peer-checked:border-gray-300 hover:border-gray-300',
          '!text-gray-300',
        ],
        outlined: '!bg-gray-100',
        loading: '!border-r-slate-300',
      },
    },
  },
  'it-spinner': {
    fixedClasses: {
      root: 'border-transparent border-r-black bg-transparent animate-spin w-8 h-8 border-4 rounded-full',
    },
    classes: {},
    variants: {},
  },
  'it-collapse': {
    fixedClasses: {
      root: 'w-full flex flex-col',
    },
    classes: {},
    variants: {},
  },
  'it-collapse-item': {
    fixedClasses: {
      root: 'first:rounded-tl first:rounded-tr last:shadow-sm last:rounded-bl last:rounded-br border-r border-l border-t first:border-b-none last:border border-slate-300',
      expanded: '',
      activator:
        'flex rounded-[inherit] px-4 py-3 bg-gray-50 w-full focus-visible:shadow-[0_1px_1px_0,0_0_0_3px] focus-visible:shadow-slate-200/60 outline-none justify-between text-sm font-medium',
      body: 'text-sm border-t border-slate-300 px-4 py-4',
    },
    classes: {},
    variants: {},
  },
  'it-textarea': {
    fixedClasses: {
      label: 'flex text-sm mb-1.5',
      textarea: [
        'relative focus:z-10 appearance-none w-full placeholder:duration-200 duration-150 transition-all placeholder:transition-all focus:placeholder:indent-1.5 placeholder:indent-0 text-sm px-1.5 py-1 border shadow-sm border-slate-300 shadow-slate-600/10 rounded outline-none',
        'hover:border-slate-400 disabled:hover:border-slate-300 focus-visible:border-blue-600 disabled:cursor-not-allowed',
        'focus-visible:shadow-[0_1px_1px_0,0_0_0_3px] focus-visible:shadow-blue-600/30',
      ],
      mask: 'fixed inset-0 z-50 bg-gray-900/40',
    },
    classes: {},
    variants: {},
  },
})

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
      root: '!text-base !leading-none select-none',
      box: 'rounded p-2',
    },
    classes: { root: 'leading-none' },
    variants: {},
  },
  'it-tag': {
    fixedClasses: {
      root: 'text-xs border rounded px-2 py-1 text-gray-900 font-medium inline-flex items-center bg-white leading-none',
      filled: '',
      closeIcon: 'cursor-pointer select-none text-sm ml-1 leading-3',
    },
    classes: {},
    variants: {
      primary: {
        root: 'border-blue-600',
        filled: 'bg-blue-600 !text-white',
      },
      success: {
        root: 'border-green-500',
        filled: 'bg-green-500 !text-white',
      },
      warning: {
        root: 'border-yellow-500',
        filled: 'bg-yellow-500 !text-white',
      },
      danger: {
        root: 'border-red-500',
        filled: 'bg-red-500 !text-white',
      },
    },
  },
  'it-checkbox': {
    fixedClasses: {
      root: 'relative flex cursor-pointer',
      checkbox: [
        'relative flex bg-white items-center justify-center transition-all select-none h-[1.125rem] w-[1.125rem] overflow-hidden border shadow-sm shadow-slate-600/10 border-slate-300 rounded-sm',
        'hover:border-blue-600 active:peer-checked:pt-3 active:bg-blue-600/30 active:border-blue-600 peer-checked:border-blue-600 peer-focus-visible:border-blue-600 peer-focus-visible:shadow-[0_1px_1px_0,0_0_0_3px] peer-focus-visible:shadow-blue-600/30',
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
  'it-switch': {
    fixedClasses: {
      root: 'flex cursor-pointer',
      switch:
        'flex bg-slate-300 h-5 transition-all rounded-full relative min-w-[35px] focus-within:shadow-[0_0_0_1px,0_0_0_3px] focus-within:shadow-blue-600/30',
      switchChecked: '!bg-blue-600',
      input: 'absolute cursor-pointer inset-0 w-full h-full opacity-0 peer',
      switchCircle:
        'absolute bg-white rounded-full peer-active:peer-enabled:w-5 transition-all top-0.5 h-4 w-4 shadow-sm',
      label: 'relative flex items-center transition-all',
      subLabel: 'text-gray-500',
      labelGroup: 'ml-2 flex flex-col space-y-0.5 text-sm',
    },
    variants: {
      success: {
        switch: 'focus-within:shadow-green-500/30',
        switchChecked: '!bg-green-500',
      },
      warning: {
        switch: 'focus-within:shadow-yellow-500/30',
        switchChecked: '!bg-yellow-500',
      },
      danger: {
        switch: 'focus-within:shadow-red-500/30',
        switchChecked: '!bg-red-500',
      },
      disabled: {
        root: 'cursor-not-allowed',
        input: 'cursor-not-allowed',
        switchChecked: '!bg-slate-400',
        label: 'text-gray-300',
        subLabel: 'text-gray-300',
      },
    },
  },
  'it-toggle': {
    fixedClasses: {
      root: 'select-none min-w-[100px] h-8 flex relative rounded-md transition-all border-[3px] focus-visible:border-blue-600 focus-visible:shadow-[0_1px_1px_0,0_0_0_3px] focus-visible:shadow-blue-600/30 border-slate-100 bg-slate-100 outline-none focus-visible',
      value: [
        '[&:not(:first-of-type)]:before:content-[""] [&:not(:first-of-type)]:before:transition-all [&:not(:first-of-type)]:before:absolute [&:not(:first-of-type)]:before:w-px [&:not(:first-of-type)]:before:top-1 [&:not(:first-of-type)]:before:bottom-1 [&:not(:first-of-type)]:before:left-0 [&:not(:first-of-type)]:before:bg-slate-300',
        'relative flex max-h-full justify-center flex-1 cursor-pointer [&>*]:z-10 text-sm leading-none p-1.5 text-slate-500 font-medium',
      ],
      selected: 'text-black [&+div]:before:invisible',
      slider:
        'absolute bg-white shadow rounded left-0 top-0 bottom-0 transition-all',
      round: '!rounded-full [&>*]:before:invisible',
    },
    classes: {},
    variants: {},
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
        'py-2 px-5 text-slate-900 shadow-sm shadow-slate-600/10 border border-slate-300 bg-white max-w-full relative flex justify-center items-center font-medium text-sm leading-none cursor-pointer rounded select-none transition-all duration-200 outline-0 font-sans',
        'focus-visible:border-slate-400 focus-visible:outline-none focus-visible:shadow-[0_1px_1px_0,0_0_0_3px] focus-visible:shadow-slate-200/60 active:bg-gray-100',
      ],
      outlined: '!bg-transparent hover:bg-transparent active:bg-transparent',
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
          'bg-blue-600 shadow-md !shadow-blue-600/40 !border-blue-600 !text-white',
          'active:bg-blue-700 active:!border-blue-700 focus-visible:border-blue-600 hover:bg-blue-500 hover:!border-blue-500',
        ],
        outlined: '!text-blue-600 hover:bg-blue-400/10 active:bg-blue-400/20',
        loading: '!border-r-white !border-blue-600',
      },
      'primary-text': {
        root: [
          'bg-transparent shadow-none !shadow-blue-600/40 !text-blue-600 !border-none',
          'active:bg-blue-400/20 focus-visible:border-none hover:bg-blue-400/10 hover:!border-none',
        ],
      },
      text: {
        root: [
          'bg-transparent shadow-none !border-none',
          'active:bg-gray-400/20 focus-visible:border-none hover:bg-gray-400/10 hover:!border-none',
        ],
      },
      success: {
        root: [
          'bg-green-500 shadow-md !shadow-green-500/40 !border-green-500 !text-white',
          'active:bg-green-600 active:!border-green-600 focus-visible:border-green-500 hover:bg-green-400 hover:!border-green-400',
        ],
        outlined:
          '!text-green-500 hover:bg-green-400/10 active:bg-green-400/20',
        loading: '!border-r-white !border-green-500',
      },
      'success-text': {
        root: [
          'bg-transparent shadow-none !shadow-green-500/40 !text-green-500 !border-none ',
          'active:bg-green-400/20 focus-visible:border-none hover:bg-green-400/10 hover:!border-none',
        ],
      },
      warning: {
        root: [
          'bg-yellow-500 shadow-md !text-white  !shadow-yellow-500/40 !border-yellow-500',
          'active:bg-yellow-600 active:!border-yellow-600 focus-visible:border-yellow-500 hover:bg-yellow-400 hover:!border-yellow-400',
        ],
        outlined:
          '!text-yellow-500 hover:bg-yellow-400/10 active:bg-yellow-400/20',
        loading: '!border-r-white !border-yellow-500',
      },
      'warning-text': {
        root: [
          'bg-transparent shadow-none !shadow-yellow-500/40 !text-yellow-500 !border-none hover:!border-none',
          'active:bg-yellow-400/20 focus-visible:border-none hover:bg-yellow-400/10',
        ],
      },
      danger: {
        root: [
          'bg-red-500 shadow-md !shadow-red-500/40 !border-red-500 !text-white',
          'active:bg-red-600 active:!border-red-600 focus-visible:border-red-500 hover:bg-red-400 hover:!border-red-400',
        ],
        outlined: '!text-red-500 hover:bg-red-400/10 active:bg-red-400/20',
        loading: '!border-r-white !border-red-500',
      },
      'danger-text': {
        root: [
          'bg-transparent shadow-none !shadow-red-500/40 !text-red-500 !border-none',
          'active:bg-red-400/20 hover:bg-red-400/10 hover:!border-none focus-visible:border-none',
        ],
      },
      disabled: {
        root: [
          'shadow-none cursor-not-allowed border-gray-300 !text-gray-300 bg-gray-100',
          'active:border-gray-300 active:bg-gray-100 peer-checked:border-gray-300 hover:border-gray-300',
        ],
        outlined: '!bg-gray-100',
        loading: '!border-r-slate-300',
      },
    },
  },
  'it-tooltip': {
    fixedClasses: {
      root: 'transition-scale transition-opacity absolute z-50 scale-50 opacity-0',
      body: 'p-2 text-[13px] leading-none shadow shadow-slate-600/10 border border-slate-300 bg-white rounded-md',
      innerSlot: '',
    },
    classes: {},
    variants: {
      vertical: {
        button: '',
      },
      horizontal: {
        button: '',
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
  'it-colorpicker': {
    fixedClasses: {
      root: 'relative w-44 rounded',
      alphaCheckboard: 'absolute inset-0',
      alphaWrap: 'h-full mx-1.5 relative cursor-pointer',
      hueWrap: 'h-full px-3 relative cursor-pointer',
      huePointer:
        'absolute rounded-sm h-full w-3.5 shadow-md scale-y-110 -translate-x-1/2 border-2 border-white cursor-ew-resize z-10',
      saturationWrap: 'relative h-32 w-full',
      saturationRoot:
        'absolute inset-0 cursor-pointer border-b-[6px] border-black rounded-t',
      saturationPointer:
        'absolute rounded-full h-3 w-3 shadow -translate-x-1/2 -translate-y-1/2 border border-white',
      sliderWrap: 'relative h-6 w-full [&:last-child>div]:rounded-b',
      tooltip:
        'w-12 h-12 border border-4 shadow-md border-white absolute rounded-full',
    },
    classes: {},
    variants: {},
  },
  'it-tabs': {
    fixedClasses: {
      root: 'flex flex-col',
      bordered: 'border rounded shadow shadow-slate-600/10 border-slate-300',
      rootVertical: '!flex-row',
      header:
        'flex flex-row flex-nowrap overflow-x-auto shadow-[inset_0_-1px_0_0] shadow-slate-300 overflow-x-auto overflow-y-hidden gap-2',
      verticalHeader:
        '!flex-col !shadow-[inset_-1px_0_0_0] !shadow-slate-300 overflow-y-auto overflow-x-hidden',
      body: 'flex-1',
      tab: "disabled:cursor-not-allowed inset-0 disabled:text-gray-300 flex-auto relative p-3 text-sm cursor-pointer focus:outline-none focus:after:!scale-y-[2] after:content-[''] after:absolute after:left-0 after:w-full after:h-[2px] after:bottom-0 after:bg-blue-600 after:scale-y-0 after:origin-bottom after:transition-all",
      verticalTab:
        "focus:after:!scale-y-[1] focus:after:!scale-x-[2] after:content-[''] after:!top-0 after:!right-0 after:!left-auto after:h-full after:!w-[2px] after:scale-x-0 after:origin-right",
      activeTab: 'font-semibold after:!scale-100',
    },
    classes: {},
    variants: {},
  },
  'it-textarea': {
    fixedClasses: {
      label: 'flex text-sm mb-1.5',
      textarea: [
        'relative min-h-min appearance-none w-full placeholder:duration-200 duration-150 transition-all placeholder:transition-all placeholder:indent-0 text-sm px-1.5 py-1 border shadow-sm border-slate-300 shadow-slate-600/10 rounded outline-none',
        'hover:border-slate-400 disabled:text-gray-300 disabled:bg-gray-100 disabled:hover:border-slate-300 focus-visible:border-blue-600 disabled:cursor-not-allowed focus-visible:shadow-[0_1px_1px_0,0_0_0_3px] focus-visible:shadow-blue-600/30 focus:z-10 focus:placeholder:indent-1.5',
      ],
      mask: 'fixed inset-0 z-50 bg-gray-900/40',
    },
    classes: {},
    variants: {},
  },
  'it-radio': {
    fixedClasses: {
      root: 'relative flex cursor-pointer',
      border: [
        'relative flex bg-white items-center justify-center transition-all select-none h-[1.125rem] w-[1.125rem] overflow-hidden border shadow-sm shadow-slate-600/10 border-slate-300 rounded-full',
        'hover:border-blue-600 active:bg-blue-600/30 active:border-blue-600 peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-focus-visible:border-blue-600 peer-focus-visible:shadow-[0_1px_1px_0,0_0_0_3px] peer-focus-visible:shadow-blue-600/30',
      ],
      circle: 'transition-all scale-0 absolute bg-white w-2 h-2 rounded-full',
      activeCircle: 'scale-100',
      label: 'relative flex items-center transition-all',
      subLabel: 'text-gray-500',
      labelGroup: 'ml-2 flex flex-col space-y-0.5 text-sm',
    },
    classes: {},
    variants: {
      success: {
        border:
          'active:bg-green-100 active:!border-green-500 hover:border-green-500 active:peer-checked:bg-green-500 peer-checked:bg-green-500 peer-checked:!border-green-500 peer-focus-visible:border-green-500 peer-focus-visible:shadow-green-500/30',
      },
      warning: {
        border:
          'active:bg-yellow-100 active:!border-yellow-500 hover:border-yellow-500 active:peer-checked:bg-yellow-500 peer-checked:bg-yellow-500 peer-checked:!border-yellow-500 peer-focus-visible:border-yellow-500 peer-focus-visible:shadow-yellow-500/30',
      },
      danger: {
        border:
          'active:bg-red-100 active:!border-red-500 hover:border-red-500 peer-checked:bg-red-500 active:peer-checked:bg-red-500 peer-checked:!border-red-500 peer-focus-visible:border-red-500 peer-focus-visible:shadow-red-500/30',
      },
      disabled: {
        root: 'cursor-not-allowed',
        border:
          'border-gray-300 active:border-gray-300 !bg-gray-100 active:bg-gray-100 peer-checked:border-gray-300 hover:border-gray-300 active:!pt-0',
        circle: '!bg-gray-300',
        label: 'text-gray-300',
        subLabel: 'text-gray-300',
      },
    },
  },
  'it-button-group': {
    fixedClasses: {
      root: 'flex [&>:not(:first-child):not(:last-child)]:rounded-none',
    },
    classes: {},
    variants: {
      horizontal: {
        root: '[&>:first-child]:rounded-r-none [&>:last-child]:rounded-l-none [&>*+*]:border-l-0',
      },
      vertical: {
        root: 'flex-col [&>:first-child]:rounded-b-none [&>:last-child]:rounded-t-none [&>*+*]:border-t-0 [&>:not(:last-child):not(:focus-visible)]:shadow-none',
      },
    },
  },
  'it-avatar': {
    fixedClasses: {
      root: 'rounded-full flex justify-center items-center bg-gray-300 overflow-hidden',
      text: 'text-white font-semibold align-middle',
      icon: 'w-1/2 fill-white mb-0.5',
      square: '!rounded',
    },
  },
  'it-avatar-group': {
    fixedClasses: {
      root: 'flex [&>div]:border-2 [&>div]:border-white',
      count: 'flex justify-center items-center',
    },
    variants: {
      horizontal: {
        root: '[&>div:not(:first-child)]:ml-[-1rem]',
        count: 'ml-2',
      },
      vertical: {
        root: 'flex-col [&>div:not(:first-child)]:mt-[-1rem]',
        count: 'mt-2',
      },
    },
  },
  'it-drawer': {
    fixedClasses: {
      root: 'inset-0 w-full h-full',
      mask: 'fixed inset-0 w-full h-full bg-gray-900/60',
      body: 'fixed max-w-[75%] bg-white top-[20px] h-[calc(100%-40px)] rounded-md transition-all delay-100',
      right: 'right-[20px]',
      left: 'left-[20px]',
    },
  },
  'it-loading-bar': {
    fixedClasses: {
      root: 'top-0 left-0 z-50 bg-blue-600 shadow-sm shadow-blue-600/50 transition-all',
    },
  },
  'it-input': {
    fixedClasses: {
      root: '',
      mask: 'fixed inset-0 w-full h-full bg-gray-900/60 z-50',
      labelTop: 'flex text-sm mb-1',
      prefixWrapper: [
        'flex relative rounded border shadow-sm border-slate-300 shadow-slate-600/10 overflow-hidden duration-150 transition-all',
        'hover:border-slate-400 focus-within:border-blue-600 focus-within:!border-blue-600 focus-within:shadow-[0_1px_1px_0,0_0_0_3px] focus-within:shadow-blue-600/30',
      ],
      inputWrapper: 'flex flex-1',
      affix: 'flex text-sm items-center justify-center first:pl-2 last:pr-2',
      input:
        'flex-1 min-w-[170px] w-0 py-1.5 only:px-2 first:pl-2 last:pr-2 text-sm outline-none focus:placeholder:indent-1.5 placeholder:transition-all',
      icon: 'text-slate-300 !text-lg',
      iconWrapper: 'flex px-2 items-center justify-center',
      message: 'text-xs',
    },
    classes: {},
    variants: {
      success: {
        prefixWrapper:
          '!border-green-500 focus-within:!border-green-500 focus-within:shadow-green-500/30',
        message: 'text-green-500',
      },
      warning: {
        prefixWrapper:
          '!border-yellow-500 focus-within:!border-yellow-500  focus-within:shadow-yellow-500/30',
        message: 'text-yellow-500',
      },
      danger: {
        prefixWrapper:
          '!border-red-500 focus-within:!border-red-500 focus-within:shadow-red-500/30',
        message: 'text-red-500',
      },
      disabled: {
        prefixWrapper: '!border-slate-300 cursor-not-allowed bg-gray-100',
        input: 'cursor-not-allowed text-gray-300',
        message: 'text-gray-300',
      },
    },
  },
  'it-number-input': {
    fixedClasses: {
      root: '',
      labelTop: 'flex text-sm mb-1',
      controlsWrapper:
        'flex [&>button:first-child]:rounded-r-none [&>button:first-child]:border-r-0 [&>button:last-child]:rounded-l-none [&>button:last-child]:border-l-0',
      inputWrapper:
        'only:rounded border shadow-sm border-slate-300 shadow-slate-600/10 overflow-hidden duration-150 transition-all hover:border-slate-400 focus-within:border-blue-600 focus-within:!border-blue-600 focus-within:shadow-[0_1px_1px_0,0_0_0_3px] focus-within:shadow-blue-600/30',
      input: 'px-3 py-1.5 outline-none h-8 text-sm ',
      inputBuffer:
        'absolute -left-80 -top-80 flex-nowrap invisible px-3 py-1.5',
    },
    variants: {
      disabled: {
        inputWrapper: '!border-slate-300 cursor-not-allowed bg-gray-100',
        input: 'cursor-not-allowed text-gray-300',
      },
    },
  },
  'it-slider': {
    fixedClasses: {
      root: 'relative w-full select-none',
      controller:
        'outline-none cursor-ew-resize border-[0.8px] border-slate-300 bg-white w-[9px] h-[19px] rounded-sm transition-all shadow-sm shadow-slate-600/70 focus:border-blue-600 focus:shadow-[0_1px_1px_0,0_0_0_3px] focus:shadow-blue-600/30',
      controllerWrapper:
        'absolute -translate-x-2/4 -translate-y-2/4 top-1/2 leading-none z-10',
      sliderLine: 'h-1.5 rounded bg-slate-200 cursor-pointer relative',
      fillBar: 'rounded h-full transition-colors bg-blue-600',
      pointsWrapper: 'h-4',
      stepPoint: 'bg-black absolute w-px top-3 h-1.5',
      stepPointActive: '!bg-blue-600',
      numbers:
        'relative mt-0.5 text-xs flex place-content-between [&>:first-child]:-translate-x-1/2 [&>:last-child]:translate-x-1/2',
    },
    variants: {
      disabled: {
        controller: '!cursor-not-allowed',
        sliderLine: 'bg-slate-200 cursor-not-allowed',
        fillBar: 'bg-slate-400',
        stepPoint: '!bg-slate-200',
        stepPointActive: '!bg-slate-400',
      },
    },
  },
  transitions: {
    fade: {
      'enter-active-class': 'duration-75',
      'enter-to-class': 'opacity-100',
      'enter-from-class': 'opacity-0',
      'leave-active-class': 'duration-75',
      'leave-to-class': 'opacity-0',
      'leave-from-class': 'opacity-100',
    },
    dropToLeft: {
      'enter-active-class': 'duration-100',
      'enter-from-class': 'opacity-0 translate-x-2',
      'enter-to-class': 'opacity-100 translate-x-0',
      'leave-active-class': 'duration-100',
      'leave-from-class': 'opacity-100 translate-x-0',
      'leave-to-class': 'opacity-0 translate-x-2',
    },
    dropToRight: {
      'enter-active-class': 'duration-100',
      'enter-from-class': 'opacity-0 -translate-x-2',
      'enter-to-class': 'opacity-100 translate-x-0',
      'leave-active-class': 'duration-100',
      'leave-from-class': 'opacity-100 translate-x-0',
      'leave-to-class': 'opacity-0 -translate-x-2',
    },
  },
})

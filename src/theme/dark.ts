export default {
  ItAlert: {
    base: {
      root: 'rounded border flex px-4 py-4 bg-opacity-5',
      title: 'text-sm font-semibold leading-none text-white',
      body: 'text-sm leading-none mt-2.5 text-white',
      closeIcon: 'ml-4 select-none cursor-pointer',
    },
    variants: {
      default: {
        root: 'bg-white',
      },
      primary: {
        root: 'border-blue-600 bg-blue-600',
      },
      success: {
        root: 'border-green-500 bg-green-600',
      },
      warning: {
        root: 'border-yellow-500 bg-yellow-500',
      },
      danger: {
        root: 'border-red-500 bg-red-500',
      },
    },
  },
  ItTag: {
    base: {
      root: 'text-xs flex text-white rounded px-1 py-1 gap-2 font-medium inline-flex items-center leading-none',
      filled: '',
      closeBtn: 'cursor-pointer h-3.5 w-3.5',
    },
    variants: {
      default: {
        root: 'bg-zinc-600',
        filled: 'bg-zinc-500/20 text-zinc-200',
      },
      primary: {
        root: 'bg-blue-600',
        filled: '!bg-blue-500/20 text-blue-500',
      },
      success: {
        root: 'bg-green-500',
        filled: '!bg-green-500/20 text-green-500',
      },
      warning: {
        root: 'bg-yellow-500',
        filled: '!bg-yellow-500/20 text-yellow-500',
      },
      danger: {
        root: 'bg-red-500',
        filled: '!bg-red-500/20 text-red-500',
      },
    },
  },
  ItCheckbox: {
    base: {
      root: 'relative flex cursor-pointer',
      checkbox: [
        'relative border-zinc-600 bg-zinc-700 hover:bg-zinc-600 flex items-center justify-center transition-all select-none h-[1.125rem] w-[1.125rem] overflow-hidden border shadow-sm shadow-slate-600/10 rounded-sm',
        'active:peer-checked:pt-1.5 peer-focus-visible:shadow-[0_1px_1px_0,0_0_0_3px]',
      ],
      checkIcon: 'opacity-0 h-full w-full',
      checkIconActive:
        '!mt-0 opacity-100 text-blue-600 drop-shadow-sm [text-shadow:0_1px_0_rgba(0,0,0,0.07)]',
      label:
        "relative flex items-center transition-all before:content-[''] before:absolute before:w-0 before:h-0.5 before:rounded-3xl before:bg-gray-300 text-white",
      subLabel: 'text-gray-500',
      labelGroup: 'ml-2 flex flex-col space-y-0.5 text-sm',
      lineThrough: 'text-gray-500 before:w-full before:transition-all',
    },
    variants: {
      default: {
        checkbox:
          'hover:border-blue-600 active:!bg-blue-600/30 active:!border-blue-600 peer-checked:border-blue-600 peer-focus-visible:border-blue-600 peer-focus-visible:shadow-blue-600/30',
        checkIcon: '!text-blue-600',
      },
      primary: {
        checkbox:
          'hover:!border-blue-600 active:!bg-blue-600/30 peer-checked:!bg-blue-600 peer-checked:border-blue-600 active:peer-checked:bg-blue-600 peer-focus-visible:border-blue-600 peer-focus-visible:shadow-blue-600/30',
        checkIcon: '!text-white',
      },
      success: {
        checkbox:
          'active:!bg-green-500/30 active:!border-green-500 hover:!border-green-500 active:peer-checked:bg-green-500 peer-checked:!bg-green-500 peer-checked:border-green-500 peer-focus-visible:border-green-500 peer-focus-visible:shadow-green-500/30',
        checkIcon: '!text-white',
      },
      warning: {
        checkbox:
          'active:!bg-yellow-500/30 active:!border-yellow-500 hover:!border-yellow-500 active:peer-checked:bg-yellow-500 peer-checked:!bg-yellow-500 peer-checked:border-yellow-500 peer-focus-visible:border-yellow-500 peer-focus-visible:shadow-yellow-500/30',
        checkIcon: '!text-white',
      },
      danger: {
        checkbox:
          'active:!bg-red-500/30 active:!border-red-500 hover:!border-red-500 peer-checked:!bg-red-500 active:peer-checked:bg-red-500 peer-checked:border-red-500 peer-focus-visible:border-red-500 peer-focus-visible:shadow-red-500/30',
        checkIcon: '!text-white',
      },
      disabled: {
        checkbox:
          'cursor-not-allowed active:border-gray-300 active:bg-gray-100 hover:border-gray-300 active:!pt-0 !text-zinc-500 !bg-neutral-700 border-neutral-700 peer-checked:border-gray-700',
        checkIcon: '!text-gray-500 [text-shadow:none]',
        label: 'text-gray-500',
        subLabel: 'text-gray-300',
        lineThrough: '',
      },
    },
  },
  ItSwitch: {
    base: {
      root: 'flex cursor-pointer',
      switch:
        'flex bg-zinc-700 h-5 transition-all rounded-full relative min-w-[35px] focus-within:shadow-[0_0_0_1px,0_0_0_3px]',
      switchChecked: '',
      input: 'absolute cursor-pointer inset-0 w-full h-full opacity-0 peer',
      switchCircle:
        'absolute bg-white rounded-full peer-active:peer-enabled:w-5 transition-all top-0.5 h-4 w-4 shadow-sm',
      label: 'relative flex items-center transition-all text-white',
      subLabel: 'text-gray-500',
      labelGroup: 'ml-2 flex flex-col space-y-0.5 text-sm',
    },
    variants: {
      default: {
        switch: 'focus-within:shadow-blue-600/30',
        switchChecked: '!bg-blue-600',
      },
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
        switch: '!bg-neutral-700',
        switchChecked: '!bg-slate-400 !bg-gray-500',
        switchCircle: 'bg-gray-400',
        label: 'text-gray-300',
        subLabel: 'text-gray-300',
      },
    },
  },
  ItToggle: {
    base: {
      root: 'select-none min-w-[100px] h-8 flex relative rounded-md transition-all border-[3px] focus-visible:shadow-[0_1px_1px_0,0_0_0_3px] outline-none focus-visible',
      value: [
        '[&:not(:first-of-type)]:before:content-[""] [&:not(:first-of-type)]:before:transition-all [&:not(:first-of-type)]:before:absolute [&:not(:first-of-type)]:before:w-px [&:not(:first-of-type)]:before:top-1 [&:not(:first-of-type)]:before:bottom-1 [&:not(:first-of-type)]:before:left-0',
        'relative flex max-h-full justify-center flex-1 cursor-pointer [&>*]:z-10 text-sm leading-none p-1.5 font-medium',
      ],
      selected: '[&+div]:before:invisible',
      slider: 'absolute shadow rounded left-0 top-0 bottom-0 transition-all',
      round: '!rounded-full [&>*]:before:invisible',
    },
    variants: {
      default: {
        root: 'focus-visible:shadow-blue-600/30 border-zinc-700 bg-zinc-700 focus-visible:shadow-slate-200/60',
        value: '[&:not(:first-of-type)]:before:bg-zinc-600 text-slate-400',
        selected: 'text-zinc-100',
        slider: 'bg-zinc-500',
      },
    },
  },
  ItDivider: {
    base: {
      root: 'w-full h-px',
      vertical: 'relative !w-px !h-4 !inline-block align-middle -top-0.5',
    },
    variants: {
      default: {
        root: 'bg-zinc-600',
      },
    },
  },
  ItBadge: {
    base: {
      root: 'relative flex',
      body: 'text-white text-[10px] rounded-xl px-1.5 leading-4 border border-neutral-800 inline-block',
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
    variants: {
      default: {
        body: 'bg-red-500',
      },
      primary: {
        body: 'bg-blue-600',
      },
      success: {
        body: 'bg-green-500',
      },
      warning: {
        body: 'bg-yellow-500',
      },
      danger: {
        body: 'bg-red-500',
      },
    },
  },
  ItButton: {
    base: {
      root: 'py-2 px-5 shadow-sm border max-w-full outline-none relative flex justify-center active:shadow-none items-center font-medium text-sm leading-none cursor-pointer rounded select-none transition-all duration-200 outline-0 font-sans focus-visible:shadow-[0_1px_1px_0,0_0_0_3px]',
      outlined:
        '!shadow-sm focus-visible:!shadow-[0_1px_1px_0,0_0_0_3px] active:!shadow-none !bg-transparent active:bg-transparent',
      text: 'empty:!hidden flex text-center flex-row space-x-2 items-center',
      round: 'rounded-3xl after:rounded-3xl',
      small: '!px-3.5 !py-1',
      big: '!px-7 !py-3.5 text-base rounded-md',
      empty: '!p-2',
      loading: 'absolute !w-6 !h-6',
    },
    variants: {
      default: {
        root: 'text-slate-200 shadow-[0px_1px_1px_-1px_rgba(255,255,255)_inset,rgba(0,0,0,0.05)_0px_1px_3px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] border-zinc-900/90 active:border-zinc-600 bg-zinc-700 focus-visible:border-slate-400 focus-visible:!shadow-[0px_1px_1px_-1px_rgba(202,202,202,0.90)_inset,0_1px_1px_0,0_0_0_3px] focus-visible:!shadow-slate-200/60 active:bg-zinc-600',
      },
      primary: {
        root: [
          'bg-blue-600 shadow-sm !shadow-blue-600/40 border-blue-600 text-white',
          'active:bg-blue-700 active:!border-blue-700 focus-visible:border-blue-600 hover:bg-blue-500 hover:!border-blue-500',
        ],
        outlined:
          '!text-blue-600 hover:!bg-blue-400/10 active:!bg-blue-400/20 focus-visible:shadow-blue-600/40',
        loading: '!border-r-white',
      },
      'primary-text': {
        root: [
          '!bg-transparent shadow-none !shadow-blue-600/40 text-blue-600 !border-none',
          'active:!bg-blue-400/20 focus-visible:border-none hover:!border-none focus-visible:!shadow-blue-600/40',
          "after:content-[''] after:rounded after:absolute after:inset-0 after:bg-blue-400/10 after:scale-50 after:opacity-0 hover:after:scale-100 hover:after:opacity-100 after:transition-all after:ease-in-out after:duration-200",
        ],
      },
      text: {
        root: [
          '!bg-transparent shadow-none !border-none',
          'focus-visible:shadow-slate-200/60 focus-visible:shadow-slate-200/60 active:bg-gray-100 active:!bg-gray-400/20 focus-visible:border-none hover:!border-none',
          "after:content-[''] after:rounded after:absolute after:inset-0 after:bg-gray-400/10 after:scale-50 after:opacity-0 hover:after:scale-100 hover:after:opacity-100 after:transition-all after:ease-in-out after:duration-200",
        ],
      },
      success: {
        root: [
          'bg-green-500 shadow-sm !shadow-green-500/40 !border-green-500 !text-white',
          'active:bg-green-600 active:!border-green-600 focus-visible:border-green-500 hover:bg-green-400 hover:!border-green-400',
        ],
        outlined:
          '!text-green-500 hover:!bg-green-400/10 active:!bg-green-400/20 focus-visible:!shadow-green-500/40',
        loading: '!border-r-white',
      },
      'success-text': {
        root: [
          '!bg-transparent shadow-none !shadow-green-500/40 !text-green-500 !border-none ',
          'active:!bg-green-400/20 focus-visible:border-none hover:!border-none',
          "after:content-[''] after:rounded after:absolute after:inset-0 after:bg-green-400/10 after:scale-50 after:opacity-0 hover:after:scale-100 hover:after:opacity-100 after:transition-all after:ease-in-out after:duration-200",
        ],
      },
      warning: {
        root: [
          'bg-yellow-500 shadow-sm !text-white !shadow-yellow-500/40 !border-yellow-500',
          'active:bg-yellow-600 active:!border-yellow-600 focus-visible:border-yellow-500 hover:bg-yellow-400 hover:!border-yellow-400',
        ],
        outlined:
          '!text-yellow-500 hover:!bg-yellow-400/10 active:!bg-yellow-400/20 focus-visible:!shadow-yellow-500/40',
        loading: '!border-r-white',
      },
      'warning-text': {
        root: [
          '!bg-transparent shadow-none !shadow-yellow-500/40 !text-yellow-500 !border-none hover:!border-none',
          'active:!bg-yellow-400/20 focus-visible:border-none',
          "after:content-[''] after:rounded after:absolute after:inset-0 after:bg-yellow-400/10 after:scale-50 after:opacity-0 hover:after:scale-100 hover:after:opacity-100 after:transition-all after:ease-in-out after:duration-200",
        ],
      },
      danger: {
        root: [
          'bg-red-500 shadow-md shadow-sm !shadow-red-500/40 !border-red-500 !text-white',
          'active:bg-red-600 active:!border-red-600 focus-visible:border-red-500 hover:bg-red-400 hover:!border-red-400',
        ],
        outlined:
          '!text-red-500 hover:!bg-red-400/10 active:!bg-red-400/20 focus-visible:!shadow-red-500/40',
        loading: '!border-r-white',
      },
      'danger-text': {
        root: [
          '!bg-transparent shadow-none !shadow-red-500/40 !text-red-500 !border-none',
          'active:!bg-red-400/20 hover:!border-none focus-visible:border-none',
          "after:content-[''] after:rounded after:absolute after:inset-0 after:bg-red-400/10 after:scale-50 after:opacity-0 hover:after:scale-100 hover:after:opacity-100 after:transition-all after:ease-in-out after:duration-200",
        ],
      },
      disabled: {
        root: [
          'shadow-none cursor-not-allowed !text-zinc-500 !bg-neutral-700 border-neutral-700',
          'active:border-gray-300 active:bg-gray-100 peer-checked:border-gray-300 hover:border-gray-300',
        ],
        outlined: '!bg-gray-100',
        loading: '!border-r-slate-300',
      },
    },
  },
  ItTooltip: {
    base: {
      root: 'absolute z-10',
      body: 'p-2 text-[13px] leading-none shadow border rounded-md',
    },
    variants: {
      default: {
        body: [
          'shadow-slate-600/10 text-slate-200 border-none bg-zinc-700',
          'shadow-[0px_1px_2px_rgb(13_14_18/69%),0px_1px_4px_rgb(13_14_18/69%),inset_0px_0px_0px_1px_rgb(214_214_255/10%),inset_0px_1px_0px_rgb(214_214_255/10%)]',
        ],
      },
    },
  },
  ItDropdown: {
    base: {
      root: '',
      dropdown: 'absolute z-10',
      menu: 'rounded shadow border space-y-1 py-1',
      item: 'mx-1 px-2 py-1 leading-none rounded flex flex-row justify-between items-center',
      itemText: 'flex text-sm font-medium items-center',
      itemIcon: 'mr-2',
    },
    variants: {
      default: {
        menu: 'shadow-slate-600/10 bg-zinc-700 border-zinc-600 text-white',
        item: 'cursor-pointer hover:bg-blue-600',
      },
    },
  },
  ItSpinner: {
    base: {
      root: 'border-transparent border-r-black bg-transparent animate-spin w-8 h-8 border-4 rounded-full',
    },
    variants: {},
  },
  ItCollapse: {
    base: {
      root: 'w-full flex flex-col',
    },
    variants: {},
  },
  ItCollapseItem: {
    base: {
      root: 'first:rounded-tl first:rounded-tr last:shadow-sm last:rounded-bl last:rounded-br border-r border-l border-t first:border-b-none last:border',
      expanded: '!rounded-b-none',
      icon: 'w-5 h-5',
      activator:
        'flex rounded-[inherit] px-4 py-3 w-full focus-visible:shadow-[0_1px_1px_0,0_0_0_3px] outline-none justify-between text-sm font-medium',
      body: 'text-sm border-t px-4 py-4',
    },
    variants: {
      default: {
        root: 'border-black',
        activator:
          'bg-zinc-700 focus-visible:shadow-slate-200/60 text-slate-200',
        body: 'border-black',
      },
    },
  },
  ItColorpicker: {
    base: {
      root: 'relative w-44 rounded',
      alphaCheckboard: 'absolute inset-0',
      alphaWrap: 'h-full mx-1.5 relative cursor-pointer',
      hueWrap: 'h-full mx-1.5 relative cursor-pointer',
      huePointer:
        'absolute rounded-sm h-full w-3.5 shadow-md scale-y-110 -translate-x-1/2 border-2 border-white cursor-ew-resize z-10',
      saturationWrap: 'relative h-32 w-full bg-black rounded-t-md',
      saturationRoot: 'absolute inset-0 cursor-pointer rounded-t',
      saturationPointer:
        'absolute rounded-full h-3 w-3 shadow -translate-x-1/2 -translate-y-1/2 border border-white focus-visible:border-2',
      sliderWrap: 'relative h-6 w-full [&:last-child>div]:rounded-b',
      tooltip:
        'w-12 h-12 border border-4 shadow-md border-white absolute rounded-full',
    },
    variants: {},
  },
  ItTabs: {
    base: {
      root: 'flex flex-col',
      bordered: 'border rounded shadow',
      rootVertical: '!flex-row',
      header:
        'flex flex-row flex-nowrap overflow-x-auto shadow-[inset_0_-1px_0_0] overflow-x-auto overflow-y-hidden gap-2',
      verticalHeader:
        '!flex-col !shadow-[inset_-1px_0_0_0] overflow-y-auto overflow-x-hidden',
      body: 'flex-1',
      tab: "disabled:cursor-not-allowed inset-0 flex-auto relative p-3 text-sm cursor-pointer focus:outline-none focus:after:!scale-y-[2] after:content-[''] after:absolute after:left-0 after:w-full after:h-[2px] after:bottom-0 after:scale-y-0 after:origin-bottom after:transition-all",
      verticalTab:
        "focus:after:!scale-y-[1] focus:after:!scale-x-[2] after:content-[''] after:!top-0 after:!right-0 after:!left-auto after:h-full after:!w-[2px] after:scale-x-0 after:origin-right",
      activeTab: 'font-semibold after:!scale-100',
    },
    variants: {
      default: {
        bordered: 'shadow-slate-600/10 border-zinc-500',
        header: 'shadow-zinc-500',
        verticalHeader: '!shadow-zinc-500',
        tab: ' after:bg-blue-600 disabled:text-gray-500 text-white',
        body: 'text-white',
      },
    },
  },
  ItTextarea: {
    base: {
      root: 'flex flex-1 flex-col',
      label: 'flex text-sm mb-1.5 text-white',
      textarea:
        'relative peer flex-1 min-h-min appearance-none w-full bg-zinc-700 placeholder:duration-200 duration-150 transition-all placeholder:transition-all placeholder:indent-0 text-sm px-1.5 py-1 border shadow-sm rounded outline-none hover:border-slate-400 disabled:hover:border-slate-300 disabled:cursor-not-allowed disabled:!text-zinc-500 disabled:!border-neutral-700 focus-visible:shadow-[0_1px_1px_0,0_0_0_3px] focus:z-10 focus:placeholder:indent-1.5',
      mask: 'fixed bg-gray-900/40 inset-0 z-50',
      message: 'text-xs peer-disabled:text-zinc-500',
    },
    variants: {
      default: {
        textarea:
          'border-zinc-900/90 shadow-slate-600/10 disabled:text-gray-300 disabled:bg-gray-100 focus-visible:!border-blue-600 focus-visible:shadow-blue-600/30',
      },
      success: {
        textarea:
          '!border-green-500 focus-within:!border-green-500 focus-visible:shadow-green-500/30',
        message: 'text-green-500',
      },
      warning: {
        textarea:
          '!border-yellow-500 focus-within:!border-yellow-500 focus-visible:shadow-yellow-500/30',
        message: 'text-yellow-500',
      },
      danger: {
        textarea:
          '!border-red-500 focus-within:!border-red-500 focus-visible:shadow-red-500/30',
        message: 'text-red-500',
      },
    },
  },
  ItRadio: {
    base: {
      root: 'relative flex cursor-pointer',
      input: 'peer absolute inset-0 m-0 h-full w-full cursor-pointer opacity-0',
      border:
        'relative flex border-zinc-600 bg-zinc-700 hover:bg-zinc-600 items-center justify-center transition-all select-none h-[1.125rem] w-[1.125rem] overflow-hidden border shadow-sm rounded-full peer-focus-visible:shadow-[0_1px_1px_0,0_0_0_3px]',
      circle: 'transition-all scale-0 absolute bg-white w-2 h-2 rounded-full',
      activeCircle: 'scale-100',
      label: 'relative flex items-center transition-all text-white',
      subLabel: 'text-gray-500',
      labelGroup: 'ml-2 flex flex-col space-y-0.5 text-sm',
    },
    variants: {
      default: {
        border:
          'shadow-slate-600/10 border-slate-300 hover:!border-blue-600 active:!bg-blue-600/30 peer-checked:hover:bg-blue-600 active:border-blue-600 peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-focus-visible:border-blue-600 peer-focus-visible:shadow-blue-600/30',
      },
      success: {
        border:
          'active:!bg-green-600/30 active:border-green-500 hover:!border-green-500 active:peer-checked:bg-green-500 peer-checked:bg-green-500 peer-checked:hover:bg-green-500 peer-checked:border-green-500 peer-focus-visible:border-green-500 peer-focus-visible:shadow-green-500/30',
      },
      warning: {
        border:
          'active:!bg-yellow-600/30 active:border-yellow-500 hover:!border-yellow-500 active:peer-checked:bg-yellow-500 peer-checked:bg-yellow-500 peer-checked:hover:bg-yellow-500 peer-checked:border-yellow-500 peer-focus-visible:border-yellow-500 peer-focus-visible:shadow-yellow-500/30',
      },
      danger: {
        border:
          'active:!bg-red-600/30 active:border-red-500 hover:!border-red-500 peer-checked:bg-red-500 active:peer-checked:bg-red-500 peer-checked:hover:bg-red-500 peer-checked:border-red-500 peer-focus-visible:border-red-500 peer-focus-visible:shadow-red-500/30',
      },
      disabled: {
        root: 'cursor-not-allowed',
        border:
          'border-gray-300 active:border-gray-300 !bg-gray-100 active:bg-gray-100 peer-checked:border-gray-300 hover:border-gray-300 active:!pt-0 peer-checked:border-gray-700 !bg-neutral-700 border-neutral-700',
        circle: '!bg-gray-300 !bg-gray-500',
        label: 'text-gray-300',
        subLabel: 'text-gray-300',
      },
    },
  },
  ItButtonGroup: {
    base: {
      root: 'flex [&>:not(:first-child):not(:last-child)]:rounded-none',
    },
    variants: {
      horizontal: {
        root: '[&>:first-child]:rounded-r-none [&>:last-child]:rounded-l-none [&>*+*]:border-l-0',
      },
      vertical: {
        root: 'flex-col [&>:first-child]:rounded-b-none [&>:last-child]:rounded-t-none [&>*+*]:border-t-0 [&>:not(:last-child):not(:focus-visible)]:!shadow-none',
      },
    },
  },
  ItAvatar: {
    base: {
      root: 'rounded-full flex justify-center items-center overflow-hidden',
      text: 'font-semibold align-middle',
      icon: 'w-1/2 mb-0.5',
      square: '!rounded',
    },
    variants: {
      default: {
        root: 'bg-neutral-500',
        text: 'text-white',
        icon: 'fill-white',
      },
    },
  },
  ItAvatarGroup: {
    base: {
      root: 'flex bg-inherit [&>div]:border-2 [&>div]:border-transparent [&>div]:!bg-inherit',
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
  ItDrawer: {
    base: {
      root: 'inset-0 w-full h-full',
      mask: 'fixed bg-gray-900/60 inset-0 w-full h-full z-50',
      body: 'fixed max-w-[75%] z-50 top-[20px] h-[calc(100%-40px)] rounded-md transition-all delay-100',
      right: 'right-[20px]',
      left: 'left-[20px]',
    },
    variants: {
      default: {
        body: "shadow-xl shadow-zinc-900/80 text-slate-200 bg-zinc-800 before:content-[''] before:absolute before:rounded before:inset-0 before:shadow-[inset_0px_0px_0px_1px_rgb(214_214_255/10%),inset_0px_1px_0px_rgb(214_214_255/10%)]",
      },
    },
  },
  ItLoadingBar: {
    base: {
      root: 'top-0 left-0 z-50 shadow-sm transition-all',
    },
    variants: {
      default: {
        root: 'bg-blue-600 shadow-blue-600/50',
      },
    },
  },
  ItSelect: {
    base: {
      root: 'flex flex-col relative text-white',
      label: 'flex text-sm mb-1',
      input:
        'flex gap-2 items-center outline-none py-1.5 px-2 text-sm relative rounded border shadow-sm duration-150 transition-all cursor-pointer place-content-between focus:shadow-[0_1px_1px_0,0_0_0_3px]',
      dropdown: 'absolute z-50 min-w-[130px] w-full top-full mt-2',
      placeholder: 'text-gray-400',
      list: 'flex flex-col gap-1 p-1 text-sm rounded-md border shadow-sm rounded select-none overflow-y-auto max-h-[200px]',
      selected: 'flex gap-1 flex-wrap',
      option:
        'py-1 px-2 rounded cursor-pointer hover:bg-blue-600 hover:text-white',
      optionSelected: 'rounded !bg-blue-600 text-white',
      inputIcon: '!text-base select-none !leading-none h-5 min-w-5',
      message: 'text-xs',
      focusedHovered: 'bg-gray-400/50',
    },
    variants: {
      default: {
        input:
          'shadow-slate-600/10 hover:border-slate-400 focus:border-blue-600 focus:!border-blue-600 border-zinc-900/90 bg-zinc-700 focus:shadow-blue-600/30 [&:focus>div>svg]:text-blue-600 [&:focus>svg]:transition-all',
        list: 'shadow-slate-600/10 border-zinc-900/90 bg-zinc-700',
      },
      disabled: {
        input:
          'cursor-not-allowed cursor-not-allowed bg-zinc-700 !text-zinc-500 !border-neutral-700',
        message: 'text-zinc-500',
      },
    },
  },
  ItInput: {
    base: {
      root: 'flex-1',
      mask: 'fixed inset-0 w-full h-full bg-gray-900/60 z-50',
      labelTop: 'flex text-sm mb-1 text-white',
      prefixWrapper:
        'border-zinc-900/90 bg-zinc-700 flex relative rounded border shadow-sm overflow-hidden duration-150 transition-all focus-within:shadow-[0_1px_1px_0,0_0_0_3px]',
      inputWrapper: 'flex flex-1',
      affix: 'flex text-sm items-center justify-center first:pl-2 last:pr-2',
      input:
        'bg-zinc-700 text-white flex-1 min-w-[10px] w-0 py-1.5 only:px-2 first:pl-2 last:pr-2 text-sm outline-none focus:placeholder:indent-1.5 placeholder:transition-all',
      iconWrapper: 'flex px-2 items-center justify-center text-slate-200',
      message: 'text-xs',
    },
    variants: {
      default: {
        prefixWrapper:
          'border-slate-300 shadow-slate-600/10 hover:border-slate-400 focus-within:border-blue-600 focus-within:!border-blue-600 focus-within:shadow-blue-600/30',
      },
      success: {
        prefixWrapper:
          '!border-green-500 focus-within:!border-green-500 focus-within:shadow-green-500/30',
        message: 'text-green-500',
      },
      warning: {
        prefixWrapper:
          '!border-yellow-500 focus-within:!border-yellow-500 focus-within:shadow-yellow-500/30',
        message: 'text-yellow-500',
      },
      danger: {
        prefixWrapper:
          '!border-red-500 focus-within:!border-red-500 focus-within:shadow-red-500/30',
        message: 'text-red-500',
      },
      disabled: {
        prefixWrapper:
          'cursor-not-allowed bg-gray-100 !text-zinc-500!border-neutral-700',
        input: 'cursor-not-allowed !text-zinc-500 !bg-neutral-700',
        message: 'text-zinc-500',
      },
    },
  },
  ItNumberInput: {
    base: {
      root: '',
      labelTop: 'flex text-sm mb-1 text-white',
      controlsWrapper:
        'flex [&>button:first-child]:rounded-r-none [&>button:first-child]:border-r-0 [&>button:last-child]:rounded-l-none [&>button:last-child]:border-l-0',
      inputWrapper:
        'only:rounded border border-zinc-500 shadow-sm overflow-hidden duration-150 transition-all focus-within:shadow-[0_1px_1px_0,0_0_0_3px]',
      input: 'px-3 py-1.5 outline-none h-8 text-sm bg-zinc-700 text-white',
      inputBuffer:
        'absolute -left-80 -top-80 flex-nowrap invisible px-3 py-1.5',
    },
    variants: {
      default: {
        inputWrapper:
          'border-slate-300 shadow-slate-600/10 hover:border-slate-400 focus-within:border-blue-600 focus-within:!border-blue-600 focus-within:shadow-blue-600/30',
      },
      disabled: {
        inputWrapper:
          'cursor-not-allowed bg-gray-100 cursor-not-allowed bg-gray-100 !text-zinc-500 !border-neutral-700',
        input: 'cursor-not-allowed !bg-neutral-700 text-gray-300',
      },
    },
  },
  ItSlider: {
    base: {
      root: 'relative w-full select-none',
      controller:
        'outline-none cursor-ew-resize border-[0.8px] w-[9px] h-[19px] rounded-sm transition-all shadow-sm focus:shadow-[0_1px_1px_0,0_0_0_3px]',
      controllerWrapper:
        'absolute -translate-x-2/4 -translate-y-2/4 top-1/2 leading-none z-10',
      sliderLine: 'h-1.5 rounded cursor-pointer relative',
      fillBar: 'rounded h-full transition-colors',
      pointsWrapper: 'h-4',
      stepPoint: 'absolute w-px top-3 h-1.5',
      stepPointActive: '',
      numbers:
        'relative mt-0.5 text-xs text-white flex place-content-between [&>:first-child]:-translate-x-1/2 [&>:last-child]:translate-x-1/2',
    },
    variants: {
      default: {
        controller:
          'border-slate-300 bg-white focus:border-blue-600 shadow-slate-600/70 focus:shadow-blue-600/30',
        sliderLine: 'bg-zinc-700',
        fillBar: 'bg-blue-600',
        stepPoint: 'bg-white',
        stepPointActive: '!bg-blue-600',
      },
      disabled: {
        controller: '!cursor-not-allowed bg-white shadow-slate-600/70',
        sliderLine: 'bg-zinc-700 cursor-not-allowed',
        fillBar: '!bg-gray-500',
        stepPoint: 'bg-slate-200',
        stepPointActive: '!bg-gray-500',
      },
    },
  },
  ItProgressbar: {
    base: {
      root: '',
      progressBar: 'rounded h-2 w-full overflow-hidden',
      progressLine: 'rounded h-full relative',
    },
    variants: {
      default: {
        progressBar: 'bg-zinc-700',
        progressLine: 'bg-blue-600',
      },
    },
  },
  ItModal: {
    base: {
      root: '',
      mask: 'fixed inset-0 z-50 bg-gray-900/70 backdrop-blur-sm transform-gpu',
      bodyWrapper: 'flex h-full w-full items-center justify-center',
      body: 'relative rounded overflow-hidden w-full cursor-default outline-none',
      header: 'py-4 px-6 text-md font-medium',
      content: 'first:pt-4 pb-4 px-6 text-sm overflow-auto',
      footer: 'flex flex-row justify-end py-4 px-6 space-x-3',
    },
    variants: {
      default: {
        bodyWrapper: '',
        body: "shadow-xl shadow-zinc-900/80 text-slate-200 bg-zinc-800 before:content-[''] before:absolute before:rounded before:inset-0 before:shadow-[inset_0px_0px_0px_1px_rgb(214_214_255/10%),inset_0px_1px_0px_rgb(214_214_255/10%)]",
        footer: 'bg-zinc-700',
      },
    },
  },
  ItNotification: {
    base: {
      root: [
        'fixed z-50 overflow-hidden transition-all text-sm rounded text-slate-200 border-none bg-zinc-700 shadow shadow-slate-600/10 leading-none px-3 py-1.5',
        'shadow-[0px_1px_2px_rgb(13_14_18/69%),0px_1px_4px_rgb(13_14_18/69%),inset_0px_0px_0px_1px_rgb(214_214_255/10%),inset_0px_1px_0px_rgb(214_214_255/10%)]',
      ],
    },
    variants: {},
  },
  transitions: {
    scale: {
      'enter-active-class':
        'duration-200 ease-[cubic-bezier(0.175,0.885,0.32,1.475)]',
      'enter-from-class': 'transform scale-0',
      'leave-active-class': 'duration-200 ease-in',
      'leave-to-class': 'transform scale-0',
    },
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
    dropToBottom: {
      'enter-active-class': 'duration-100',
      'enter-from-class': 'opacity-0 -translate-y-2',
      'enter-to-class': 'opacity-100 translate-y-0',
      'leave-active-class': 'duration-100',
      'leave-from-class': 'opacity-100 translate-y-0',
      'leave-to-class': 'opacity-0 -translate-y-2',
    },
    fadeToLeft: {
      'enter-active-class': 'duration-150 origin-right',
      'enter-from-class': 'opacity-0 scale-75 translate-x-2',
      'enter-to-class': 'opacity-100 scale-100 translate-x-0',
      'leave-active-class': 'duration-150 origin-right',
      'leave-from-class': 'opacity-100 scale-100 translate-x-0',
      'leave-to-class': 'opacity-0 scale-75 translate-x-2',
    },
    fadeToRight: {
      'enter-active-class': 'duration-150 origin-left',
      'enter-from-class': 'opacity-0 scale-75 -translate-x-2',
      'enter-to-class': 'opacity-100 scale-100 translate-x-0',
      'leave-active-class': 'duration-150 origin-left',
      'leave-from-class': 'opacity-100 scale-100 translate-x-0',
      'leave-to-class': 'opacity-0 scale-75 -translate-x-2',
    },
    fadeToTop: {
      'enter-active-class': 'duration-150 origin-bottom',
      'enter-from-class': 'opacity-0 scale-75 translate-y-2',
      'enter-to-class': 'opacity-100 scale-100 translate-y-0',
      'leave-active-class': 'duration-150 origin-bottom',
      'leave-from-class': 'opacity-100 scale-100 translate-y-0',
      'leave-to-class': 'opacity-0 scale-75 translate-y-2',
    },
    fadeToBottom: {
      'enter-active-class': 'duration-150 origin-top',
      'enter-from-class': 'opacity-0 scale-75 -translate-y-2',
      'enter-to-class': 'opacity-100 scale-100 translate-y-0',
      'leave-active-class': 'duration-150 origin-top',
      'leave-from-class': 'opacity-100 scale-100 translate-y-0',
      'leave-to-class': 'opacity-0 scale-75 -translate-y-2',
    },
  },
}

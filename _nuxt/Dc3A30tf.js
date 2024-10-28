import{_ as h}from"./DLMznalT.js";import{n as _,r as p,p as d,o as k,c as w,a as r,t as o,b as t,w as e,d as l,L as m}from"./BZMuJF5d.js";const $={class:"mb-4 text-2xl font-bold"},E={class:"flex w-full flex-col rounded border bg-white p-8 dark:border-neutral-700 dark:bg-neutral-800"},C={class:"my-4 text-lg font-semibold"},q={class:"mt-2"},T={class:"mt-4"},z={class:"my-4 text-lg font-semibold"},I={class:"flex flex-col justify-center"},B={class:"my-4 text-center font-semibold"},V={class:"flex flex-col justify-around gap-4 md:flex-row"},S=_({__name:"index",setup(U){const g=p(`<it-alert
 ||| :variants="{
    'my-variant': {
      title:
        '!text-transparent bg-gradient-to-r from-violet-700 to-blue-600 bg-clip-text',
    },
  }" |||
 ||| :variant="['primary', 'my-variant']" |||
  title="Example alert"
>
  This is the result component with inline variant. Title has base classes and classes from two variants.
</it-alert>`),f=p(`<it-alert variant="primary" title="Example alert">
  This is the result component with primary variant
</it-alert>`),y=p(`<div v-show="visible" ||| :class="variant.root" |||>
  <slot name="icon" />
  <div>
    <p ||| :class="variant.title" |||>{{ title }}</p>
    <p v-if="defaultSlot" ||| :class="variant.body" |||>
      <slot />
    </p>
  </div>
  <button v-if="closable" ||| :class="variant.closeIcon" ||| @click="clickCross">
    <svg></svg>
  </button>
</div>`),v=p(`{
  'it-alert': {
    base: {
      root: 'rounded border flex px-4 py-4 bg-opacity-5',
      title: 'text-sm font-semibold leading-none dark:text-white',
      body: 'text-sm leading-none mt-2.5 dark:text-white',
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
  }
},`);return(a,n)=>{const i=d("i18n-t"),s=d("it-button"),u=h,c=d("it-tag"),b=d("it-alert"),x=d("it-divider");return k(),w("div",null,[r("h1",$,o(a.$t("introduction.title")),1),r("div",E,[t(i,{keypath:"introduction.description",tag:"p",class:"dark:text-slate-300"},{default:e(()=>n[0]||(n[0]=[r("b",{class:"dark:text-white"},"Equal UI",-1)])),_:1}),r("h2",C,o(a.$t("introduction.how_works.label")),1),t(i,{keypath:"introduction.how_works.content",tag:"p"},{default:e(()=>[t(s,{variant:"primary-text",nuxt:"",to:"/components/alert",target:"_blank",rel:"noopener noreferrer",class:"!text-md !inline-block !px-1 !py-0 font-semibold leading-relaxed text-blue-500"},{default:e(()=>n[1]||(n[1]=[l(" it-alert ")])),_:1})]),_:1}),t(u,{language:"html",class:"my-4 rounded border dark:border-neutral-700",code:m(y)},null,8,["code"]),r("p",null,o(a.$t("introduction.types.title")),1),r("ul",q,[r("li",null,[t(s,{variant:"primary-text",href:"https://github.com/Equal-UI/Equal/blob/master/src/theme/full.ts",target:"_blank",size:"big",rel:"noopener noreferrer",class:"!inline-block !px-1 !py-0 font-semibold leading-relaxed text-blue-500"},{default:e(()=>[t(i,{keypath:"introduction.types.type1.description"},{default:e(()=>[r("strong",null,o(a.$t("introduction.types.type1.name")),1)]),_:1})]),_:1})]),r("li",null,[t(s,{variant:"primary-text",href:"https://github.com/Equal-UI/Equal/blob/master/src/theme/light.ts",target:"_blank",rel:"noopener noreferrer",size:"big",class:"!inline-block !px-1 !py-0 font-semibold leading-relaxed text-blue-500"},{default:e(()=>[t(i,{keypath:"introduction.types.type2.description"},{default:e(()=>[r("strong",null,o(a.$t("introduction.types.type2.name")),1)]),_:1})]),_:1})]),r("li",null,[t(s,{variant:"primary-text",href:"https://github.com/Equal-UI/Equal/blob/master/src/theme/dark.ts",target:"_blank",size:"big",rel:"noopener noreferrer",class:"!inline-block !px-1 !py-0 font-semibold leading-relaxed text-blue-500"},{default:e(()=>[t(i,{keypath:"introduction.types.type3.description"},{default:e(()=>[r("strong",null,o(a.$t("introduction.types.type3.name")),1)]),_:1})]),_:1})])]),t(i,{keypath:"introduction.blocks_title",tag:"p",class:"mt-4"},{default:e(()=>[t(s,{variant:"primary-text",nuxt:"",to:"/components/alert",target:"_blank",rel:"noopener noreferrer",class:"!text-md !inline-block !px-1 !py-0 font-semibold leading-relaxed text-blue-500"},{default:e(()=>n[2]||(n[2]=[l(" it-alert ")])),_:1})]),_:1}),t(u,{language:"js",class:"my-4 rounded border dark:border-neutral-700",code:m(v)},null,8,["code"]),t(i,{keypath:"introduction.variants.title",tag:"p",class:"mt-4"},{default:e(()=>[n[4]||(n[4]=r("strong",null,"Base",-1)),n[5]||(n[5]=r("strong",null,"Variants",-1)),t(c,{variant:"primary"},{default:e(()=>n[3]||(n[3]=[l("base")])),_:1})]),_:1}),t(i,{keypath:"introduction.variants.usage1.title",tag:"p",class:"mt-4"},{default:e(()=>[t(c,{variant:"primary"},{default:e(()=>n[6]||(n[6]=[l("variant")])),_:1})]),_:1}),t(u,{language:"html",class:"my-4 rounded border dark:border-neutral-700",code:m(f)},null,8,["code"]),r("p",null,o(a.$t("introduction.variants.result")),1),t(b,{variant:"primary",title:"Example alert"},{default:e(()=>n[7]||(n[7]=[l(" This is the result component with primary variant ")])),_:1}),t(i,{keypath:"introduction.variants.usage2.title",tag:"p",class:"mt-4"},{default:e(()=>[t(c,{variant:"primary"},{default:e(()=>n[8]||(n[8]=[l("variants")])),_:1})]),_:1}),t(u,{language:"html",class:"my-4 rounded border dark:border-neutral-700",code:m(g)},null,8,["code"]),r("p",null,o(a.$t("introduction.variants.result")),1),t(b,{variants:{"my-variant":{title:"!text-transparent bg-gradient-to-r from-violet-700 to-blue-600 bg-clip-text"}},variant:["primary","my-variant"],title:"Example alert"},{default:e(()=>n[9]||(n[9]=[l(" This is the result component with inline variant. Title has base classes and classes from two variants. ")])),_:1}),r("p",T,o(a.$t("introduction.note")),1),r("h2",z,o(a.$t("introduction.create_theme.title")),1),t(i,{keypath:"introduction.create_theme.step1",tag:"p"},{default:e(()=>[t(s,{variant:"primary-text",nuxt:"",to:"/theming",class:"!text-md !inline-block !px-1 !py-0 font-semibold leading-relaxed text-blue-500"},{default:e(()=>[l(o(a.$t("introduction.create_theme.theme")),1)]),_:1})]),_:1}),r("p",null,o(a.$t("introduction.create_theme.step2")),1),t(x,{class:"mt-8"}),r("div",I,[r("p",B,o(a.$t("introduction.next.title")),1),r("div",V,[t(s,{size:"big",nuxt:"",to:"/start",variant:"primary",class:"grow"},{default:e(()=>[l(o(a.$t("introduction.next.start")),1)]),_:1}),t(s,{size:"big",nuxt:"",to:"/contribute",class:"grow"},{default:e(()=>[l(o(a.$t("introduction.next.contribute")),1)]),_:1}),t(s,{size:"big",nuxt:"",to:"/support",class:"grow"},{default:e(()=>[l(o(a.$t("introduction.next.support")),1)]),_:1})])])])])}}});export{S as default};

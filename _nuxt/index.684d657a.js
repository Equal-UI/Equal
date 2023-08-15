import{_ as y}from"./Prism.2c8c7369.js";import{h as v,i as c,g as s,o as x,c as k,a,t as n,b as t,w as e,d as o,j as u}from"./entry.fa54d5a6.js";const w={class:"mb-4 text-2xl font-bold"},$={class:"flex w-full flex-col rounded border bg-white p-8 dark:border-neutral-700 dark:bg-neutral-800"},E=a("b",{class:"dark:text-white"},"Equal UI",-1),C={class:"my-4 text-lg font-semibold"},q={class:"mt-2"},T=a("strong",null,"Base",-1),z=a("strong",null,"Variants",-1),I={class:"mt-4"},B={class:"my-4 text-lg font-semibold"},V={class:"flex flex-col justify-center"},j={class:"my-4 text-center font-semibold"},U={class:"flex flex-col justify-around gap-4 md:flex-row"},A=v({__name:"index",setup(N){const b=c(`<it-alert
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
</it-alert>`),g=c(`<it-alert variant="primary" title="Example alert">
  This is the result component with primary variant
</it-alert>`),_=c(`<div v-show="visible" ||| :class="variant.root" |||>
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
</div>`),h=c(`{
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
},`);return(r,S)=>{const l=s("i18n-t"),i=s("it-button"),d=y,p=s("it-tag"),m=s("it-alert"),f=s("it-divider");return x(),k("div",null,[a("h1",w,n(r.$t("introduction.title")),1),a("div",$,[t(l,{keypath:"introduction.description",tag:"p",class:"dark:text-slate-300"},{default:e(()=>[E]),_:1}),a("h2",C,n(r.$t("introduction.how_works.label")),1),t(l,{keypath:"introduction.how_works.content",tag:"p"},{default:e(()=>[t(i,{variant:"primary-text",nuxt:"",to:"/components/alert",target:"_blank",rel:"noopener noreferrer",class:"!text-md !inline-block !px-1 !py-0 font-semibold leading-relaxed text-blue-500"},{default:e(()=>[o(" it-alert ")]),_:1})]),_:1}),t(d,{language:"html",class:"my-4 rounded border dark:border-neutral-700",code:u(_)},null,8,["code"]),a("p",null,n(r.$t("introduction.types.title")),1),a("ul",q,[a("li",null,[t(i,{variant:"primary-text",href:"https://github.com/Equal-UI/Equal/blob/master/src/theme/full.ts",target:"_blank",size:"big",rel:"noopener noreferrer",class:"!inline-block !px-1 !py-0 font-semibold leading-relaxed text-blue-500"},{default:e(()=>[t(l,{keypath:"introduction.types.type1.description"},{default:e(()=>[a("strong",null,n(r.$t("introduction.types.type1.name")),1)]),_:1})]),_:1})]),a("li",null,[t(i,{variant:"primary-text",href:"https://github.com/Equal-UI/Equal/blob/master/src/theme/light.ts",target:"_blank",rel:"noopener noreferrer",size:"big",class:"!inline-block !px-1 !py-0 font-semibold leading-relaxed text-blue-500"},{default:e(()=>[t(l,{keypath:"introduction.types.type2.description"},{default:e(()=>[a("strong",null,n(r.$t("introduction.types.type2.name")),1)]),_:1})]),_:1})]),a("li",null,[t(i,{variant:"primary-text",href:"https://github.com/Equal-UI/Equal/blob/master/src/theme/dark.ts",target:"_blank",size:"big",rel:"noopener noreferrer",class:"!inline-block !px-1 !py-0 font-semibold leading-relaxed text-blue-500"},{default:e(()=>[t(l,{keypath:"introduction.types.type3.description"},{default:e(()=>[a("strong",null,n(r.$t("introduction.types.type3.name")),1)]),_:1})]),_:1})])]),t(l,{keypath:"introduction.blocks_title",tag:"p",class:"mt-4"},{default:e(()=>[t(i,{variant:"primary-text",nuxt:"",to:"/components/alert",target:"_blank",rel:"noopener noreferrer",class:"!text-md !inline-block !px-1 !py-0 font-semibold leading-relaxed text-blue-500"},{default:e(()=>[o(" it-alert ")]),_:1})]),_:1}),t(d,{language:"js",class:"my-4 rounded border dark:border-neutral-700",code:u(h)},null,8,["code"]),t(l,{keypath:"introduction.variants.title",tag:"p",class:"mt-4"},{default:e(()=>[T,z,t(p,{variant:"primary"},{default:e(()=>[o("base")]),_:1})]),_:1}),t(l,{keypath:"introduction.variants.usage1.title",tag:"p",class:"mt-4"},{default:e(()=>[t(p,{variant:"primary"},{default:e(()=>[o("variant")]),_:1})]),_:1}),t(d,{language:"html",class:"my-4 rounded border dark:border-neutral-700",code:u(g)},null,8,["code"]),a("p",null,n(r.$t("introduction.variants.result")),1),t(m,{variant:"primary",title:"Example alert"},{default:e(()=>[o(" This is the result component with primary variant ")]),_:1}),t(l,{keypath:"introduction.variants.usage2.title",tag:"p",class:"mt-4"},{default:e(()=>[t(p,{variant:"primary"},{default:e(()=>[o("variants")]),_:1})]),_:1}),t(d,{language:"html",class:"my-4 rounded border dark:border-neutral-700",code:u(b)},null,8,["code"]),a("p",null,n(r.$t("introduction.variants.result")),1),t(m,{variants:{"my-variant":{title:"!text-transparent bg-gradient-to-r from-violet-700 to-blue-600 bg-clip-text"}},variant:["primary","my-variant"],title:"Example alert"},{default:e(()=>[o(" This is the result component with inline variant. Title has base classes and classes from two variants. ")]),_:1}),a("p",I,n(r.$t("introduction.note")),1),a("h2",B,n(r.$t("introduction.create_theme.title")),1),t(l,{keypath:"introduction.create_theme.step1",tag:"p"},{default:e(()=>[t(i,{variant:"primary-text",nuxt:"",to:"/theming",class:"!text-md !inline-block !px-1 !py-0 font-semibold leading-relaxed text-blue-500"},{default:e(()=>[o(n(r.$t("introduction.create_theme.theme")),1)]),_:1})]),_:1}),a("p",null,n(r.$t("introduction.create_theme.step2")),1),t(f,{class:"mt-8"}),a("div",V,[a("p",j,n(r.$t("introduction.next.title")),1),a("div",U,[t(i,{size:"big",nuxt:"",to:"/start",variant:"primary",class:"grow"},{default:e(()=>[o(n(r.$t("introduction.next.start")),1)]),_:1}),t(i,{size:"big",nuxt:"",to:"/contribute",class:"grow"},{default:e(()=>[o(n(r.$t("introduction.next.contribute")),1)]),_:1}),t(i,{size:"big",nuxt:"",to:"/support",class:"grow"},{default:e(()=>[o(n(r.$t("introduction.next.support")),1)]),_:1})])])])])}}});export{A as default};

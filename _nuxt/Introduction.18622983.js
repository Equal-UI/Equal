import f from"./Prism.44747329.js";import{a as _,r as n,b as g,e,f as t,h as a,w as o,u as l,i,o as v}from"./entry.00c5f473.js";const y=e("h1",{class:"mb-4 text-2xl font-bold"},"Introduction",-1),x={class:"flex w-full flex-col rounded border bg-white p-8 dark:border-neutral-700 dark:bg-neutral-800"},w=e("p",null,[e("b",null,"Equal UI"),t(" is a design philosophy that focuses on creating user interfaces that are accessible, intuitive, and easy to use for all users, regardless of their physical abilities or technological expertise. It involves creating user interfaces that are visually and functionally consistent across different devices and platforms, and that are easy to navigate and use for people with disabilities or special needs. Equal UI aims to create a more inclusive and equitable user experience for all users, by designing interfaces that are easy to understand and use for everyone. ")],-1),k=e("h2",{class:"my-4 text-lg font-semibold"},"How it works",-1),E={class:""},I=e("p",null," There are a single source of styles in Equal UI. It's the file with object containing classes for every component. There are 3 different types: ",-1),T={class:"mt-2"},q=e("strong",null,"Full:",-1),C=e("strong",null,"Light:",-1),U=e("strong",null,"Dark:",-1),j={class:"mt-4"},z=e("p",null,[e("strong",null,"Base"),t(" contains entries for every major part of the component and applies permanent classes to them ")],-1),B=e("strong",null,"Variants",-1),V={class:"mt-4"},H=e("p",null,"Result:",-1),N={class:"mt-4"},D=e("p",null,"Result:",-1),R=e("p",{class:"mt-4"}," Equal UI uses Tailwindcss as a classes provider. But you can use you your own classes or another utility classes provider if you want. ",-1),S=e("h2",{class:"my-4 text-lg font-semibold"},"How to create my own theme?",-1),A={class:"flex flex-col justify-center"},F=e("p",{class:"my-4 text-center font-semibold"},"What's next?",-1),G={class:"flex flex-col justify-around gap-4 md:flex-row"},K=_({__name:"Introduction",setup(L){const u=n(`<it-alert
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
</it-alert>`),p=n(`<it-alert variant="primary" title="Example alert">
  This is the result component with primary variant
</it-alert>`),m=n(`<div v-show="visible" ||| :class="variant.root" |||>
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
</div>`),h=n(`{
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
},`);return(P,W)=>{const s=i("it-button"),r=f,c=i("it-tag"),d=i("it-alert"),b=i("it-divider");return v(),g("div",null,[y,e("div",x,[w,k,e("p",E,[t(" Every component's template contains tags with variant blocks. This example shows short version of "),a(s,{variant:"primary-text",nuxt:"",to:"/components/alert",target:"_blank",rel:"noopener noreferrer",class:"!text-md !inline-block !py-0 !px-1 font-semibold leading-relaxed text-blue-500"},{default:o(()=>[t(" it-alert ")]),_:1}),t(" : ")]),a(r,{language:"html",class:"my-4 rounded border dark:border-neutral-700",code:l(m)},null,8,["code"]),I,e("ul",T,[e("li",null,[a(s,{variant:"primary-text",href:"https://github.com/Equal-UI/Equal/blob/master/src/theme/full.ts",target:"_blank",size:"big",rel:"noopener noreferrer",class:"!inline-block !py-0 !px-1 font-semibold leading-relaxed text-blue-500"},{default:o(()=>[q,t(" contains classes for light and dark themes ")]),_:1})]),e("li",null,[a(s,{variant:"primary-text",href:"https://github.com/Equal-UI/Equal/blob/master/src/theme/light.ts",target:"_blank",rel:"noopener noreferrer",size:"big",class:"!inline-block !py-0 !px-1 font-semibold leading-relaxed text-blue-500"},{default:o(()=>[C,t(" contains classes for light theme ")]),_:1})]),e("li",null,[a(s,{variant:"primary-text",href:"https://github.com/Equal-UI/Equal/blob/master/src/theme/dark.ts",target:"_blank",size:"big",rel:"noopener noreferrer",class:"!inline-block !py-0 !px-1 font-semibold leading-relaxed text-blue-500"},{default:o(()=>[U,t(" contains classes for dark theme ")]),_:1})])]),e("p",j,[t(" This is how "),a(s,{variant:"primary-text",nuxt:"",to:"/components/alert",target:"_blank",rel:"noopener noreferrer",class:"!text-md !inline-block !py-0 !px-1 font-semibold leading-relaxed text-blue-500"},{default:o(()=>[t(" it-alert ")]),_:1}),t(" block looks: ")]),a(r,{language:"js",class:"my-4 rounded border dark:border-neutral-700",code:l(h)},null,8,["code"]),z,e("p",null,[B,t(" contains entries for every variant of the component. Default variant is applied by default. Classes in chosen variant applies classes on top of the "),a(c,{variant:"primary"},{default:o(()=>[t("base")]),_:1})]),e("p",V,[t(" To apply variant to the component you need to use "),a(c,{variant:"primary"},{default:o(()=>[t("variant")]),_:1}),t(" prop, it works with every Equal UI component ")]),a(r,{language:"html",class:"my-4 rounded border dark:border-neutral-700",code:l(p)},null,8,["code"]),H,a(d,{variant:"primary",title:"Example alert"},{default:o(()=>[t(" This is the result component with primary variant ")]),_:1}),e("p",N,[t(" Also you can make inline variants via "),a(c,{variant:"primary"},{default:o(()=>[t("variants")]),_:1}),t(" prop. You can use multiple variants at the same time! ")]),a(r,{language:"html",class:"my-4 rounded border dark:border-neutral-700",code:l(u)},null,8,["code"]),D,a(d,{variants:{"my-variant":{title:"!text-transparent bg-gradient-to-r from-violet-700 to-blue-600 bg-clip-text"}},variant:["primary","my-variant"],title:"Example alert"},{default:o(()=>[t(" This is the result component with inline variant. Title has base classes and classes from two variants. ")]),_:1}),R,S,e("p",null,[t(" To create your theme please read the "),a(s,{variant:"primary-text",nuxt:"",to:"/theming",class:"!text-md !inline-block !py-0 !px-1 font-semibold leading-relaxed text-blue-500"},{default:o(()=>[t(" theming ")]),_:1})]),a(b,{class:"mt-8"}),e("div",A,[F,e("div",G,[a(s,{size:"big",nuxt:"",to:"/start",variant:"primary",class:"grow"},{default:o(()=>[t(" Getting started ")]),_:1}),a(s,{size:"big",nuxt:"",to:"/contribute",class:"grow"},{default:o(()=>[t(" How to contribute? ")]),_:1}),a(s,{size:"big",nuxt:"",to:"/support",class:"grow"},{default:o(()=>[t(" Support the project ")]),_:1})])])])])}}});export{K as default};

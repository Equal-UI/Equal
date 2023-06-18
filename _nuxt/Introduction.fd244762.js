import{_ as f}from"./Prism.8f2ef735.js";import{i as _,j as n,r as l,o as g,b as v,e,f as t,h as a,w as o,u as i}from"./entry.48add3f8.js";const x=e("h1",{class:"mb-4 text-2xl font-bold"},"Introduction",-1),y={class:"flex w-full flex-col rounded border bg-white p-8 dark:border-neutral-700 dark:bg-neutral-800"},w=e("p",{class:"dark:text-slate-300"},[e("b",{class:"dark:text-white"},"Equal UI"),t(" is a design philosophy that focuses on creating user interfaces that are accessible, intuitive, and easy to use for all users, regardless of their physical abilities or technological expertise. It involves creating user interfaces that are visually and functionally consistent across different devices and platforms, and that are easy to navigate and use for people with disabilities or special needs. Equal UI aims to create a more inclusive and equitable user experience for all users, by designing interfaces that are easy to understand and use for everyone. ")],-1),k=e("h2",{class:"my-4 text-lg font-semibold"},"How it works",-1),E=e("p",null," There are a single source of styles in Equal UI. It's the file with object containing classes for every component. There are 3 different types: ",-1),I={class:"mt-2"},T=e("strong",null,"Full:",-1),q=e("strong",null,"Light:",-1),C=e("strong",null,"Dark:",-1),U={class:"mt-4"},j=e("p",null,[e("strong",null,"Base"),t(" contains entries for every major part of the component and applies permanent classes to them ")],-1),z=e("strong",null,"Variants",-1),B={class:"mt-4"},V=e("p",null,"Result:",-1),H={class:"mt-4"},N=e("p",null,"Result:",-1),A=e("p",{class:"mt-4"}," Equal UI uses Tailwindcss as a classes provider. But you can use you your own classes or another utility classes provider if you want. ",-1),D=e("h2",{class:"my-4 text-lg font-semibold"},"How to create my own theme?",-1),R=e("p",null," Also, do not hesitate to use Customization feature under every component on it's own page ",-1),S={class:"flex flex-col justify-center"},F=e("p",{class:"my-4 text-center font-semibold"},"What's next?",-1),G={class:"flex flex-col justify-around gap-4 md:flex-row"},K=_({__name:"Introduction",setup(L){const u=n(`<it-alert
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
},`);return(P,W)=>{const s=l("it-button"),r=f,c=l("it-tag"),d=l("it-alert"),b=l("it-divider");return g(),v("div",null,[x,e("div",y,[w,k,e("p",null,[t(" Every component's template contains tags with variant blocks. This example shows short version of "),a(s,{variant:"primary-text",nuxt:"",to:"/components/alert",target:"_blank",rel:"noopener noreferrer",class:"!text-md !inline-block !py-0 !px-1 font-semibold leading-relaxed text-blue-500"},{default:o(()=>[t(" it-alert ")]),_:1}),t(" : ")]),a(r,{language:"html",class:"my-4 rounded border dark:border-neutral-700",code:i(m)},null,8,["code"]),E,e("ul",I,[e("li",null,[a(s,{variant:"primary-text",href:"https://github.com/Equal-UI/Equal/blob/master/src/theme/full.ts",target:"_blank",size:"big",rel:"noopener noreferrer",class:"!inline-block !py-0 !px-1 font-semibold leading-relaxed text-blue-500"},{default:o(()=>[T,t(" contains classes for light and dark themes ")]),_:1})]),e("li",null,[a(s,{variant:"primary-text",href:"https://github.com/Equal-UI/Equal/blob/master/src/theme/light.ts",target:"_blank",rel:"noopener noreferrer",size:"big",class:"!inline-block !py-0 !px-1 font-semibold leading-relaxed text-blue-500"},{default:o(()=>[q,t(" contains classes for light theme ")]),_:1})]),e("li",null,[a(s,{variant:"primary-text",href:"https://github.com/Equal-UI/Equal/blob/master/src/theme/dark.ts",target:"_blank",size:"big",rel:"noopener noreferrer",class:"!inline-block !py-0 !px-1 font-semibold leading-relaxed text-blue-500"},{default:o(()=>[C,t(" contains classes for dark theme ")]),_:1})])]),e("p",U,[t(" This is how "),a(s,{variant:"primary-text",nuxt:"",to:"/components/alert",target:"_blank",rel:"noopener noreferrer",class:"!text-md !inline-block !py-0 !px-1 font-semibold leading-relaxed text-blue-500"},{default:o(()=>[t(" it-alert ")]),_:1}),t(" block looks: ")]),a(r,{language:"js",class:"my-4 rounded border dark:border-neutral-700",code:i(h)},null,8,["code"]),j,e("p",null,[z,t(" contains entries for every variant of the component. Default variant is applied by default. Classes in chosen variant applies classes on top of the "),a(c,{variant:"primary"},{default:o(()=>[t("base")]),_:1})]),e("p",B,[t(" To apply variant to the component you need to use "),a(c,{variant:"primary"},{default:o(()=>[t("variant")]),_:1}),t(" prop, it works with every Equal UI component ")]),a(r,{language:"html",class:"my-4 rounded border dark:border-neutral-700",code:i(p)},null,8,["code"]),V,a(d,{variant:"primary",title:"Example alert"},{default:o(()=>[t(" This is the result component with primary variant ")]),_:1}),e("p",H,[t(" Also you can make inline variants via "),a(c,{variant:"primary"},{default:o(()=>[t("variants")]),_:1}),t(" prop. You can use multiple variants at the same time! ")]),a(r,{language:"html",class:"my-4 rounded border dark:border-neutral-700",code:i(u)},null,8,["code"]),N,a(d,{variants:{"my-variant":{title:"!text-transparent bg-gradient-to-r from-violet-700 to-blue-600 bg-clip-text"}},variant:["primary","my-variant"],title:"Example alert"},{default:o(()=>[t(" This is the result component with inline variant. Title has base classes and classes from two variants. ")]),_:1}),A,D,e("p",null,[t(" To create your theme please read the "),a(s,{variant:"primary-text",nuxt:"",to:"/theming",class:"!text-md !inline-block !py-0 !px-1 font-semibold leading-relaxed text-blue-500"},{default:o(()=>[t(" theming ")]),_:1})]),R,a(b,{class:"mt-8"}),e("div",S,[F,e("div",G,[a(s,{size:"big",nuxt:"",to:"/start",variant:"primary",class:"grow"},{default:o(()=>[t(" Getting started ")]),_:1}),a(s,{size:"big",nuxt:"",to:"/contribute",class:"grow"},{default:o(()=>[t(" How to contribute? ")]),_:1}),a(s,{size:"big",nuxt:"",to:"/support",class:"grow"},{default:o(()=>[t(" Support the project ")]),_:1})])])])])}}});export{K as default};
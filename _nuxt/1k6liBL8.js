import{_ as c}from"./DLMznalT.js";import{n as f,p as i,o as b,c as _,a as e,t as n,b as t,d as l,w as r}from"./BZMuJF5d.js";const g={class:"mb-4 text-2xl font-bold"},h={class:"flex w-full flex-col rounded border bg-white p-8 dark:border-neutral-700 dark:bg-neutral-800"},k={class:"mb-5 text-base font-semibold"},x={class:"my-4 text-base font-semibold"},v={class:"my-4 text-base font-semibold"},y={class:"my-5 text-base font-semibold"},w={class:"mb-2 mt-5 text-base font-semibold"},q={class:"mb-2"},C=`# NPM
npm install equal-vue

# Yarn
yarn add equal-vue`,$='<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap" rel="stylesheet">',N=f({__name:"index",setup(j){return(o,s)=>{const a=c,d=i("it-button"),p=i("it-collapse-item"),m=i("it-collapse"),u=i("i18n-t");return b(),_("div",null,[e("h1",g,n(o.$t("start.title")),1),e("div",h,[e("h2",k,n(o.$t("start.step1.title")),1),t(a,{language:"bash",class:"rounded border dark:border-neutral-700",code:C}),e("h2",x,n(o.$t("start.step2.title")),1),e("p",null,[l(n(o.$t("start.step2.description"))+" ",1),t(d,{variant:"primary-text",href:"https://tailwindcss.com/docs/installation",target:"_blank",rel:"noopener noreferrer",class:"!inline-block !px-1 !py-0 font-semibold leading-relaxed text-blue-500"},{default:r(()=>s[0]||(s[0]=[l(" https://tailwindcss.com/docs/installation ")])),_:1})]),e("p",v,[l(n(o.$t("start.step3.title"))+" ",1),s[1]||(s[1]=e("code",null,"tailwind.config.js",-1))]),t(a,{language:"js",class:"rounded border dark:border-neutral-700",code:`module.exports = {
  content: [
    './node_modules/equal-vue/dist/theme/*.{js,ts,json}', // full / dark / light
  ],
  darkMode: 'class', // add 'dark' to the body tag to enable dark mode
}`}),e("h2",y,n(o.$t("start.step4.title")),1),t(a,{language:"js",class:"rounded border dark:border-neutral-700",code:`import { createApp } from 'vue'
import Equal from 'equal-vue'
import Config from 'equal-vue/dist/theme/full' // or light / dark theme

createApp.use(Equal, Config)`}),t(m,{class:"mt-4"},{default:r(()=>[t(p,{title:o.$t("start.step4_1.title")},{default:r(()=>[t(a,{language:"js",class:"rounded border dark:border-neutral-700",code:`import { createApp } from 'vue'
import { Button, Alert, Switch } from 'equal-vue'
import Config from 'equal-vue/dist/theme/full' // or light / dark theme

createApp.use(Button, Config).use(Switch, Config)`})]),_:1},8,["title"])]),_:1}),e("h2",w,n(o.$t("start.step5.title")),1),e("div",q,[t(u,{keypath:"start.step5.description",tag:"p"},{default:r(()=>[t(d,{variant:"primary-text",href:"https://fonts.google.com/specimen/Inter",target:"_blank",rel:"noopener noreferrer",class:"!inline-block !px-1 !py-0 font-semibold leading-relaxed text-blue-500"},{default:r(()=>s[2]||(s[2]=[l(" Inter ")])),_:1}),t(d,{variant:"primary-text",href:"https://twitter.com/rsms",target:"_blank",rel:"noopener noreferrer",class:"!inline-block !px-1 !py-0 font-semibold leading-relaxed text-blue-500"},{default:r(()=>s[3]||(s[3]=[l(" @rsms ")])),_:1})]),_:1})]),t(a,{language:"html",class:"rounded border dark:border-neutral-700",code:$})])])}}});export{N as default};

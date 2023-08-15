import{_ as m}from"./Prism.2c8c7369.js";import{h as u,g as r,o as _,c as f,a as t,t as s,b as e,d as l,w as n}from"./entry.fa54d5a6.js";const b={class:"mb-4 text-2xl font-bold"},h={class:"flex w-full flex-col rounded border bg-white p-8 dark:border-neutral-700 dark:bg-neutral-800"},g={class:"mb-5 text-base font-semibold"},k={class:"my-4 text-base font-semibold"},x={class:"my-4 text-base font-semibold"},v=t("code",null,"tailwind.config.js",-1),y={class:"my-5 text-base font-semibold"},w={class:"mb-2 mt-5 text-base font-semibold"},q={class:"mb-2"},C=`# NPM
npm install equal-vue

# Yarn
yarn add equal-vue`,$='<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap" rel="stylesheet">',E=u({__name:"index",setup(j){return(o,A)=>{const a=m,i=r("it-button"),d=r("it-collapse-item"),c=r("it-collapse"),p=r("i18n-t");return _(),f("div",null,[t("h1",b,s(o.$t("start.title")),1),t("div",h,[t("h2",g,s(o.$t("start.step1.title")),1),e(a,{language:"bash",class:"rounded border dark:border-neutral-700",code:C}),t("h2",k,s(o.$t("start.step2.title")),1),t("p",null,[l(s(o.$t("start.step2.description"))+" ",1),e(i,{variant:"primary-text",href:"https://tailwindcss.com/docs/installation",target:"_blank",rel:"noopener noreferrer",class:"!inline-block !px-1 !py-0 font-semibold leading-relaxed text-blue-500"},{default:n(()=>[l(" https://tailwindcss.com/docs/installation ")]),_:1})]),t("p",x,[l(s(o.$t("start.step3.title"))+" ",1),v]),e(a,{language:"js",class:"rounded border dark:border-neutral-700",code:`module.exports = {
  content: [
    './node_modules/equal-vue/dist/theme/*.{js,ts,json}', // full / dark / light
  ],
  darkMode: 'class', // add 'dark' to the body tag to enable dark mode
}`}),t("h2",y,s(o.$t("start.step4.title")),1),e(a,{language:"js",class:"rounded border dark:border-neutral-700",code:`import { createApp } from 'vue'
import Equal from 'equal-vue'
import Config from 'equal-vue/dist/theme/full' // or light / dark theme

createApp.use(Equal, Config)`}),e(c,{class:"mt-4"},{default:n(()=>[e(d,{title:o.$t("start.step4_1.title")},{default:n(()=>[e(a,{language:"js",class:"rounded border dark:border-neutral-700",code:`import { createApp } from 'vue'
import { Button, Alert, Switch } from 'equal-vue'
import Config from 'equal-vue/dist/theme/full' // or light / dark theme

createApp.use(Button, Config).use(Switch, Config)`})]),_:1},8,["title"])]),_:1}),t("h2",w,s(o.$t("start.step5.title")),1),t("div",q,[e(p,{keypath:"start.step5.description",tag:"p"},{default:n(()=>[e(i,{variant:"primary-text",href:"https://fonts.google.com/specimen/Inter",target:"_blank",rel:"noopener noreferrer",class:"!inline-block !px-1 !py-0 font-semibold leading-relaxed text-blue-500"},{default:n(()=>[l(" Inter ")]),_:1}),e(i,{variant:"primary-text",href:"https://twitter.com/rsms",target:"_blank",rel:"noopener noreferrer",class:"!inline-block !px-1 !py-0 font-semibold leading-relaxed text-blue-500"},{default:n(()=>[l(" @rsms ")]),_:1})]),_:1})]),e(a,{language:"html",class:"rounded border dark:border-neutral-700",code:$})])])}}});export{E as default};

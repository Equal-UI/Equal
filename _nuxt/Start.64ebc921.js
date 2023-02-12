import m from"./Prism.d79e9b0b.js";import{i as u,b as p,e as t,h as e,f as o,w as a,r as s,o as _}from"./entry.cef8c776.js";const f=t("h1",{class:"mb-4 text-2xl font-bold"},"Getting started",-1),b={class:"flex w-full flex-col rounded border bg-white p-8 dark:border-neutral-700 dark:bg-neutral-800"},h=t("h2",{class:"mb-5 text-base font-semibold"},"1. Install with NPM or Yarn",-1),g=t("h2",{class:"my-4 text-base font-semibold"}," 2. Install Tailwind version 3.2+ ",-1),x=t("p",{class:"my-4 text-base font-semibold"},[o(" 3. Add Equal UI theme file to the "),t("code",null,"tailwind.config.js")],-1),k=t("h2",{class:"my-5 text-base font-semibold"},"4. Use all components",-1),v=t("h2",{class:"mt-5 mb-2 text-base font-semibold"},"5. Add Inter font",-1),y={class:"mb-2"},j=u({__name:"Start",setup(w){const r=`# NPM
npm install equal-vue

# Yarn
yarn add equal-vue`,d='<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap" rel="stylesheet">';return(q,C)=>{const n=m,l=s("it-button"),i=s("it-collapse-item"),c=s("it-collapse");return _(),p("div",null,[f,t("div",b,[h,e(n,{language:"bash",class:"rounded border dark:border-neutral-700",code:r}),g,t("p",null,[o(" To install Tailwind follow his official documentation: "),e(l,{variant:"primary-text",href:"https://tailwindcss.com/docs/installation",target:"_blank",rel:"noopener noreferrer",class:"!inline-block !py-0 !px-1 font-semibold leading-relaxed text-blue-500"},{default:a(()=>[o(" https://tailwindcss.com/docs/installation ")]),_:1})]),x,e(n,{language:"js",class:"rounded border dark:border-neutral-700",code:`module.exports = {
  content: [
    './node_modules/equal-vue/dist/theme/*.{js,ts,json}', // full / dark / light
  ],
  darkMode: 'class', // add 'dark' to the body tag to enable dark mode
}`}),k,e(n,{language:"js",class:"rounded border dark:border-neutral-700",code:`import { createApp } from 'vue'
import Equal from 'equal-vue'
import Config from 'equal-vue/dist/theme/full' // or light / dark theme 

createApp.use(Equal, Config)`}),e(c,{class:"mt-4"},{default:a(()=>[e(i,{title:"4.1. Or individual components"},{default:a(()=>[e(n,{language:"js",class:"rounded border dark:border-neutral-700",code:`import { createApp } from 'vue'
import { Button, Alert, Switch } from 'equal-vue'
import Config from 'equal-vue/dist/theme/full' // or light / dark theme 

createApp.use(Button, Config).use(Switch, Config)`})]),_:1})]),_:1}),v,t("p",y,[o(" Equal UI uses "),e(l,{variant:"primary-text",href:"https://fonts.google.com/specimen/Inter",target:"_blank",rel:"noopener noreferrer",class:"!inline-block !py-0 !px-1 font-semibold leading-relaxed text-blue-500"},{default:a(()=>[o(" Inter ")]),_:1}),o(" font by "),e(l,{variant:"primary-text",href:"https://twitter.com/rsms",target:"_blank",rel:"noopener noreferrer",class:"!inline-block !py-0 !px-1 font-semibold leading-relaxed text-blue-500"},{default:a(()=>[o(" @rsms ")]),_:1}),o(" . The simplest way to add it via CDN: ")]),e(n,{language:"html",class:"rounded border dark:border-neutral-700",code:d})])])}}});export{j as default};

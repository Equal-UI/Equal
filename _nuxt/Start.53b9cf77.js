import{_ as i}from"./Prism.8f2ef735.js";import{i as c,r as s,o as m,b as u,e as t,h as e,f as o,w as a}from"./entry.48add3f8.js";const p=t("h1",{class:"mb-4 text-2xl font-bold"},"Getting started",-1),_={class:"flex w-full flex-col rounded border bg-white p-8 dark:border-neutral-700 dark:bg-neutral-800"},f=t("h2",{class:"mb-5 text-base font-semibold"},"1. Install with NPM or Yarn",-1),b=t("h2",{class:"my-4 text-base font-semibold"}," 2. Install Tailwind version 3.2+ ",-1),h=t("p",{class:"my-4 text-base font-semibold"},[o(" 3. Add Equal UI theme file to the "),t("code",null,"tailwind.config.js")],-1),g=t("h2",{class:"my-5 text-base font-semibold"},"4. Use all components",-1),x=t("h2",{class:"mt-5 mb-2 text-base font-semibold"},"5. Add Inter font",-1),k={class:"mb-2"},v=`# NPM
npm install equal-vue

# Yarn
yarn add equal-vue`,y='<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap" rel="stylesheet">',j=c({__name:"Start",setup(w){return(q,C)=>{const n=i,l=s("it-button"),r=s("it-collapse-item"),d=s("it-collapse");return m(),u("div",null,[p,t("div",_,[f,e(n,{language:"bash",class:"rounded border dark:border-neutral-700",code:v}),b,t("p",null,[o(" To install Tailwind follow his official documentation: "),e(l,{variant:"primary-text",href:"https://tailwindcss.com/docs/installation",target:"_blank",rel:"noopener noreferrer",class:"!inline-block !py-0 !px-1 font-semibold leading-relaxed text-blue-500"},{default:a(()=>[o(" https://tailwindcss.com/docs/installation ")]),_:1})]),h,e(n,{language:"js",class:"rounded border dark:border-neutral-700",code:`module.exports = {
  content: [
    './node_modules/equal-vue/dist/theme/*.{js,ts,json}', // full / dark / light
  ],
  darkMode: 'class', // add 'dark' to the body tag to enable dark mode
}`}),g,e(n,{language:"js",class:"rounded border dark:border-neutral-700",code:`import { createApp } from 'vue'
import Equal from 'equal-vue'
import Config from 'equal-vue/dist/theme/full' // or light / dark theme 

createApp.use(Equal, Config)`}),e(d,{class:"mt-4"},{default:a(()=>[e(r,{title:"4.1. Or individual components"},{default:a(()=>[e(n,{language:"js",class:"rounded border dark:border-neutral-700",code:`import { createApp } from 'vue'
import { Button, Alert, Switch } from 'equal-vue'
import Config from 'equal-vue/dist/theme/full' // or light / dark theme 

createApp.use(Button, Config).use(Switch, Config)`})]),_:1})]),_:1}),x,t("p",k,[o(" Equal UI uses "),e(l,{variant:"primary-text",href:"https://fonts.google.com/specimen/Inter",target:"_blank",rel:"noopener noreferrer",class:"!inline-block !py-0 !px-1 font-semibold leading-relaxed text-blue-500"},{default:a(()=>[o(" Inter ")]),_:1}),o(" font by "),e(l,{variant:"primary-text",href:"https://twitter.com/rsms",target:"_blank",rel:"noopener noreferrer",class:"!inline-block !py-0 !px-1 font-semibold leading-relaxed text-blue-500"},{default:a(()=>[o(" @rsms ")]),_:1}),o(" . The simplest way to add it via CDN: ")]),e(n,{language:"html",class:"rounded border dark:border-neutral-700",code:y})])])}}});export{j as default};

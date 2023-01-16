import l from"./Prism.99c75add.js";import{i as r,b as d,e,f as o,h as s,o as c}from"./entry.9b1a93a6.js";const i=e("h1",{class:"mb-4 text-2xl font-bold"},"Getting started",-1),u={class:"flex w-full flex-col rounded border bg-white p-8 dark:border-neutral-700 dark:bg-neutral-800"},m=e("h2",{class:"mb-5"},"Install with NPM or Yarn",-1),h=e("h2",{class:"my-4"},"Install Tailwind version >3.1",-1),p=e("p",null,[s(" Add Equal UI theme file to the "),e("code",null,"tailwind.config.js")],-1),_=e("h2",{class:"my-5"},"Use all components",-1),f=e("h2",{class:"my-5"},"Or individual components",-1),g=e("h2",{class:"my-5"},"Add Inter font",-1),v=e("p",{class:"mb-2"},[s(" Equal UI uses "),e("a",{href:"https://fonts.google.com/specimen/Inter",target:"_blank",rel:"noopener noreferrer"}," Inter "),s(" font by "),e("a",{href:"https://twitter.com/rsms",target:"_blank",rel:"noopener noreferrer"}," @rsms "),s(" . The simplest way to add it via CDN: ")],-1),x=r({__name:"Start",setup(b){const n=`# NPM
npm install equal-vue

# Yarn
yarn add equal-vue`,a='<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap" rel="stylesheet">';return(k,y)=>{const t=l;return c(),d("div",null,[i,e("div",u,[m,o(t,{language:"bash",class:"rounded",code:n}),h,p,o(t,{language:"js",class:"rounded",code:`module.exports = {
  content: [
    './node_modules/equal-vue/dist/theme/*.{js,ts,json}', // full / dark / light
  ],
  darkMode: 'class', // add 'dark' to the body tag to enable dark mode
}`}),_,o(t,{language:"js",class:"rounded",code:`import { createApp } from 'vue'
import Equal from 'equal-vue'
import Config from 'equal-vue/dist/theme/full' // or light / dark theme 

createApp.use(Equal, Config)`}),f,o(t,{language:"js",class:"rounded",code:`import { createApp } from 'vue'
import { Button, Alert, Switch } from 'equal-vue'
import Config from 'equal-vue/dist/theme/full' // or light / dark theme 

createApp.use(Button, Config).use(Switch, Config)`}),g,v,o(t,{language:"html",class:"rounded",code:a})])])}}});export{x as default};

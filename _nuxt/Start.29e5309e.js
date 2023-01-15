import r from"./Prism.b7ac80f1.js";import{i as l,b as c,e,f as o,h as s,o as i}from"./entry.3ce47f5d.js";const d=e("h1",{class:"mb-4 text-2xl font-bold"},"Getting started",-1),u={class:"flex w-full flex-col rounded border bg-white p-8 dark:border-neutral-700 dark:bg-neutral-800"},m=e("h2",{class:"mb-5"},"Install with NPM or Yarn",-1),p=e("h2",{class:"my-5"},"Use all components",-1),_=e("h2",{class:"my-5"},"Or individual components",-1),h=e("h2",{class:"my-5"},"Add Inter font",-1),f=e("p",{class:"mb-2"},[s(" Equal UI uses "),e("a",{href:"https://fonts.google.com/specimen/Inter",target:"_blank",rel:"noopener noreferrer"}," Inter "),s(" font by "),e("a",{href:"https://twitter.com/rsms",target:"_blank",rel:"noopener noreferrer"}," @rsms "),s(" . The simplest way to add it via CDN: ")],-1),q=l({__name:"Start",setup(g){const n=`# NPM
npm install equal-vue

# Yarn
yarn add equal-vue`,a='<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap" rel="stylesheet">';return(v,b)=>{const t=r;return i(),c("div",null,[d,e("div",u,[m,o(t,{language:"bash",class:"rounded",code:n}),p,o(t,{language:"js",class:"rounded",code:`import { createApp } from 'vue'
import Equal from 'equal-vue'
import Config from 'equal-vue/dist/full' // or light / dark theme 

createApp.use(Equal, Config)`}),_,o(t,{language:"js",class:"rounded",code:`import { createApp } from 'vue'
import { Button, Alert, Switch } from 'equal-vue'
import Config from 'equal-vue/dist/full' // or light / dark theme 

createApp.use(Button, Config).use(Switch, Config)`}),h,f,o(t,{language:"html",class:"rounded",code:a})])])}}});export{q as default};

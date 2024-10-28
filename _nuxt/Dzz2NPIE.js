import{_ as k}from"./zaHzddb4.js";import{_ as w}from"./DMvfu-B7.js";import{_ as V}from"./9vMGL7Wn.js";import{n as v,_ as h,p as u,o as r,c as i,a as n,b as t,w as a,J as d}from"./BZMuJF5d.js";import"./DLMznalT.js";const c=v({data:()=>({toggleValue:"Light",toggleRound:!1,toggleIconsValue:"light",exampleCode:`<it-toggle
  v-model="toggleValue"
  :options="['Light', 'Dark', 'Hollow', 'Orange']"
/>
<it-toggle
 ||| round |||
  v-model="toggleValue"
  :options="['Light', 'Dark', 'Hollow', 'Orange']"
/>`,iconsCode:`<it-toggle
  v-model="toggleIconsValue"
  icons
  round
  ||| :options="['light', 'dark']" |||
>
  <template ||| #light |||>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-full transition-all duration-100 ease-out"
      :class="{
        'fill-yellow-600/40 stroke-yellow-500':
          toggleIconsValue === 'light',
      }"
      stroke="currentColor"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="3"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  </template>
  <template ||| #dark |||>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-full transition-all duration-500 ease-out"
      :class="{
        'fill-indigo-400/30 stroke-blue-800':
          toggleIconsValue === 'dark',
        'fill-gray-600/40': toggleIconsValue !== 'dark',
      }"
      stroke="currentColor"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  </template>
</it-toggle>`,dataSheet:[{property:"options",type:["Array"],default:"[]",values:[],description:"Array of option strings or material icon names"},{property:"round",type:["Boolean"],default:"false",values:[],description:"Makes toggle round"},{property:"icons",type:["Boolean"],default:"false",values:[],description:"Use Material Icons as options"},{property:"value (v-model)",type:["String"],default:"-",values:[],description:"Value of the toggle"}]})}),y={class:"w-full"};function M(o,l,I,C,b,B){const s=u("it-toggle"),p=u("it-checkbox"),m=k,g=w,f=V;return r(),i("div",null,[l[7]||(l[7]=n("h1",{class:"mb-4 text-2xl font-bold"},"Toggle",-1)),t(m,{name:"ItToggle"},{props:a(()=>[t(p,{variant:"primary",modelValue:o.toggleRound,"onUpdate:modelValue":l[1]||(l[1]=e=>o.toggleRound=e),label:"Round"},null,8,["modelValue"])]),default:a(()=>[t(s,{modelValue:o.toggleValue,"onUpdate:modelValue":l[0]||(l[0]=e=>o.toggleValue=e),class:"mx-4 w-full",round:o.toggleRound,options:["Light","Dark","Hollow","Orange"]},null,8,["modelValue","round"])]),_:1}),t(g,{template:o.exampleCode,title:"Types"},{default:a(()=>[n("div",y,[t(s,{modelValue:o.toggleValue,"onUpdate:modelValue":l[2]||(l[2]=e=>o.toggleValue=e),class:"mb-4",options:["Light","Dark","Hollow","Orange"]},null,8,["modelValue"]),t(s,{modelValue:o.toggleValue,"onUpdate:modelValue":l[3]||(l[3]=e=>o.toggleValue=e),round:"",options:["Light","Dark","Hollow","Orange"]},null,8,["modelValue"])])]),_:1},8,["template"]),t(g,{template:o.iconsCode,title:"Icons"},{default:a(()=>[n("div",null,[t(s,{modelValue:o.toggleIconsValue,"onUpdate:modelValue":l[4]||(l[4]=e=>o.toggleIconsValue=e),icons:"",round:"",options:["light","dark"]},{light:a(()=>[(r(),i("svg",{xmlns:"http://www.w3.org/2000/svg",class:d(["h-full transition-all duration-100 ease-out",{"fill-yellow-600/40 stroke-yellow-500":o.toggleIconsValue==="light"}]),stroke:"currentColor",fill:"none",viewBox:"0 0 24 24","stroke-width":"3"},l[5]||(l[5]=[n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1)]),2))]),dark:a(()=>[(r(),i("svg",{xmlns:"http://www.w3.org/2000/svg",class:d(["h-full transition-all duration-500 ease-out",{"fill-indigo-400/30 stroke-blue-800":o.toggleIconsValue==="dark","fill-gray-600/40":o.toggleIconsValue!=="dark"}]),stroke:"currentColor",fill:"none",viewBox:"0 0 24 24","stroke-width":"2"},l[6]||(l[6]=[n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1)]),2))]),_:1},8,["modelValue"])])]),_:1},8,["template"]),t(f,{"data-sheet":o.dataSheet},null,8,["data-sheet"])])}const $=h(c,[["render",M]]);export{$ as default};

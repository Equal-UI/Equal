import{_ as c}from"./Demobox.vue.628e2fbf.js";import{_ as h}from"./Box.vue.5b96ac4d.js";import{_ as k}from"./PropsTable.50d7f0dc.js";import{i as w,a as V,r as d,o as r,b as i,h as t,w as a,e as n,H as u}from"./entry.48add3f8.js";import"./Prism.8f2ef735.js";const v=w({data:()=>({toggleValue:"Light",toggleRound:!1,toggleIconsValue:"light",exampleCode:`<it-toggle
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
</it-toggle>`,dataSheet:[{property:"options",type:["Array"],default:"[]",values:[],description:"Array of option strings or material icon names"},{property:"round",type:["Boolean"],default:"false",values:[],description:"Makes toggle round"},{property:"icons",type:["Boolean"],default:"false",values:[],description:"Use Material Icons as options"},{property:"value (v-model)",type:["String"],default:"-",values:[],description:"Value of the toggle"}]})}),_=n("h1",{class:"mb-4 text-2xl font-bold"},"Toggle",-1),y={class:"w-full"},M=n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1),I=[M],C=n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1),b=[C];function B(o,e,H,D,L,U){const s=d("it-toggle"),p=d("it-checkbox"),m=c,g=h,f=k;return r(),i("div",null,[_,t(m,{name:"ItToggle"},{props:a(()=>[t(p,{variant:"primary",modelValue:o.toggleRound,"onUpdate:modelValue":e[1]||(e[1]=l=>o.toggleRound=l),label:"Round"},null,8,["modelValue"])]),default:a(()=>[t(s,{modelValue:o.toggleValue,"onUpdate:modelValue":e[0]||(e[0]=l=>o.toggleValue=l),class:"mx-4 w-full",round:o.toggleRound,options:["Light","Dark","Hollow","Orange"]},null,8,["modelValue","round"])]),_:1}),t(g,{template:o.exampleCode,title:"Types"},{default:a(()=>[n("div",y,[t(s,{modelValue:o.toggleValue,"onUpdate:modelValue":e[2]||(e[2]=l=>o.toggleValue=l),class:"mb-4",options:["Light","Dark","Hollow","Orange"]},null,8,["modelValue"]),t(s,{modelValue:o.toggleValue,"onUpdate:modelValue":e[3]||(e[3]=l=>o.toggleValue=l),round:"",options:["Light","Dark","Hollow","Orange"]},null,8,["modelValue"])])]),_:1},8,["template"]),t(g,{template:o.iconsCode,title:"Icons"},{default:a(()=>[n("div",null,[t(s,{modelValue:o.toggleIconsValue,"onUpdate:modelValue":e[4]||(e[4]=l=>o.toggleIconsValue=l),icons:"",round:"",options:["light","dark"]},{light:a(()=>[(r(),i("svg",{xmlns:"http://www.w3.org/2000/svg",class:u(["h-full transition-all duration-100 ease-out",{"fill-yellow-600/40 stroke-yellow-500":o.toggleIconsValue==="light"}]),stroke:"currentColor",fill:"none",viewBox:"0 0 24 24","stroke-width":"3"},I,2))]),dark:a(()=>[(r(),i("svg",{xmlns:"http://www.w3.org/2000/svg",class:u(["h-full transition-all duration-500 ease-out",{"fill-indigo-400/30 stroke-blue-800":o.toggleIconsValue==="dark","fill-gray-600/40":o.toggleIconsValue!=="dark"}]),stroke:"currentColor",fill:"none",viewBox:"0 0 24 24","stroke-width":"2"},b,2))]),_:1},8,["modelValue"])])]),_:1},8,["template"]),t(f,{"data-sheet":o.dataSheet},null,8,["data-sheet"])])}const j=V(v,[["render",B]]);export{j as default};
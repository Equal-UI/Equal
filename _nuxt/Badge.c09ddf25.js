import{_ as h}from"./Demobox.vue.54326496.js";import{_ as w}from"./Box.vue.040c1fa7.js";import _ from"./PropsTable.76b8d9d0.js";import{v as y}from"./dataSheetVariantProps.e5a5e58f.js";import{i as V,a as S,b as k,f as t,w as e,e as u,o as C,h as d,r as s}from"./entry.9b1a93a6.js";import"./Prism.99c75add.js";const B=V({data:()=>({badgeValue:97,badgePoint:!1,badgeSquare:!1,badgeShow:!0,badgeMax:99,cstmShow:!1,badgeType:"danger",badgeTypes:["primary","success","danger","warning"],badgePosition:"top-right",badgePositions:["top-right","top-left","bottom-right","bottom-left"],typesCode:`<it-badge value="12" ||| variant="primary" |||>
  <it-button>Primary</it-button>
</it-badge>
<it-badge value="new" ||| variant="danger" |||>
  <it-button>Default</it-button>
</it-badge>
<it-badge value="12" ||| variant="success" |||>
  <it-button>Success</it-button>
</it-badge>
<it-badge value="12" ||| variant="warning" |||>
  <it-button>Warning</it-button>
</it-badge>`,pointCode:`<it-badge variant="primary" ||| point |||>
  <it-button>Primary</it-button>
</it-badge>
<it-badge variant="danger" ||| point |||>
  <it-button icon="mail_outline"></it-button>
</it-badge>
<it-badge variant="success" ||| point |||>
  <it-button icon="thumb_up"></it-button>
</it-badge>
<it-badge variant="warning" ||| point |||>
  <it-button icon="error_outline"></it-button>
</it-badge>`,maxvalCode:`<it-badge :value="110" ||| :max-value="99" |||>
  <it-tag variant="danger">Maximum</it-tag>
</it-badge>

<it-tag variant="success" filled class="ml-2">
  <it-badge variant="success" point class="mr-1" />
  In range
</it-tag>`,squareCode:`<it-badge variant="primary" :value="12" ||| square |||>
<it-button>Square</it-button>
  </it-badge>
<it-badge variant="success" point ||| square |||>
  <it-button icon="thumb_up"></it-button>
</it-badge>`,positionsCode:`<it-badge point>
  <it-button>Top-right</it-button>
</it-badge>
<it-badge point ||| position="bottom-right" |||>
  <it-button>Bottom-right</it-button>
</it-badge>
<it-badge point ||| position="bottom-left" |||>
  <it-button>Bottom-left</it-button>
</it-badge>
<it-badge point ||| position="top-left" |||>
  <it-button>Top-left</it-button>
</it-badge>`,combineCode:`<it-badge value="Typing..." variant="danger">
  <it-avatar square size="80px" src="https://randomuser.me/api/portraits/women/17.jpg" />
</it-badge>`,standaloneCode:`<it-badge :value="101" />
<it-badge :value="101" square />`,customCode:`<it-badge
  value="\u{1F407}"
  variant="violet"
  :variants="{ violet: { body: 'bg-violet-600' } }"
>
  <it-button>\u{1FA84}\u{1F3A9}</it-button>
</it-badge>`,dataSheet:y.concat([{property:"value",type:["Number","String"],default:"",values:[],description:"Value of the badge"},{property:"max-value",type:["Number"],default:"",values:[],description:"Max value of the badge"},{property:"position",type:["String"],default:"top-right",values:["top-right","top-left","bottom-right","bottom-left"],description:"Set position of the badge"},{property:"show",type:["Boolean"],default:"true",values:[],description:"Show badge"},{property:"point",type:["Boolean"],default:"false",values:[],description:"Show badge as point"},{property:"square",type:["Boolean"],default:"false",values:[],description:"Make badge squared"}]),slotSheet:[{name:"default",description:"Target slot"},{name:"content",description:"Badge body"}]})}),q=u("h1",{class:"mb-4 text-2xl font-bold"},"Badge",-1),P=u("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[u("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"})],-1),H=u("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[u("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"})],-1),M=u("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[u("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"})],-1),T=u("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[u("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"})],-1),A=u("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[u("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"})],-1);function F(a,n,j,U,$,N){const i=s("it-button"),o=s("it-badge"),b=s("it-select"),p=s("it-checkbox"),g=s("it-number-input"),v=h,r=w,f=s("it-avatar"),m=s("it-tag"),c=_;return C(),k("div",null,[q,t(v,{name:"it-badge"},{props:e(()=>[t(b,{modelValue:a.badgeType,"onUpdate:modelValue":n[0]||(n[0]=l=>a.badgeType=l),placeholder:"Select type","label-top":"Badge type",options:a.badgeTypes},null,8,["modelValue","options"]),t(b,{modelValue:a.badgePosition,"onUpdate:modelValue":n[1]||(n[1]=l=>a.badgePosition=l),placeholder:"Select position","label-top":"Badge position",options:a.badgePositions},null,8,["modelValue","options"]),t(p,{variant:"primary",modelValue:a.badgePoint,"onUpdate:modelValue":n[2]||(n[2]=l=>a.badgePoint=l),label:"Point"},null,8,["modelValue"]),t(p,{variant:"primary",modelValue:a.badgeSquare,"onUpdate:modelValue":n[3]||(n[3]=l=>a.badgeSquare=l),label:"Square"},null,8,["modelValue"]),t(p,{variant:"primary",modelValue:a.badgeShow,"onUpdate:modelValue":n[4]||(n[4]=l=>a.badgeShow=l),label:"Show"},null,8,["modelValue"]),t(g,{modelValue:a.badgeMax,"onUpdate:modelValue":n[5]||(n[5]=l=>a.badgeMax=l),"label-top":"Max value"},null,8,["modelValue"]),t(g,{modelValue:a.badgeValue,"onUpdate:modelValue":n[6]||(n[6]=l=>a.badgeValue=l),"label-top":"Badge value"},null,8,["modelValue"])]),default:e(()=>[t(o,{value:a.badgeValue,show:a.badgeShow,variant:a.badgeType,"max-value":a.badgeMax,point:a.badgePoint,square:a.badgeSquare,position:a.badgePosition},{default:e(()=>[t(i,null,{default:e(()=>[d("Badged")]),_:1})]),_:1},8,["value","show","variant","max-value","point","square","position"])]),_:1}),t(r,{code:a.typesCode,title:"Type"},{default:e(()=>[t(o,{value:"12",variant:"primary"},{default:e(()=>[t(i,null,{default:e(()=>[d("Primary")]),_:1})]),_:1}),t(o,{value:"new",variant:"danger"},{default:e(()=>[t(i,null,{default:e(()=>[d("Default")]),_:1})]),_:1}),t(o,{value:"12",variant:"success"},{default:e(()=>[t(i,null,{default:e(()=>[d("Success")]),_:1})]),_:1}),t(o,{value:"12",variant:"warning"},{default:e(()=>[t(i,null,{default:e(()=>[d("Warning")]),_:1})]),_:1})]),_:1},8,["code"]),t(r,{code:a.combineCode,title:"With another component"},{default:e(()=>[t(o,{value:"Typing...",variant:"danger"},{default:e(()=>[t(f,{square:"",size:"80px",src:"https://randomuser.me/api/portraits/women/17.jpg"})]),_:1})]),_:1},8,["code"]),t(r,{code:a.pointCode,title:"Point"},{default:e(()=>[t(o,{variant:"primary",point:""},{default:e(()=>[t(i,null,{icon:e(()=>[P]),_:1})]),_:1}),t(o,{variant:"danger",point:""},{default:e(()=>[t(i,null,{icon:e(()=>[H]),_:1})]),_:1}),t(o,{variant:"success",point:""},{default:e(()=>[t(i,null,{icon:e(()=>[M]),_:1})]),_:1}),t(o,{variant:"warning",point:""},{default:e(()=>[t(i,null,{icon:e(()=>[T]),_:1})]),_:1})]),_:1},8,["code"]),t(r,{code:a.squareCode,title:"Square"},{default:e(()=>[t(o,{variant:"primary",value:12,square:""},{default:e(()=>[t(i,null,{default:e(()=>[d("Square")]),_:1})]),_:1}),t(o,{variant:"primary",point:"",square:""},{default:e(()=>[t(i,null,{icon:e(()=>[A]),_:1})]),_:1})]),_:1},8,["code"]),t(r,{code:a.positionsCode,title:"Positions"},{default:e(()=>[t(o,{point:"",value:12},{default:e(()=>[t(i,null,{default:e(()=>[d("Top-right")]),_:1})]),_:1}),t(o,{point:"",position:"bottom-right",value:12},{default:e(()=>[t(i,null,{default:e(()=>[d("Bottom-right")]),_:1})]),_:1}),t(o,{point:"",position:"bottom-left",value:12},{default:e(()=>[t(i,null,{default:e(()=>[d("Bottom-left")]),_:1})]),_:1}),t(o,{point:"",position:"top-left",value:12},{default:e(()=>[t(i,null,{default:e(()=>[d("Top-left")]),_:1})]),_:1})]),_:1},8,["code"]),t(r,{code:a.maxvalCode,title:"Max value"},{default:e(()=>[t(o,{value:110,"max-value":99},{default:e(()=>[t(m,{variant:"danger"},{default:e(()=>[d("Maximum")]),_:1})]),_:1}),t(m,{variant:"success",filled:"",class:"ml-2"},{default:e(()=>[t(o,{variant:"success",point:""}),d(" In range ")]),_:1})]),_:1},8,["code"]),t(r,{code:a.standaloneCode,title:"Standalone"},{default:e(()=>[t(o,{value:101}),t(o,{value:101,square:""})]),_:1},8,["code"]),t(r,{code:a.customCode,title:"Custom variant"},{default:e(()=>[t(o,{value:"\u{1F407}",variant:"violet",variants:{violet:{body:"bg-violet-600"}}},{default:e(()=>[t(i,null,{default:e(()=>[d("\u{1FA84}\u{1F3A9}")]),_:1})]),_:1}),t(o,{show:a.cstmShow,value:"\u{1F407}",variant:"violet",variants:{violet:{body:"bg-violet-600"}},onClick:n[7]||(n[7]=l=>a.cstmShow=!a.cstmShow)},{default:e(()=>[t(i,null,{default:e(()=>[d("\u{1FA84}\u{1F3A9}")]),_:1})]),_:1},8,["show"])]),_:1},8,["code"]),t(c,{"data-sheet":a.dataSheet,"slot-sheet":a.slotSheet},null,8,["data-sheet","slot-sheet"])])}const G=S(B,[["render",F]]);export{G as default};

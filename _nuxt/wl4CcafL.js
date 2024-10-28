import{_ as y}from"./zaHzddb4.js";import{_ as V}from"./DMvfu-B7.js";import{_ as S}from"./9vMGL7Wn.js";import{n as h,_ as k,p as s,o as C,c as B,a as d,b as t,w as a,d as u}from"./BZMuJF5d.js";import"./DLMznalT.js";const q=h({data:()=>({badgeValue:97,badgePoint:!1,badgeSquare:!1,badgeShow:!0,badgeMax:99,cstmShow:!1,badgeType:"danger",badgeTypes:["primary","success","danger","warning"],badgePosition:"top-right",badgePositions:["top-right","top-left","bottom-right","bottom-left"],typesCode:`<it-badge value="12" ||| variant="primary" |||>
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
  value="🐇"
  variant="violet"
  :variants="{ violet: { body: 'bg-violet-600' } }"
>
  <it-button>🪄🎩</it-button>
</it-badge>`,dataSheet:[{property:"value",type:["Number","String"],default:"",values:[],description:"Value of the badge"},{property:"max-value",type:["Number"],default:"",values:[],description:"Max value of the badge"},{property:"position",type:["String"],default:"top-right",values:["top-right","top-left","bottom-right","bottom-left"],description:"Set position of the badge"},{property:"show",type:["Boolean"],default:"true",values:[],description:"Show badge"},{property:"point",type:["Boolean"],default:"false",values:[],description:"Show badge as point"},{property:"square",type:["Boolean"],default:"false",values:[],description:"Make badge squared"}],slotSheet:[{name:"default",description:"Target slot"},{name:"content",description:"Badge body"}]})});function P(o,e,H,M,T,A){const l=s("it-button"),i=s("it-badge"),g=s("it-select"),p=s("it-checkbox"),b=s("it-number-input"),v=y,r=V,f=s("it-avatar"),m=s("it-tag"),w=S;return C(),B("div",null,[e[27]||(e[27]=d("h1",{class:"mb-4 text-2xl font-bold"},"Badge",-1)),t(v,{name:"ItBadge"},{props:a(()=>[t(g,{modelValue:o.badgeType,"onUpdate:modelValue":e[0]||(e[0]=n=>o.badgeType=n),placeholder:"Select type","label-top":"Badge type",options:o.badgeTypes},null,8,["modelValue","options"]),t(g,{modelValue:o.badgePosition,"onUpdate:modelValue":e[1]||(e[1]=n=>o.badgePosition=n),placeholder:"Select position","label-top":"Badge position",options:o.badgePositions},null,8,["modelValue","options"]),t(p,{variant:"primary",modelValue:o.badgePoint,"onUpdate:modelValue":e[2]||(e[2]=n=>o.badgePoint=n),label:"Point"},null,8,["modelValue"]),t(p,{variant:"primary",modelValue:o.badgeSquare,"onUpdate:modelValue":e[3]||(e[3]=n=>o.badgeSquare=n),label:"Square"},null,8,["modelValue"]),t(p,{variant:"primary",modelValue:o.badgeShow,"onUpdate:modelValue":e[4]||(e[4]=n=>o.badgeShow=n),label:"Show"},null,8,["modelValue"]),t(b,{modelValue:o.badgeMax,"onUpdate:modelValue":e[5]||(e[5]=n=>o.badgeMax=n),"label-top":"Max value"},null,8,["modelValue"]),t(b,{modelValue:o.badgeValue,"onUpdate:modelValue":e[6]||(e[6]=n=>o.badgeValue=n),"label-top":"Badge value"},null,8,["modelValue"])]),default:a(()=>[t(i,{value:o.badgeValue,show:o.badgeShow,variant:o.badgeType,"max-value":o.badgeMax,point:o.badgePoint,square:o.badgeSquare,position:o.badgePosition},{default:a(()=>[t(l,null,{default:a(()=>e[8]||(e[8]=[u("Badger")])),_:1})]),_:1},8,["value","show","variant","max-value","point","square","position"])]),_:1}),t(r,{template:o.typesCode,title:"Type"},{default:a(()=>[t(i,{value:"12",variant:"primary"},{default:a(()=>[t(l,null,{default:a(()=>e[9]||(e[9]=[u("Primary")])),_:1})]),_:1}),t(i,{value:"new",variant:"danger"},{default:a(()=>[t(l,null,{default:a(()=>e[10]||(e[10]=[u("Default")])),_:1})]),_:1}),t(i,{value:"12",variant:"success"},{default:a(()=>[t(l,null,{default:a(()=>e[11]||(e[11]=[u("Success")])),_:1})]),_:1}),t(i,{value:"12",variant:"warning"},{default:a(()=>[t(l,null,{default:a(()=>e[12]||(e[12]=[u("Warning")])),_:1})]),_:1})]),_:1},8,["template"]),t(r,{template:o.combineCode,title:"With another component"},{default:a(()=>[t(i,{value:"Typing...",variant:"danger"},{default:a(()=>[t(f,{square:"",size:"80px",src:"https://randomuser.me/api/portraits/women/17.jpg"})]),_:1})]),_:1},8,["template"]),t(r,{template:o.pointCode,title:"Point"},{default:a(()=>[t(i,{variant:"primary",point:""},{default:a(()=>[t(l,null,{icon:a(()=>e[13]||(e[13]=[d("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[d("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"})],-1)])),_:1})]),_:1}),t(i,{variant:"danger",point:""},{default:a(()=>[t(l,null,{icon:a(()=>e[14]||(e[14]=[d("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[d("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"})],-1)])),_:1})]),_:1}),t(i,{variant:"success",point:""},{default:a(()=>[t(l,null,{icon:a(()=>e[15]||(e[15]=[d("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[d("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"})],-1)])),_:1})]),_:1}),t(i,{variant:"warning",point:""},{default:a(()=>[t(l,null,{icon:a(()=>e[16]||(e[16]=[d("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[d("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"})],-1)])),_:1})]),_:1})]),_:1},8,["template"]),t(r,{template:o.squareCode,title:"Square"},{default:a(()=>[t(i,{variant:"primary",value:12,square:""},{default:a(()=>[t(l,null,{default:a(()=>e[17]||(e[17]=[u("Square")])),_:1})]),_:1}),t(i,{variant:"primary",point:"",square:""},{default:a(()=>[t(l,null,{icon:a(()=>e[18]||(e[18]=[d("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[d("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"})],-1)])),_:1})]),_:1})]),_:1},8,["template"]),t(r,{template:o.positionsCode,title:"Positions"},{default:a(()=>[t(i,{point:"",value:12},{default:a(()=>[t(l,null,{default:a(()=>e[19]||(e[19]=[u("Top-right")])),_:1})]),_:1}),t(i,{point:"",position:"bottom-right",value:12},{default:a(()=>[t(l,null,{default:a(()=>e[20]||(e[20]=[u("Bottom-right")])),_:1})]),_:1}),t(i,{point:"",position:"bottom-left",value:12},{default:a(()=>[t(l,null,{default:a(()=>e[21]||(e[21]=[u("Bottom-left")])),_:1})]),_:1}),t(i,{point:"",position:"top-left",value:12},{default:a(()=>[t(l,null,{default:a(()=>e[22]||(e[22]=[u("Top-left")])),_:1})]),_:1})]),_:1},8,["template"]),t(r,{template:o.maxvalCode,title:"Max value"},{default:a(()=>[t(i,{value:110,"max-value":99},{default:a(()=>[t(m,{variant:"danger"},{default:a(()=>e[23]||(e[23]=[u("Maximum")])),_:1})]),_:1}),t(m,{variant:"success",filled:"",class:"ml-2"},{default:a(()=>[t(i,{variant:"success",point:""}),e[24]||(e[24]=u(" In range "))]),_:1})]),_:1},8,["template"]),t(r,{template:o.standaloneCode,title:"Standalone"},{default:a(()=>[t(i,{value:101}),t(i,{value:101,square:""})]),_:1},8,["template"]),t(r,{template:o.customCode,title:"Custom variant"},{default:a(()=>[t(i,{value:"🐇",variant:"violet",variants:{violet:{body:"bg-violet-600"}}},{default:a(()=>[t(l,null,{default:a(()=>e[25]||(e[25]=[u("🪄🎩")])),_:1})]),_:1}),t(i,{show:o.cstmShow,value:"🐇",variant:"violet",variants:{violet:{body:"bg-violet-600"}},onClick:e[7]||(e[7]=n=>o.cstmShow=!o.cstmShow)},{default:a(()=>[t(l,null,{default:a(()=>e[26]||(e[26]=[u("🪄🎩")])),_:1})]),_:1},8,["show"])]),_:1},8,["template"]),t(w,{"data-sheet":o.dataSheet,"slot-sheet":o.slotSheet},null,8,["data-sheet","slot-sheet"])])}const N=k(q,[["render",P]]);export{N as default};

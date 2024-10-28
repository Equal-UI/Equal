import{_ as T}from"./zaHzddb4.js";import{_ as y}from"./DMvfu-B7.js";import{_ as B}from"./9vMGL7Wn.js";import{n as h,B as x,_ as S,p as m,H as w,o as a,c as V,a as p,b as e,w as o,d as n,q as r,u as d}from"./BZMuJF5d.js";import"./DLMznalT.js";const L=h({data:()=>({tooltipContent:"Hello there",tooltipPlacement:"top",tooltipPlacements:["top","right","bottom","left"],directiveCode:`<it-button ||| v-tooltip="{ content: 'Top tooltip' }" |||>Top</it-button>
<it-button ||| v-tooltip="{ position: 'left', content: 'Left tooltip' }" |||>
  Left
</it-button>
<it-button
 ||| v-tooltip="{ position: 'right', content: 'Right tooltip' }" |||
>
  Right
</it-button>
<it-button
 ||| v-tooltip="{ position: 'bottom', content: 'Bottom tooltip' }" |||
>
  Bottom
</it-button>`,positionCode:`<it-tooltip content="Top" ||| placement="top" |||>
  <it-button>Top</it-button>
</it-tooltip>
<it-tooltip content="Right" ||| placement="right" |||>
  <it-button>Right</it-button>
</it-tooltip>
<it-tooltip content="Left" ||| placement="left" |||>
  <it-button>Left</it-button>
</it-tooltip>
<it-tooltip content="Bottom" ||| placement="bottom" |||>
  <it-button>Bottom</it-button>
</it-tooltip>`,autopositionCode:`<it-tooltip placement="bottom">
    <template #content>
      <span>Autopos</span>
    </template>
    <it-button>Autoposition</it-button>
</it-tooltip>`,slotCode:`<it-tooltip placement="top">
  <span slot="content"><it-tag type="primary">Wow</it-tag> &nbsp; I came from slot</span>
  <it-button>Slot content</it-button>
</it-tooltip>`,dataSheet:[{property:"content",type:["String"],default:"-",values:[],description:"Content of the tooltip"},{property:"placement",type:["String"],default:"top",values:["top","bottom","right","left","bottom-left","bottom-right","left-top","left-bottom","right-top","right-bottom","top-left","top-right"],description:"Position of the popover"},{property:"disabled",type:["Boolean"],default:"false",values:[],description:"Makes tooltip disabled"},{property:"hoverable",type:["Boolean"],default:"false",values:[],description:"Makes tooltip hoverable"},{property:"autoposition",type:["Boolean"],default:"true",values:[],description:"Tooltip will choose position to always fit in screen taking into account the chosen position in 'placement' property"}],slotSheet:[{name:"default",description:"Hoverable element for tooltip"},{name:"content",description:"Content of the tooltip"}]}),setup(){return{withSlot:{content:"Top tooltip",children:x("h1",{},"TEST")}}}}),P={class:"flex flex-col items-center space-y-2"},R={class:"flex items-center space-x-8"},k={class:"flex flex-col items-center space-y-2"},A={class:"flex items-center space-x-8"},$={class:"flex flex-col items-center"},H={class:"flex flex-col items-center"};function D(l,t,I,N,W,z){const i=m("it-button"),s=m("it-tooltip"),b=m("it-select"),v=m("it-input"),g=T,f=y,_=m("it-tag"),C=B,u=w("tooltip");return a(),V("div",null,[t[19]||(t[19]=p("h1",{class:"mb-4 text-2xl font-bold"},"Tooltip",-1)),t[20]||(t[20]=p("p",{class:"mb-4 text-zinc-600 dark:!text-zinc-400"}," It-tooltip is a HOC, use it to show tooltip over the slot ",-1)),e(g,null,{props:o(()=>[e(b,{modelValue:l.tooltipPlacement,"onUpdate:modelValue":t[0]||(t[0]=c=>l.tooltipPlacement=c),placeholder:"Select position","label-top":"Tag position",options:l.tooltipPlacements},null,8,["modelValue","options"]),e(v,{modelValue:l.tooltipContent,"onUpdate:modelValue":t[1]||(t[1]=c=>l.tooltipContent=c),"label-top":"Tooltip text"},null,8,["modelValue"])]),default:o(()=>[e(s,{content:l.tooltipContent,placement:l.tooltipPlacement},{default:o(()=>[e(i,null,{default:o(()=>t[2]||(t[2]=[n("Hover me")])),_:1})]),_:1},8,["content","placement"])]),_:1}),e(f,{template:l.directiveCode,title:"Directive"},{description:o(()=>t[3]||(t[3]=[p("p",{class:"mx-6"},"You can use directive for tooltips",-1)])),default:o(()=>[p("div",P,[r((a(),d(i,null,{default:o(()=>t[4]||(t[4]=[n("With slot")])),_:1})),[[u,l.withSlot]]),r((a(),d(i,null,{default:o(()=>t[5]||(t[5]=[n("Top")])),_:1})),[[u,{content:"Top tooltip"}]]),p("div",R,[r((a(),d(i,null,{default:o(()=>t[6]||(t[6]=[n(" Left ")])),_:1})),[[u,{position:"left",content:"Left tooltip"}]]),r((a(),d(i,null,{default:o(()=>t[7]||(t[7]=[n(" Right ")])),_:1})),[[u,{position:"right",content:"Right tooltip"}]])]),r((a(),d(i,null,{default:o(()=>t[8]||(t[8]=[n(" Bottom ")])),_:1})),[[u,{position:"bottom",content:"Bottom tooltip"}]])])]),_:1},8,["template"]),e(f,{template:l.positionCode,title:"Position"},{description:o(()=>t[9]||(t[9]=[p("p",{class:"mx-6"}," There are 12 positions available for tooltip, most used are shown in the example ",-1)])),default:o(()=>[p("div",k,[e(s,{content:"Top",placement:"top"},{default:o(()=>[e(i,null,{default:o(()=>t[10]||(t[10]=[n("Top")])),_:1})]),_:1}),p("div",A,[e(s,{content:"Left",placement:"left"},{default:o(()=>[e(i,null,{default:o(()=>t[11]||(t[11]=[n("Left")])),_:1})]),_:1}),e(s,{content:"Right",placement:"right"},{default:o(()=>[e(i,null,{default:o(()=>t[12]||(t[12]=[n("Right")])),_:1})]),_:1})]),e(s,{content:"Bottom",placement:"bottom"},{default:o(()=>[e(i,null,{default:o(()=>t[13]||(t[13]=[n("Bottom")])),_:1})]),_:1})])]),_:1},8,["template"]),e(f,{template:l.slotCode,title:"Content Slot"},{default:o(()=>[p("div",$,[e(s,{placement:"top"},{content:o(()=>[p("span",null,[e(_,{variant:"primary"},{default:o(()=>t[14]||(t[14]=[n("Wow")])),_:1}),t[15]||(t[15]=n("   I came from slot "))])]),default:o(()=>[e(i,null,{default:o(()=>t[16]||(t[16]=[n("Slot content")])),_:1})]),_:1})])]),_:1},8,["template"]),e(f,{template:l.autopositionCode,title:"Autoposition"},{default:o(()=>[p("div",H,[e(s,{placement:"bottom"},{content:o(()=>t[17]||(t[17]=[p("span",null,"Autopos",-1)])),default:o(()=>[e(i,null,{default:o(()=>t[18]||(t[18]=[n("Autoposition")])),_:1})]),_:1})])]),_:1},8,["template"]),e(C,{"slot-sheet":l.slotSheet,"data-sheet":l.dataSheet},null,8,["slot-sheet","data-sheet"])])}const Y=S(L,[["render",D]]);export{Y as default};

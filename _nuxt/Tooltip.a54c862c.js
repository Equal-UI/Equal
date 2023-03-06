import{_ as C}from"./Demobox.vue.01d5a859.js";import{_ as T}from"./Box.vue.20a663c4.js";import{_ as y}from"./PropsTable.20a3c0c8.js";import{i as B,A as x,a as S,b as w,h as o,w as t,e as i,o as s,f as l,k as c,c as u,r as m,K as V}from"./entry.e6c866a5.js";import"./Prism.e5831eb8.js";const k=B({data:()=>({tooltipContent:"Hello there",tooltipPlacement:"top",tooltipPlacements:["top","right","bottom","left"],directiveCode:`<it-button ||| v-tooltip="{ content: 'Top tooltip' }" |||>Top</it-button>
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
</it-tooltip>`,dataSheet:[{property:"content",type:["String"],default:"-",values:[],description:"Content of the tooltip"},{property:"placement",type:["String"],default:"top",values:["top","bottom","right","left","bottom-left","bottom-right","left-top","left-bottom","right-top","right-bottom","top-left","top-right"],description:"Position of the popover"},{property:"disabled",type:["Boolean"],default:"false",values:[],description:"Makes tooltip disabled"},{property:"hoverable",type:["Boolean"],default:"false",values:[],description:"Makes tooltip hoverable"},{property:"autoposition",type:["Boolean"],default:"true",values:[],description:"Tooltip will choose position to always fit in screen taking into account the chosen position in 'placement' property"}],slotSheet:[{name:"default",description:"Hoverable element for tooltip"},{name:"content",description:"Content of the tooltip"}]}),setup(){return{withSlot:{content:"Top tooltip",children:x("h1",{},"TEST")}}}}),L=i("h1",{class:"mb-4 text-2xl font-bold"},"Tooltip",-1),P=i("p",{class:"mb-4 text-zinc-600 dark:!text-zinc-400"}," It-tooltip is a HOC, use it to show tooltip over the slot ",-1),R=i("p",{class:"mx-6"},"You can use directive for tooltips",-1),A={class:"flex flex-col items-center space-y-2"},$={class:"flex items-center space-x-8"},D=i("p",{class:"mx-6"}," There are 12 positions available for tooltip, most used are shown in the example ",-1),H={class:"flex flex-col items-center space-y-2"},I={class:"flex items-center space-x-8"},N={class:"flex flex-col items-center"},W={class:"flex flex-col items-center"},z=i("span",null,"Autopos",-1);function E(e,r,M,U,K,O){const n=m("it-button"),p=m("it-tooltip"),_=m("it-select"),h=m("it-input"),b=C,d=T,v=m("it-tag"),g=y,a=V("tooltip");return s(),w("div",null,[L,P,o(b,null,{props:t(()=>[o(_,{modelValue:e.tooltipPlacement,"onUpdate:modelValue":r[0]||(r[0]=f=>e.tooltipPlacement=f),placeholder:"Select position","label-top":"Tag position",options:e.tooltipPlacements},null,8,["modelValue","options"]),o(h,{modelValue:e.tooltipContent,"onUpdate:modelValue":r[1]||(r[1]=f=>e.tooltipContent=f),"label-top":"Tooltip text"},null,8,["modelValue"])]),default:t(()=>[o(p,{content:e.tooltipContent,placement:e.tooltipPlacement},{default:t(()=>[o(n,null,{default:t(()=>[l("Hover me")]),_:1})]),_:1},8,["content","placement"])]),_:1}),o(d,{template:e.directiveCode,title:"Directive"},{description:t(()=>[R]),default:t(()=>[i("div",A,[c((s(),u(n,null,{default:t(()=>[l("With slot")]),_:1})),[[a,e.withSlot]]),c((s(),u(n,null,{default:t(()=>[l("Top")]),_:1})),[[a,{content:"Top tooltip"}]]),i("div",$,[c((s(),u(n,null,{default:t(()=>[l(" Left ")]),_:1})),[[a,{position:"left",content:"Left tooltip"}]]),c((s(),u(n,null,{default:t(()=>[l(" Right ")]),_:1})),[[a,{position:"right",content:"Right tooltip"}]])]),c((s(),u(n,null,{default:t(()=>[l(" Bottom ")]),_:1})),[[a,{position:"bottom",content:"Bottom tooltip"}]])])]),_:1},8,["template"]),o(d,{template:e.positionCode,title:"Position"},{description:t(()=>[D]),default:t(()=>[i("div",H,[o(p,{content:"Top",placement:"top"},{default:t(()=>[o(n,null,{default:t(()=>[l("Top")]),_:1})]),_:1}),i("div",I,[o(p,{content:"Left",placement:"left"},{default:t(()=>[o(n,null,{default:t(()=>[l("Left")]),_:1})]),_:1}),o(p,{content:"Right",placement:"right"},{default:t(()=>[o(n,null,{default:t(()=>[l("Right")]),_:1})]),_:1})]),o(p,{content:"Bottom",placement:"bottom"},{default:t(()=>[o(n,null,{default:t(()=>[l("Bottom")]),_:1})]),_:1})])]),_:1},8,["template"]),o(d,{template:e.slotCode,title:"Content Slot"},{default:t(()=>[i("div",N,[o(p,{placement:"top"},{content:t(()=>[i("span",null,[o(v,{variant:"primary"},{default:t(()=>[l("Wow")]),_:1}),l("   I came from slot ")])]),default:t(()=>[o(n,null,{default:t(()=>[l("Slot content")]),_:1})]),_:1})])]),_:1},8,["template"]),o(d,{template:e.autopositionCode,title:"Autoposition"},{default:t(()=>[i("div",W,[o(p,{placement:"bottom"},{content:t(()=>[z]),default:t(()=>[o(n,null,{default:t(()=>[l("Autoposition")]),_:1})]),_:1})])]),_:1},8,["template"]),o(g,{"slot-sheet":e.slotSheet,"data-sheet":e.dataSheet},null,8,["slot-sheet","data-sheet"])])}const J=S(k,[["render",E]]);export{J as default};

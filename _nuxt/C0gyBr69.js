import{_ as x}from"./DMvfu-B7.js";import{_ as y}from"./9vMGL7Wn.js";import{n as f,I as $,_ as u,p as m,o as c,c as g,b as e,w as i,a as l,A as h,B as T,d as a,t as r}from"./BZMuJF5d.js";import"./DLMznalT.js";const w=f({components:{ItBadge:$},props:{}}),E={class:"flex flex-row items-center justify-center space-x-3"};function N(o,t,d,v,b,k){const n=m("it-badge");return c(),g("div",E,[e(n,{variant:"danger",round:"",point:""},{default:i(()=>t[0]||(t[0]=[l("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"h-5"},[l("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"})],-1)])),_:1}),t[1]||(t[1]=l("p",null,"You have a new message",-1))])}const B=u(w,[["render",N]]),Y=f({setup(){const o=h();function t(d="top"){o({duration:3e3,placement:d},T(B))}return{notification:o,notificationExample:t}},data:()=>({typesTemplate:`<it-button @click="notificationExample()">
  Notification example
</it-button>`,durationCode:`import { defineComponent } from 'vue'
import { useNotification } from '@/'

export default defineComponent({
  setup() {
    const notification = useNotification()
    return { notification }
  },
})`,variantsCode:`<it-button
  @click="
    notification({
      title: 'Task is done',
      text: 'Congratulations! Your task is finished, have a rest',
      ||| variant: 'success' |||,
      placement: 'bottom-right',
    })
  "
>
  Success
</it-button>
<it-button
  @click="
    notification({
      title: 'Task is not available',
      text: 'This task is not available for your type of user',
      ||| variant: 'warning' |||,
      placement: 'bottom-right',
    })
  "
>
  Warning
</it-button>
<it-button
  @click="
    notification({
      title: 'Task is deleted',
      text: 'Your task has been deleted',
      ||| variant: 'danger' |||,
      placement: 'bottom-right',
    })
  "
>
  Danger
</it-button>`,variantCode:`<it-button
  @click="
    notification({
      title: 'Task is done',
      text: 'Congratulations! Your task is finished, have a rest',
      variants: {
       ||| sky |||: {
          root: '!border-indigo-500/80',
          title: '!text-indigo-500',
        },
      },
      ||| variant: 'sky' |||,
    })
  "
>
  Magic
</it-button>`,durationTemplate:`<it-button
  @click="
    notification({
      title: 'Task is done',
      text: 'Congratulations! Your task is finished, have a rest',
      variant: 'success',
      placement: 'bottom-right',
      ||| progress: true |||,
    })
  "
>
  Success
</it-button>
<it-button
  @click="
    notification({
      title: 'Task is not available',
      text: 'This task is not available for your type of user',
      variant: 'warning',
      placement: 'bottom-right',
      ||| progress: true |||,
    })
  "
>
  Warning
</it-button>
<it-button
  @click="
    notification({
      title: 'Task is deleted',
      text: 'Your task has been deleted',
      variant: 'danger',
      placement: 'bottom-right',
      ||| progress: true |||,
    })
  "
>
  Danger
</it-button>`,typesCode:`import { defineComponent, h } from 'vue'
import { useNotification } from 'equal-vue'

export default defineComponent({
  setup() {
    const notification = useNotification()
    function notificationExample(placement = 'top') {
      notification(
        {
          duration: 3000,
          placement,
        },
        h(NotificationExample),
      )
    }
    return { notificationExample }
  }
})
`,placementCode:`<it-button @click="notificationExample('top-left')">
  Top-left
</it-button>
<it-button @click="notificationExample('top')">Top</it-button>
<it-button @click="notificationExample('top-right')">
  Top-right
</it-button>
<it-button @click="notificationExample('bottom-left')">
  Bottom-left
</it-button>
<it-button @click="notificationExample('bottom')">Bottom</it-button>
<it-button @click="notificationExample('bottom-right')">
  Bottom-right
</it-button>`,dataSheet:[{property:"progress",type:["Boolean"],default:"false",values:[],description:"Duration line"},{property:"title",type:["String"],default:"-",values:[],description:"Title of the notification"},{property:"text",type:["String"],default:"-",values:[],description:"Content of the notification"},{property:"placement",type:["String"],default:"top-right",values:["top-right","top","top-left","bottom-right","bottom","bottom-left"],description:"Position of the notification"},{property:"duration",type:["Number"],default:"5000",values:[],description:"Duration of the notification"},{property:"on-close",type:["Function"],default:"() => void",values:[],description:"Callback triggers when notification hides"}]})}),S={class:"flex flex-col gap-4"},D={class:"flex flex-row justify-center gap-3"},j={class:"flex flex-row justify-center gap-3"},V={class:"flex flex-col gap-4"},W={class:"flex flex-row justify-center gap-3"},M={class:"flex flex-col gap-4"},A={class:"flex flex-row justify-center gap-3"},I={class:"flex flex-col gap-4"},q={class:"flex flex-row justify-center gap-3"};function F(o,t,d,v,b,k){const n=m("it-button"),p=x,C=y;return c(),g("div",null,[t[22]||(t[22]=l("h1",{class:"mb-4 text-2xl font-bold"},"Notification",-1)),e(p,{template:o.typesTemplate,code:o.typesCode,title:"Default example"},{default:i(()=>[e(n,{type:"primary",onClick:t[0]||(t[0]=s=>o.notificationExample())},{default:i(()=>t[14]||(t[14]=[a(" Notification example ")])),_:1})]),_:1},8,["template","code"]),e(p,{template:o.placementCode,code:o.typesCode,title:"Notification position"},{default:i(()=>[l("div",S,[l("div",D,[e(n,{onClick:t[1]||(t[1]=s=>o.notificationExample("top-left"))},{default:i(()=>[a(r(o.$t("sides.top-left")),1)]),_:1}),e(n,{onClick:t[2]||(t[2]=s=>o.notificationExample("top"))},{default:i(()=>[a(r(o.$t("sides.top")),1)]),_:1}),e(n,{onClick:t[3]||(t[3]=s=>o.notificationExample("top-right"))},{default:i(()=>[a(r(o.$t("sides.top-right")),1)]),_:1})]),l("div",j,[e(n,{onClick:t[4]||(t[4]=s=>o.notificationExample("bottom-left"))},{default:i(()=>[a(r(o.$t("sides.bottom-left")),1)]),_:1}),e(n,{onClick:t[5]||(t[5]=s=>o.notificationExample("bottom"))},{default:i(()=>[a(r(o.$t("sides.bottom")),1)]),_:1}),e(n,{onClick:t[6]||(t[6]=s=>o.notificationExample("bottom-right"))},{default:i(()=>[a(r(o.$t("sides.bottom-right")),1)]),_:1})])])]),_:1},8,["template","code"]),e(p,{template:o.variantsCode,code:o.durationCode,title:"Variants"},{default:i(()=>[l("div",V,[l("div",W,[e(n,{onClick:t[7]||(t[7]=s=>o.notification({title:"Task is done",text:"Congratulations! Your task is finished, have a rest",variant:"success",placement:"bottom-right"}))},{default:i(()=>t[15]||(t[15]=[a(" Success ")])),_:1}),e(n,{onClick:t[8]||(t[8]=s=>o.notification({title:"Task is not available",text:"This task is not available for your type of user",variant:"warning",placement:"bottom-right"}))},{default:i(()=>t[16]||(t[16]=[a(" Warning ")])),_:1}),e(n,{onClick:t[9]||(t[9]=s=>o.notification({title:"Task is deleted",text:"Your task has been deleted",variant:"danger",placement:"bottom-right"}))},{default:i(()=>t[17]||(t[17]=[a(" Danger ")])),_:1})])])]),_:1},8,["template","code"]),e(p,{template:o.durationTemplate,code:o.durationCode,title:"Duration line"},{default:i(()=>[l("div",M,[l("div",A,[e(n,{onClick:t[10]||(t[10]=s=>o.notification({title:"Task is done",text:"Congratulations! Your task is finished, have a rest",variant:"success",placement:"bottom-right",progress:!0}))},{default:i(()=>t[18]||(t[18]=[a(" Success ")])),_:1}),e(n,{onClick:t[11]||(t[11]=s=>o.notification({title:"Task is not available",text:"This task is not available for your type of user",variant:"warning",placement:"bottom-right",progress:!0}))},{default:i(()=>t[19]||(t[19]=[a(" Warning ")])),_:1}),e(n,{onClick:t[12]||(t[12]=s=>o.notification({title:"Task is deleted",text:"Your task has been deleted",variant:"danger",placement:"bottom-right",progress:!0}))},{default:i(()=>t[20]||(t[20]=[a(" Danger ")])),_:1})])])]),_:1},8,["template","code"]),e(p,{template:o.variantCode,code:o.durationCode,title:"Custom variant"},{default:i(()=>[l("div",I,[l("div",q,[e(n,{onClick:t[13]||(t[13]=s=>o.notification({title:"Task is done",text:"Congratulations! Your task is finished, have a rest",variants:{sky:{root:"!border-indigo-500/80",title:"!text-indigo-500"}},variant:"sky"}))},{default:i(()=>t[21]||(t[21]=[a(" Magic ")])),_:1})])])]),_:1},8,["template","code"]),e(C,{"data-sheet":o.dataSheet},null,8,["data-sheet"])])}const H=u(Y,[["render",F]]);export{H as default};

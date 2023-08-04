import{_ as C}from"./Box.vue.2faf1d4f.js";import{_ as x}from"./PropsTable.355dd73f.js";import{g as f,I as y,_ as u,r as c,o as m,c as g,b as o,w as i,a as l,z as $,A as T,d as a,t as r}from"./entry.f2f8e2b0.js";import"./Prism.6f4c6f0e.js";const _=f({components:{ItBadge:y},props:{}}),w={class:"flex flex-row items-center justify-center space-x-3"},E=l("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"h-5"},[l("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"})],-1),N=l("p",null,"You have a new message",-1);function Y(t,e,d,v,b,k){const n=c("it-badge");return m(),g("div",w,[o(n,{variant:"danger",round:"",point:""},{default:i(()=>[E]),_:1}),N])}const B=u(_,[["render",Y]]),S=f({setup(){const t=$();function e(d="top"){t({duration:3e3,placement:d},T(B))}return{notification:t,notificationExample:e}},data:()=>({typesTemplate:`<it-button @click="notificationExample()">
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
</it-button>`,dataSheet:[{property:"progress",type:["Boolean"],default:"false",values:[],description:"Duration line"},{property:"title",type:["String"],default:"-",values:[],description:"Title of the notification"},{property:"text",type:["String"],default:"-",values:[],description:"Content of the notification"},{property:"placement",type:["String"],default:"top-right",values:["top-right","top","top-left","bottom-right","bottom","bottom-left"],description:"Position of the notification"},{property:"duration",type:["Number"],default:"5000",values:[],description:"Duration of the notification"},{property:"on-close",type:["Function"],default:"() => void",values:[],description:"Callback triggers when notification hides"}]})}),D=l("h1",{class:"mb-4 text-2xl font-bold"},"Notification",-1),j={class:"flex flex-col gap-4"},V={class:"flex flex-row justify-center gap-3"},W={class:"flex flex-row justify-center gap-3"},M={class:"flex flex-col gap-4"},A={class:"flex flex-row justify-center gap-3"},I={class:"flex flex-col gap-4"},q={class:"flex flex-row justify-center gap-3"},z={class:"flex flex-col gap-4"},F={class:"flex flex-row justify-center gap-3"};function L(t,e,d,v,b,k){const n=c("it-button"),p=C,h=x;return m(),g("div",null,[D,o(p,{template:t.typesTemplate,code:t.typesCode,title:"Default example"},{default:i(()=>[o(n,{type:"primary",onClick:e[0]||(e[0]=s=>t.notificationExample())},{default:i(()=>[a(" Notification example ")]),_:1})]),_:1},8,["template","code"]),o(p,{template:t.placementCode,code:t.typesCode,title:"Notification position"},{default:i(()=>[l("div",j,[l("div",V,[o(n,{onClick:e[1]||(e[1]=s=>t.notificationExample("top-left"))},{default:i(()=>[a(r(t.$t("sides.top-left")),1)]),_:1}),o(n,{onClick:e[2]||(e[2]=s=>t.notificationExample("top"))},{default:i(()=>[a(r(t.$t("sides.top")),1)]),_:1}),o(n,{onClick:e[3]||(e[3]=s=>t.notificationExample("top-right"))},{default:i(()=>[a(r(t.$t("sides.top-right")),1)]),_:1})]),l("div",W,[o(n,{onClick:e[4]||(e[4]=s=>t.notificationExample("bottom-left"))},{default:i(()=>[a(r(t.$t("sides.bottom-left")),1)]),_:1}),o(n,{onClick:e[5]||(e[5]=s=>t.notificationExample("bottom"))},{default:i(()=>[a(r(t.$t("sides.bottom")),1)]),_:1}),o(n,{onClick:e[6]||(e[6]=s=>t.notificationExample("bottom-right"))},{default:i(()=>[a(r(t.$t("sides.bottom-right")),1)]),_:1})])])]),_:1},8,["template","code"]),o(p,{template:t.variantsCode,code:t.durationCode,title:"Variants"},{default:i(()=>[l("div",M,[l("div",A,[o(n,{onClick:e[7]||(e[7]=s=>t.notification({title:"Task is done",text:"Congratulations! Your task is finished, have a rest",variant:"success",placement:"bottom-right"}))},{default:i(()=>[a(" Success ")]),_:1}),o(n,{onClick:e[8]||(e[8]=s=>t.notification({title:"Task is not available",text:"This task is not available for your type of user",variant:"warning",placement:"bottom-right"}))},{default:i(()=>[a(" Warning ")]),_:1}),o(n,{onClick:e[9]||(e[9]=s=>t.notification({title:"Task is deleted",text:"Your task has been deleted",variant:"danger",placement:"bottom-right"}))},{default:i(()=>[a(" Danger ")]),_:1})])])]),_:1},8,["template","code"]),o(p,{template:t.durationTemplate,code:t.durationCode,title:"Duration line"},{default:i(()=>[l("div",I,[l("div",q,[o(n,{onClick:e[10]||(e[10]=s=>t.notification({title:"Task is done",text:"Congratulations! Your task is finished, have a rest",variant:"success",placement:"bottom-right",progress:!0}))},{default:i(()=>[a(" Success ")]),_:1}),o(n,{onClick:e[11]||(e[11]=s=>t.notification({title:"Task is not available",text:"This task is not available for your type of user",variant:"warning",placement:"bottom-right",progress:!0}))},{default:i(()=>[a(" Warning ")]),_:1}),o(n,{onClick:e[12]||(e[12]=s=>t.notification({title:"Task is deleted",text:"Your task has been deleted",variant:"danger",placement:"bottom-right",progress:!0}))},{default:i(()=>[a(" Danger ")]),_:1})])])]),_:1},8,["template","code"]),o(p,{template:t.variantCode,code:t.durationCode,title:"Custom variant"},{default:i(()=>[l("div",z,[l("div",F,[o(n,{onClick:e[13]||(e[13]=s=>t.notification({title:"Task is done",text:"Congratulations! Your task is finished, have a rest",variants:{sky:{root:"!border-indigo-500/80",title:"!text-indigo-500"}},variant:"sky"}))},{default:i(()=>[a(" Magic ")]),_:1})])])]),_:1},8,["template","code"]),o(h,{"data-sheet":t.dataSheet},null,8,["data-sheet"])])}const K=u(S,[["render",L]]);export{K as default};

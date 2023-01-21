import{_ as T}from"./Demobox.vue.54525278.js";import{_ as u}from"./Box.vue.d68fd773.js";import m from"./PropsTable.ca2c4320.js";import{a as _,l as x,b as h,h as t,w as a,e as r,o as v,f as i,i as n}from"./entry.16466b09.js";import"./Prism.9813c50a.js";const y=_({data:()=>({verticalTab:!1,boxTab:!0,disabledTab:!1,boxedCode:`<div style="display: flex; flex-direction: column; flex: 1">
  <it-tabs box style="flex: 1">
    <it-tab title="Tab 1">First tab</it-tab>
    <it-tab title="Tab 2">Second tab</it-tab>
    <it-tab title="Tab 3" :disabled="disabledTab">Third tab</it-tab>
  </it-tabs>

  <it-tabs vertical box style="flex: 1; margin-top: 12px">
    <it-tab title="Tab 1">First tab</it-tab>
    <it-tab title="Tab 2">Second tab</it-tab>
    <it-tab title="Tab 3" :disabled="disabledTab">Third tab</it-tab>
  </it-tabs>
</div>`,notboxedCode:`<div style="display: flex; flex-direction: column; flex: 1">
  <it-tabs style="flex: 1">
    <it-tab title="Tab 1">First tab</it-tab>
    <it-tab title="Tab 2">Second tab</it-tab>
    <it-tab title="Tab 3" :disabled="disabledTab">Third tab</it-tab>
  </it-tabs>

  <it-tabs vertical style="flex: 1; margin-top: 16px">
    <it-tab title="Tab 1">First tab</it-tab>
    <it-tab title="Tab 2">Second tab</it-tab>
    <it-tab title="Tab 3" :disabled="disabledTab">Third tab</it-tab>
  </it-tabs>
</div>`,dataSheet:[{property:"initial-tab",type:["Number"],default:"0",values:[],description:"Selected tab index"},{property:"vertical",type:["Boolean"],default:"false",values:[],description:"Makes tabs vertical"},{property:"box",type:["Boolean"],default:"false",values:[],description:"Show tabs in box"}],slotSheet:[{name:"default",description:"Slot for it-tab"}],dataSheet2:[{property:"title",type:["String"],default:"",values:[],description:"Tab title"},{property:"disabled",type:["Boolean"],default:"false",values:[],description:"Makes tab disabled"}],slotSheet2:[{name:"default",description:"it-tab content"}]})}),S=r("h1",{class:"mb-4 text-2xl font-bold"},"Tabs",-1),V={class:"flex flex-1 flex-col"},F={class:"flex flex-1 flex-col"};function B(e,b,C,k,$,g){const l=n("it-tab"),s=n("it-tabs"),o=n("it-checkbox"),c=T,p=u,f=m;return v(),h("div",null,[S,t(c,{name:"it-tabs"},{props:a(()=>[t(o,{variant:"primary",modelValue:e.verticalTab,"onUpdate:modelValue":b[0]||(b[0]=d=>e.verticalTab=d),label:"Vertical"},null,8,["modelValue"]),t(o,{variant:"primary",modelValue:e.boxTab,"onUpdate:modelValue":b[1]||(b[1]=d=>e.boxTab=d),label:"Tab Box"},null,8,["modelValue"]),t(o,{variant:"primary",modelValue:e.disabledTab,"onUpdate:modelValue":b[2]||(b[2]=d=>e.disabledTab=d),label:"Disabled Tab"},null,8,["modelValue"])]),default:a(()=>[t(s,{vertical:e.verticalTab,box:e.boxTab},{default:a(()=>[t(l,{title:"Tab 1",class:"p-4"},{default:a(()=>[i("First tab")]),_:1}),t(l,{title:"Tab 2",class:"p-4"},{default:a(()=>[i("Second tab")]),_:1}),t(l,{title:"Tab 3",disabled:e.disabledTab,class:"p-4"},{default:a(()=>[i(" Third tab ")]),_:1},8,["disabled"])]),_:1},8,["vertical","box"])]),_:1}),t(p,{code:e.boxedCode,title:"Tabs in box"},{default:a(()=>[r("div",V,[t(s,{box:"",class:"flex-1"},{default:a(()=>[t(l,{title:"Tab 1",class:"p-4"},{default:a(()=>[i("First tab")]),_:1}),t(l,{title:"Tab 2",class:"p-4"},{default:a(()=>[i("Second tab")]),_:1}),t(l,{title:"Tab 3",disabled:e.disabledTab,class:"p-4"},{default:a(()=>[i(" Third tab ")]),_:1},8,["disabled"])]),_:1}),t(s,{vertical:"",box:"",class:"mt-3 flex-1"},{default:a(()=>[t(l,{title:"Tab 1",class:"p-4"},{default:a(()=>[i("First tab")]),_:1}),t(l,{title:"Tab 2",class:"p-4"},{default:a(()=>[i("Second tab")]),_:1}),t(l,{title:"Tab 3",disabled:e.disabledTab,class:"p-4"},{default:a(()=>[i(" Third tab ")]),_:1},8,["disabled"])]),_:1})])]),_:1},8,["code"]),t(p,{code:e.notboxedCode,title:"Tabs without box"},{default:a(()=>[r("div",F,[t(s,{class:"flex-1"},{default:a(()=>[t(l,{title:"Tab 1",class:"p-4"},{default:a(()=>[i("First tab")]),_:1}),t(l,{title:"Tab 2",class:"p-4"},{default:a(()=>[i("Second tab")]),_:1}),t(l,{title:"Tab 3",disabled:e.disabledTab,class:"p-4"},{default:a(()=>[i(" Third tab ")]),_:1},8,["disabled"])]),_:1}),t(s,{vertical:"",class:"mt-4 flex-1"},{default:a(()=>[t(l,{title:"Tab 1",class:"p-4"},{default:a(()=>[i("First tab")]),_:1}),t(l,{title:"Tab 2",class:"p-4"},{default:a(()=>[i("Second tab")]),_:1}),t(l,{title:"Tab 3",disabled:e.disabledTab,class:"p-4"},{default:a(()=>[i(" Third tab ")]),_:1},8,["disabled"])]),_:1})])]),_:1},8,["code"]),t(f,{"tag-name":"it-tabs","data-sheet":e.dataSheet,"slot-sheet":e.slotSheet},null,8,["data-sheet","slot-sheet"]),t(f,{"tag-name":"it-tab","data-sheet":e.dataSheet2,"slot-sheet":e.slotSheet2},null,8,["data-sheet","slot-sheet"])])}const E=x(y,[["render",B]]);export{E as default};

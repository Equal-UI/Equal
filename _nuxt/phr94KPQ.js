import{_ as u}from"./zaHzddb4.js";import{_ as m}from"./DMvfu-B7.js";import{_ as x}from"./9vMGL7Wn.js";import{n as v,_ as y,p as n,o as S,c as V,a as r,b as a,w as e,d as b}from"./BZMuJF5d.js";import"./DLMznalT.js";const F=v({data:()=>({verticalTab:!1,boxTab:!0,disabledTab:!1,boxedCode:`<div style="display: flex; flex-direction: column; flex: 1">
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
</div>`,dataSheet:[{property:"initial-tab",type:["Number"],default:"0",values:[],description:"Selected tab index"},{property:"vertical",type:["Boolean"],default:"false",values:[],description:"Makes tabs vertical"},{property:"box",type:["Boolean"],default:"false",values:[],description:"Show tabs in box"}],slotSheet:[{name:"default",description:"Slot for it-tab"}],dataSheet2:[{property:"title",type:["String"],default:"",values:[],description:"Tab title"},{property:"disabled",type:["Boolean"],default:"false",values:[],description:"Makes tab disabled"}],slotSheet2:[{name:"default",description:"it-tab content"}]})}),B={class:"flex flex-1 flex-col"},C={class:"flex flex-1 flex-col"};function k(l,t,_,$,g,w){const i=n("it-tab"),s=n("it-tabs"),o=n("it-checkbox"),T=u,p=m,f=x;return S(),V("div",null,[t[18]||(t[18]=r("h1",{class:"mb-4 text-2xl font-bold"},"Tabs",-1)),a(T,{name:"ItTabs"},{props:e(()=>[a(o,{variant:"primary",modelValue:l.verticalTab,"onUpdate:modelValue":t[0]||(t[0]=d=>l.verticalTab=d),label:"Vertical"},null,8,["modelValue"]),a(o,{variant:"primary",modelValue:l.boxTab,"onUpdate:modelValue":t[1]||(t[1]=d=>l.boxTab=d),label:"Tab Box"},null,8,["modelValue"]),a(o,{variant:"primary",modelValue:l.disabledTab,"onUpdate:modelValue":t[2]||(t[2]=d=>l.disabledTab=d),label:"Disabled Tab"},null,8,["modelValue"])]),default:e(()=>[a(s,{vertical:l.verticalTab,box:l.boxTab},{default:e(()=>[a(i,{title:"Tab 1",class:"p-4"},{default:e(()=>t[3]||(t[3]=[b("First tab")])),_:1}),a(i,{title:"Tab 2",class:"p-4"},{default:e(()=>t[4]||(t[4]=[b("Second tab")])),_:1}),a(i,{title:"Tab 3",disabled:l.disabledTab,class:"p-4"},{default:e(()=>t[5]||(t[5]=[b(" Third tab ")])),_:1},8,["disabled"])]),_:1},8,["vertical","box"])]),_:1}),a(p,{template:l.boxedCode,title:"Tabs in box"},{default:e(()=>[r("div",B,[a(s,{box:"",class:"flex-1"},{default:e(()=>[a(i,{title:"Tab 1",class:"p-4"},{default:e(()=>t[6]||(t[6]=[b("First tab")])),_:1}),a(i,{title:"Tab 2",class:"p-4"},{default:e(()=>t[7]||(t[7]=[b("Second tab")])),_:1}),a(i,{title:"Tab 3",disabled:l.disabledTab,class:"p-4"},{default:e(()=>t[8]||(t[8]=[b(" Third tab ")])),_:1},8,["disabled"])]),_:1}),a(s,{vertical:"",box:"",class:"mt-3 flex-1"},{default:e(()=>[a(i,{title:"Tab 1",class:"p-4"},{default:e(()=>t[9]||(t[9]=[b("First tab")])),_:1}),a(i,{title:"Tab 2",class:"p-4"},{default:e(()=>t[10]||(t[10]=[b("Second tab")])),_:1}),a(i,{title:"Tab 3",disabled:l.disabledTab,class:"p-4"},{default:e(()=>t[11]||(t[11]=[b(" Third tab ")])),_:1},8,["disabled"])]),_:1})])]),_:1},8,["template"]),a(p,{template:l.notboxedCode,title:"Tabs without box"},{default:e(()=>[r("div",C,[a(s,{class:"flex-1"},{default:e(()=>[a(i,{title:"Tab 1",class:"p-4"},{default:e(()=>t[12]||(t[12]=[b("First tab")])),_:1}),a(i,{title:"Tab 2",class:"p-4"},{default:e(()=>t[13]||(t[13]=[b("Second tab")])),_:1}),a(i,{title:"Tab 3",disabled:l.disabledTab,class:"p-4"},{default:e(()=>t[14]||(t[14]=[b(" Third tab ")])),_:1},8,["disabled"])]),_:1}),a(s,{vertical:"",class:"mt-4 flex-1"},{default:e(()=>[a(i,{title:"Tab 1",class:"p-4"},{default:e(()=>t[15]||(t[15]=[b("First tab")])),_:1}),a(i,{title:"Tab 2",class:"p-4"},{default:e(()=>t[16]||(t[16]=[b("Second tab")])),_:1}),a(i,{title:"Tab 3",disabled:l.disabledTab,class:"p-4"},{default:e(()=>t[17]||(t[17]=[b(" Third tab ")])),_:1},8,["disabled"])]),_:1})])]),_:1},8,["template"]),a(f,{"tag-name":"it-tabs","data-sheet":l.dataSheet,"slot-sheet":l.slotSheet},null,8,["data-sheet","slot-sheet"]),a(f,{"tag-name":"it-tab","data-sheet":l.dataSheet2,"slot-sheet":l.slotSheet2},null,8,["data-sheet","slot-sheet"])])}const E=y(F,[["render",k]]);export{E as default};

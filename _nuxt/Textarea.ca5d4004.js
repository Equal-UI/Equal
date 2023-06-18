import{_ as b}from"./Demobox.vue.628e2fbf.js";import{_ as V}from"./Box.vue.5b96ac4d.js";import{_ as v}from"./PropsTable.50d7f0dc.js";import{i as f,a as x,r as d,o as g,b as y,h as t,w as s,e as u}from"./entry.48add3f8.js";import"./Prism.8f2ef735.js";const z=f({data:()=>({textareaPlaceholder:"Your text goes here",textareaTopLabel:"Your textarea",textareaResizable:!1,textareaPulse:!1,textareaDisabled:!1,textareaValue:"",disabledValue:"This textarea is disabled",validValue:"This textarea is valid",warningValue:"Weclome everyone",dangerValue:"Invalid value",textareaResizeWrite:!1,mask:!1,variantsCode:`<it-textarea
  v-model="validValue"
  label-top="Your textarea"
  ||| variant="success" |||
  message="Textarea is valid"
/>
<it-textarea
  v-model="warningValue"
  label-top="Your textarea"
  ||| variant="warning" |||
  message="Text has typos"
/>
<it-textarea
  v-model="dangerValue"
  label-top="Your textarea"
  ||| variant="danger" |||
  message="Validation error"
/>`,disabledCode:'<it-textarea v-model="disabledValue" ||| disabled ||| />',dataSheet:[{property:"placeholder",type:["String"],default:"-",values:[],description:"Placeholder of the textarea"},{property:"resizable",type:["Boolean"],default:"false",values:[],description:"Makes textarea resizable"},{property:"resize-on-write",type:["Boolean"],default:"false",values:[],description:"Area resizes by the scrollheight"},{property:"mask",type:["Boolean"],default:"false",values:[],description:"Shows background mask when component is focused"},{property:"rows",type:["Number"],default:"4",values:[],description:"Nummber of rows"},{property:"disabled",type:["Boolean"],default:"false",values:[],description:"Makes textares disabled"},{property:"value (v-model)",type:["String"],default:"-",values:[],description:"Value of the textarea"}]})}),k=u("h1",{class:"mb-4 text-2xl font-bold"},"Textarea",-1),T={class:"px-8"};function w(e,a,h,U,L,R){const o=d("it-textarea"),i=d("it-input"),r=d("it-checkbox"),p=b,n=V,m=v;return g(),y("div",null,[k,t(p,{name:"ItTextarea"},{props:s(()=>[t(i,{modelValue:e.textareaPlaceholder,"onUpdate:modelValue":a[1]||(a[1]=l=>e.textareaPlaceholder=l),"label-top":"Placeholder text"},null,8,["modelValue"]),t(i,{modelValue:e.textareaTopLabel,"onUpdate:modelValue":a[2]||(a[2]=l=>e.textareaTopLabel=l),"label-top":"Label"},null,8,["modelValue"]),t(r,{variant:"primary",modelValue:e.textareaResizable,"onUpdate:modelValue":a[3]||(a[3]=l=>e.textareaResizable=l),label:"Resizable"},null,8,["modelValue"]),t(r,{variant:"primary",modelValue:e.textareaResizeWrite,"onUpdate:modelValue":a[4]||(a[4]=l=>e.textareaResizeWrite=l),label:"Resize on write"},null,8,["modelValue"]),t(r,{variant:"primary",modelValue:e.mask,"onUpdate:modelValue":a[5]||(a[5]=l=>e.mask=l),label:"Mask",subLabel:"Focus on the textarea to see the mask"},null,8,["modelValue"]),t(r,{variant:"primary",modelValue:e.textareaDisabled,"onUpdate:modelValue":a[6]||(a[6]=l=>e.textareaDisabled=l),label:"Disabled"},null,8,["modelValue"])]),default:s(()=>[u("div",T,[t(o,{modelValue:e.textareaValue,"onUpdate:modelValue":a[0]||(a[0]=l=>e.textareaValue=l),resizable:e.textareaResizable,"resize-on-write":e.textareaResizeWrite,disabled:e.textareaDisabled,"label-top":e.textareaTopLabel,placeholder:e.textareaPlaceholder,mask:e.mask},null,8,["modelValue","resizable","resize-on-write","disabled","label-top","placeholder","mask"])])]),_:1}),t(n,{template:e.variantsCode,title:"Variants"},{default:s(()=>[t(o,{modelValue:e.validValue,"onUpdate:modelValue":a[7]||(a[7]=l=>e.validValue=l),"label-top":e.textareaTopLabel,variant:"success",message:"Textarea is valid"},null,8,["modelValue","label-top"]),t(o,{modelValue:e.warningValue,"onUpdate:modelValue":a[8]||(a[8]=l=>e.warningValue=l),"label-top":e.textareaTopLabel,variant:"warning",message:"Text has typos"},null,8,["modelValue","label-top"]),t(o,{modelValue:e.dangerValue,"onUpdate:modelValue":a[9]||(a[9]=l=>e.dangerValue=l),"label-top":e.textareaTopLabel,variant:"danger",message:"Validation error"},null,8,["modelValue","label-top"])]),_:1},8,["template"]),t(n,{template:e.disabledCode,title:"Disabled"},{default:s(()=>[t(o,{modelValue:e.disabledValue,"onUpdate:modelValue":a[10]||(a[10]=l=>e.disabledValue=l),"label-top":e.textareaTopLabel,message:"I'm disabled",disabled:""},null,8,["modelValue","label-top"])]),_:1},8,["template"]),t(m,{"data-sheet":e.dataSheet},null,8,["data-sheet"])])}const S=x(z,[["render",w]]);export{S as default};
import{_ as k}from"./Box.vue.988589ab.js";import{a as V,l as x,c as T,w as B,o as b,h as o,e as t,t as m,i}from"./entry.4669953c.js";import"./Prism.cf410c9f.js";const u=new Array(6).fill(0).map((e,a)=>`Test string ${a+1}`),n=new Array(8).fill(0).map((e,a)=>a+1),y=[{name:"New York",value:"nwrk"},{name:"Paris",value:"prs"},{name:"Moscow",value:"mscw"}],r=new Array(4).fill(0).map((e,a)=>({name:`Some field ${a+1}`,some:`some-field-${a+1}`})),c=new Array(7).fill(0).map((e,a)=>({name:`Key ${a+1}`,key:`key-${a+1}`})),f=V({name:"SectionExamples",data:()=>({exampleStringValue:null,exampleStringOptions:u,exampleNumberValue:n[4],exampleNumberOptions:n,exampleTrackByValue1:null,exampleTrackByOptions1:y,exampleTrackByValue2:r[0],exampleTrackByOptions2:r,exampleTrackByValue3:null,exampleTrackByOptions3:c,codeSectionExamples:`
<template>
  <it-select
    label-top="List of string"
    v-model="exampleStringValue"
    :options="exampleStringOptions"
  />
  <it-select
    label-top="List of number"
    v-model="exampleNumberValue"
    :options="exampleNumberOptions"
  />
  <it-select
    label-top="Track by 'value'(default)"
    v-model="exampleTrackByValue1"
    :options="exampleTrackByOptions1"
  />
  <it-select
    label-top="Track by 'some'"
    v-model="exampleTrackByValue2"
    track-by="some"
    :options="exampleTrackByOptions2"
  />
  <it-select
    label-top="Track by 'key'"
    v-model="exampleTrackByValue3"
    track-by="key"
    :options="exampleTrackByOptions3"
  />
</template>
      
export default {
  data: () => ({
    exampleStringValue: null,
    exampleStringOptions: [${u.map(e=>`"${e}"`)}],
    exampleNumberValue: ${n[0]},
    exampleNumberOptions: [${n}],
    exampleTrackByValue1: null,
    exampleTrackByOptions1: [${y.map(e=>JSON.stringify(e))}],
    exampleTrackByValue2: ${JSON.stringify(r[0])},
    exampleTrackByOptions2: [${r.map(e=>JSON.stringify(e))}],
    exampleTrackByValue3: null,
    exampleTrackByOptions3: [${c.map(e=>JSON.stringify(e))}],
  })
}
    `})}),O={class:"mt-2"},S={class:"mt-2"},g={class:"mt-2"},$={class:"mt-2"},N={class:"mt-2"};function v(e,a,w,E,U,A){const p=i("it-select"),s=i("it-divider"),d=k;return b(),T(d,{code:e.codeSectionExamples,title:"Examples"},{default:B(()=>[o(p,{"label-top":"List of string",modelValue:e.exampleStringValue,"onUpdate:modelValue":a[0]||(a[0]=l=>e.exampleStringValue=l),options:e.exampleStringOptions},null,8,["modelValue","options"]),t("pre",O,m(e.exampleStringValue),1),o(s),o(p,{"label-top":"List of number",modelValue:e.exampleNumberValue,"onUpdate:modelValue":a[1]||(a[1]=l=>e.exampleNumberValue=l),options:e.exampleNumberOptions},null,8,["modelValue","options"]),t("pre",S,m(e.exampleNumberValue),1),o(s),o(p,{"label-top":"Track by 'value'(default)",modelValue:e.exampleTrackByValue1,"onUpdate:modelValue":a[2]||(a[2]=l=>e.exampleTrackByValue1=l),options:e.exampleTrackByOptions1},null,8,["modelValue","options"]),t("pre",g,m(e.exampleTrackByValue1),1),o(s),o(p,{"label-top":"Track by 'some'",modelValue:e.exampleTrackByValue2,"onUpdate:modelValue":a[3]||(a[3]=l=>e.exampleTrackByValue2=l),"track-by":"some",options:e.exampleTrackByOptions2},null,8,["modelValue","options"]),t("pre",$,m(e.exampleTrackByValue2),1),o(s),o(p,{"label-top":"Track by 'key'",modelValue:e.exampleTrackByValue3,"onUpdate:modelValue":a[4]||(a[4]=l=>e.exampleTrackByValue3=l),"track-by":"key",options:e.exampleTrackByOptions3},null,8,["modelValue","options"]),t("pre",N,m(e.exampleTrackByValue3),1)]),_:1},8,["code"])}const _=x(f,[["render",v]]);export{_ as default};

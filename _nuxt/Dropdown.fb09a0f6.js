import{_ as h}from"./Demobox.vue.628e2fbf.js";import{_ as v}from"./Box.vue.5b96ac4d.js";import{_ as k}from"./PropsTable.50d7f0dc.js";import{i as y,a as g,r as i,o as D,b as C,h as t,w as e,f as o,t as f,e as T}from"./entry.48add3f8.js";import"./Prism.8f2ef735.js";const V=y({data:()=>({dropdownType:"bottom",clickable:!1,dropdownTypes:["bottom","bottom-left","bottom-right","left","left-top","left-bottom","right","right-top","right-bottom","top","top-left","top-right"],codeExample:`<it-dropdown>
  <it-button>Hover me</it-button>
  <it-dropdown-menu slot="menu">
    <it-dropdown-item>Hello</it-dropdown-item>
    <it-dropdown-item disabled>Disabled</it-dropdown-item>
    <it-dropdown-item>Cloud</it-dropdown-item>
    <it-dropdown-item divided>Divided</it-dropdown-item>
  </it-dropdown-menu>
</it-dropdown>`,dataSheet:[{property:"placement",type:["String"],default:"bottom",values:["bottom","bottom-left","bottom-right","left","left-top","left-bottom","right","right-top","right-bottom","top","top-left","top-right"],description:"Position of the dropdown"},{property:"clickable",type:["Boolean"],default:"false",values:[],description:"Dropdown activates only on click"}],dataSheet2:[{property:"disabled",type:["Boolean"],default:"false",values:[],description:"Disabled menu item"},{property:"divided",type:["Boolean"],default:"false",values:[],description:"Divides menu item from previous item"},{property:"icon",type:["String"],default:"",values:["Material Icon"],description:"Adds icon to the mmenu item"}]})}),H=T("h1",{class:"mb-4 text-2xl font-bold"},"Dropdown",-1);function S(d,p,B,$,E,N){const u=i("it-button"),l=i("it-dropdown-item"),a=i("it-dropdown-menu"),n=i("it-dropdown"),m=i("it-divider"),_=i("it-select"),b=i("it-checkbox"),w=h,s=v,c=k;return D(),C("div",null,[H,t(w,{name:"ItDropdown"},{props:e(()=>[t(_,{modelValue:d.dropdownType,"onUpdate:modelValue":p[0]||(p[0]=r=>d.dropdownType=r),placeholder:"Select placement","label-top":"Dropdown placement",options:d.dropdownTypes},null,8,["modelValue","options"]),t(b,{variant:"primary",modelValue:d.clickable,"onUpdate:modelValue":p[1]||(p[1]=r=>d.clickable=r),label:"Clickable"},null,8,["modelValue"])]),default:e(()=>[t(n,{clickable:d.clickable,placement:d.dropdownType},{menu:e(()=>[t(a,{class:"w-32"},{default:e(()=>[t(l,null,{default:e(()=>[o("Hello")]),_:1}),t(l,{disabled:""},{default:e(()=>[o("Disabled")]),_:1}),t(n,{clickable:d.clickable,placement:d.dropdownType},{menu:e(()=>[t(a,null,{default:e(()=>[t(l,{divided:""},{default:e(()=>[o("123123")]),_:1}),t(n,{clickable:d.clickable,placement:d.dropdownType},{menu:e(()=>[t(a,null,{default:e(()=>[t(l,{divided:""},{default:e(()=>[o("123123")]),_:1}),t(l,null,{default:e(()=>[o("rghberhr")]),_:1})]),_:1})]),default:e(()=>[t(l,{nested:""},{default:e(()=>[o("Cloud")]),_:1})]),_:1},8,["clickable","placement"])]),_:1})]),default:e(()=>[t(l,{nested:""},{default:e(()=>[o("Cloud")]),_:1})]),_:1},8,["clickable","placement"]),t(m),t(l,null,{default:e(()=>[o("Divided")]),_:1})]),_:1})]),default:e(()=>[t(u,null,{default:e(()=>[o(f(d.clickable?"Click":"Hover")+" me",1)]),_:1})]),_:1},8,["clickable","placement"])]),_:1}),t(s,{template:d.codeExample,title:"Example"},{default:e(()=>[t(n,null,{menu:e(()=>[t(a,null,{default:e(()=>[t(l,null,{default:e(()=>[o("Hello")]),_:1}),t(l,{disabled:""},{default:e(()=>[o("Disabled")]),_:1}),t(l,null,{default:e(()=>[o("Cloud")]),_:1}),t(l,{divided:""},{default:e(()=>[o("Divided")]),_:1})]),_:1})]),default:e(()=>[t(u,null,{default:e(()=>[o("Hover me")]),_:1})]),_:1})]),_:1},8,["template"]),t(s,{template:d.codeExample,title:"Nested"},{default:e(()=>[t(n,null,{menu:e(()=>[t(a,{class:"w-32"},{default:e(()=>[t(l,null,{default:e(()=>[o("Hello")]),_:1}),t(l,{disabled:""},{default:e(()=>[o("Disabled")]),_:1}),t(n,null,{menu:e(()=>[t(a,null,{default:e(()=>[t(l,{divided:""},{default:e(()=>[o("123123")]),_:1}),t(n,null,{menu:e(()=>[t(a,null,{default:e(()=>[t(l,{divided:""},{default:e(()=>[o("123123")]),_:1}),t(l,null,{default:e(()=>[o("rghberhr")]),_:1})]),_:1})]),default:e(()=>[t(l,{nested:""},{default:e(()=>[o("Cloud")]),_:1})]),_:1})]),_:1})]),default:e(()=>[t(l,{nested:""},{default:e(()=>[o("Cloud")]),_:1})]),_:1}),t(m),t(l,null,{default:e(()=>[o("Divided")]),_:1})]),_:1})]),default:e(()=>[t(u,null,{default:e(()=>[o(f(d.clickable?"Click":"Hover")+" me",1)]),_:1})]),_:1})]),_:1},8,["template"]),t(c,{"tag-name":"it-dropdown","data-sheet":d.dataSheet},null,8,["data-sheet"]),t(c,{"tag-name":"it-dropdown-item","data-sheet":d.dataSheet2},null,8,["data-sheet"])])}const j=g(V,[["render",S]]);export{j as default};
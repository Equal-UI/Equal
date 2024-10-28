import{_ as k}from"./zaHzddb4.js";import{_ as y}from"./DMvfu-B7.js";import{_ as g}from"./9vMGL7Wn.js";import{n as D,_ as C,p as a,o as T,c as V,a as H,b as o,w as e,d as l,t as b}from"./BZMuJF5d.js";import"./DLMznalT.js";const S=D({data:()=>({dropdownType:"bottom",clickable:!1,dropdownTypes:["bottom","bottom-left","bottom-right","left","left-top","left-bottom","right","right-top","right-bottom","top","top-left","top-right"],codeExample:`<it-dropdown>
  <it-button>Hover me</it-button>
  <it-dropdown-menu slot="menu">
    <it-dropdown-item>Hello</it-dropdown-item>
    <it-dropdown-item disabled>Disabled</it-dropdown-item>
    <it-dropdown-item>Cloud</it-dropdown-item>
    <it-dropdown-item divided>Divided</it-dropdown-item>
  </it-dropdown-menu>
</it-dropdown>`,dataSheet:[{property:"placement",type:["String"],default:"bottom",values:["bottom","bottom-left","bottom-right","left","left-top","left-bottom","right","right-top","right-bottom","top","top-left","top-right"],description:"Position of the dropdown"},{property:"clickable",type:["Boolean"],default:"false",values:[],description:"Dropdown activates only on click"}],dataSheet2:[{property:"disabled",type:["Boolean"],default:"false",values:[],description:"Disabled menu item"},{property:"divided",type:["Boolean"],default:"false",values:[],description:"Divides menu item from previous item"},{property:"icon",type:["String"],default:"",values:["Material Icon"],description:"Adds icon to the mmenu item"}]})});function B(n,t,$,E,N,I){const u=a("it-button"),d=a("it-dropdown-item"),i=a("it-dropdown-menu"),p=a("it-dropdown"),m=a("it-divider"),w=a("it-select"),v=a("it-checkbox"),_=k,s=y,f=g;return T(),V("div",null,[t[23]||(t[23]=H("h1",{class:"mb-4 text-2xl font-bold"},"Dropdown",-1)),o(_,{name:"ItDropdown"},{props:e(()=>[o(w,{modelValue:n.dropdownType,"onUpdate:modelValue":t[0]||(t[0]=r=>n.dropdownType=r),placeholder:"Select placement","label-top":"Dropdown placement",options:n.dropdownTypes},null,8,["modelValue","options"]),o(v,{variant:"primary",modelValue:n.clickable,"onUpdate:modelValue":t[1]||(t[1]=r=>n.clickable=r),label:"Clickable"},null,8,["modelValue"])]),default:e(()=>[o(p,{clickable:n.clickable,placement:n.dropdownType},{menu:e(()=>[o(i,{class:"w-32"},{default:e(()=>[o(d,null,{default:e(()=>t[2]||(t[2]=[l("Hello")])),_:1}),o(d,{disabled:""},{default:e(()=>t[3]||(t[3]=[l("Disabled")])),_:1}),o(p,{clickable:n.clickable,placement:n.dropdownType},{menu:e(()=>[o(i,null,{default:e(()=>[o(d,{divided:""},{default:e(()=>t[5]||(t[5]=[l("123123")])),_:1}),o(p,{clickable:n.clickable,placement:n.dropdownType},{menu:e(()=>[o(i,null,{default:e(()=>[o(d,{divided:""},{default:e(()=>t[7]||(t[7]=[l("123123")])),_:1}),o(d,null,{default:e(()=>t[8]||(t[8]=[l("rghberhr")])),_:1})]),_:1})]),default:e(()=>[o(d,{nested:""},{default:e(()=>t[6]||(t[6]=[l("Cloud")])),_:1})]),_:1},8,["clickable","placement"])]),_:1})]),default:e(()=>[o(d,{nested:""},{default:e(()=>t[4]||(t[4]=[l("Cloud")])),_:1})]),_:1},8,["clickable","placement"]),o(m),o(d,null,{default:e(()=>t[9]||(t[9]=[l("Divided")])),_:1})]),_:1})]),default:e(()=>[o(u,null,{default:e(()=>[l(b(n.clickable?"Click":"Hover")+" me",1)]),_:1})]),_:1},8,["clickable","placement"])]),_:1}),o(s,{template:n.codeExample,title:"Example"},{default:e(()=>[o(p,null,{menu:e(()=>[o(i,null,{default:e(()=>[o(d,null,{default:e(()=>t[11]||(t[11]=[l("Hello")])),_:1}),o(d,{disabled:""},{default:e(()=>t[12]||(t[12]=[l("Disabled")])),_:1}),o(d,null,{default:e(()=>t[13]||(t[13]=[l("Cloud")])),_:1}),o(d,{divided:""},{default:e(()=>t[14]||(t[14]=[l("Divided")])),_:1})]),_:1})]),default:e(()=>[o(u,null,{default:e(()=>t[10]||(t[10]=[l("Hover me")])),_:1})]),_:1})]),_:1},8,["template"]),o(s,{template:n.codeExample,title:"Nested"},{default:e(()=>[o(p,null,{menu:e(()=>[o(i,{class:"w-32"},{default:e(()=>[o(d,null,{default:e(()=>t[15]||(t[15]=[l("Hello")])),_:1}),o(d,{disabled:""},{default:e(()=>t[16]||(t[16]=[l("Disabled")])),_:1}),o(p,null,{menu:e(()=>[o(i,null,{default:e(()=>[o(d,{divided:""},{default:e(()=>t[18]||(t[18]=[l("123123")])),_:1}),o(p,null,{menu:e(()=>[o(i,null,{default:e(()=>[o(d,{divided:""},{default:e(()=>t[20]||(t[20]=[l("123123")])),_:1}),o(d,null,{default:e(()=>t[21]||(t[21]=[l("rghberhr")])),_:1})]),_:1})]),default:e(()=>[o(d,{nested:""},{default:e(()=>t[19]||(t[19]=[l("Cloud")])),_:1})]),_:1})]),_:1})]),default:e(()=>[o(d,{nested:""},{default:e(()=>t[17]||(t[17]=[l("Cloud")])),_:1})]),_:1}),o(m),o(d,null,{default:e(()=>t[22]||(t[22]=[l("Divided")])),_:1})]),_:1})]),default:e(()=>[o(u,null,{default:e(()=>[l(b(n.clickable?"Click":"Hover")+" me",1)]),_:1})]),_:1})]),_:1},8,["template"]),o(f,{"tag-name":"it-dropdown","data-sheet":n.dataSheet},null,8,["data-sheet"]),o(f,{"tag-name":"it-dropdown-item","data-sheet":n.dataSheet2},null,8,["data-sheet"])])}const q=C(S,[["render",B]]);export{q as default};
import{_ as y}from"./zaHzddb4.js";import{_ as h}from"./DMvfu-B7.js";import{_ as m}from"./9vMGL7Wn.js";import{n as k,_ as f,p as o,o as g,c as q,a as b,b as a,w as e}from"./BZMuJF5d.js";import"./DLMznalT.js";const C=k({data:()=>({husky:"https://randomuser.me/api/portraits/women/72.jpg",avatarSquare:!1,avatarImage:!1,avatarText:!1,alertType:"primary",alertTypes:["primary","success","danger","warning"],typesCode:`<it-avatar />
<it-avatar ||| square ||| />`,colorCode:`<it-avatar ||| color="#3051ff" ||| />
<it-avatar ||| color="#f93155" ||| />
<it-avatar ||| color="#131313" ||| />`,imageCode:`<it-avatar ||| :src="husky" ||| />
<it-avatar ||| :src="husky" ||| square />`,textCode:`<it-avatar color="#3051ff" ||| text="Yan" ||| />
<it-avatar color="#3051ff" ||| text="Yan Savinov" ||| />`,sizeCode:`<it-avatar />
<it-avatar ||| size="50px" ||| />
<it-avatar ||| size="60px" ||| />
<it-avatar ||| size="70px" ||| />`,badgeCode:`||| <it-badge value="1"> ||| 
  <it-avatar square />
||| </it-badge> ||| 

||| <it-badge point> ||| 
  <it-avatar square />
||| </it-badge> ||| `,groupCode:`<it-avatar-group>
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
</it-avatar-group>

<it-avatar-group square>
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
</it-avatar-group>

<it-divider></it-divider>

<it-avatar-group vertical>
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
</it-avatar-group>

<it-avatar-group vertical square>
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
</it-avatar-group>`,groupMaxCode:`<it-avatar-group ||| :max="3" |||>
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
</it-avatar-group>

<it-divider></it-divider>

<it-avatar-group ||| :max="3" ||| vertical>
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
  <it-avatar :src="husky" />
</it-avatar-group>`,dataSheet:[{property:"src",type:["String"],default:"-",values:[],description:"Src of avatar image"},{property:"text",type:["String"],default:"-",values:[],description:"Avatar text"},{property:"color",type:["String"],default:"-",values:["hex","rgb","hsl"],description:"Avatar color"},{property:"size",type:["String"],default:"40px",values:[],description:"Avatar size"},{property:"square",type:["Boolean"],default:"false",values:[],description:"Makes avatar square"}],dataSheetGroup:[{property:"vertical",type:["Boolean"],default:"false",values:[],description:"Avatar size for all avatars in group"},{property:"size",type:["String"],default:"40px",values:[],description:"Avatar size for all avatars in group"},{property:"square",type:["Boolean"],default:"false",values:[],description:"Makes avatars square in group"},{property:"max",type:["Number"],default:"-",values:[],description:"Limit the maximum amount of visible avatars"}]})});function S(r,s,z,V,A,I){const t=o("it-avatar"),n=o("it-checkbox"),d=y,l=h,p=o("it-badge"),u=o("it-avatar-group"),v=o("it-divider"),c=m;return g(),q("div",null,[s[3]||(s[3]=b("h1",null,"Avatar",-1)),a(d,{name:"ItAvatar"},{props:e(()=>[a(n,{variant:"primary",modelValue:r.avatarSquare,"onUpdate:modelValue":s[0]||(s[0]=i=>r.avatarSquare=i),label:"Square"},null,8,["modelValue"]),a(n,{variant:"primary",modelValue:r.avatarImage,"onUpdate:modelValue":s[1]||(s[1]=i=>r.avatarImage=i),label:"Image"},null,8,["modelValue"]),a(n,{variant:"primary",modelValue:r.avatarText,"onUpdate:modelValue":s[2]||(s[2]=i=>r.avatarText=i),label:"Text"},null,8,["modelValue"])]),default:e(()=>[a(t,{text:r.avatarText?"Yan Savinov":null,src:r.avatarImage?r.husky:null,square:r.avatarSquare},null,8,["text","src","square"])]),_:1}),a(l,{template:r.typesCode,title:"Type"},{default:e(()=>[a(t),a(t,{square:""})]),_:1},8,["template"]),a(l,{template:r.colorCode,title:"Color"},{default:e(()=>[a(t,{color:"#3051ff"}),a(t,{color:"#f93155"}),a(t,{color:"#131313"})]),_:1},8,["template"]),a(l,{id:"suda",template:r.imageCode,title:"Image"},{default:e(()=>[a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky,square:""},null,8,["src"])]),_:1},8,["template"]),a(l,{template:r.textCode,title:"Initials"},{default:e(()=>[a(t,{color:"#3051ff",text:"Yan"}),a(t,{color:"#3051ff",text:"Yan Savinov"})]),_:1},8,["template"]),a(l,{template:r.sizeCode,title:"Size"},{default:e(()=>[a(t),a(t,{size:"50px"}),a(t,{size:"60px"}),a(t,{size:"70px"})]),_:1},8,["template"]),a(l,{template:r.badgeCode,title:"With badge"},{default:e(()=>[a(p,{value:"1"},{default:e(()=>[a(t,{src:r.husky,square:""},null,8,["src"])]),_:1}),a(p,{position:"bottom-left",type:"success",point:""},{default:e(()=>[a(t,{src:r.husky,square:""},null,8,["src"])]),_:1})]),_:1},8,["template"]),a(l,{template:r.groupCode,title:"Group"},{default:e(()=>[a(u,null,{default:e(()=>[a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"])]),_:1}),a(u,{square:""},{default:e(()=>[a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"])]),_:1}),a(v),a(u,{vertical:""},{default:e(()=>[a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"])]),_:1}),a(u,{vertical:"",square:""},{default:e(()=>[a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"])]),_:1})]),_:1},8,["template"]),a(l,{template:r.groupMaxCode,title:"Group with avatars limit"},{default:e(()=>[a(u,{max:3},{default:e(()=>[a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"])]),_:1}),a(v),a(u,{max:3,vertical:""},{default:e(()=>[a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"])]),_:1})]),_:1},8,["template"]),a(c,{"tag-name":"it-avatar","data-sheet":r.dataSheet},null,8,["data-sheet"]),a(c,{"tag-name":"it-avatar-group","data-sheet":r.dataSheetGroup},null,8,["data-sheet"])])}const G=f(C,[["render",S]]);export{G as default};

import{_ as y}from"./Demobox.vue.628e2fbf.js";import{_ as h}from"./Box.vue.5b96ac4d.js";import{_ as m}from"./PropsTable.50d7f0dc.js";import{i as k,a as f,r as o,o as g,b as q,h as a,w as e,e as b}from"./entry.48add3f8.js";import"./Prism.8f2ef735.js";const C=k({data:()=>({husky:"https://randomuser.me/api/portraits/women/72.jpg",avatarSquare:!1,avatarImage:!1,avatarText:!1,alertType:"primary",alertTypes:["primary","success","danger","warning"],typesCode:`<it-avatar />
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
</it-avatar-group>`,dataSheet:[{property:"src",type:["String"],default:"-",values:[],description:"Src of avatar image"},{property:"text",type:["String"],default:"-",values:[],description:"Avatar text"},{property:"color",type:["String"],default:"-",values:["hex","rgb","hsl"],description:"Avatar color"},{property:"size",type:["String"],default:"40px",values:[],description:"Avatar size"},{property:"square",type:["Boolean"],default:"false",values:[],description:"Makes avatar square"}],dataSheetGroup:[{property:"vertical",type:["Boolean"],default:"false",values:[],description:"Avatar size for all avatars in group"},{property:"size",type:["String"],default:"40px",values:[],description:"Avatar size for all avatars in group"},{property:"square",type:["Boolean"],default:"false",values:[],description:"Makes avatars square in group"},{property:"max",type:["Number"],default:"-",values:[],description:"Limit the maximum amount of visible avatars"}]})}),S=b("h1",null,"Avatar",-1);function z(r,l,V,A,I,T){const t=o("it-avatar"),n=o("it-checkbox"),d=y,s=h,p=o("it-badge"),u=o("it-avatar-group"),v=o("it-divider"),c=m;return g(),q("div",null,[S,a(d,{name:"ItAvatar"},{props:e(()=>[a(n,{variant:"primary",modelValue:r.avatarSquare,"onUpdate:modelValue":l[0]||(l[0]=i=>r.avatarSquare=i),label:"Square"},null,8,["modelValue"]),a(n,{variant:"primary",modelValue:r.avatarImage,"onUpdate:modelValue":l[1]||(l[1]=i=>r.avatarImage=i),label:"Image"},null,8,["modelValue"]),a(n,{variant:"primary",modelValue:r.avatarText,"onUpdate:modelValue":l[2]||(l[2]=i=>r.avatarText=i),label:"Text"},null,8,["modelValue"])]),default:e(()=>[a(t,{text:r.avatarText?"Yan Savinov":null,src:r.avatarImage?r.husky:null,square:r.avatarSquare},null,8,["text","src","square"])]),_:1}),a(s,{template:r.typesCode,title:"Type"},{default:e(()=>[a(t),a(t,{square:""})]),_:1},8,["template"]),a(s,{template:r.colorCode,title:"Color"},{default:e(()=>[a(t,{color:"#3051ff"}),a(t,{color:"#f93155"}),a(t,{color:"#131313"})]),_:1},8,["template"]),a(s,{id:"suda",template:r.imageCode,title:"Image"},{default:e(()=>[a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky,square:""},null,8,["src"])]),_:1},8,["template"]),a(s,{template:r.textCode,title:"Initials"},{default:e(()=>[a(t,{color:"#3051ff",text:"Yan"}),a(t,{color:"#3051ff",text:"Yan Savinov"})]),_:1},8,["template"]),a(s,{template:r.sizeCode,title:"Size"},{default:e(()=>[a(t),a(t,{size:"50px"}),a(t,{size:"60px"}),a(t,{size:"70px"})]),_:1},8,["template"]),a(s,{template:r.badgeCode,title:"With badge"},{default:e(()=>[a(p,{value:"1"},{default:e(()=>[a(t,{src:r.husky,square:""},null,8,["src"])]),_:1}),a(p,{position:"bottom-left",type:"success",point:""},{default:e(()=>[a(t,{src:r.husky,square:""},null,8,["src"])]),_:1})]),_:1},8,["template"]),a(s,{template:r.groupCode,title:"Group"},{default:e(()=>[a(u,null,{default:e(()=>[a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"])]),_:1}),a(u,{square:""},{default:e(()=>[a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"])]),_:1}),a(v),a(u,{vertical:""},{default:e(()=>[a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"])]),_:1}),a(u,{vertical:"",square:""},{default:e(()=>[a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"])]),_:1})]),_:1},8,["template"]),a(s,{template:r.groupMaxCode,title:"Group with avatars limit"},{default:e(()=>[a(u,{max:3},{default:e(()=>[a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"])]),_:1}),a(v),a(u,{max:3,vertical:""},{default:e(()=>[a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"])]),_:1})]),_:1},8,["template"]),a(c,{"tag-name":"it-avatar","data-sheet":r.dataSheet},null,8,["data-sheet"]),a(c,{"tag-name":"it-avatar-group","data-sheet":r.dataSheetGroup},null,8,["data-sheet"])])}const M=f(C,[["render",z]]);export{M as default};

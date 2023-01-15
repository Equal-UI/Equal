import{_ as h}from"./Demobox.vue.5a882430.js";import{_ as k}from"./Box.vue.2c858e8f.js";import m from"./PropsTable.da59c9b7.js";import{v as p}from"./dataSheetVariantProps.e5a5e58f.js";import{i as f,a as g,b as q,f as a,w as s,e as b,o as C,r as i}from"./entry.3ce47f5d.js";import"./Prism.b7ac80f1.js";const S=f({data:()=>({husky:"https://randomuser.me/api/portraits/women/72.jpg",avatarSquare:!1,avatarImage:!1,avatarText:!1,alertType:"primary",alertTypes:["primary","success","danger","warning"],typesCode:`<it-avatar />
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
</it-avatar-group>`,dataSheet:p.concat([{property:"src",type:["String"],default:"-",values:[],description:"Src of avatar image"},{property:"text",type:["String"],default:"-",values:[],description:"Avatar text"},{property:"color",type:["String"],default:"-",values:["hex","rgb","hsl"],description:"Avatar color"},{property:"size",type:["String"],default:"40px",values:[],description:"Avatar size"},{property:"square",type:["Boolean"],default:"false",values:[],description:"Makes avatar square"}]),dataSheetGroup:p.concat([{property:"vertical",type:["Boolean"],default:"false",values:[],description:"Avatar size for all avatars in group"},{property:"size",type:["String"],default:"40px",values:[],description:"Avatar size for all avatars in group"},{property:"square",type:["Boolean"],default:"false",values:[],description:"Makes avatars square in group"},{property:"max",type:["Number"],default:"-",values:[],description:"Limit the maximum amount of visible avatars"}])})}),z=b("h1",null,"Avatar",-1);function V(r,u,T,A,B,I){const t=i("it-avatar"),n=i("it-checkbox"),y=h,e=k,c=i("it-badge"),l=i("it-avatar-group"),v=i("it-divider"),d=m;return C(),q("div",null,[z,a(y,{name:"it-avatar"},{props:s(()=>[a(n,{variant:"primary",modelValue:r.avatarSquare,"onUpdate:modelValue":u[0]||(u[0]=o=>r.avatarSquare=o),label:"Square"},null,8,["modelValue"]),a(n,{variant:"primary",modelValue:r.avatarImage,"onUpdate:modelValue":u[1]||(u[1]=o=>r.avatarImage=o),label:"Image"},null,8,["modelValue"]),a(n,{variant:"primary",modelValue:r.avatarText,"onUpdate:modelValue":u[2]||(u[2]=o=>r.avatarText=o),label:"Text"},null,8,["modelValue"])]),default:s(()=>[a(t,{text:r.avatarText?"Yan Savinov":null,src:r.avatarImage?r.husky:null,square:r.avatarSquare},null,8,["text","src","square"])]),_:1}),a(e,{code:r.typesCode,title:"Type"},{default:s(()=>[a(t),a(t,{square:""})]),_:1},8,["code"]),a(e,{code:r.colorCode,title:"Color"},{default:s(()=>[a(t,{color:"#3051ff"}),a(t,{color:"#f93155"}),a(t,{color:"#131313"})]),_:1},8,["code"]),a(e,{id:"suda",code:r.imageCode,title:"Image"},{default:s(()=>[a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky,square:""},null,8,["src"])]),_:1},8,["code"]),a(e,{code:r.textCode,title:"Initials"},{default:s(()=>[a(t,{color:"#3051ff",text:"Yan"}),a(t,{color:"#3051ff",text:"Yan Savinov"})]),_:1},8,["code"]),a(e,{code:r.sizeCode,title:"Size"},{default:s(()=>[a(t),a(t,{size:"50px"}),a(t,{size:"60px"}),a(t,{size:"70px"})]),_:1},8,["code"]),a(e,{code:r.badgeCode,title:"With badge"},{default:s(()=>[a(c,{value:"1"},{default:s(()=>[a(t,{src:r.husky,square:""},null,8,["src"])]),_:1}),a(c,{position:"bottom-left",type:"success",point:""},{default:s(()=>[a(t,{src:r.husky,square:""},null,8,["src"])]),_:1})]),_:1},8,["code"]),a(e,{code:r.groupCode,title:"Group"},{default:s(()=>[a(l,null,{default:s(()=>[a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"])]),_:1}),a(l,{square:""},{default:s(()=>[a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"])]),_:1}),a(v),a(l,{vertical:""},{default:s(()=>[a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"])]),_:1}),a(l,{vertical:"",square:""},{default:s(()=>[a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"])]),_:1})]),_:1},8,["code"]),a(e,{code:r.groupMaxCode,title:"Group with avatars limit"},{default:s(()=>[a(l,{max:3},{default:s(()=>[a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"])]),_:1}),a(v),a(l,{max:3,vertical:""},{default:s(()=>[a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"]),a(t,{src:r.husky},null,8,["src"])]),_:1})]),_:1},8,["code"]),a(d,{"tag-name":"it-avatar","data-sheet":r.dataSheet},null,8,["data-sheet"]),a(d,{"tag-name":"it-avatar-group","data-sheet":r.dataSheetGroup},null,8,["data-sheet"])])}const U=g(S,[["render",V]]);export{U as default};

import{_}from"./Box.vue.a7360a87.js";import{_ as R}from"./PropsTable.553662c1.js";import{i as C,a as S,b as m,h as a,w as s,o as p,f as n,F as D,q as $,e as l,t as y,s as U,x as z,r as w}from"./entry.15f6290b.js";import"./Prism.5971c60e.js";const L=C({data:()=>({drawerVisible:!1,drawerLeftVisible:!1,nestedDrawer:!1,nestedDrawer2:!1,nestedDrawer3:!1,nestedDrawer4:!1,nestedDrawerR:!1,nestedDrawerR2:!1,nestedDrawerR3:!1,nestedDrawerR4:!1,fakeUsers:[],nestedCode:`
<it-button variant="primary" @click="nestedDrawer = true">Left Nested drawer</it-button>
<it-button variant="primary" @click="nestedDrawerR = true">Right Nested drawers</it-button>

<it-drawer v-model="nestedDrawer" placement="left">
  <it-button @click="nestedDrawer2 = true">Show nested</it-button>
</it-drawer>
<it-drawer v-model="nestedDrawer2" placement="left">
  <it-button @click="nestedDrawer3 = true">Show nested</it-button>
</it-drawer>
<it-drawer v-model="nestedDrawer3" placement="left">
  <it-button @click="nestedDrawer4 = true">Show nested</it-button>
</it-drawer>
<it-drawer v-model="nestedDrawer4" placement="left">
  <img class="w-full" src="/finally.png" />
</it-drawer>
<it-drawer v-model="nestedDrawerR">
  <it-button @click="nestedDrawerR2 = true">Show nested</it-button>
</it-drawer>
<it-drawer v-model="nestedDrawerR2">
  <it-button @click="nestedDrawerR3 = true">Show nested</it-button>
</it-drawer>
<it-drawer v-model="nestedDrawerR3">
  <it-button @click="nestedDrawerR4 = true">Show nested</it-button>
</it-drawer>
<it-drawer v-model="nestedDrawerR4">
  <img class="w-full" src="/finally.png" />
</it-drawer>`,exampleCode:`<it-button @click="drawerLeftVisible = true" variant="primary">
    Left drawer
    </it-button>

<it-button @click="drawerVisible = true" variant="primary">
  Right drawer
</it-button>

<it-drawer v-model="drawerVisible">
  <div class="p-6 flex flex-row items-center relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-7 w-7 rounded contacts"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clip-rule="evenodd"
        />
      </svg>
    <h3>
      Contacts
    </h3>
  </div>
  <it-divider />
  <template v-for="(user, i) in fakeUsers" :key="i">
    <div>
      <it-avatar :src="user.avatar" />
      <div>
        <p style="font-weight: 500">{{ user.name }}</p>
        <p style="font-size: 14px; font-weight: 500; color: #787f8a">
          @{{ user.username }}
        </p>
      </div>
      <it-button icon="call" variant="primary"></it-button>
    </div>
    <it-divider />
  </template>
</it-drawer>

<it-drawer placement="left" v-model="drawerLeftVisible">
  <div class="p-6 flex flex-row items-center relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-7 w-7 rounded contacts"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clip-rule="evenodd"
        />
      </svg>
    <h3>
      Contacts
    </h3>
  </div>
  <it-divider />
  <template v-for="(user, i) in fakeUsers" :key="i">
    <div>
      <it-avatar :src="user.avatar" />
      <div>
        <p style="font-weight: 500">{{ user.name }}</p>
        <p style="font-size: 14px; font-weight: 500; color: #787f8a">
          @{{ user.username }}
        </p>
      </div>
      <it-button variant="primary">
      </it-button>
    </div>
    <it-divider />
  </template>
</it-drawer>`,dataSheet:[{property:"width",type:["String"],default:"500px",values:[],description:"Drawer width"},{property:"placement",type:["String"],default:"right",values:["right","left"],description:"Drawer position"},{property:"closable-mask",type:["Boolean"],default:"true",values:[],description:"Close drawer on the mask click"},{property:"hide-mask",type:["Boolean"],default:"false",values:[],description:"Hides drawer mask"},{property:"v-model",type:["Boolean"],default:"false",values:[],description:"Drawer v-model value"}],slotSheet:[{name:"default",description:"Drawer body"}]}),async mounted(){const e=await(await fetch("https://randomuser.me/api/?inc=picture,name,login&results=12")).json();this.fakeUsers=e.results.map(u=>{const{first:f,last:v}=u.name;return{name:`${f} ${v}`,avatar:u.picture.medium,username:u.login.username}})}}),V=""+globalThis.__publicAssetsURL("finally.png");const o=t=>(U("data-v-33dd8d85"),t=t(),z(),t),B=o(()=>l("h1",{class:"mb-4 text-2xl font-bold"},"Drawer",-1)),N=o(()=>l("p",{class:"mx-6"}," This component is intended to be used only with wide screens ",-1)),x=o(()=>l("div",{class:"relative flex flex-row items-center p-6"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",class:"contacts h-7 w-7 rounded",viewBox:"0 0 20 20",fill:"currentColor"},[l("path",{"fill-rule":"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z","clip-rule":"evenodd"})]),l("h3",null,"Contacts")],-1)),j={class:"flex flex-row justify-between px-6"},H={class:"flex flex-1 flex-col justify-between pl-3"},I={class:"font-medium"},M={style:{color:"#787f8a"},class:"text-sm font-medium"},q=o(()=>l("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[l("path",{d:"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"})],-1)),T=o(()=>l("p",{class:"mx-6"}," Nested drawers isn't a good idea for your interface, but we implemented it anyway ",-1)),F={class:"mt-12 flex justify-center"},A={class:"mt-12 flex justify-center"},E={class:"mt-12 flex justify-center"},G=o(()=>l("img",{class:"w-full",src:V},null,-1)),J={class:"mt-12 flex justify-center"},K={class:"mt-12 flex justify-center"},O={class:"mt-12 flex justify-center"},P=o(()=>l("img",{class:"w-full",src:V},null,-1));function Q(t,e,u,f,v,W){const d=w("it-button"),i=w("it-drawer"),c=w("it-divider"),g=w("it-avatar"),b=_,h=R;return p(),m("div",null,[B,a(b,{template:t.exampleCode,title:"Drawer"},{description:s(()=>[N]),default:s(()=>[a(d,{variant:"primary",onClick:e[0]||(e[0]=r=>t.drawerLeftVisible=!0)},{default:s(()=>[n(" Left drawer ")]),_:1}),a(d,{variant:"primary",onClick:e[1]||(e[1]=r=>t.drawerVisible=!0)},{default:s(()=>[n(" Right drawer ")]),_:1}),a(i,{modelValue:t.drawerVisible,"onUpdate:modelValue":e[2]||(e[2]=r=>t.drawerVisible=r)},null,8,["modelValue"]),a(i,{modelValue:t.drawerLeftVisible,"onUpdate:modelValue":e[3]||(e[3]=r=>t.drawerLeftVisible=r),placement:"left"},{default:s(()=>[x,a(c,{class:"mb-2"}),(p(!0),m(D,null,$(t.fakeUsers,(r,k)=>(p(),m(D,{key:k},[l("div",j,[a(g,{src:r.avatar},null,8,["src"]),l("div",H,[l("p",I,y(r.name),1),l("p",M," @"+y(r.username),1)]),a(d,{variant:"primary"},{icon:s(()=>[q]),_:1})]),a(c,{class:"mt-2 mb-2"})],64))),128))]),_:1},8,["modelValue"])]),_:1},8,["template"]),a(b,{template:t.nestedCode,title:"Nested Drawers"},{description:s(()=>[T]),default:s(()=>[a(d,{variant:"primary",onClick:e[4]||(e[4]=r=>t.nestedDrawer=!0)},{default:s(()=>[n(" Left Nested drawer ")]),_:1}),a(d,{variant:"primary",onClick:e[5]||(e[5]=r=>t.nestedDrawerR=!0)},{default:s(()=>[n(" Right Nested drawers ")]),_:1}),a(i,{modelValue:t.nestedDrawer,"onUpdate:modelValue":e[7]||(e[7]=r=>t.nestedDrawer=r),placement:"left"},{default:s(()=>[l("div",F,[a(d,{size:"big",onClick:e[6]||(e[6]=r=>t.nestedDrawer2=!0)},{default:s(()=>[n(" Show nested ")]),_:1})])]),_:1},8,["modelValue"]),a(i,{modelValue:t.nestedDrawer2,"onUpdate:modelValue":e[9]||(e[9]=r=>t.nestedDrawer2=r),placement:"left"},{default:s(()=>[l("div",A,[a(d,{size:"big",onClick:e[8]||(e[8]=r=>t.nestedDrawer3=!0)},{default:s(()=>[n(" Show nested ")]),_:1})])]),_:1},8,["modelValue"]),a(i,{modelValue:t.nestedDrawer3,"onUpdate:modelValue":e[11]||(e[11]=r=>t.nestedDrawer3=r),placement:"left"},{default:s(()=>[l("div",E,[a(d,{size:"big",onClick:e[10]||(e[10]=r=>t.nestedDrawer4=!0)},{default:s(()=>[n(" Show nested ")]),_:1})])]),_:1},8,["modelValue"]),a(i,{modelValue:t.nestedDrawer4,"onUpdate:modelValue":e[12]||(e[12]=r=>t.nestedDrawer4=r),placement:"left"},{default:s(()=>[G]),_:1},8,["modelValue"]),a(i,{modelValue:t.nestedDrawerR,"onUpdate:modelValue":e[14]||(e[14]=r=>t.nestedDrawerR=r)},{default:s(()=>[l("div",J,[a(d,{size:"big",onClick:e[13]||(e[13]=r=>t.nestedDrawerR2=!0)},{default:s(()=>[n(" Show nested ")]),_:1})])]),_:1},8,["modelValue"]),a(i,{modelValue:t.nestedDrawerR2,"onUpdate:modelValue":e[16]||(e[16]=r=>t.nestedDrawerR2=r)},{default:s(()=>[l("div",K,[a(d,{size:"big",onClick:e[15]||(e[15]=r=>t.nestedDrawerR3=!0)},{default:s(()=>[n(" Show nested ")]),_:1})])]),_:1},8,["modelValue"]),a(i,{modelValue:t.nestedDrawerR3,"onUpdate:modelValue":e[18]||(e[18]=r=>t.nestedDrawerR3=r)},{default:s(()=>[l("div",O,[a(d,{size:"big",onClick:e[17]||(e[17]=r=>t.nestedDrawerR4=!0)},{default:s(()=>[n(" Show nested ")]),_:1})])]),_:1},8,["modelValue"]),a(i,{modelValue:t.nestedDrawerR4,"onUpdate:modelValue":e[19]||(e[19]=r=>t.nestedDrawerR4=r)},{default:s(()=>[P]),_:1},8,["modelValue"])]),_:1},8,["template"]),a(h,{"data-sheet":t.dataSheet,"slot-sheet":t.slotSheet},null,8,["data-sheet","slot-sheet"])])}const te=S(L,[["render",Q],["__scopeId","data-v-33dd8d85"]]);export{te as default};

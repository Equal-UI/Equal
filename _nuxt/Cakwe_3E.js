import{_ as C}from"./DMvfu-B7.js";import{_ as S}from"./9vMGL7Wn.js";import{n as $,x as U,_ as z,p as u,o as w,c as m,a as l,b as a,w as s,d as i,F as D,y as L,t as y}from"./BZMuJF5d.js";import"./DLMznalT.js";const B=$({data:()=>({drawerVisible:!1,drawerLeftVisible:!1,nestedDrawer:!1,nestedDrawer2:!1,nestedDrawer3:!1,nestedDrawer4:!1,nestedDrawerR:!1,nestedDrawerR2:!1,nestedDrawerR3:!1,nestedDrawerR4:!1,fakeUsers:[],nestedCode:`
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
</it-drawer>`,dataSheet:[{property:"width",type:["String"],default:"500px",values:[],description:"Drawer width"},{property:"placement",type:["String"],default:"right",values:["right","left"],description:"Drawer position"},{property:"closable-mask",type:["Boolean"],default:"true",values:[],description:"Close drawer on the mask click"},{property:"hide-mask",type:["Boolean"],default:"false",values:[],description:"Hides drawer mask"},{property:"v-model",type:["Boolean"],default:"false",values:[],description:"Drawer v-model value"}],slotSheet:[{name:"default",description:"Drawer body"}]}),async mounted(){const e=await(await fetch("https://randomuser.me/api/?inc=picture,name,login&results=12")).json();this.fakeUsers=e.results.map(o=>{const{first:p,last:f}=o.name;return{name:`${p} ${f}`,avatar:o.picture.medium,username:o.login.username}})}}),V=U("/finally.png"),N={class:"flex flex-row justify-between px-6"},j={class:"flex flex-1 flex-col justify-between pl-3"},x={class:"font-medium"},H={style:{color:"#787f8a"},class:"text-sm font-medium"},M={class:"mt-12 flex justify-center"},q={class:"mt-12 flex justify-center"},F={class:"mt-12 flex justify-center"},T={class:"mt-12 flex justify-center"},A={class:"mt-12 flex justify-center"},E={class:"mt-12 flex justify-center"};function I(t,e,o,p,f,G){const d=u("it-button"),n=u("it-drawer"),v=u("it-divider"),g=u("it-avatar"),b=C,k=S;return w(),m("div",null,[e[36]||(e[36]=l("h1",{class:"mb-4 text-2xl font-bold"},"Drawer",-1)),a(b,{template:t.exampleCode,title:"Drawer"},{description:s(()=>e[20]||(e[20]=[l("p",{class:"mx-6"}," This component is intended to be used only with wide screens ",-1)])),default:s(()=>[a(d,{variant:"primary",onClick:e[0]||(e[0]=r=>t.drawerLeftVisible=!0)},{default:s(()=>e[21]||(e[21]=[i(" Left drawer ")])),_:1}),a(d,{variant:"primary",onClick:e[1]||(e[1]=r=>t.drawerVisible=!0)},{default:s(()=>e[22]||(e[22]=[i(" Right drawer ")])),_:1}),a(n,{modelValue:t.drawerVisible,"onUpdate:modelValue":e[2]||(e[2]=r=>t.drawerVisible=r)},null,8,["modelValue"]),a(n,{modelValue:t.drawerLeftVisible,"onUpdate:modelValue":e[3]||(e[3]=r=>t.drawerLeftVisible=r),placement:"left"},{default:s(()=>[e[24]||(e[24]=l("div",{class:"relative flex flex-row items-center p-6"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",class:"contacts h-7 w-7 rounded",viewBox:"0 0 20 20",fill:"currentColor"},[l("path",{"fill-rule":"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z","clip-rule":"evenodd"})]),l("h3",null,"Contacts")],-1)),a(v,{class:"mb-2"}),(w(!0),m(D,null,L(t.fakeUsers,(r,R)=>(w(),m(D,{key:R},[l("div",N,[a(g,{src:r.avatar},null,8,["src"]),l("div",j,[l("p",x,y(r.name),1),l("p",H," @"+y(r.username),1)]),a(d,{variant:"primary"},{icon:s(()=>e[23]||(e[23]=[l("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[l("path",{d:"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"})],-1)])),_:1})]),a(v,{class:"mt-2 mb-2"})],64))),128))]),_:1},8,["modelValue"])]),_:1},8,["template"]),a(b,{template:t.nestedCode,title:"Nested Drawers"},{description:s(()=>e[25]||(e[25]=[l("p",{class:"mx-6"}," Nested drawers isn't a good idea for your interface, but we implemented it anyway ",-1)])),default:s(()=>[a(d,{variant:"primary",onClick:e[4]||(e[4]=r=>t.nestedDrawer=!0)},{default:s(()=>e[26]||(e[26]=[i(" Left Nested drawer ")])),_:1}),a(d,{variant:"primary",onClick:e[5]||(e[5]=r=>t.nestedDrawerR=!0)},{default:s(()=>e[27]||(e[27]=[i(" Right Nested drawers ")])),_:1}),a(n,{modelValue:t.nestedDrawer,"onUpdate:modelValue":e[7]||(e[7]=r=>t.nestedDrawer=r),placement:"left"},{default:s(()=>[l("div",M,[a(d,{size:"big",onClick:e[6]||(e[6]=r=>t.nestedDrawer2=!0)},{default:s(()=>e[28]||(e[28]=[i(" Show nested ")])),_:1})])]),_:1},8,["modelValue"]),a(n,{modelValue:t.nestedDrawer2,"onUpdate:modelValue":e[9]||(e[9]=r=>t.nestedDrawer2=r),placement:"left"},{default:s(()=>[l("div",q,[a(d,{size:"big",onClick:e[8]||(e[8]=r=>t.nestedDrawer3=!0)},{default:s(()=>e[29]||(e[29]=[i(" Show nested ")])),_:1})])]),_:1},8,["modelValue"]),a(n,{modelValue:t.nestedDrawer3,"onUpdate:modelValue":e[11]||(e[11]=r=>t.nestedDrawer3=r),placement:"left"},{default:s(()=>[l("div",F,[a(d,{size:"big",onClick:e[10]||(e[10]=r=>t.nestedDrawer4=!0)},{default:s(()=>e[30]||(e[30]=[i(" Show nested ")])),_:1})])]),_:1},8,["modelValue"]),a(n,{modelValue:t.nestedDrawer4,"onUpdate:modelValue":e[12]||(e[12]=r=>t.nestedDrawer4=r),placement:"left"},{default:s(()=>e[31]||(e[31]=[l("img",{class:"w-full",src:V},null,-1)])),_:1},8,["modelValue"]),a(n,{modelValue:t.nestedDrawerR,"onUpdate:modelValue":e[14]||(e[14]=r=>t.nestedDrawerR=r)},{default:s(()=>[l("div",T,[a(d,{size:"big",onClick:e[13]||(e[13]=r=>t.nestedDrawerR2=!0)},{default:s(()=>e[32]||(e[32]=[i(" Show nested ")])),_:1})])]),_:1},8,["modelValue"]),a(n,{modelValue:t.nestedDrawerR2,"onUpdate:modelValue":e[16]||(e[16]=r=>t.nestedDrawerR2=r)},{default:s(()=>[l("div",A,[a(d,{size:"big",onClick:e[15]||(e[15]=r=>t.nestedDrawerR3=!0)},{default:s(()=>e[33]||(e[33]=[i(" Show nested ")])),_:1})])]),_:1},8,["modelValue"]),a(n,{modelValue:t.nestedDrawerR3,"onUpdate:modelValue":e[18]||(e[18]=r=>t.nestedDrawerR3=r)},{default:s(()=>[l("div",E,[a(d,{size:"big",onClick:e[17]||(e[17]=r=>t.nestedDrawerR4=!0)},{default:s(()=>e[34]||(e[34]=[i(" Show nested ")])),_:1})])]),_:1},8,["modelValue"]),a(n,{modelValue:t.nestedDrawerR4,"onUpdate:modelValue":e[19]||(e[19]=r=>t.nestedDrawerR4=r)},{default:s(()=>e[35]||(e[35]=[l("img",{class:"w-full",src:V},null,-1)])),_:1},8,["modelValue"])]),_:1},8,["template"]),a(k,{"data-sheet":t.dataSheet,"slot-sheet":t.slotSheet},null,8,["data-sheet","slot-sheet"])])}const Q=z(B,[["render",I],["__scopeId","data-v-33dd8d85"]]);export{Q as default};

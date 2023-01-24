import{_ as u}from"./Box.vue.988589ab.js";import c from"./PropsTable.d2db56e6.js";import{a as f,l as v,b as _,h as e,w as t,e as i,o as b,f as o,i as s}from"./entry.4669953c.js";import"./Prism.cf410c9f.js";const g=f({data:()=>({removed:!1,exampleCode:`<it-popover :disabled="removed">
  <it-button>Delete</it-button>
  <template #content>
    <div>
      <p style="margin-bottom: 8px">Please confirm deletion</p>
      <div style="display: flex; justify-content: flex-end">
        <it-button size="small">No</it-button>
        <it-button
          style="margin-left: 8px"
          size="small"
          type="danger"
          @click="(removed = true), $Message.success({ text: 'Deleted', duration: 3000 })"
          >Yes</it-button
        >
      </div>
    </div>
  </template>
</it-popover>`,positionsCode:`<it-button-group vertical>
  <it-popover placement="top">
    <it-button>Top</it-button>
    <template #content>Top popover</template>
  </it-popover>

  <it-popover placement="right">
    <it-button>Right</it-button>
    <template #content>Right popover</template>
  </it-popover>

  <it-popover placement="left">
    <it-button>Left</it-button>
    <template #content>Left popover</template>
  </it-popover>

  <it-popover placement="bottom">
    <it-button>Bottom</it-button>
    <template #content>Bottom popover</template>
  </it-popover>
</it-button-group>`,imageCode:`<it-popover placement="top" borderless>
  <it-button>Show logo</it-button>

  <template #content><img width="150" src="https://pbs.twimg.com/profile_images/1063458070775427072/HAgejyos_400x400.jpg" alt="logo"></template>
</it-popover>`,dataSheet:[{property:"placement",type:["String"],default:"top",values:["top","bottom","right","left","bottom-left","bottom-right","left-top","left-bottom","right-top","right-bottom","top-left","top-right"],description:"Position of the popover"},{property:"borderless",type:["Boolean"],default:"false",values:[],description:"Remove paddings"},{property:"disabled",type:["Boolean"],default:"false",values:[],description:"Disables popover"}],dataSheetGroup:[{property:"size",type:["String"],default:"40px",values:[],description:"Avatar size for all avatars in group"},{property:"square",type:["Boolean"],default:"false",values:[],description:"Makes avatars square in group"},{property:"max",type:["Number"],default:"-",values:[],description:"Limit the maximum amount of visible avatars"}],slotSheet:[{name:"default",description:"Active element for popover"},{name:"content",description:"Content of the popover"}]})}),h=i("h1",{class:"mb-4 text-2xl font-bold"},"Popover",-1),y={class:"p-1"},x=i("p",{class:"mb-2"},"Please confirm deletion",-1),C={class:"flex justify-end"},B=i("p",{class:"px-6"}," Click to see the popover. There are 12 positions available for popover, most used are shown in the example ",-1),w=i("p",{class:"px-6"}," You can disable paddings inside popover and show image ",-1),S=i("img",{width:"150",src:"https://pbs.twimg.com/profile_images/1063458070775427072/HAgejyos_400x400.jpg",alt:"logo"},null,-1);function $(p,r,j,k,z,N){const a=s("it-button"),l=s("it-popover"),n=u,d=s("it-button-group"),m=c;return b(),_("div",null,[h,e(n,{code:p.exampleCode,title:"Example"},{default:t(()=>[e(l,{disabled:p.removed},{content:t(()=>[i("div",y,[x,i("div",C,[e(a,{variant:"text",size:"small"},{default:t(()=>[o("No")]),_:1}),e(a,{class:"ml-2",size:"small",variant:"danger",onClick:r[0]||(r[0]=P=>{p.removed=!0,p.$Message({text:"Deleted",duration:3e3})})},{default:t(()=>[o(" Yes ")]),_:1})])])]),default:t(()=>[e(a,null,{default:t(()=>[o("Delete")]),_:1})]),_:1},8,["disabled"])]),_:1},8,["code"]),e(n,{code:p.positionsCode,title:"Positions"},{description:t(()=>[B]),default:t(()=>[e(d,{vertical:""},{default:t(()=>[e(l,{placement:"top"},{content:t(()=>[o("Top popover")]),default:t(()=>[e(a,null,{default:t(()=>[o("Top")]),_:1})]),_:1}),e(l,{placement:"right"},{content:t(()=>[o("Right popover")]),default:t(()=>[e(a,null,{default:t(()=>[o("Right")]),_:1})]),_:1}),e(l,{placement:"left"},{content:t(()=>[o("Left popover")]),default:t(()=>[e(a,null,{default:t(()=>[o("Left")]),_:1})]),_:1}),e(l,{placement:"bottom"},{content:t(()=>[o("Bottom popover")]),default:t(()=>[e(a,null,{default:t(()=>[o("Bottom")]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(n,{code:p.imageCode,title:"Image"},{description:t(()=>[w]),default:t(()=>[e(l,{placement:"top",borderless:""},{content:t(()=>[S]),default:t(()=>[e(a,null,{default:t(()=>[o("Show image")]),_:1})]),_:1})]),_:1},8,["code"]),e(m,{"tag-name":"it-popover","data-sheet":p.dataSheet,"slot-sheet":p.slotSheet},null,8,["data-sheet","slot-sheet"])])}const A=v(g,[["render",$]]);export{A as default};
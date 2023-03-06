import{_ as u}from"./Box.vue.20a663c4.js";import{_ as c}from"./PropsTable.20a3c0c8.js";import{i as v,a as f,b as _,h as e,w as t,e as n,o as b,f as o,B as h,r as s}from"./entry.e6c866a5.js";import"./Prism.e5831eb8.js";const g=v({data:()=>({removed:!1,exampleCode:`<it-popover :disabled="removed">
  <it-button>Delete</it-button>
  <template #content>
    <div class="p-1">
      <p class="mb-2">Please confirm deletion</p>
      <div class="flex justify-end gap-2">
        <it-button variant="text" size="small">No</it-button>
        <it-button
          size="small"
          variant="danger"
          @click="
            ;(removed = true),
              notification({
                text: 'Deleted',
                duration: 3000,
                placement: 'top',
                variant: 'danger',
              })
          "
        >
          Yes
        </it-button>
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
</it-button-group>`,imageCode:`<it-popover placement="top">
  <it-button>Show logo</it-button>

  <template #content>
    <img
      width="150"
      src="/logo.svg"
      alt="logo"
    />
  </template>
</it-popover>`,dataSheet:[{property:"placement",type:["String"],default:"top",values:["top","bottom","right","left","bottom-left","bottom-right","left-top","left-bottom","right-top","right-bottom","top-left","top-right"],description:"Position of the popover"},{property:"disabled",type:["Boolean"],default:"false",values:[],description:"Disables popover"}],dataSheetGroup:[{property:"size",type:["String"],default:"40px",values:[],description:"Avatar size for all avatars in group"},{property:"square",type:["Boolean"],default:"false",values:[],description:"Makes avatars square in group"},{property:"max",type:["Number"],default:"-",values:[],description:"Limit the maximum amount of visible avatars"}],slotSheet:[{name:"default",description:"Active element for popover"},{name:"content",description:"Content of the popover"}]})}),x=n("h1",{class:"mb-4 text-2xl font-bold"},"Popover",-1),y={class:"p-1"},C=n("p",{class:"mb-2"},"Please confirm deletion",-1),B={class:"flex justify-end gap-2"},S=n("p",{class:"px-6"}," Click to see the popover. There are 12 positions available for popover, most used are shown in the example ",-1),w=n("p",{class:"px-6"},"You can show any content inside popover",-1),k=n("img",{width:"150",src:h,alt:"logo"},null,-1);function z(a,r,N,P,T,$){const p=s("it-button"),i=s("it-popover"),l=u,d=s("it-button-group"),m=c;return b(),_("div",null,[x,e(l,{template:a.exampleCode,title:"Example"},{default:t(()=>[e(i,{disabled:a.removed},{content:t(()=>[n("div",y,[C,n("div",B,[e(p,{variant:"text",size:"small"},{default:t(()=>[o("No")]),_:1}),e(p,{size:"small",variant:"danger",onClick:r[0]||(r[0]=D=>{a.removed=!0,a.notification({text:"Deleted",duration:3e3,placement:"top",variant:"danger"})})},{default:t(()=>[o(" Yes ")]),_:1})])])]),default:t(()=>[e(p,null,{default:t(()=>[o("Delete")]),_:1})]),_:1},8,["disabled"])]),_:1},8,["template"]),e(l,{template:a.positionsCode,title:"Positions"},{description:t(()=>[S]),default:t(()=>[e(d,{vertical:""},{default:t(()=>[e(i,{placement:"top"},{content:t(()=>[o("Top popover")]),default:t(()=>[e(p,null,{default:t(()=>[o("Top")]),_:1})]),_:1}),e(i,{placement:"right"},{content:t(()=>[o("Right popover")]),default:t(()=>[e(p,null,{default:t(()=>[o("Right")]),_:1})]),_:1}),e(i,{placement:"left"},{content:t(()=>[o("Left popover")]),default:t(()=>[e(p,null,{default:t(()=>[o("Left")]),_:1})]),_:1}),e(i,{placement:"bottom"},{content:t(()=>[o("Bottom popover")]),default:t(()=>[e(p,null,{default:t(()=>[o("Bottom")]),_:1})]),_:1})]),_:1})]),_:1},8,["template"]),e(l,{template:a.imageCode,title:"Image"},{description:t(()=>[w]),default:t(()=>[e(i,{placement:"top"},{content:t(()=>[k]),default:t(()=>[e(p,null,{default:t(()=>[o("Show image")]),_:1})]),_:1})]),_:1},8,["template"]),e(m,{"tag-name":"it-popover","data-sheet":a.dataSheet,"slot-sheet":a.slotSheet},null,8,["data-sheet","slot-sheet"])])}const j=f(g,[["render",z]]);export{j as default};

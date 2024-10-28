import{_ as u}from"./DMvfu-B7.js";import{_ as v}from"./9vMGL7Wn.js";import{n as f,_ as b,p as s,o as g,c as x,a as i,b as o,w as e,d as p,C as y}from"./BZMuJF5d.js";import"./DLMznalT.js";const C=f({data:()=>({removed:!1,exampleCode:`<it-popover :disabled="removed">
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
</it-popover>`,dataSheet:[{property:"placement",type:["String"],default:"top",values:["top","bottom","right","left","bottom-left","bottom-right","left-top","left-bottom","right-top","right-bottom","top-left","top-right"],description:"Position of the popover"},{property:"disabled",type:["Boolean"],default:"false",values:[],description:"Disables popover"}],dataSheetGroup:[{property:"size",type:["String"],default:"40px",values:[],description:"Avatar size for all avatars in group"},{property:"square",type:["Boolean"],default:"false",values:[],description:"Makes avatars square in group"},{property:"max",type:["Number"],default:"-",values:[],description:"Limit the maximum amount of visible avatars"}],slotSheet:[{name:"default",description:"Active element for popover"},{name:"content",description:"Content of the popover"}]})}),_={class:"p-1"},B={class:"flex justify-end gap-2"};function c(n,t,S,w,k,z){const l=s("it-button"),a=s("it-popover"),r=u,m=s("it-button-group"),d=v;return g(),x("div",null,[t[17]||(t[17]=i("h1",{class:"mb-4 text-2xl font-bold"},"Popover",-1)),o(r,{template:n.exampleCode,title:"Example"},{default:e(()=>[o(a,{disabled:n.removed},{content:e(()=>[i("div",_,[t[4]||(t[4]=i("p",{class:"mb-2"},"Please confirm deletion",-1)),i("div",B,[o(l,{variant:"text",size:"small"},{default:e(()=>t[2]||(t[2]=[p("No")])),_:1}),o(l,{size:"small",variant:"danger",onClick:t[0]||(t[0]=N=>{n.removed=!0,n.notification({text:"Deleted",duration:3e3,placement:"top",variant:"danger"})})},{default:e(()=>t[3]||(t[3]=[p(" Yes ")])),_:1})])])]),default:e(()=>[o(l,null,{default:e(()=>t[1]||(t[1]=[p("Delete")])),_:1})]),_:1},8,["disabled"])]),_:1},8,["template"]),o(r,{template:n.positionsCode,title:"Positions"},{description:e(()=>t[5]||(t[5]=[i("p",{class:"px-6"}," Click to see the popover. There are 12 positions available for popover, most used are shown in the example ",-1)])),default:e(()=>[o(m,{vertical:""},{default:e(()=>[o(a,{placement:"top"},{content:e(()=>t[7]||(t[7]=[p("Top popover")])),default:e(()=>[o(l,null,{default:e(()=>t[6]||(t[6]=[p("Top")])),_:1})]),_:1}),o(a,{placement:"right"},{content:e(()=>t[9]||(t[9]=[p("Right popover")])),default:e(()=>[o(l,null,{default:e(()=>t[8]||(t[8]=[p("Right")])),_:1})]),_:1}),o(a,{placement:"left"},{content:e(()=>t[11]||(t[11]=[p("Left popover")])),default:e(()=>[o(l,null,{default:e(()=>t[10]||(t[10]=[p("Left")])),_:1})]),_:1}),o(a,{placement:"bottom"},{content:e(()=>t[13]||(t[13]=[p("Bottom popover")])),default:e(()=>[o(l,null,{default:e(()=>t[12]||(t[12]=[p("Bottom")])),_:1})]),_:1})]),_:1})]),_:1},8,["template"]),o(r,{template:n.imageCode,title:"Image"},{description:e(()=>t[14]||(t[14]=[i("p",{class:"px-6"},"You can show any content inside popover",-1)])),default:e(()=>[o(a,{placement:"top"},{content:e(()=>t[16]||(t[16]=[i("img",{width:"150",src:y,alt:"logo"},null,-1)])),default:e(()=>[o(l,null,{default:e(()=>t[15]||(t[15]=[p("Show image")])),_:1})]),_:1})]),_:1},8,["template"]),o(d,{"tag-name":"it-popover","data-sheet":n.dataSheet,"slot-sheet":n.slotSheet},null,8,["data-sheet","slot-sheet"])])}const L=b(C,[["render",c]]);export{L as default};

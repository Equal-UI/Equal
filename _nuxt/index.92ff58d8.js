import{_ as r}from"./Box.vue.a7360a87.js";import{i as d,a as u,c as _,w as l,o as v,h as g,f as a,t as o,e as s,r as x}from"./entry.15f6290b.js";import"./Prism.5971c60e.js";const n=[{name:"New York",value:"nwrk"},{name:"Paris",value:"prs"},{name:"Moscow",value:"mscw"}],f=d({name:"SectionSlots",data:()=>({exampleValue:null,exampleOptions:n,codeSectionExamples:`
      <template>
        <it-select
          v-model="exampleValue"
          :options="exampleOptions"
        >
          <template v-slot:label-top="{ props }">
            Placement prop: {{ props.placement }}
          </template>
          <template v-slot:placeholder="{ props }">
            <div class="items-center" :style="{ display: 'flex' }">
              <span>{{ props.placeholder }} - custom</span>
            </div>
          </template>
          <template v-slot:selected-option="{ props }">
            Selected value: {{ props.modelValue.value }}
          </template>
          <template v-slot:option="{ props, option }">
            <div class="items-center" :style="{ display: 'flex' }">
              <img src="/github-logo.svg" class="mr-2 h-4" alt srcset />
              {{ option.name }}
            </div>
          </template>
          <template v-slot:icon>
            <img src="/twitter-logo.svg" class="h-3 mr-2" alt srcset />
          </template>
        </it-select>
      </template>

      export default {
        data: () => ({
          exampleValue: null,
          exampleOptions: [${n.map(t=>JSON.stringify(t))}],
        })
      }
    `})}),h=""+globalThis.__publicAssetsURL("github-logo.svg"),V=""+globalThis.__publicAssetsURL("twitter-logo.svg"),S={class:"items-center",style:{display:"flex"}},y={class:"items-center",style:{display:"flex"}},b=s("img",{src:h,class:"mr-2 h-4",alt:"",srcset:""},null,-1),w=s("img",{src:V,class:"h-3",alt:"",srcset:""},null,-1);function $(t,p,N,O,k,B){const i=x("it-select"),c=r;return v(),_(c,{template:t.codeSectionExamples,title:"Slots"},{default:l(()=>[g(i,{modelValue:t.exampleValue,"onUpdate:modelValue":p[0]||(p[0]=e=>t.exampleValue=e),options:t.exampleOptions},{"label-top":l(({props:e})=>[a(" Placement prop: "+o(e.placement),1)]),placeholder:l(({props:e})=>[s("div",S,[s("span",null,o(e.placeholder)+" - custom",1)])]),"selected-option":l(({props:e})=>[a(" Selected value: "+o(e.modelValue.value),1)]),option:l(({props:e,option:m})=>[s("div",y,[b,a(" "+o(m.name),1)])]),icon:l(()=>[w]),_:1},8,["modelValue","options"])]),_:1},8,["template"])}const U=u(f,[["render",$]]);export{U as default};

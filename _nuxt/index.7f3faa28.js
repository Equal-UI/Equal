import{_ as r}from"./Box.vue.7405c8c3.js";import{i as d,a as u,c as _,w as s,o as v,h as g,f as a,t as o,e as l,r as x}from"./entry.9931cf20.js";import"./Prism.61eb9153.js";const n=[{name:"New York",value:"nwrk"},{name:"Paris",value:"prs"},{name:"Moscow",value:"mscw"}],f=d({name:"SectionSlots",data:()=>({exampleValue:null,exampleOptions:n,codeSectionExamples:`
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
    `})}),h=""+globalThis.__publicAssetsURL("github-logo.svg"),V=""+globalThis.__publicAssetsURL("twitter-logo.svg"),S={class:"items-center",style:{display:"flex"}},y={class:"items-center",style:{display:"flex"}},b=l("img",{src:h,class:"mr-2 h-4",alt:"",srcset:""},null,-1),w=l("img",{src:V,class:"h-3",alt:"",srcset:""},null,-1);function $(t,p,N,O,k,B){const c=x("it-select"),i=r;return v(),_(i,{code:t.codeSectionExamples,title:"Slots"},{default:s(()=>[g(c,{modelValue:t.exampleValue,"onUpdate:modelValue":p[0]||(p[0]=e=>t.exampleValue=e),options:t.exampleOptions},{"label-top":s(({props:e})=>[a(" Placement prop: "+o(e.placement),1)]),placeholder:s(({props:e})=>[l("div",S,[l("span",null,o(e.placeholder)+" - custom",1)])]),"selected-option":s(({props:e})=>[a(" Selected value: "+o(e.modelValue.value),1)]),option:s(({props:e,option:m})=>[l("div",y,[b,a(" "+o(m.name),1)])]),icon:s(()=>[w]),_:1},8,["modelValue","options"])]),_:1},8,["code"])}const U=u(f,[["render",$]]);export{U as default};

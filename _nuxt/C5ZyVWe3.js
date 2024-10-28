import{_ as d}from"./DMvfu-B7.js";import{n as u,x as m,_ as v,p as x,o as _,u as f,w as s,b as g,d as p,t as a,a as o}from"./BZMuJF5d.js";import"./DLMznalT.js";const n=[{name:"New York",value:"nwrk"},{name:"Paris",value:"prs"},{name:"Moscow",value:"mscw"}],V=u({name:"SectionSlots",data:()=>({exampleValue:null,exampleOptions:n,codeSectionExamples:`
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
    `})}),S=m("/github-logo.svg"),y=m("/twitter-logo.svg"),h={class:"items-center",style:{display:"flex"}},w={class:"items-center",style:{display:"flex"}};function b(t,l,$,N,O,k){const i=x("it-select"),r=d;return _(),f(r,{template:t.codeSectionExamples,title:"Slots"},{default:s(()=>[g(i,{modelValue:t.exampleValue,"onUpdate:modelValue":l[0]||(l[0]=e=>t.exampleValue=e),options:t.exampleOptions},{"label-top":s(({props:e})=>[p(" Placement prop: "+a(e.placement),1)]),placeholder:s(({props:e})=>[o("div",h,[o("span",null,a(e.placeholder)+" - custom",1)])]),"selected-option":s(({props:e})=>[p(" Selected value: "+a(e.modelValue.value),1)]),option:s(({props:e,option:c})=>[o("div",w,[l[1]||(l[1]=o("img",{src:S,class:"mr-2 h-4",alt:"",srcset:""},null,-1)),p(" "+a(c.name),1)])]),icon:s(()=>l[2]||(l[2]=[o("img",{src:y,class:"h-3",alt:"",srcset:""},null,-1)])),_:1},8,["modelValue","options"])]),_:1},8,["template"])}const E=v(V,[["render",b]]);export{E as default};

import{_ as d}from"./Box.vue.3b388c29.js";import u from"./PropsTable.226b4d45.js";import{i as p,a as h,b as f,f as e,w as t,e as o,o as m,h as l,r}from"./entry.340e901d.js";import"./Prism.09517411.js";const _=p({data:()=>({collapseCode:`<it-collapse>
  <it-collapse-item title="Title 1">
    The First Things First manifesto was written 29 November 1963 and
    published in 1964 by Ken Garland. It was backed by over 400 graphic
    designers and artists and also received the backing of Tony Benn,
    radical left-wing MP and activist, who published it in its entirety in
    The Guardian newspaper.
  </it-collapse-item>
  <it-collapse-item title="Title 2">
    Reacting against a rich and affluent Britain of the 1960s, it tried to
    re-radicalise a design industry which the signatories felt had become
    lazy and uncritical. Drawing on ideas shared by critical theory, the
    Frankfurt School, and the counter-culture of the time, it explicitly
    reaffirmed the belief that design is not a neutral, value-free
    process.
  </it-collapse-item>
  <it-collapse-item title="Title 3">
    It rallied against the consumerist culture that was purely concerned
    with buying and selling things and tried to highlight a Humanist
    dimension to graphic design theory. It was later updated and
    republished with a new group of signatories as the First Things First
    2000 manifesto.
  </it-collapse-item>
  <it-collapse-item title="Title 4">
    Try Equal UI, you'll like it
  </it-collapse-item>
</it-collapse>`,singleCode:`<it-collapse>
  <it-collapse-item title="Article">
    Hello there
  </it-collapse-item>
</it-collapse>

<it-collapse>
  <it-collapse-item title="Article">
    Hello there
  </it-collapse-item>
</it-collapse>

<it-collapse>
  <it-collapse-item title="Article">
    Hello there
  </it-collapse-item>
</it-collapse>`,nestedCode:`<it-collapse>
  <it-collapse-item title="Question">
    Why would you use nested collapse components?

    <it-collapse>
      <it-collapse-item title="Answer">Because I can :3</it-collapse-item>
    </it-collapse>
  </it-collapse-item>
</it-collapse>`,titleCode:`<it-collapse>
  <it-collapse-item>
    <template #title>Magic \u{1F52E}</template>
    Omg it's David Blaine!
  </it-collapse-item>
</it-collapse>`,dataSheet:[{property:"opened",type:["Boolean"],default:"false",values:[],description:"Opened state"},{property:"title",type:["String"],default:"",values:[],description:"Title of the collapse item"}],slotSheet:[{name:"default",description:"Collapse item body"}]})}),g=o("h1",{class:"mb-4 text-2xl font-bold"},"Collapse",-1),y={class:"flex w-full flex-col"},b=o("br",null,null,-1),w=o("br",null,null,-1),T=o("br",null,null,-1),v=o("br",null,null,-1);function C(s,B,F,k,I,A){const i=r("it-collapse-item"),a=r("it-collapse"),n=d,c=u;return m(),f("div",null,[g,e(n,{code:s.collapseCode,title:"Default"},{default:t(()=>[e(a,null,{default:t(()=>[e(i,{title:"Title 1"},{default:t(()=>[l(" The First Things First manifesto was written 29 November 1963 and published in 1964 by Ken Garland. It was backed by over 400 graphic designers and artists and also received the backing of Tony Benn, radical left-wing MP and activist, who published it in its entirety in The Guardian newspaper. ")]),_:1}),e(i,{title:"Title 2"},{default:t(()=>[l(" Reacting against a rich and affluent Britain of the 1960s, it tried to re-radicalise a design industry which the signatories felt had become lazy and uncritical. Drawing on ideas shared by critical theory, the Frankfurt School, and the counter-culture of the time, it explicitly reaffirmed the belief that design is not a neutral, value-free process. ")]),_:1}),e(i,{title:"Title 3"},{default:t(()=>[l(" It rallied against the consumerist culture that was purely concerned with buying and selling things and tried to highlight a Humanist dimension to graphic design theory. It was later updated and republished with a new group of signatories as the First Things First 2000 manifesto. ")]),_:1}),e(i,{title:"Title 4"},{default:t(()=>[l(" Try Equal UI, you'll like it ")]),_:1})]),_:1})]),_:1},8,["code"]),e(n,{code:s.singleCode,title:"Single"},{default:t(()=>[o("div",y,[e(a,null,{default:t(()=>[e(i,{title:"Article"},{default:t(()=>[l("Hello there")]),_:1})]),_:1}),b,e(a,null,{default:t(()=>[e(i,{title:"Article"},{default:t(()=>[l("Hello there")]),_:1})]),_:1}),w,e(a,null,{default:t(()=>[e(i,{title:"Article"},{default:t(()=>[l("Hello there")]),_:1})]),_:1})])]),_:1},8,["code"]),e(n,{code:s.nestedCode,title:"Nested"},{default:t(()=>[e(a,null,{default:t(()=>[e(i,{title:"Question"},{default:t(()=>[l(" Why would you use nested collapse components? "),T,v,e(a,null,{default:t(()=>[e(i,{title:"Answer"},{default:t(()=>[l("Because I can :3")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e(n,{code:s.titleCode,title:"Custom title"},{default:t(()=>[e(a,null,{default:t(()=>[e(i,null,{title:t(()=>[l("Magic \u{1F52E}")]),default:t(()=>[l(" Omg it's David Blaine! ")]),_:1})]),_:1})]),_:1},8,["code"]),e(c,{"tag-name":"it-collapse-item","data-sheet":s.dataSheet,"slot-sheet":s.slotSheet},null,8,["data-sheet","slot-sheet"])])}const D=h(_,[["render",C]]);export{D as default};

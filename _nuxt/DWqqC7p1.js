import{_ as c}from"./DLMznalT.js";import{n as u,r as d,p,o as v,c as f,a as t,b as e,w as o,d as i,t as m,L as s,q as y,v as g,T as x,U as b,V as h,O as T}from"./BZMuJF5d.js";const w={class:"flex w-full flex-col space-y-4 rounded border bg-white p-8 dark:border-neutral-700 dark:bg-neutral-800"},q=u({__name:"Transitions",setup(_){const n=d(!1);return(k,a)=>{const l=c,r=p("it-button");return v(),f("div",null,[a[5]||(a[5]=t("h1",{class:"mb-4 text-2xl font-bold"},"Transitions",-1)),t("div",w,[a[2]||(a[2]=t("p",null," Equal UI has built-in Vue transitions for inner use. Storing them in theme file allows you to use them too. ",-1)),e(l,{language:"js",class:"rounded border dark:border-neutral-700",code:`// e.g., equal-vue/dist/theme/full

{
  ...otherComponents,
  transitions: {
    scale: {
      'enter-active-class':
        'duration-200 ease-[cubic-bezier(0.175,0.885,0.32,1.475)]',
      'enter-from-class': 'transform scale-0',
      'leave-active-class': 'duration-200 ease-in',
      'leave-to-class': 'transform scale-0',
    },
    fade: {
      'enter-active-class': 'duration-75',
      'enter-to-class': 'opacity-100',
      'enter-from-class': 'opacity-0',
      'leave-active-class': 'duration-75',
      'leave-to-class': 'opacity-0',
      'leave-from-class': 'opacity-100',
    },
    dropToLeft: {
      'enter-active-class': 'duration-100',
      'enter-from-class': 'opacity-0 translate-x-2',
      'enter-to-class': 'opacity-100 translate-x-0',
      'leave-active-class': 'duration-100',
      'leave-from-class': 'opacity-100 translate-x-0',
      'leave-to-class': 'opacity-0 translate-x-2',
    },
    dropToRight: {
      'enter-active-class': 'duration-100',
      'enter-from-class': 'opacity-0 -translate-x-2',
      'enter-to-class': 'opacity-100 translate-x-0',
      'leave-active-class': 'duration-100',
      'leave-from-class': 'opacity-100 translate-x-0',
      'leave-to-class': 'opacity-0 -translate-x-2',
    },
    dropToBottom: {
      'enter-active-class': 'duration-100',
      'enter-from-class': 'opacity-0 -translate-y-2',
      'enter-to-class': 'opacity-100 translate-y-0',
      'leave-active-class': 'duration-100',
      'leave-from-class': 'opacity-100 translate-y-0',
      'leave-to-class': 'opacity-0 -translate-y-2',
    },
    fadeToLeft: {
      'enter-active-class': 'duration-150 origin-right',
      'enter-from-class': 'opacity-0 scale-75 translate-x-2',
      'enter-to-class': 'opacity-100 scale-100 translate-x-0',
      'leave-active-class': 'duration-150 origin-right',
      'leave-from-class': 'opacity-100 scale-100 translate-x-0',
      'leave-to-class': 'opacity-0 scale-75 translate-x-2',
    },
    fadeToRight: {
      'enter-active-class': 'duration-150 origin-left',
      'enter-from-class': 'opacity-0 scale-75 -translate-x-2',
      'enter-to-class': 'opacity-100 scale-100 translate-x-0',
      'leave-active-class': 'duration-150 origin-left',
      'leave-from-class': 'opacity-100 scale-100 translate-x-0',
      'leave-to-class': 'opacity-0 scale-75 -translate-x-2',
    },
    fadeToTop: {
      'enter-active-class': 'duration-150 origin-bottom',
      'enter-from-class': 'opacity-0 scale-75 translate-y-2',
      'enter-to-class': 'opacity-100 scale-100 translate-y-0',
      'leave-active-class': 'duration-150 origin-bottom',
      'leave-from-class': 'opacity-100 scale-100 translate-y-0',
      'leave-to-class': 'opacity-0 scale-75 translate-y-2',
    },
    fadeToBottom: {
      'enter-active-class': 'duration-150 origin-top',
      'enter-from-class': 'opacity-0 scale-75 -translate-y-2',
      'enter-to-class': 'opacity-100 scale-100 translate-y-0',
      'leave-active-class': 'duration-150 origin-top',
      'leave-from-class': 'opacity-100 scale-100 translate-y-0',
      'leave-to-class': 'opacity-0 scale-75 -translate-y-2',
    }
  }
}`}),a[3]||(a[3]=t("p",null,"You can use them like this:",-1)),e(l,{language:"html",class:"rounded border dark:border-neutral-700",code:`// First import theme file in your script like this:
// import variant from "equal-vue/dist/theme/full"
        
<Transition ||| v-bind="variant.transitions.fade" |||>
  <it-button v-show="myValue" size="big">Getting out of nowhere</it-button>          
</Transition>`}),a[4]||(a[4]=t("p",null,"Result:",-1)),e(r,{onClick:a[0]||(a[0]=V=>n.value=!s(n))},{default:o(()=>[i(m(s(n)?"Hide":"Show"),1)]),_:1}),e(h,x(b(s(T).transitions.fade)),{default:o(()=>[y(e(r,{size:"big"},{default:o(()=>a[1]||(a[1]=[i(" Getting out of nowhere ")])),_:1},512),[[g,s(n)]])]),_:1},16)])])}}});export{q as default};

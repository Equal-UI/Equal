import{_ as c}from"./Prism.5971c60e.js";import{i as u,j as d,b as p,e as t,h as a,w as s,u as n,n as v,g as f,T as m,r as y,o as h,f as i,t as _,k as g,v as x,l as b}from"./entry.15f6290b.js";const T=t("h1",{class:"mb-4 text-2xl font-bold"},"Transitions",-1),w={class:"flex w-full flex-col space-y-4 rounded border bg-white p-8 dark:border-neutral-700 dark:bg-neutral-800"},k=t("p",null," Equal UI has built-in Vue transitions for inner use. Storing them in theme file allows you to use them too. ",-1),C=t("p",null,"You can use them like this:",-1),V=t("p",null,"Result:",-1),N=u({__name:"Transitions",setup(B){const e=d(!1);return(q,o)=>{const l=c,r=y("it-button");return h(),p("div",null,[T,t("div",w,[k,a(l,{language:"js",class:"rounded border dark:border-neutral-700",template:`// e.g., equal-vue/dist/theme/full

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
}`}),C,a(l,{language:"html",class:"rounded border dark:border-neutral-700",template:`// First import theme file in your script like this:
// import variant from "equal-vue/dist/theme/full"
        
<Transition ||| v-bind="variant.transitions.fade" |||>
  <it-button v-show="myValue" size="big">Getting out of nowhere</it-button>          
</Transition>`}),V,a(r,{onClick:o[0]||(o[0]=z=>e.value=!n(e))},{default:s(()=>[i(_(n(e)?"Hide":"Show"),1)]),_:1}),a(m,v(f(n(b).transitions.fade)),{default:s(()=>[g(a(r,{size:"big"},{default:s(()=>[i(" Getting out of nowhere ")]),_:1},512),[[x,n(e)]])]),_:1},16)])])}}});export{N as default};

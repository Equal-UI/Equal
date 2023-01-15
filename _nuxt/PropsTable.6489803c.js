import{i as g,a as _,o as e,b as r,e as t,h,c as p,w as b,t as u,A as d,F as n,C as o,r as k}from"./entry.efe114cc.js";const m=g({props:{tagName:String,dataSheet:Array,eventSheet:Array,methodSheet:Array,slotSheet:Array}});const S={class:"my-10 flex flex-col overflow-x-auto rounded border bg-white last:mb-0 dark:border-gray-600 dark:bg-neutral-800"},f={class:"bg-white py-4 px-6 leading-none dark:bg-neutral-800"},v={key:0,class:"table"},A=t("thead",{class:"bg-slate-50 dark:bg-neutral-700"},[t("tr",{class:"dark:border-t-gray-600 dark:border-b-gray-600"},[t("th",null,"Property"),t("th",null,"Type"),t("th",null,"Default"),t("th",null,"Accepted values"),t("th",null,"Description")])],-1),w={key:0,class:"flex gap-1"},N={key:1},D={key:1,class:"p-4"},C=t("p",{class:"text-center"},"No props",-1),B=[C],$={key:2,class:"bg-white py-4 px-6 leading-none dark:bg-neutral-800"},E={key:3,class:"table"},P=t("thead",{class:"bg-slate-50 dark:bg-neutral-700"},[t("tr",{class:"dark:border-t-gray-600 dark:border-b-gray-600"},[t("th",null,"Name"),t("th",null,"Description")])],-1),T={key:4,class:"bg-white py-4 px-6 leading-none dark:bg-neutral-800"},V={key:5,class:"table"},x=t("thead",{class:"bg-slate-50 dark:bg-neutral-700"},[t("tr",null,[t("th",null,"Method"),t("th",null,"Description"),t("th",null,"Arguments")])],-1),F={key:6,class:"bg-white py-4 px-6 leading-none dark:bg-neutral-800"},M={key:7,class:"table"},L=t("thead",{class:"bg-slate-50 dark:bg-neutral-700"},[t("tr",{class:"dark:border-t-gray-600 dark:border-b-gray-600"},[t("th",null,"Event"),t("th",null,"Description"),t("th",null,"Arguments")])],-1);function j(a,q,z,G,H,I){const c=k("it-tag");return e(),r("div",S,[t("h2",f,[h(" Props "),a.tagName?(e(),p(c,{key:0,filled:""},{default:b(()=>[h(u(a.tagName),1)]),_:1})):d("",!0)]),a.dataSheet&&a.dataSheet.length?(e(),r("table",v,[A,t("tbody",null,[(e(!0),r(n,null,o(a.dataSheet,l=>(e(),r("tr",{key:l.property,class:"dark:border-t-gray-600 dark:border-b-gray-600"},[(e(!0),r(n,null,o(l,(s,i)=>(e(),r("td",null,[!["description","property"].includes(i)&&Array.isArray(s)?(e(),r("div",w,[(e(!0),r(n,null,o(s,y=>(e(),p(c,{filled:"",variant:"primary",key:y},{default:b(()=>[h(u(y),1)]),_:2},1024))),128))])):(e(),r("span",N,u(s),1))]))),256))]))),128))])])):(e(),r("div",D,B)),a.slotSheet?(e(),r("h2",$," Slots ")):d("",!0),a.slotSheet?(e(),r("table",E,[P,t("tbody",null,[(e(!0),r(n,null,o(a.slotSheet,l=>(e(),r("tr",{key:l.property,class:"dark:border-t-gray-600 dark:border-b-gray-600"},[(e(!0),r(n,null,o(l,s=>(e(),r("td",null,[t("span",null,u(s),1)]))),256))]))),128))])])):d("",!0),a.methodSheet?(e(),r("h2",T," Methods ")):d("",!0),a.methodSheet?(e(),r("table",V,[x,t("tbody",null,[(e(!0),r(n,null,o(a.methodSheet,l=>(e(),r("tr",{key:l.property},[(e(!0),r(n,null,o(l,s=>(e(),r("td",null,[t("span",null,u(s),1)]))),256))]))),128))])])):d("",!0),a.eventSheet?(e(),r("h2",F," Events ")):d("",!0),a.eventSheet?(e(),r("table",M,[L,t("tbody",null,[(e(!0),r(n,null,o(a.eventSheet,l=>(e(),r("tr",{key:l.property,class:"dark:border-t-gray-600 dark:border-b-gray-600"},[(e(!0),r(n,null,o(l,(s,i)=>(e(),r("td",null,[t("span",null,u(s),1)]))),256))]))),128))])])):d("",!0)])}const K=_(m,[["render",j]]);export{K as default};
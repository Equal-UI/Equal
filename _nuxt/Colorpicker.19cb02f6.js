import{_ as L}from"./Demobox.vue.b0bdf966.js";import{_ as O}from"./Box.vue.77abee78.js";import q from"./PropsTable.6489803c.js";import{i as z,a as F,b as J,f as u,w as b,e as d,o as P,t as W,h as _,E as G,r as f}from"./entry.efe114cc.js";import"./Prism.d6783e4c.js";var K={grad:.9,turn:360,rad:360/(2*Math.PI)},h=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},s=function(e,o,t){return o===void 0&&(o=0),t===void 0&&(t=Math.pow(10,o)),Math.round(t*e)/t+0},p=function(e,o,t){return o===void 0&&(o=0),t===void 0&&(t=1),e>t?t:e>o?e:o},j=function(e){return(e=isFinite(e)?e%360:0)>0?e:e+360},k=function(e){return{r:p(e.r,0,255),g:p(e.g,0,255),b:p(e.b,0,255),a:p(e.a)}},x=function(e){return{r:s(e.r),g:s(e.g),b:s(e.b),a:s(e.a,3)}},Q=/^#([0-9a-f]{3,8})$/i,y=function(e){var o=e.toString(16);return o.length<2?"0"+o:o},E=function(e){var o=e.r,t=e.g,n=e.b,r=e.a,a=Math.max(o,t,n),l=a-Math.min(o,t,n),i=l?a===o?(t-n)/l:a===t?2+(n-o)/l:4+(o-t)/l:0;return{h:60*(i<0?i+6:i),s:a?l/a*100:0,v:a/255*100,a:r}},B=function(e){var o=e.h,t=e.s,n=e.v,r=e.a;o=o/360*6,t/=100,n/=100;var a=Math.floor(o),l=n*(1-t),i=n*(1-(o-a)*t),v=n*(1-(1-o+a)*t),g=a%6;return{r:255*[n,i,l,l,v,n][g],g:255*[v,n,n,i,l,l][g],b:255*[l,l,v,n,n,i][g],a:r}},w=function(e){return{h:j(e.h),s:p(e.s,0,100),l:p(e.l,0,100),a:p(e.a)}},S=function(e){return{h:s(e.h),s:s(e.s),l:s(e.l),a:s(e.a,3)}},I=function(e){return B((t=(o=e).s,{h:o.h,s:(t*=((n=o.l)<50?n:100-n)/100)>0?2*t/(n+t)*100:0,v:n+t,a:o.a}));var o,t,n},m=function(e){return{h:(o=E(e)).h,s:(r=(200-(t=o.s))*(n=o.v)/100)>0&&r<200?t*n/100/(r<=100?r:200-r)*100:0,l:r/2,a:o.a};var o,t,n,r},X=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Y=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Z=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,ee=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,T={string:[[function(e){var o=Q.exec(e);return o?(e=o[1]).length<=4?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?s(parseInt(e[3]+e[3],16)/255,2):1}:e.length===6||e.length===8?{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:e.length===8?s(parseInt(e.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(e){var o=Z.exec(e)||ee.exec(e);return o?o[2]!==o[4]||o[4]!==o[6]?null:k({r:Number(o[1])/(o[2]?100/255:1),g:Number(o[3])/(o[4]?100/255:1),b:Number(o[5])/(o[6]?100/255:1),a:o[7]===void 0?1:Number(o[7])/(o[8]?100:1)}):null},"rgb"],[function(e){var o=X.exec(e)||Y.exec(e);if(!o)return null;var t,n,r=w({h:(t=o[1],n=o[2],n===void 0&&(n="deg"),Number(t)*(K[n]||1)),s:Number(o[3]),l:Number(o[4]),a:o[5]===void 0?1:Number(o[5])/(o[6]?100:1)});return I(r)},"hsl"]],object:[[function(e){var o=e.r,t=e.g,n=e.b,r=e.a,a=r===void 0?1:r;return h(o)&&h(t)&&h(n)?k({r:Number(o),g:Number(t),b:Number(n),a:Number(a)}):null},"rgb"],[function(e){var o=e.h,t=e.s,n=e.l,r=e.a,a=r===void 0?1:r;if(!h(o)||!h(t)||!h(n))return null;var l=w({h:Number(o),s:Number(t),l:Number(n),a:Number(a)});return I(l)},"hsl"],[function(e){var o=e.h,t=e.s,n=e.v,r=e.a,a=r===void 0?1:r;if(!h(o)||!h(t)||!h(n))return null;var l=function(i){return{h:j(i.h),s:p(i.s,0,100),v:p(i.v,0,100),a:p(i.a)}}({h:Number(o),s:Number(t),v:Number(n),a:Number(a)});return B(l)},"hsv"]]},V=function(e,o){for(var t=0;t<o.length;t++){var n=o[t][0](e);if(n)return[n,o[t][1]]}return[null,void 0]},oe=function(e){return typeof e=="string"?V(e.trim(),T.string):typeof e=="object"&&e!==null?V(e,T.object):[null,void 0]},N=function(e,o){var t=m(e);return{h:t.h,s:p(t.s+100*o,0,100),l:t.l,a:t.a}},$=function(e){return(299*e.r+587*e.g+114*e.b)/1e3/255},H=function(e,o){var t=m(e);return{h:t.h,s:t.s,l:p(t.l+100*o,0,100),a:t.a}},M=function(){function e(o){this.parsed=oe(o)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return e.prototype.isValid=function(){return this.parsed!==null},e.prototype.brightness=function(){return s($(this.rgba),2)},e.prototype.isDark=function(){return $(this.rgba)<.5},e.prototype.isLight=function(){return $(this.rgba)>=.5},e.prototype.toHex=function(){return o=x(this.rgba),t=o.r,n=o.g,r=o.b,l=(a=o.a)<1?y(s(255*a)):"","#"+y(t)+y(n)+y(r)+l;var o,t,n,r,a,l},e.prototype.toRgb=function(){return x(this.rgba)},e.prototype.toRgbString=function(){return o=x(this.rgba),t=o.r,n=o.g,r=o.b,(a=o.a)<1?"rgba("+t+", "+n+", "+r+", "+a+")":"rgb("+t+", "+n+", "+r+")";var o,t,n,r,a},e.prototype.toHsl=function(){return S(m(this.rgba))},e.prototype.toHslString=function(){return o=S(m(this.rgba)),t=o.h,n=o.s,r=o.l,(a=o.a)<1?"hsla("+t+", "+n+"%, "+r+"%, "+a+")":"hsl("+t+", "+n+"%, "+r+"%)";var o,t,n,r,a},e.prototype.toHsv=function(){return o=E(this.rgba),{h:s(o.h),s:s(o.s),v:s(o.v),a:s(o.a,3)};var o},e.prototype.invert=function(){return c({r:255-(o=this.rgba).r,g:255-o.g,b:255-o.b,a:o.a});var o},e.prototype.saturate=function(o){return o===void 0&&(o=.1),c(N(this.rgba,o))},e.prototype.desaturate=function(o){return o===void 0&&(o=.1),c(N(this.rgba,-o))},e.prototype.grayscale=function(){return c(N(this.rgba,-1))},e.prototype.lighten=function(o){return o===void 0&&(o=.1),c(H(this.rgba,o))},e.prototype.darken=function(o){return o===void 0&&(o=.1),c(H(this.rgba,-o))},e.prototype.rotate=function(o){return o===void 0&&(o=15),this.hue(this.hue()+o)},e.prototype.alpha=function(o){return typeof o=="number"?c({r:(t=this.rgba).r,g:t.g,b:t.b,a:o}):s(this.rgba.a,3);var t},e.prototype.hue=function(o){var t=m(this.rgba);return typeof o=="number"?c({h:o,s:t.s,l:t.l,a:t.a}):s(t.h)},e.prototype.isEqual=function(o){return this.toHex()===c(o).toHex()},e}(),c=function(e){return e instanceof M?e:new M(e)};const te="rgb(48, 81, 255)",ne=z({data:()=>({exampleColor:"rgba(49,81,254,1)",color:te,colorTooltip:!0,exColor:c("rgb(48, 81, 255)"),hideAlpha:!1,tooltipCode:'<it-colorpicker ||| showTooltip ||| :value="color" @change="updateColor" />',popoverCode:`<it-popover borderless>
  <it-button>Choose color</it-button>

  <template #content>
    <it-colorpicker :value="color" @change="updateColor" />
  </template>
</it-popover>`,usageCode:`<it-colorpicker :value="exampleColor" @change="updateExampleColor" />
<it-loading class="mt-4" :color="exampleColor"></it-loading>

updateExampleColor(val) {
  const {r,g,b,a} = val.rgba

  this.exampleColor = \`rgba(\${r}, \${g}, \${b}, \${a})\`
}`,dataSheet:[{property:"disableAlpha",type:["Boolean"],default:"false",values:[],description:"Hides alpha"},{property:"showTooltip",type:["Boolean"],default:"false",values:[],description:"Show tooltip over saturation cursor on move. Useful for mobile devices"},{property:"value",type:["String","Object"],default:"#000",values:["rgb","rgba","hex","hex8","hsv","hsl"],description:"Initial color value"}],eventSheet:[{event:"@change",description:"The event function fires on color change, emits colord object",arguments:"function(val: Colord)"}]}),methods:{updateColor(e){this.exColor=e},updateExampleColor(e){const{r:o,g:t,b:n,a:r}=e.toRgb();this.exampleColor=`rgba(${o}, ${t}, ${n}, ${r})`}}});const re=d("h1",{class:"mb-4 text-2xl font-bold"},"Colorpicker",-1),ae={class:"py-12"},le={class:"flex flex-col items-center"},se=d("h5",{class:"mt-6"},[_(" Change event return "),d("a",{class:"underline decoration-1 hover:decoration-4",target:"_blank",href:"https://github.com/omgovich/colord"}," colord "),_(" object so for example "),d("pre",null,"value.toRgb()"),_(" will return: ")],-1),ie=d("h5",{class:"mt-6"},"Returned value:",-1),ue={class:"flex flex-col"},pe={class:"flex flex-col items-center space-y-8"};function ce(e,o,t,n,r,a){const l=f("it-colorpicker"),i=f("it-checkbox"),v=L,g=O,R=f("it-button"),A=f("it-popover"),U=f("it-spinner"),D=q;return P(),J("div",null,[re,u(v,{name:"it-colorpicker"},{props:b(()=>[u(i,{variant:"primary",modelValue:e.colorTooltip,"onUpdate:modelValue":o[0]||(o[0]=C=>e.colorTooltip=C),label:"Tooltip on move",subLabel:"Move cursor with color picker to see the toltip on top"},null,8,["modelValue"]),u(i,{variant:"primary",modelValue:e.hideAlpha,"onUpdate:modelValue":o[1]||(o[1]=C=>e.hideAlpha=C),label:"Hide alpha"},null,8,["modelValue"])]),default:b(()=>[d("div",ae,[u(l,{"show-tooltip":e.colorTooltip,"disable-alpha":e.hideAlpha},null,8,["show-tooltip","disable-alpha"])])]),_:1}),u(g,{code:e.tooltipCode,title:"With Tooltip"},{default:b(()=>[d("div",le,[u(l,{"show-tooltip":"",value:e.color,onChange:e.updateColor},null,8,["value","onChange"]),se,ie,d("pre",null,W(JSON.stringify(e.exColor.toRgb(),null,2)),1)])]),_:1},8,["code"]),u(g,{code:e.popoverCode,title:"Use with it-popover"},{default:b(()=>[d("div",ue,[u(A,{borderless:""},{content:b(()=>[u(l,{value:e.color,onChange:e.updateColor},null,8,["value","onChange"])]),default:b(()=>[u(R,null,{default:b(()=>[_("Choose color")]),_:1})]),_:1})])]),_:1},8,["code"]),u(g,{code:e.usageCode,title:"Use example"},{default:b(()=>[d("div",pe,[u(l,{value:e.exampleColor,onChange:e.updateExampleColor},null,8,["value","onChange"]),u(U,{style:G({"border-right-color":e.exampleColor})},null,8,["style"])])]),_:1},8,["code"]),u(D,{"event-sheet":e.eventSheet,"data-sheet":e.dataSheet},null,8,["event-sheet","data-sheet"])])}const fe=F(ne,[["render",ce]]);export{fe as default};
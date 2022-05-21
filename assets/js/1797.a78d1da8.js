"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[1797],{59943:function(e,t,n){n.d(t,{qz:function(){return R},zU:function(){return u},rj:function(){return M},If:function(){return v},De:function(){return z},wW:function(){return q},eh:function(){return j},xF:function(){return m},V1:function(){return $},Dx:function(){return V},vb:function(){return F},u:function(){return Z}});var r=n(85893),i=n(30454),a=n(38252),o=n.n(a),s=n(67294);const l=(0,s.createContext)({setOption(){},set(){},markNoMerge(){},remove(){}});function c(e,t){e&&("function"==typeof e?e(t):e.current=t)}l.displayName="EChartsxContext";var u=(0,s.forwardRef)((function({children:e,theme:t,init:n={},defaults:a={},debug:u=!1,...d},m){const f=(0,s.useMemo)((()=>({})),[]),p=(0,s.useRef)(null),v=(0,s.useRef)(),[h,b]=(0,s.useState)(0),g=(0,s.useRef)(!0),x=(0,s.useRef)({}),y=(0,s.useRef)(!1),w=(0,s.useRef)(!1),A=(0,s.useRef)([]),k=(0,s.useCallback)(((e,t)=>{o()(f[e],t)||(f[e]=t,x.current[e]=!0,b((e=>e+1)))}),[]),S=(0,s.useCallback)((e=>{e in f&&(delete f[e],g.current=!0,x.current[e]=!0,b((e=>e+1)))}),[]),j=(0,s.useCallback)((()=>{g.current=!0}),[]);(0,s.useLayoutEffect)((()=>{const e=()=>{v.current?.resize()};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),(0,s.useLayoutEffect)((()=>{const e=()=>{v.current&&(v.current.dispose(),v.current=void 0,c(m,void 0))};if(p.current){v.current=(0,i.S1)(p.current,t,{devicePixelRatio:"undefined"!=typeof window?window.devicePixelRatio:2,...n});return y.current=!1,e}e()}),[]),(0,s.useEffect)((()=>{const e=g.current?{...a}:{};if((g.current?Object.values(f):Object.keys(x.current).map((e=>f[e]))).forEach((t=>function(e,t){if(!t.mainType)throw new Error("option.mainType must be specified");if(e[t.mainType]){const n=e[t.mainType];if(n instanceof Array)if(1===n.length)if(n[0].id===t.id&&void 0!==t.id)n[0]=t;else{if(void 0===n[0].id||void 0===t.id)throw new Error("option.id must be set with multiple items");n.push(t)}else if(n.length>1){if(void 0===t.id)throw new Error("option.id must be set with multiple items");const e=n.findIndex((e=>e.id===t.id));e>=0?n.splice(e,1,t):n.push(t)}else n[0]=t;else if(n.id===t.id&&void 0!==t.id)e[t.mainType]=t;else{if(void 0===t.id||void 0===n.id)throw new Error("option.id must be set with multiple items");e[t.mainType]=[n,t]}}else e[t.mainType]=t}(e,t))),Object.keys(e).length){u&&console.debug("echartsx.set",e);const t=v.current;t&&(t.setOption(e,g.current),w.current=!0,A.current.length>0&&(A.current.forEach((e=>t.setOption(e))),A.current=[])),y.current||(c(m,v.current),y.current=!0)}g.current=!1,x.current={}}),[a,h]);const E=(0,s.useCallback)((e=>{const t=v.current;t&&w.current?t.setOption(e):A.current.push(e)}),[]);return(0,r.jsxs)(l.Provider,{value:{set:k,markNoMerge:j,remove:S,setOption:E},children:[(0,r.jsx)("div",{ref:p,...d}),e]})}));const d=function({dependencies:e,children:t}){return(0,s.useMemo)((()=>(0,r.jsx)(r.Fragment,{children:t})),e??[])};d.displayName="Once";var m=d;function f(e){return e?"function"==typeof e?e():e:null}const p=function({once:e=!1,cond:t,then:n,else:i}){let a;return a=f(t?n:i),e?(0,r.jsx)(m,{children:a},t?"then":"else"):(0,r.jsx)(r.Fragment,{children:a})};p.displayName="If";var v=p;let h=0;function b(){return(0,s.useMemo)((()=>":"+ ++h),[])}function g(e,{...t}={},n){const i=n=>{const{set:i,remove:a}=(0,s.useContext)(l),c=b(),u=(0,s.useRef)(void 0);return(0,s.useEffect)((()=>{u.current&&o()(u.current,n)||(i(c,{id:c,...t,...n,mainType:e}),u.current=n)}),[n]),(0,s.useEffect)((()=>()=>{u.current=void 0,a(c)}),[]),(0,r.jsx)(r.Fragment,{})};return i.displayName=n??"echarts:"+e,i}var x;!function(e){let t,n,r,i;!function(e){e.X=g("xAxis",{type:"value"},"XValueAxis"),e.Y=g("yAxis",{type:"value"},"YValueAxis"),e.Angle=g("angleAxis",{type:"value"},"AngleValueAxis"),e.Radius=g("radiusAxis",{type:"value"},"RadiusValueAxis")}(t=e.Value||(e.Value={})),function(e){e.X=g("xAxis",{type:"time"},"XTimeAxis"),e.Y=g("yAxis",{type:"time"},"YTimeAxis"),e.Angle=g("angleAxis",{type:"time"},"AngleTimeAxis"),e.Radius=g("radiusAxis",{type:"time"},"RadiusTimeAxis")}(n=e.Time||(e.Time={})),function(e){e.X=g("xAxis",{type:"log"},"XLogAxis"),e.Y=g("yAxis",{type:"log"},"YLogAxis"),e.Angle=g("angleAxis",{type:"log"},"AngleLogAxis"),e.Radius=g("radiusAxis",{type:"log"},"RadiusLogAxis")}(r=e.Log||(e.Log={})),function(e){e.X=g("xAxis",{type:"category"},"XCategoryAxis"),e.Y=g("yAxis",{type:"category"},"YCategoryAxis"),e.Angle=g("angleAxis",{type:"category"},"AngleCategoryAxis"),e.Radius=g("radiusAxis",{type:"category"},"RadiusCategoryAxis")}(i=e.Category||(e.Category={}))}(x||(x={}));var y=x,w=n(38180),A=n(68023);(0,A.D)(w.N);const k=g("series",{type:"bar"},"BarSeries");var S=n(92854);(0,A.D)(S.N);const j=g("series",{type:"line"},"LineSeries");var E=n(76010);(0,A.D)(E.N);const C=g("series",{type:"scatter"},"Scatter");var T=n(27240);(0,A.D)(T.N);const R=g("dataset",{},"Dataset");var L=n(76395);(0,A.D)(L.N);var z=g("legend",{},"Legend"),_=n(82739);(0,A.D)(_.N);var Z=g("tooltip",{},"Tooltip"),N=n(31281);(0,A.D)(N.N);const M=g("grid",void 0,"Grid");var I=n(83520);(0,A.D)(I.N);const D=g("singleAxis",{},"SingleAxis");var O=n(20878);(0,A.D)(O.N);const F=g("toolbox",{},"Toolbox");var P=n(8690);(0,A.D)(P.N);const V=g("title",{},"Title");var B=n(82811),Y=n(6378),U=n(72127);(0,A.D)([B.N,Y.T,U.z]);var $=(0,s.forwardRef)((function({data:e,fields:t,children:n,theme:i,...a},o){const l=(0,s.useMemo)((()=>{const n=new Set;return e.forEach((e=>{n.add(e[t.name])})),[...n]}),[e,t.name]);return(0,r.jsxs)(u,{theme:i,init:{renderer:"canvas",...a},ref:o,defaults:{animationDuration:3e3,animationDurationUpdate:3e3},children:[(0,r.jsxs)(m,{children:[(0,r.jsx)(M,{containLabel:!0,top:72,left:24,right:108}),(0,r.jsx)(y.Value.Y,{interval:1,min:1,inverse:!0,offset:16,axisPointer:{show:!0,type:"shadow",snap:!0,label:{precision:0},triggerTooltip:!1}}),(0,r.jsx)(y.Time.X,{axisLabel:{formatter:e=>String(e),showMaxLabel:!0},minInterval:1,maxInterval:1,position:"top",splitLine:{show:!0},offset:28,axisLine:{show:!1},axisTick:{show:!1},axisPointer:{show:!0,type:"line",snap:!0,label:{formatter:({value:e})=>String(e)},triggerTooltip:!1}}),(0,r.jsx)(Z,{trigger:"item"})]}),(0,r.jsx)(m,{dependencies:l,children:l.map((e=>(0,r.jsxs)(s.Fragment,{children:[(0,r.jsx)(R,{id:e,fromDatasetId:"original",transform:{type:"filter",config:{value:e,dimension:t.name}}}),(0,r.jsx)(j,{name:e,datasetId:e,encode:{x:t.time,y:t.rank},smooth:!0,lineStyle:{width:3},symbolSize:8,symbol:"circle",endLabel:{show:!0,offset:[12,0],width:96,fontSize:14,overflow:"truncate",formatter:e=>{const t=e.seriesName,[n,r]=t.split("/");return n===r?r:`{owner|${n}/}\n${r}`},rich:{owner:{fontSize:12,color:"gray"}}},emphasis:{focus:"series",label:{fontSize:10}},tooltip:{formatter:"{a}"}})]},e)))}),(0,r.jsx)(R,{id:"original",source:e}),n]})}));function X(){const e=(0,s.useRef)(),[t,n]=(0,s.useState)(null),[r,i]=(0,s.useState)(!1),a=(0,s.useRef)(!1),o=(0,s.useRef)(),l=(0,s.useCallback)((t=>{e.current=t??void 0,n(t),t&&(u.current=t.captureStream(),console.log("Started stream capture from canvas element: ",u.current),a.current&&f())}),[]),c=(0,s.useRef)(),u=(0,s.useRef)(),d=(0,s.useRef)(),m=(0,s.useMemo)((()=>{if("undefined"==typeof MediaRecorder)return;const e=["video/mp4","video/webm;codecs=h264","video/webm","video/webm,codecs=vp9","video/vp8","video/webm;codecs=vp8","video/webm;codecs=daala","video/mpeg"];for(let t in e)if(MediaRecorder.isTypeSupported(e[t]))return e[t]}),[]);if(!m)throw new Error("Not support recorder");const f=(0,s.useCallback)((()=>{a.current=!0;const t=e.current,n=u.current;if(!t||c.current||!n)return;let r={mimeType:m,videoBitsPerSecond:35e5};d.current=[];let s=c.current=new MediaRecorder(u.current,r);s.onstop=e=>{console.log("Recorder stopped: ",e),i(!1)},s.onstart=()=>{i(!0)},s.ondataavailable=e=>{e.data&&e.data.size>0&&d.current.push(e.data)},s.start(),console.log("MediaRecorder started",s);const l=n.getVideoTracks()[0];o.current=setInterval((()=>{l.requestFrame(),s.requestData()}),100)}),[]),p=(0,s.useCallback)((()=>{a.current=!1;e.current&&c.current&&(console.log("MediaRecorder stopped",c.current),"inactive"!==c.current?.state&&c.current?.stop(),clearInterval(o.current),o.current=void 0)}),[]),v=(0,s.useCallback)((()=>{if(!e.current||!d.current)return;const t=new Blob(d.current,{type:m}),n=window.URL.createObjectURL(t),r=document.createElement("a");r.style.display="none",r.href=n,r.download="test."+/\w+\/(\w+)/.exec(m||"")?.[1],document.body.appendChild(r),r.click(),setTimeout((()=>{document.body.removeChild(r),window.URL.revokeObjectURL(n)}),100)}),[]);return(0,s.useLayoutEffect)((()=>{if(t)return()=>{console.log("clear canvas"),p(),e.current=void 0,c.current=void 0,u.current=void 0,d.current=void 0}}),[t]),{ref:l,download:v,start:f,stop:p,recording:r}}function H({data:e,interval:t,fields:n,onStart:i,onStop:a,max:o}){const{setOption:c}=(0,s.useContext)(l),{sortedNames:u}=function({data:e,fields:{time:t,name:n},interval:r,onStart:i,onStop:a},o){const l=(0,s.useRef)(),c=(0,s.useRef)(0),u=(0,s.useMemo)((()=>[...e.reduce(((e,t)=>(e.add(t[n]),e)),new Set)].sort()),[e,n]),d=(0,s.useMemo)((()=>[...e.reduce(((e,n)=>(e.add(n[t]),e)),new Set)].sort()),[e,t]),m=(0,s.useMemo)((()=>e.reduce(((e,n)=>{const r=n[t];let i=e.get(r);return i||(i={time:r,data:[]},e.set(r,i)),i.data.push(n),e}),new Map)),[e]),f=(0,s.useCallback)((()=>{if(c.current>=d.length)return!1;const e=d[c.current];l.current=e;const t=m.get(e)?.data.reduce(((e,t)=>(e[t[n]]=t,e)),{});return c.current+=1,o(t||{},l.current,u),c.current<d.length}),[m,d]);return(0,s.useEffect)((()=>{c.current=0,f(),i?.();const e=setInterval((()=>{f()||(a?.(),clearInterval(e))}),r);return()=>{a?.(),clearInterval(e)}}),[e,u,d,r]),{sortedNames:u,sortedTimes:d}}({fields:n,data:e,interval:t,onStart:i,onStop:a},((e,t,r)=>{c({series:[{id:"time",type:"scatter",data:[{id:"time",value:t}]},{id:"bars",type:"bar",data:r.map((t=>e[t]?.[n.value]??0))}]})}));return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(m,{dependencies:u,children:(0,r.jsx)(y.Category.Y,{animationDurationUpdate:t,animationDuration:t/3,animationEasing:"linear",animationEasingUpdate:"linear",data:u,inverse:!0,max:o,axisLabel:{width:96,fontSize:14,overflow:"truncate",formatter:e=>{const[t,n]=e.split("/");return t===n?n:`{owner|${t}/}\n${n}`},rich:{owner:{fontSize:12,opacity:.618}}}})})})}(0,A.D)([B.N,Y.T,U.z]);(0,s.forwardRef)((function({formatTime:e,fields:t,data:n,interval:i,children:a,theme:o,max:l=10,...c},d){const{ref:f,recording:p,download:h,start:b,stop:g}=function(e){const{start:t,stop:n,recording:r,download:i,ref:a}=X();return{ref:(0,s.useCallback)((t=>{a(t?.getDom().querySelector("canvas")??null),e&&("function"==typeof e?e(t):e.current=t)}),[]),start:t,stop:n,recording:r,download:i}}(d),{max:x,min:w}=(0,s.useMemo)((()=>n.reduce(((e,n)=>(n[t.time]>e.max&&(e.max=n[t.time]),n[t.time]<e.min&&(e.min=n[t.time]),e)),{max:"",min:"zzzzzzzzzzzzzzzzzzzzzzz"})),[n]),A=(0,s.useCallback)((t=>e?.(t.value)??String(t.value)),[e]);return(0,r.jsxs)(u,{theme:o,init:{renderer:"canvas",...c},defaults:{animationDuration:0,animationDurationUpdate:i,animationEasing:"linear",animationEasingUpdate:"linear"},ref:f,children:[(0,r.jsxs)(m,{dependencies:[w,x],children:[(0,r.jsx)(M,{containLabel:!0,left:8,top:48,bottom:48,right:48}),(0,r.jsx)(z,{type:"scroll",orient:"horizontal"}),(0,r.jsx)(y.Value.X,{max:"dataMax",axisLabel:{showMaxLabel:!1},position:"top"}),(0,r.jsx)(Z,{trigger:"item",renderMode:"html"})]}),(0,r.jsx)(m,{dependencies:[w,x],children:(0,r.jsx)(D,{type:"time",min:w,max:x,bottom:"24",axisLabel:{inside:!0},axisTick:{show:!1},height:"0",tooltip:{show:!1}})}),(0,r.jsxs)(m,{dependencies:[A,t.name,t.value],children:[(0,r.jsx)(C,{id:"time",coordinateSystem:"singleAxis",symbolSize:6,symbolOffset:3,symbolRotate:180,symbol:"path://M,90,0,H,0,l,45,90,L,90,0,z",label:{show:!0,position:"bottom",formatter:A},emphasis:{disabled:!0}}),(0,r.jsx)(k,{id:"bars",encode:{x:t.value,y:t.name},realtimeSort:!0,colorBy:"data",label:{show:!0,position:"right",valueAnimation:!0}})]}),(0,r.jsx)(v,{cond:!p,once:!0,then:()=>{return(0,r.jsx)(F,{feature:{myDownload:(e=h,{show:!0,onclick:e,iconStyle:{borderColor:"lightgray"},icon:"path://M995.84,1024,28.16,1024C12.8,1024,0,1011.2,0,995.84l0,0c0-15.36,12.8-28.16,28.16-28.16l967.68,0c15.36,0,28.16,12.8,28.16,28.16l0,0C1024,1011.2,1011.2,1024,995.84,1024zM926.72,376.32,926.72,376.32c-10.24-10.24-30.72-10.24-40.96,0L537.6,721.92,537.6,28.16C537.6,12.8,527.36,0,512,0s-25.6,12.8-25.6,28.16l0,693.76L138.24,376.32c-10.24-10.24-30.72-10.24-40.96,0-10.24,10.24-10.24,28.16,0,40.96l394.24,394.24c2.56,2.56,2.56,2.56,5.12,2.56,0,0,2.56,2.56,2.56,2.56,7.68,2.56,15.36,2.56,23.04,0,2.56,0,2.56-2.56,2.56-2.56,2.56,0,5.12-2.56,5.12-2.56l394.24-394.24C936.96,404.48,936.96,386.56,926.72,376.32z"})}});var e}}),(0,r.jsx)(H,{interval:i,fields:t,data:n,onStart:b,onStop:g,max:l}),a]})}));var q=(0,s.forwardRef)((function({data:e,fields:t,children:n,theme:i,formatTime:a,...o},l){const c=function(e,t){return(0,s.useMemo)((()=>{const n=new Set;return e.forEach((e=>n.add(e[t]))),[...n].sort()}),[e,t])}(e,t.name),d=(0,s.useCallback)((e=>a?.(e.value)??String(e.value)),[a]);return(0,r.jsxs)(u,{ref:l,init:o,theme:i,children:[(0,r.jsxs)(m,{dependencies:c,children:[(0,r.jsx)(M,{containLabel:!0,left:8,right:8,top:48,bottom:8}),(0,r.jsx)(y.Time.X,{axisPointer:{label:{formatter:d}}}),(0,r.jsx)(y.Value.Y,{}),(0,r.jsx)(Z,{trigger:"axis",axisPointer:{type:"cross"},renderMode:"html",confine:!0,formatter:e=>`<b>${e[0].axisValueLabel}</b><br/>`+e.sort(((e,n)=>n.value[t.value]-e.value[t.value])).map((e=>`${e.marker}${e.value[t.name]} <span style="float: right; margin-left: 16px;">${e.value[t.value]}</span>`)).join("<br>")}),c.map((e=>(0,r.jsxs)(s.Fragment,{children:[(0,r.jsx)(R,{id:e,fromDatasetId:"original",transform:{type:"filter",config:{value:e,dimension:t.name}}}),(0,r.jsx)(j,{datasetId:e,name:e,encode:{x:t.time,y:t.value},showSymbol:!1,smooth:!0,emphasis:{focus:"series"}})]},e)))]}),(0,r.jsx)(R,{id:"original",source:e}),n]})}))},26613:function(e,t,n){var r=n(95318);t.Z=void 0;var i=r(n(64938)),a=n(85893),o=(0,i.default)((0,a.jsx)("path",{d:"m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");t.Z=o},57354:function(e,t,n){var r=n(95318);t.Z=void 0;var i=r(n(64938)),a=n(85893),o=(0,i.default)((0,a.jsx)("path",{d:"M16.01 11H4v2h12.01v3L20 12l-3.99-4z"}),"ArrowRightAlt");t.Z=o},54364:function(e,t,n){var r=n(95318);t.Z=void 0;var i=r(n(64938)),a=n(85893),o=(0,i.default)((0,a.jsx)("path",{d:"m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"}),"ArrowUpward");t.Z=o},71055:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(67294),i=n(86010),a=n(95999),o="backToTopButton_i9tI",s="backToTopButtonShow_wCmF",l=n(53810);function c(){var e=(0,r.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var u=function(){var e,t=(0,r.useState)(!1),n=t[0],u=t[1],d=(0,r.useRef)(!1),m=c(),f=m.smoothScrollTop,p=m.cancelScrollToTop;return(0,l.RF)((function(e,t){var n=e.scrollY,r=null==t?void 0:t.scrollY;if(r)if(d.current)d.current=!1;else{var i=n<r;if(i||p(),n<300)u(!1);else if(i){var a=document.documentElement.scrollHeight;n+window.innerHeight<a&&u(!0)}else u(!1)}})),(0,l.SL)((function(e){e.location.hash&&(d.current=!0,u(!1))})),r.createElement("button",{"aria-label":(0,a.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",l.kM.common.backToTopButton,o,(e={},e[s]=n,e)),type:"button",onClick:function(){return f()}})}},10284:function(e,t,n){n.d(t,{Z:function(){return P}});var r=n(67294),i=n(86010),a=n(53810),o=n(93783),s=n(55537),l=n(34096),c=n(95999),u=n(87462),d=n(63366),m=n(39960),f=n(13919),p=n(90541),v="menuLinkText_OKON",h="hasHref_TwRn",b=n(72389),g=["items"],x=["item"],y=["item","onItemClick","activePath","level"],w=["item","onItemClick","activePath","level"],A=(0,r.memo)((function(e){var t=e.items,n=(0,d.Z)(e,g);return r.createElement(r.Fragment,null,t.map((function(e,t){return r.createElement(k,(0,u.Z)({key:t,item:e},n))})))}));function k(e){var t=e.item,n=(0,d.Z)(e,x);return"category"===t.type?0===t.items.length?null:r.createElement(S,(0,u.Z)({item:t},n)):r.createElement(j,(0,u.Z)({item:t},n))}function S(e){var t,n=e.item,o=e.onItemClick,s=e.activePath,l=e.level,f=(0,d.Z)(e,y),p=n.items,g=n.label,x=n.collapsible,w=n.className,k=n.href,S=function(e){var t=(0,b.Z)();return(0,r.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,a.Wl)(e):void 0}),[e,t])}(n),j=(0,a._F)(n,s),E=(0,a.uR)({initialState:function(){return!!x&&(!j&&n.collapsed)}}),C=E.collapsed,T=E.setCollapsed,R=E.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,i=e.setCollapsed,o=(0,a.D9)(t);(0,r.useEffect)((function(){t&&!o&&n&&i(!1)}),[t,o,n,i])}({isActive:j,collapsed:C,setCollapsed:T}),r.createElement("li",{className:(0,i.Z)(a.kM.docs.docSidebarItemCategory,a.kM.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":C},w)},r.createElement("div",{className:"menu__list-item-collapsible"},r.createElement(m.Z,(0,u.Z)({className:(0,i.Z)("menu__link",(t={"menu__link--sublist":x&&!k,"menu__link--active":j},t[v]=!x,t[h]=!!S,t)),onClick:x?function(e){null==o||o(n),k?T(!1):(e.preventDefault(),R())}:function(){null==o||o(n)},href:x?null!=S?S:"#":S},f),g),k&&x&&r.createElement("button",{"aria-label":(0,c.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:g}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),R()}})),r.createElement(a.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:C},r.createElement(A,{items:p,tabIndex:C?-1:0,onItemClick:o,activePath:s,level:l+1})))}function j(e){var t=e.item,n=e.onItemClick,o=e.activePath,s=e.level,l=(0,d.Z)(e,w),c=t.href,v=t.label,h=t.className,b=(0,a._F)(t,o);return r.createElement("li",{className:(0,i.Z)(a.kM.docs.docSidebarItemLink,a.kM.docs.docSidebarItemLinkLevel(s),"menu__list-item",h),key:v},r.createElement(m.Z,(0,u.Z)({className:(0,i.Z)("menu__link",{"menu__link--active":b}),"aria-current":b?"page":void 0,to:c},(0,f.Z)(c)&&{onClick:n?function(){return n(t)}:void 0},l),(0,f.Z)(c)?v:r.createElement("span",null,v,r.createElement(p.Z,null))))}var E="sidebar_a3j0",C="sidebarWithHideableNavbar_VlPv",T="sidebarHidden_OqfG",R="sidebarLogo_hmkv",L="menu_cyFh",z="menuWithAnnouncementBar_+O1J",_="collapseSidebarButton_eoK2",Z="collapseSidebarButtonIcon_e+kA";function N(e){var t=e.onClick;return r.createElement("button",{type:"button",title:(0,c.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",_),onClick:t},r.createElement(l.Z,{className:Z}))}function M(e){var t,n,o=e.path,l=e.sidebar,c=e.onCollapse,u=e.isHidden,d=function(){var e=(0,a.nT)().isActive,t=(0,r.useState)(e),n=t[0],i=t[1];return(0,a.RF)((function(t){var n=t.scrollY;e&&i(0===n)}),[e]),e&&n}(),m=(0,a.LU)(),f=m.navbar.hideOnScroll,p=m.hideableSidebar;return r.createElement("div",{className:(0,i.Z)(E,(t={},t[C]=f,t[T]=u,t))},f&&r.createElement(s.Z,{tabIndex:-1,className:R}),r.createElement("nav",{className:(0,i.Z)("menu thin-scrollbar",L,(n={},n[z]=d,n))},r.createElement("ul",{className:(0,i.Z)(a.kM.docs.docSidebarMenu,"menu__list")},r.createElement(A,{items:l,activePath:o,level:1}))),p&&r.createElement(N,{onClick:c}))}var I=function(e){var t=e.toggleSidebar,n=e.sidebar,o=e.path;return r.createElement("ul",{className:(0,i.Z)(a.kM.docs.docSidebarMenu,"menu__list")},r.createElement(A,{items:n,activePath:o,onItemClick:function(e){"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function D(e){return r.createElement(a.Cv,{component:I,props:e})}var O=r.memo(M),F=r.memo(D);function P(e){var t=(0,o.Z)(),n="desktop"===t||"ssr"===t,i="mobile"===t;return r.createElement(r.Fragment,null,n&&r.createElement(O,e),i&&r.createElement(F,e))}},34096:function(e,t,n){var r=n(87462),i=n(67294);t.Z=function(e){return i.createElement("svg",(0,r.Z)({width:"20",height:"20","aria-hidden":"true"},e),i.createElement("g",{fill:"#7a7a7a"},i.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),i.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}},38252:function(e){e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,i,a;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(i=r;0!=i--;)if(!e(t[i],n[i]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(a=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(i=r;0!=i--;)if(!Object.prototype.hasOwnProperty.call(n,a[i]))return!1;for(i=r;0!=i--;){var o=a[i];if(("_owner"!==o||!t.$$typeof)&&!e(t[o],n[o]))return!1}return!0}return t!=t&&n!=n}},9566:function(e,t,n){n.d(t,{o:function(){return c}});var r=n(70655);function i(e){return e.toLowerCase()}var a=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],o=/[^A-Z0-9]+/gi;function s(e,t,n){return t instanceof RegExp?e.replace(t,n):t.reduce((function(e,t){return e.replace(t,n)}),e)}function l(e,t){return void 0===t&&(t={}),function(e,t){void 0===t&&(t={});for(var n=t.splitRegexp,r=void 0===n?a:n,l=t.stripRegexp,c=void 0===l?o:l,u=t.transform,d=void 0===u?i:u,m=t.delimiter,f=void 0===m?" ":m,p=s(s(e,r,"$1\0$2"),c,"\0"),v=0,h=p.length;"\0"===p.charAt(v);)v++;for(;"\0"===p.charAt(h-1);)h--;return p.slice(v,h).split("\0").map(d).join(f)}(e,(0,r.__assign)({delimiter:"."},t))}function c(e,t){return void 0===t&&(t={}),l(e,(0,r.__assign)({delimiter:"-"},t))}}}]);
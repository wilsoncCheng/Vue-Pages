"use strict";(self["webpackChunkweek6"]=self["webpackChunkweek6"]||[]).push([[644],{8073:function(t,a,e){var n=e(9391);const s=(0,n.Z)();a["Z"]=s},230:function(t,a,e){e.d(a,{Z:function(){return d}});var n=e(6252),s=e(3577);const l={class:"toast-header"},o={class:"me-auto"},r=(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1);function i(t,a,e,i,c,u){return(0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(c.messages,((t,a)=>((0,n.wg)(),(0,n.iD)("div",{key:a,class:(0,s.C_)(["toast show",`toast${a}`]),style:{position:"fixed",right:"0",top:"0","z-index":"1500"},role:"alert"},[(0,n._)("div",l,[(0,n._)("span",{class:(0,s.C_)([`bg-${t.style}`,"p-2 rounded me-2 d-inline-block"])},null,2),(0,n._)("strong",o,(0,s.zw)(t.title),1),r])],2)))),128)}var c={data(){return{messages:[]}},methods:{toastShow(){setTimeout((()=>{this.messages.shift()}),6e3)}},inject:["emitter"],mounted(){this.emitter.on("push-message",(t=>{const{style:a="success",title:e,content:n}=t;this.messages.push({style:a,title:e,content:n}),this.toastShow()}))}},u=e(3744);const p=(0,u.Z)(c,[["render",i]]);var d=p},3644:function(t,a,e){e.r(a),e.d(a,{default:function(){return rt}});var n=e(6252);function s(t,a,e,s,l,o){const r=(0,n.up)("FrontNavbar"),i=(0,n.up)("FrontSlide"),c=(0,n.up)("router-view"),u=(0,n.up)("FooterInfor"),p=(0,n.up)("ToastMessages");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(r),(0,n.Wm)(i),(0,n.Wm)(c),(0,n.Wm)(u),(0,n.Wm)(p)],64)}var l=e(8073),o=e(3577);const r={class:"navbar navbar-expand-lg py-0 navbar-dark fixed-top z-index-3",style:{"background-color":"rgba(0,0,0,.2)"}},i={class:"container-fluid container"},c=(0,n.Uk)("威爾森的猴樂園"),u=(0,n._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,n._)("span",{class:"navbar-toggler-icon"})],-1),p={class:"collapse navbar-collapse",id:"navbarSupportedContent"},d={class:"navbar-nav me-auto mb-2 mb-lg-0",style:{"margin-top":"8px"}},g={class:"nav-item h5"},m=(0,n.Uk)("首頁"),v={class:"nav-item"},b=(0,n.Uk)("產品列表"),f={class:"nav-item"},h=(0,n.Uk)("購物車"),_={class:"nav-item"},w=(0,n.Uk)("關於我"),k={type:"button",class:"btn position-relative"},x=(0,n._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",fill:"white",class:"bi bi-cart",viewBox:"0 0 16 16"},[(0,n._)("path",{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"})],-1),y={class:"badge rounded-pill bg-danger"};function W(t,a,e,s,l,W){const C=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("nav",r,[(0,n._)("div",i,[(0,n.Wm)(C,{class:"navbar-brand",to:"/"},{default:(0,n.w5)((()=>[c])),_:1}),u,(0,n._)("div",p,[(0,n._)("ul",d,[(0,n._)("li",g,[(0,n.Wm)(C,{class:"nav-link",to:"/",replace:""},{default:(0,n.w5)((()=>[m])),_:1})]),(0,n._)("li",v,[(0,n.Wm)(C,{class:"nav-link",to:"/products",append:""},{default:(0,n.w5)((()=>[b])),_:1})]),(0,n._)("li",f,[(0,n.Wm)(C,{class:"nav-link",to:"/cart",append:""},{default:(0,n.w5)((()=>[h])),_:1})]),(0,n._)("li",_,[(0,n.Wm)(C,{class:"nav-link",to:"/me",append:""},{default:(0,n.w5)((()=>[w])),_:1})])])]),(0,n.Wm)(C,{class:"nav-link",to:"/cart",append:""},{default:(0,n.w5)((()=>[(0,n._)("button",k,[x,(0,n._)("span",y,(0,o.zw)(l.cartData.carts.length),1)])])),_:1})])])}var C={data(){return{cartData:{carts:[]}}},methods:{getCart(){this.$http.get("https://vue3-course-api.hexschool.io/v2//api/wilsoncheng/cart").then((t=>{this.cartData=t.data.data}))}},inject:["emitter"],mounted(){this.getCart(),this.emitter.on("get-cart",(t=>{alert(t),this.getCart()}))}},U=e(3744);const Z=(0,U.Z)(C,[["render",W]]);var z=Z,D=e(4555);const H={class:"active position-relative mb-3"},S=(0,n._)("img",{src:D,class:"d-block w-100",alt:"...",style:{width:"1600px",height:"auto","max-height":"600px"}},null,-1),j={class:"position-absolute container banner-box d-flex align-items-center justify-content-center justify-content-lg-start px-0 px-lg-3",style:{left:"35%",top:"60%"}},F={id:"indexcontent",style:{width:"450px",height:"220px",background:"white",opacity:"0.75",padding:"20px","text-align":"center","line-height":"1","border-radius":"1.5rem"}},M=(0,n._)("h4",{class:"banner-text text-black mt-6 fs-1 lh-base text-center"},"南臺灣的後院",-1),T=(0,n._)("h5",{class:"banner-text text-black mt-6 fs-5 fs-lg-3 lh-base"},"高雄的西子灣，最青春的猴樂園",-1),I=(0,n.Uk)("看看更多");function Y(t,a){const e=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",H,[S,(0,n._)("div",j,[(0,n._)("div",F,[M,T,(0,n.Wm)(e,{class:"page-scroll btn btn-xl",to:"/products",replace:""},{default:(0,n.w5)((()=>[I])),_:1})])])])}const $={},A=(0,U.Z)($,[["render",Y]]);var L=A;const N={class:"py-3 bg"},O={class:"nav justify-content-center border-bottom pb-3 mb-3"},R=(0,n._)("li",{class:"nav-item"},[(0,n._)("a",{href:"#",class:"nav-link px-2"},"首頁")],-1),B={class:"nav-item"},G=(0,n.Uk)("產品列表"),K={class:"nav-item"},P=(0,n.Uk)("購物車"),q={class:"nav-item"},E=(0,n.Uk)("關於我"),J={class:"text-center"},Q=(0,n.Uk)("© 本網站僅供個人作品使用，不提供商業用途 | "),V=(0,n.Uk)("登入管理後台"),X=(0,n._)("p",{class:"text-center"},"HoSonRay © 2022 COPYRIGHT",-1);function tt(t,a){const e=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("footer",N,[(0,n._)("ul",O,[R,(0,n._)("li",B,[(0,n.Wm)(e,{class:"nav-link px-2",to:"/products",append:""},{default:(0,n.w5)((()=>[G])),_:1})]),(0,n._)("li",K,[(0,n.Wm)(e,{class:"nav-link px-2",to:"/cart",append:""},{default:(0,n.w5)((()=>[P])),_:1})]),(0,n._)("li",q,[(0,n.Wm)(e,{class:"nav-link px-2",to:"/me",append:""},{default:(0,n.w5)((()=>[E])),_:1})])]),(0,n._)("p",J,[Q,(0,n.Wm)(e,{class:"footer-text",to:"/login",append:""},{default:(0,n.w5)((()=>[V])),_:1})]),X])}const at={},et=(0,U.Z)(at,[["render",tt]]);var nt=et,st=e(230),lt={components:{FrontSlide:L,FrontNavbar:z,FooterInfor:nt,ToastMessages:st.Z},provide(){return{emitter:l.Z}}};const ot=(0,U.Z)(lt,[["render",s]]);var rt=ot},4555:function(t,a,e){t.exports=e.p+"img/school2.dab413b2.jpg"},9391:function(t,a,e){function n(t){return{all:t=t||new Map,on:function(a,e){var n=t.get(a);n?n.push(e):t.set(a,[e])},off:function(a,e){var n=t.get(a);n&&(e?n.splice(n.indexOf(e)>>>0,1):t.set(a,[]))},emit:function(a,e){var n=t.get(a);n&&n.slice().map((function(t){t(e)})),(n=t.get("*"))&&n.slice().map((function(t){t(a,e)}))}}}e.d(a,{Z:function(){return n}})}}]);
//# sourceMappingURL=644.aa477b26.js.map
"use strict";(self["webpackChunkweek6"]=self["webpackChunkweek6"]||[]).push([[927],{8073:function(t,e,s){var a=s(9391);const n=(0,a.Z)();e["Z"]=n},4951:function(t,e,s){s.d(e,{Z:function(){return h}});var a=s(6252),n=s(3577);const o={class:"toast-header"},c={class:"me-auto"},i=(0,a._)("button",{type:"button",class:"btn-close","aria-label":"Close"},null,-1);function r(t,e,s,r,l,u){return(0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.messages,((t,e)=>((0,a.wg)(),(0,a.iD)("div",{key:e,class:(0,n.C_)(["toast show",`toast${e}`]),style:{position:"fixed",right:"0",top:"0","z-index":"1500"},role:"alert"},[(0,a._)("div",o,[(0,a._)("span",{class:(0,n.C_)([`bg-${t.style}`,"p-2 rounded me-2 d-inline-block"])},null,2),(0,a._)("strong",c,(0,n.zw)(t.title),1),i])],2)))),128)}var l={data(){return{messages:[]}},methods:{toastShow(){setTimeout((()=>{this.messages.shift()}),6e3)}},inject:["emitter"],mounted(){this.emitter.on("push-message",(t=>{const{style:e="success",title:s,content:a}=t;this.messages.push({style:e,title:s,content:a}),this.toastShow()}))}},u=s(3744);const d=(0,u.Z)(l,[["render",r]]);var h=d},5927:function(t,e,s){s.r(e),s.d(e,{default:function(){return $}});var a=s(6252);const n={class:"navbar navbar-expand-lg navbar-dark bg-dark"},o={class:"container-fluid"},c=(0,a._)("a",{class:"navbar-brand",href:"#"},"後台管理頁面",-1),i=(0,a._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,a._)("span",{class:"navbar-toggler-icon"})],-1),r={class:"collapse navbar-collapse",id:"navbarSupportedContent"},l={class:"navbar-nav me-auto mb-2 mb-lg-0"},u={class:"nav-item"},d=(0,a.Uk)("後台產品列表"),h={class:"nav-item"},p=(0,a.Uk)("訂單"),v={class:"nav-item"},m=(0,a.Uk)("回到前台");function g(t,e,s,g,f,k){const b=(0,a.up)("router-link"),_=(0,a.up)("ToastMessages"),w=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("nav",n,[(0,a._)("div",o,[c,i,(0,a._)("div",r,[(0,a._)("ul",l,[(0,a._)("li",u,[(0,a.Wm)(b,{class:"nav-link",to:"/admin/products"},{default:(0,a.w5)((()=>[d])),_:1})]),(0,a._)("li",h,[(0,a.Wm)(b,{class:"nav-link",to:"/admin/Order"},{default:(0,a.w5)((()=>[p])),_:1})]),(0,a._)("li",v,[(0,a.Wm)(b,{class:"nav-link",to:"/"},{default:(0,a.w5)((()=>[m])),_:1})])])])])]),(0,a.Wm)(_),f.checkSuccess?((0,a.wg)(),(0,a.j4)(w,{key:0})):(0,a.kq)("",!0)],64)}var f=s(8073),k=s(4951),b={name:"DashBoard",data(){return{checkSuccess:!1,message:""}},provide(){return{emitter:f.Z}},components:{ToastMessages:k.Z},mounted(){this.checkLogin()},methods:{checkLogin(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");if(t){this.$http.defaults.headers.common.Authorization=`${t}`;const e="https://vue3-course-api.hexschool.io/v2/api/user/check";this.$http.post(e,{api_token:this.token}).then((t=>{this.checkSuccess=!0})).catch((t=>{alert(t.data.message),this.$router.push="/login"}))}}}},_=s(3744);const w=(0,_.Z)(b,[["render",g]]);var $=w},9391:function(t,e,s){function a(t){return{all:t=t||new Map,on:function(e,s){var a=t.get(e);a?a.push(s):t.set(e,[s])},off:function(e,s){var a=t.get(e);a&&(s?a.splice(a.indexOf(s)>>>0,1):t.set(e,[]))},emit:function(e,s){var a=t.get(e);a&&a.slice().map((function(t){t(s)})),(a=t.get("*"))&&a.slice().map((function(t){t(e,s)}))}}}s.d(e,{Z:function(){return a}})}}]);
//# sourceMappingURL=927.0554cc59.js.map
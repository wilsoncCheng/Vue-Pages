"use strict";(self["webpackChunkweek6"]=self["webpackChunkweek6"]||[]).push([[939],{4902:function(t,e,a){var i=a(9391);const n=(0,i.Z)();e["Z"]=n},4600:function(t,e,a){a.d(e,{Z:function(){return f}});var i=a(6252),n=a(3577),s=a(9963);const r={class:"pagination"},c=(0,i._)("span",{"aria-hidden":"true"},"«",-1),o=[c],p={key:0,class:"page-link"},l=["onClick"],u=(0,i._)("span",{"aria-hidden":"true"},"»",-1),g=[u];function d(t,e,a,c,u,d){return(0,i.wg)(),(0,i.iD)("ul",r,[(0,i._)("li",{class:(0,n.C_)(["page-item",{disabled:1===u.pages.current_page}])},[(0,i._)("a",{class:"page-link",href:"#/products","aria-label":"Previous",onClick:e[0]||(e[0]=(0,s.iM)((e=>d.pageChange(t.item-1)),["prevent"]))},o)],2),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(u.pages.total_pages,((t,e)=>((0,i.wg)(),(0,i.iD)("li",{key:e,class:(0,n.C_)(["page-item",{active:t===u.pages.current_page}])},[t===u.pages.current_page?((0,i.wg)(),(0,i.iD)("span",p,(0,n.zw)(t),1)):((0,i.wg)(),(0,i.iD)("a",{key:1,onClick:(0,s.iM)((e=>d.pageChange(t)),["prevent"]),class:"page-link",href:"#/products"},(0,n.zw)(t),9,l))],2)))),128)),(0,i._)("li",{class:(0,n.C_)(["page-item",{disabled:u.pages.current_page===u.pages.total_pages}])},[(0,i._)("a",{class:"page-link",href:"#/products","aria-label":"Next",onClick:e[1]||(e[1]=(0,s.iM)((e=>d.pageChange(t.item+1)),["prevent"]))},g)],2)])}var h={data(){return{pages:{}}},inject:["emitter"],methods:{pageChange(t){this.emitter.emit("deliver-page_now",{page:t})}},mounted(){this.emitter.on("push-pagination",(t=>{this.pages=t.pages}))}},m=a(3744);const _=(0,m.Z)(h,[["render",d]]);var f=_},7939:function(t,e,a){a.r(e),a.d(e,{default:function(){return C}});var i=a(6252),n=a(3577);const s={class:"container px-4 px-lg-5 my-5"},r={class:"row gx-4 gx-lg-5 align-items-center"},c={class:"col-md-6"},o=["src"],p={class:"col-md-6"},l={class:"display-5 fw-bolder"},u={class:"fs-5 mb-5"},g={class:"text-decoration-line-through"},d={class:"lead"},h={class:"d-flex"},m=(0,i.Uk)("回到商品頁");function _(t,e,a,_,f,v){const w=(0,i.up)("router-link"),k=(0,i.up)("PaginationTool");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",s,[(0,i._)("div",r,[(0,i._)("div",c,[(0,i._)("img",{class:"card-img-top mb-5 mb-md-0",src:f.product.imageUrl,alt:"..."},null,8,o)]),(0,i._)("div",p,[(0,i._)("h1",l,(0,n.zw)(f.product.title),1),(0,i._)("div",u,[(0,i._)("span",g,"$"+(0,n.zw)(f.product.origin_price),1),(0,i._)("span",null,"$"+(0,n.zw)(f.product.price),1)]),(0,i._)("p",d,(0,n.zw)(f.product.content),1),(0,i._)("div",h,[(0,i.Wm)(w,{class:"btn btn-outline-primary btn-lg",style:{"margin-right":"24px"},to:"/products",replace:""},{default:(0,i.w5)((()=>[m])),_:1}),(0,i._)("button",{type:"button",class:"btn btn-primary btn-lg",onClick:e[0]||(e[0]=t=>v.addToCart(f.product.id))},"加入購物車")])])])]),(0,i.Wm)(k)],64)}var f=a(4600),v=a(4902),w={data(){return{product:{}}},components:{PaginationTool:f.Z},inject:["emitter"],methods:{getProduct(){const{id:t}=this.$route.params;this.$http.get(`https://vue3-course-api.hexschool.io/v2/api/wilsoncheng/product/${t}`).then((t=>{this.product=t.data.product}))},addToCart(t,e=1){const a={product_id:t,qty:e};this.isLoadingItem=t,this.$http.post("https://vue3-course-api.hexschool.io/v2//api/wilsoncheng/cart",{data:a}).then((t=>{this.isLoadingItem="",v.Z.emit("get-cart"),this.emitter.emit("push-message",{style:"success",title:"已經加入購物車"})}))}},mounted(){this.getProduct()}},k=a(3744);const b=(0,k.Z)(w,[["render",_]]);var C=b},9391:function(t,e,a){function i(t){return{all:t=t||new Map,on:function(e,a){var i=t.get(e);i?i.push(a):t.set(e,[a])},off:function(e,a){var i=t.get(e);i&&(a?i.splice(i.indexOf(a)>>>0,1):t.set(e,[]))},emit:function(e,a){var i=t.get(e);i&&i.slice().map((function(t){t(a)})),(i=t.get("*"))&&i.slice().map((function(t){t(e,a)}))}}}a.d(e,{Z:function(){return i}})}}]);
//# sourceMappingURL=939.45e93960.js.map
"use strict";(self["webpackChunkweek6"]=self["webpackChunkweek6"]||[]).push([[487],{1487:function(t,e,s){s.r(e),s.d(e,{default:function(){return Z}});var i=s(6252),o=s(9963),a=s(3577);const r={class:"container"},l={class:"row"},c={class:"col-lg-3 col-md-12 col-sm-12"},n={class:"list-group w-100 flex-direction-column text-center"},u={class:"row col-lg-9 row-cols-lg-4 row-col-md-3 col-sm-12 mg0-a"},d={class:"card h-100"},h=["src"],g={class:"card-body"},p={class:"card-title"},w={class:"card-text mb-5 ellipsis"},m={class:"w-100 d-flex justify-content-between"},P={class:"top-0_5 end-10"},_=["onClick"],k=(0,i._)("path",{"fill-rule":"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"},null,-1),C=[k],v=["onClick"],b=(0,i._)("path",{d:"m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"},null,-1),f=[b],y=["onClick"],x={class:"spinner-grow spinner-grow-sm text-danger",role:"status"},D=(0,i.Uk)(" 我想贊助 ");function z(t,e,s,k,b,z){const $=(0,i.up)("router-link"),L=(0,i.up)("PaginationTool");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("form",{onSubmit:e[0]||(e[0]=(0,o.iM)(((...e)=>t.submit&&t.submit(...e)),["prevent"])),class:"vld-parent",ref:"formContainer"},null,544),(0,i._)("div",l,[(0,i._)("div",c,[(0,i._)("div",n,[(0,i._)("a",{href:"#/products",class:(0,a.C_)(["list-group-item list-group-item-action",{active:b.pageProducts===b.showProducts}]),onClick:e[1]||(e[1]=t=>z.ChangeList("all"))},"全部("+(0,a.zw)(b.allProducts.length)+")",3),(0,i._)("a",{href:"#/products",class:"list-group-item list-group-item-action",onClick:e[2]||(e[2]=t=>z.ChangeList("校園"))},"校園("+(0,a.zw)(b.schoolProduct.length)+")",1),(0,i._)("a",{href:"#/products",class:"list-group-item list-group-item-action",onClick:e[3]||(e[3]=t=>z.ChangeList("自然"))},"自然("+(0,a.zw)(b.natureProduct.length)+")",1),(0,i._)("a",{href:"#/products",class:"list-group-item list-group-item-action",onClick:e[4]||(e[4]=t=>z.ChangeList("機械"))},"其他("+(0,a.zw)(b.othersProduct.length)+")",1)])]),(0,i._)("div",u,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(b.showProducts,(t=>((0,i.wg)(),(0,i.iD)("div",{class:"pd-1 mb-2",key:t.id},[(0,i._)("div",d,[(0,i.Wm)($,{to:`/product/${t.id}`},{default:(0,i.w5)((()=>[(0,i._)("img",{src:t.imageUrl,class:"card-img-top",alt:""},null,8,h)])),_:2},1032,["to"]),(0,i._)("div",g,[(0,i._)("h5",p,(0,a.zw)(t.title),1),(0,i._)("p",w,(0,a.zw)(t.description),1),(0,i._)("div",m,[(0,i._)("label",P,[!0===t.like?((0,i.wg)(),(0,i.iD)("svg",{key:0,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-heart-fill d-inline text-danger",onClick:e=>z.likeProduct(t),style:{cursor:"pointer"},viewBox:"0 0 16 16"},C,8,_)):((0,i.wg)(),(0,i.iD)("svg",{key:1,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-heart d-inline text-danger",onClick:e=>z.likeProduct(t),style:{cursor:"pointer"},viewBox:"0 0 16 16"},f,8,v))]),(0,i._)("button",{type:"button",class:(0,a.C_)(["btn btn-outline-danger",{disabled:b.buyProductID===t.id}]),onClick:e=>z.addToCart(t.id)},[(0,i.wy)((0,i._)("div",x,null,512),[[o.F8,b.buyProductID===t.id]]),D],10,y)])])])])))),128))]),(0,i.Wm)(L)])])}const $={class:"pagination"},L=(0,i._)("span",{"aria-hidden":"true"},"«",-1),I=[L],M={key:0,class:"page-link"},T=["onClick"],j=(0,i._)("span",{"aria-hidden":"true"},"»",-1),A=[j];function B(t,e,s,r,l,c){return(0,i.wg)(),(0,i.iD)("ul",$,[(0,i._)("li",{class:(0,a.C_)(["page-item",{disabled:1===l.pages.current_page}])},[(0,i._)("a",{class:"page-link",href:"#/products","aria-label":"Previous",onClick:e[0]||(e[0]=(0,o.iM)((e=>c.pageChange(t.item-1)),["prevent"]))},I)],2),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.pages.total_pages,((t,e)=>((0,i.wg)(),(0,i.iD)("li",{key:e,class:(0,a.C_)(["page-item",{active:t===l.pages.current_page}])},[t===l.pages.current_page?((0,i.wg)(),(0,i.iD)("span",M,(0,a.zw)(t),1)):((0,i.wg)(),(0,i.iD)("a",{key:1,onClick:(0,o.iM)((e=>c.pageChange(t)),["prevent"]),class:"page-link",href:"#/products"},(0,a.zw)(t),9,T))],2)))),128)),(0,i._)("li",{class:(0,a.C_)(["page-item",{disabled:l.pages.current_page===l.pages.total_pages}])},[(0,i._)("a",{class:"page-link",href:"#/products","aria-label":"Next",onClick:e[1]||(e[1]=(0,o.iM)((e=>c.pageChange(t.item+1)),["prevent"]))},A)],2)])}var E={data(){return{pages:{}}},inject:["emitter"],methods:{pageChange(t){this.emitter.emit("deliver-page_now",{page:t})}},mounted(){this.emitter.on("push-pagination",(t=>{this.pages=t.pages}))}},H=s(3744);const K=(0,H.Z)(E,[["render",B]]);var U=K,W={data(){return{pageProducts:[],cartData:{},isLoadingItem:"",buyProductID:"",showProducts:[],allProducts:[],schoolProduct:[],natureProduct:[],othersProduct:[]}},components:{PaginationTool:U},inject:["emitter"],methods:{getPageProducts(t=1){const e=this.$loading.show();this.$http.get(`https://vue3-course-api.hexschool.io/v2/api/wilsoncheng/products?page=${t}`).then((t=>{this.pageProducts=t.data.products,this.showProducts=this.pageProducts,this.emitter.emit("push-pagination",{pages:t.data.pagination}),e.hide()}))},getAllProducts(){this.$http.get("https://vue3-course-api.hexschool.io/v2/api/wilsoncheng/products/all").then((t=>{this.allProducts=t.data.products,this.allProducts.forEach((t=>{"校園"===t.category?this.schoolProduct.push(t):"自然"===t.category?this.natureProduct.push(t):this.othersProduct.push(t)}))}))},likeProduct(t){!0!==t.like?t.like=!0:t.like=!t.like;const e=t;this.$http.put(`https://vue3-course-api.hexschool.io/v2/api/wilsoncheng/admin/product/${t.id}}`,{data:e}).then((t=>{console.log(t)})).catch((t=>{console.log(t)}))},addToCart(t,e=1){this.buyProductID=t;const s={product_id:t,qty:e};this.$http.post("https://vue3-course-api.hexschool.io/v2//api/wilsoncheng/cart",{data:s}).then((()=>{this.emitter.emit("push-message",{style:"success",title:"已經加入購物車"}),this.emitter.emit("get-cart",{}),this.buyProductID=""}))},ChangeList(t){const e=this.$loading.show();this.showProducts=[],"all"===t?this.showProducts=this.pageProducts:this.allProducts.forEach((e=>{e.category===t&&this.showProducts.push(e)})),e.hide()}},mounted(){this.getAllProducts(),this.getPageProducts(),this.emitter.on("deliver-page_now",(t=>{this.getPageProducts(t.page)}))}};const Y=(0,H.Z)(W,[["render",z]]);var Z=Y}}]);
//# sourceMappingURL=487.c0905a71.js.map
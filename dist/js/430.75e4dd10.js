"use strict";(self["webpackChunkweek6"]=self["webpackChunkweek6"]||[]).push([[430],{4600:function(t,e,a){a.d(e,{Z:function(){return _}});var s=a(6252),i=a(3577),n=a(9963);const o={class:"pagination"},c=(0,s._)("span",{"aria-hidden":"true"},"«",-1),l=[c],r={key:0,class:"page-link"},p=["onClick"],d=(0,s._)("span",{"aria-hidden":"true"},"»",-1),u=[d];function g(t,e,a,c,d,g){return(0,s.wg)(),(0,s.iD)("ul",o,[(0,s._)("li",{class:(0,i.C_)(["page-item",{disabled:1===d.pages.current_page}])},[(0,s._)("a",{class:"page-link",href:"#/products","aria-label":"Previous",onClick:e[0]||(e[0]=(0,n.iM)((e=>g.pageChange(t.item-1)),["prevent"]))},l)],2),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(d.pages.total_pages,((t,e)=>((0,s.wg)(),(0,s.iD)("li",{key:e,class:(0,i.C_)(["page-item",{active:t===d.pages.current_page}])},[t===d.pages.current_page?((0,s.wg)(),(0,s.iD)("span",r,(0,i.zw)(t),1)):((0,s.wg)(),(0,s.iD)("a",{key:1,onClick:(0,n.iM)((e=>g.pageChange(t)),["prevent"]),class:"page-link",href:"#/products"},(0,i.zw)(t),9,p))],2)))),128)),(0,s._)("li",{class:(0,i.C_)(["page-item",{disabled:d.pages.current_page===d.pages.total_pages}])},[(0,s._)("a",{class:"page-link",href:"#/products","aria-label":"Next",onClick:e[1]||(e[1]=(0,n.iM)((e=>g.pageChange(t.item+1)),["prevent"]))},u)],2)])}var h={data(){return{pages:{}}},inject:["emitter"],methods:{pageChange(t){this.emitter.emit("deliver-page_now",{page:t})}},mounted(){this.emitter.on("push-pagination",(t=>{this.pages=t.pages}))}},b=a(3744);const m=(0,b.Z)(h,[["render",g]]);var _=m},6430:function(t,e,a){a.r(e),a.d(e,{default:function(){return Z}});var s=a(6252),i=a(3577),n=a(9963);const o={class:"container"},c={class:"row"},l={class:"col-3"},r={class:"btn-group",role:"group","aria-label":"Basic radio toggle button group",style:{"flex-direction":"column",width:"100%"}},p=(0,s._)("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio1",autocomplete:"off",checked:""},null,-1),d=(0,s._)("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio2",autocomplete:"off"},null,-1),u=(0,s._)("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio3",autocomplete:"off"},null,-1),g=(0,s._)("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio4",autocomplete:"off"},null,-1),h={class:"row col-9 row-cols-4 row-cols-lg-4"},b={class:"card h-100"},m=["src"],_={class:"card-body"},f={class:"card-title"},k={class:"card-text"},w={class:"btn-group btn-group-sm"},v={class:"fas fa-spinner fa-pulse"},C=(0,s.Uk)(" 查看更多 "),y=["onClick"],D={class:"fas fa-spinner fa-pulse"},L=(0,s.Uk)(" 我想贊助 ");function P(t,e,a,P,x,I){const z=(0,s.up)("router-link"),T=(0,s.up)("PaginationTool");return(0,s.wg)(),(0,s.iD)("div",o,[(0,s._)("div",c,[(0,s._)("div",l,[(0,s._)("div",r,[p,(0,s._)("label",{class:"btn btn-outline-success",for:"btnradio1",onClick:e[0]||(e[0]=t=>I.ChangeList("all"))},"全部"),d,(0,s._)("label",{class:"btn btn-outline-success",for:"btnradio2",onClick:e[1]||(e[1]=t=>I.ChangeList("校園"))},"校園"),u,(0,s._)("label",{class:"btn btn-outline-success",for:"btnradio3",onClick:e[2]||(e[2]=t=>I.ChangeList("自然"))},"自然"),g,(0,s._)("label",{class:"btn btn-outline-success",for:"btnradio4",onClick:e[3]||(e[3]=t=>I.ChangeList("機械"))},"其他")])]),(0,s._)("div",h,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(x.listproducts,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"col",key:e.id},[(0,s._)("div",b,[(0,s._)("img",{src:e.imageUrl,class:"card-img-top",alt:""},null,8,m),(0,s._)("div",_,[(0,s._)("h5",f,(0,i.zw)(e.title),1),(0,s._)("p",k,(0,i.zw)(e.description),1),(0,s._)("div",w,[(0,s.Wm)(z,{to:`/product/${e.id}`,class:"btn btn-outline-secondary"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s._)("i",v,null,512),[[n.F8,t.productID===e.id]]),C])),_:2},1032,["to"]),(0,s._)("button",{type:"button",class:"btn btn-outline-danger",onClick:t=>I.addToCart(e.id)},[(0,s.wy)((0,s._)("i",D,null,512),[[n.F8,x.isLoadingItem===e.id]]),L],8,y)])])])])))),128))]),(0,s.Wm)(T)])])}var x=a(4600),I={data(){return{products:[],cartData:{},listproducts:[],isLoadingItem:""}},components:{PaginationTool:x.Z},inject:["emitter"],methods:{getProducts(t=1){this.$http.get(`https://vue3-course-api.hexschool.io/v2/api/wilsoncheng/products?page=${t}`).then((t=>{this.products=t.data.products,this.listproducts=this.products,this.emitter.emit("push-pagination",{pages:t.data.pagination})}))},addToCart(t,e=1){const a={product_id:t,qty:e};this.isLoadingItem=t,this.$http.post("https://vue3-course-api.hexschool.io/v2//api/wilsoncheng/cart",{data:a}).then((t=>{this.isLoadingItem="",this.emitter.emit("push-message",{style:"success",title:"已經加入購物車"})}))},ChangeList(t){this.listproducts=[],"all"===t?this.listproducts=this.products:this.products.forEach((e=>{e.category===t&&this.listproducts.push(e)}))}},mounted(){this.getProducts(),this.emitter.on("deliver-page_now",(t=>{this.getProducts(t.page)}))}},z=a(3744);const T=(0,z.Z)(I,[["render",P]]);var Z=T}}]);
//# sourceMappingURL=430.75e4dd10.js.map
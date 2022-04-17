"use strict";(self["webpackChunkweek6"]=self["webpackChunkweek6"]||[]).push([[812],{4902:function(e,t,s){var a=s(9391);const l=(0,a.Z)();t["Z"]=l},9983:function(e,t,s){s.r(t),s.d(t,{default:function(){return R}});var a=s(6252),l=s(9963),i=s(3577);const r={class:"container"},n={class:"row"},o={class:"col-md-12 col-lg-6"},d={class:"mt-4"},c=(0,a._)("h2",null,"購物車",-1),u={class:"text-end"},m={class:"table align-middle"},h=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th",null,"商品名稱"),(0,a._)("th",null,"數量"),(0,a._)("th",null,"價格")])],-1),p=["onClick"],g={class:"spinner-grow spinner-grow-sm",role:"status"},_=(0,a._)("span",{class:"visually-hidden"},null,-1),v=[_],f=(0,a.Uk)(" x "),b=(0,a._)("div",{class:"text-success"},"已套用優惠券",-1),w={class:"input-group input-group-sm"},y={class:"input-group mb-3"},k=["onUpdate:modelValue","onChange"],x=["value","selected"],C={class:"input-group-text",id:"basic-addon2"},V={class:"text-end"},I={key:1},$={colspan:"3",class:"text-end"},L={class:"text-end"},D=(0,a._)("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),q={class:"text-end text-success"},U={class:"my-5 row col-md-12 col-lg-6 justify-content-center"},W={class:"mb-3 w-100"},z=(0,a._)("label",{for:"email",class:"form-label"},"Email",-1),O={class:"mb-3 w-100"},S=(0,a._)("label",{for:"name",class:"form-label"},"收件人姓名",-1),Z={class:"mb-3"},M=(0,a._)("label",{for:"tel",class:"form-label"},"收件人電話",-1),j={class:"mb-3"},E=(0,a._)("label",{for:"address",class:"form-label"},"收件人地址",-1),F={class:"mb-3"},H=(0,a._)("label",{for:"message",class:"form-label"},"留言",-1),K={class:"text-end"},Y={class:"btn btn-danger"},T=(0,a._)("span",{class:"visually-hidden"},null,-1),A=[T],B=(0,a.Uk)("送出訂單");function G(e,t,s,_,T,G){const J=(0,a.up)("Vee-field"),N=(0,a.up)("error-message"),P=(0,a.up)("Vee-form");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("form",{onSubmit:t[0]||(t[0]=(0,l.iM)(((...t)=>e.submit&&e.submit(...t)),["prevent"])),class:"vld-parent",ref:"formContainer"},null,544),(0,a._)("div",n,[(0,a._)("div",o,[(0,a._)("div",d,[c,(0,a._)("div",u,[(0,a._)("button",{class:"btn btn-outline-danger",type:"button",onClick:t[1]||(t[1]=e=>G.removeCarts())},"清空購物車")]),(0,a._)("table",m,[h,(0,a._)("tbody",null,[T.cartData.carts?((0,a.wg)(!0),(0,a.iD)(a.HY,{key:0},(0,a.Ko)(T.cartData.carts,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.id},[(0,a._)("td",null,[(0,a._)("button",{type:"button",onClick:t=>G.removeCartItem(e.id),class:"btn btn-outline-danger btn-sm"},[(0,a.wy)((0,a._)("div",g,v,512),[[l.F8,T.isLoadingItem]]),f],8,p)]),(0,a._)("td",null,[(0,a.Uk)((0,i.zw)(e.product.title)+" ",1),b]),(0,a._)("td",null,[(0,a._)("div",w,[(0,a._)("div",y,[(0,a.wy)((0,a._)("select",{id:"",class:"form-select","onUpdate:modelValue":t=>e.qty=t,onChange:t=>G.updateCartItem(e)},[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(20,(t=>(0,a._)("option",{value:t,selected:e.qty===t,key:`${t}-${e.id}`},(0,i.zw)(t),9,x))),64))],40,k),[[l.bM,e.qty]]),(0,a._)("span",C,(0,i.zw)(e.product.unit),1)])])]),(0,a._)("td",V,(0,i.zw)(e.total),1)])))),128)):((0,a.wg)(),(0,a.iD)("div",I,"123"))]),(0,a._)("tfoot",null,[(0,a._)("tr",null,[(0,a._)("td",$,"總計"+(0,i.zw)(T.isShow),1),(0,a._)("td",L,(0,i.zw)(T.cartData.total),1)]),(0,a._)("tr",null,[D,(0,a._)("td",q,(0,i.zw)(T.cartData.final_total),1)])])])])]),(0,a._)("div",U,[(0,a.Wm)(P,{ref:"form",onSubmit:G.createOrder},{default:(0,a.w5)((({errors:e})=>[(0,a.Uk)((0,i.zw)(T.error)+" ",1),(0,a._)("div",W,[z,(0,a.Wm)(J,{id:"email",name:"email",type:"email",class:(0,i.C_)(["form-control",{"is-invalid":e["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:T.user.email,"onUpdate:modelValue":t[2]||(t[2]=e=>T.user.email=e)},null,8,["class","modelValue"]),(0,a.Wm)(N,{name:"email",class:"invalid-feedback"})]),(0,a._)("div",O,[S,(0,a.Wm)(J,{id:"name",name:"姓名",type:"text",class:(0,i.C_)(["form-control",{"is-invalid":e["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:T.user.name,"onUpdate:modelValue":t[3]||(t[3]=e=>T.user.name=e)},null,8,["class","modelValue"]),(0,a.Wm)(N,{name:"姓名",class:"invalid-feedback"})]),(0,a._)("div",Z,[M,(0,a.Wm)(J,{id:"tel",name:"電話",type:"tel",class:(0,i.C_)(["form-control",{"is-invalid":e["電話"]}]),placeholder:"請輸入電話",rules:"required|min:8|max:10",modelValue:T.user.tel,"onUpdate:modelValue":t[4]||(t[4]=e=>T.user.tel=e)},null,8,["class","modelValue"]),(0,a.Wm)(N,{name:"電話",class:"invalid-feedback"})]),(0,a._)("div",j,[E,(0,a.Wm)(J,{id:"address",name:"地址",type:"text",class:(0,i.C_)(["form-control",{"is-invalid":e["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:T.user.address,"onUpdate:modelValue":t[5]||(t[5]=e=>T.user.address=e)},null,8,["class","modelValue"]),(0,a.Wm)(N,{name:"地址",class:"invalid-feedback"})]),(0,a._)("div",F,[H,(0,a.wy)((0,a._)("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":t[6]||(t[6]=e=>T.message=e)},null,512),[[l.nr,T.message]])]),(0,a._)("div",K,[(0,a._)("button",Y,[(0,a.wy)((0,a._)("a",{onClick:t[7]||(t[7]=e=>G.createOrder()),class:"spinner-grow spinner-grow-sm",role:"status"},A,512),[[l.F8,T.isLoadingOrder]]),B])])])),_:1},8,["onSubmit"])])])])}var J=s(4902),N={data(){return{cartData:{},products:[],isLoadingItem:"",isLoadingOrder:"",data:{qty:"",product_id:""},user:{},message:"",error:"",order_id:"",isShow:""}},inject:["emitter"],methods:{getcart(){const e=this.$loading.show();this.$http.get("https://vue3-course-api.hexschool.io/v2/api/wilsoncheng/cart").then((e=>{this.cartData=e.data.data,0===this.cartData.carts.length&&(this.emitter.emit("push-message",{style:"danger",title:"購物車目前沒有商品"}),this.$router.push("/products"))})),e.hide()},removeCartItem(e){this.isLoadingItem=e,this.$http.delete(`https://vue3-course-api.hexschool.io/v2/api/wilsoncheng/cart/${e}`).then((e=>{this.getcart(),this.isLoadingItem=""})),this.emitter.emit("get-cart",{})},removeCarts(){this.isLoadingItem="working",this.$http.delete("https://vue3-course-api.hexschool.io/v2/api/wilsoncheng/carts").then((e=>{this.getcart(),this.isLoadingItem="",this.emitter.emit("push-message",{style:"danger",title:"已刪除此訂單"})})),this.emitter.emit("get-cart",{})},addToCart(e,t=1){const s={product_id:e,qty:t};this.isLoadingItem=e,this.$http.post("https://vue3-course-api.hexschool.io/v2/api/wilsoncheng/cart",{data:s}).then((e=>{this.isLoadingItem="",J.Z.emit("get-cart"),this.emitter.emit("push-message",{style:"success",title:"已經加入購物車"}),this.getcart()}))},updateCartItem(e){const t={product_id:e.id,qty:e.qty};this.isLoadingItem=e.id,this.$http.put(`https://vue3-course-api.hexschool.io/v2/api/wilsoncheng/cart/${e.id}`,{data:t}).then((e=>{this.getcart(),this.isLoadingItem=""}))},createOrder(){const e=this.$loading.show();this.isLoadingOrder="working";const t={user:this.user,message:this.message};this.$http.post("https://vue3-course-api.hexschool.io/v2/api/wilsoncheng/order",{data:t}).then((e=>{this.emitter.emit("push-message",{style:"success",title:"成功建立訂單"}),this.emitter.emit("push-order",{res:e}),this.$router.push({path:`/payment/${e.data.orderId}`})})),e.hide(),this.isLoadingOrder="",this.user={}}},mounted(){this.getcart()}},P=s(3744);const Q=(0,P.Z)(N,[["render",G]]);var R=Q},9391:function(e,t,s){function a(e){return{all:e=e||new Map,on:function(t,s){var a=e.get(t);a?a.push(s):e.set(t,[s])},off:function(t,s){var a=e.get(t);a&&(s?a.splice(a.indexOf(s)>>>0,1):e.set(t,[]))},emit:function(t,s){var a=e.get(t);a&&a.slice().map((function(e){e(s)})),(a=e.get("*"))&&a.slice().map((function(e){e(t,s)}))}}}s.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=812.e9265dc0.js.map
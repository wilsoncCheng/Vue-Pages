"use strict";(self["webpackChunkweek6"]=self["webpackChunkweek6"]||[]).push([[375],{7375:function(s,e,r){r.r(e),r.d(e,{default:function(){return B}});var l=r(6252),t=r(3577);const c={class:"container mt-4 mb-4"},a={class:"col-md-12 p-4 py-5 p-md-5 bg-white"},o=(0,l._)("h2",{class:"fs-4 d-flex mb-4"},"訂購資訊",-1),d={class:"list-unstyled"},i={class:"d-flex"},p=(0,l._)("p",{class:"col-4"},"訂單金額：",-1),_={class:"col text-danger"},h=(0,l.Uk)(" $ "),n={class:"fs-5"},u=(0,l.Uk)(" NTD "),m={class:"d-flex"},w=(0,l._)("p",{class:"col-4 text-nowrap"},"訂單編號：",-1),f={class:"col"},k={class:"d-flex"},g=(0,l._)("p",{class:"col-4"},"Email：",-1),x={class:"col"},b={class:"d-flex"},y=(0,l._)("p",{class:"col-4"},"收件人姓名：",-1),v={class:"col"},z={class:"d-flex"},$=(0,l._)("p",{class:"col-4"},"聯絡電話",-1),C={class:"col"},D={class:"d-flex"},O=(0,l._)("p",{class:"col-4"},"收件地址：",-1),U={class:"col"},j=(0,l._)("li",{class:"d-flex"},[(0,l._)("p",{class:"col-4"},"備註："),(0,l._)("p",{class:"col"},"無")],-1),E={key:0,class:"disable"},N={key:1};function T(s,e,r,T,Z,q){return(0,l.wg)(),(0,l.iD)("div",c,[(0,l._)("div",a,[o,(0,l._)("ul",d,[(0,l._)("li",i,[p,(0,l._)("p",_,[h,(0,l._)("b",n,(0,t.zw)(Z.order.total),1),u])]),(0,l._)("li",m,[w,(0,l._)("p",f,(0,t.zw)(Z.order.id),1)]),(0,l._)("li",k,[g,(0,l._)("p",x,(0,t.zw)(Z.order_user.email),1)]),(0,l._)("li",b,[y,(0,l._)("p",v,(0,t.zw)(Z.order_user.name),1)]),(0,l._)("li",z,[$,(0,l._)("p",C,(0,t.zw)(Z.order_user.tel),1)]),(0,l._)("li",D,[O,(0,l._)("p",U,(0,t.zw)(Z.order_user.address),1)]),j]),(0,l._)("button",{type:"submit",class:"btn btn-primary w-100 py-3 mt-5",onClick:e[0]||(e[0]=s=>q.payCheck())},[Z.paid?((0,l.wg)(),(0,l.iD)("p",E,"已付款")):((0,l.wg)(),(0,l.iD)("p",N,"信用卡付款"))])])])}var Z={data(){return{order:{},order_user:{},order_product:{},order_id:"",paid:""}},inject:["emitter"],methods:{getOrder(){this.order_id=this.$route.params.id,this.$http.get(`https://vue3-course-api.hexschool.io/v2/api/wilsoncheng/order/${this.order_id}`).then((s=>{this.order=s.data.order,this.order_user=s.data.order.user,this.order_products=s.data.order.products}))},payCheck(){this.$http.post(`https://vue3-course-api.hexschool.io/v2/api/wilsoncheng/pay/${this.order_id}`).then((s=>{this.emitter.emit("push-message",{style:"success",title:"已經完成繳費"}),this.paid="已繳費"})).catch((s=>{console.log(s)}))}},mounted(){this.getOrder()}},q=r(3744);const A=(0,q.Z)(Z,[["render",T]]);var B=A}}]);
//# sourceMappingURL=375.e2d18102.js.map
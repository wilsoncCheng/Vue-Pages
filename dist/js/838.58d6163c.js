"use strict";(self["webpackChunkweek6"]=self["webpackChunkweek6"]||[]).push([[838],{5838:function(s,e,t){t.r(e),t.d(e,{default:function(){return rs}});var l=t(6252),a=t(3577);const r={class:"container mt-4 mb-4"},c={class:"row d-flex-center"},i={class:"col-md-6 position-relative"},d=(0,l._)("div",{class:"lineleftPay"},null,-1),o={class:"process d-flex justify-content-between list-unstyled"},n=(0,l._)("li",{class:"circle rounded-circle text-center bg-primary text-white py-lg-4 py-3"},[(0,l.Uk)(" 1. "),(0,l._)("br"),(0,l._)("span",{class:"d-none d-lg-inline"},"清單確認")],-1),_=(0,l._)("li",{class:"circle rounded-circle text-center py-lg-4 py-3 bg-primary text-white"},[(0,l.Uk)(" 2. "),(0,l._)("br"),(0,l._)("span",{class:"d-none d-lg-inline"},"付款確認")],-1),p=(0,l.Uk)(" 3. "),u=(0,l._)("br",null,null,-1),y=(0,l._)("span",{class:"d-none d-lg-inline"},"完成訂單",-1),h=[p,u,y],g={class:"row justify-content-between"},w={class:"col-md-12 col-lg-6"},x={class:"mt-4"},m={class:"table align-middle"},f=(0,l._)("thead",{style:{"text-align":"center"}},[(0,l._)("tr",null,[(0,l._)("th",null,"品名"),(0,l._)("th",null,"數量"),(0,l._)("th",null,"價格"),(0,l._)("th")])],-1),b={class:"text-center"},k={class:"input-group input-group-sm text-center"},v={class:"mb-3",style:{display:"flex",margin:"0 auto"}},z={class:"input-group-text",style:{"margin-left":"20px"},id:"basic-addon2"},P={class:"text-center"},D=(0,l._)("td",{colspan:"3",class:"text-end text-success"},"總價",-1),C={class:"text-end text-success"},U={class:"my-5 row col-md-12 col-lg-6 justify-content-center"},$=(0,l._)("h2",{class:"fs-4 d-flex mb-4"},"訂購資訊",-1),j={class:"list-unstyled"},q={class:"d-flex"},O=(0,l._)("p",{class:"col-4"},"訂單金額：",-1),E={class:"col text-danger"},H=(0,l.Uk)(" $ "),K={class:"fs-5"},N=(0,l.Uk)(" NTD "),T={class:"d-flex"},Y=(0,l._)("p",{class:"col-4 text-nowrap"},"訂單編號：",-1),Z={class:"col"},A={class:"d-flex"},B=(0,l._)("p",{class:"col-4"},"Email：",-1),F={class:"col"},G={class:"d-flex"},I=(0,l._)("p",{class:"col-4"},"收件人姓名：",-1),J={class:"col"},L={class:"d-flex"},M=(0,l._)("p",{class:"col-4"},"聯絡電話",-1),Q={class:"col"},R={class:"d-flex"},S=(0,l._)("p",{class:"col-4"},"收件地址：",-1),V={class:"col"},W=(0,l._)("li",{class:"d-flex"},[(0,l._)("p",{class:"col-4"},"備註："),(0,l._)("p",{class:"col"},"無")],-1),X={key:0,class:"disable"},ss={key:1};function es(s,e,t,p,u,y){return(0,l.wg)(),(0,l.iD)("div",r,[(0,l._)("div",c,[(0,l._)("div",i,[d,(0,l._)("div",{class:(0,a.C_)({lineright:!u.isPay,linerightPay:u.isPay})},null,2),(0,l._)("ul",o,[n,_,(0,l._)("li",{class:(0,a.C_)(["circle rounded-circle text-center py-lg-4 py-3",{"bg-secondary":!u.isPay,"text-primary":!u.isPay,"bg-primary":u.isPay,"text-white":u.isPay}])},h,2)])])]),(0,l._)("div",g,[(0,l._)("div",w,[(0,l._)("div",x,[(0,l._)("table",m,[f,(0,l._)("tbody",null,[u.cartData?((0,l.wg)(!0),(0,l.iD)(l.HY,{key:0},(0,l.Ko)(u.cartData,(s=>((0,l.wg)(),(0,l.iD)("tr",{key:s.id},[(0,l._)("td",b,(0,a.zw)(s.product.title),1),(0,l._)("td",null,[(0,l._)("div",k,[(0,l._)("div",v,[(0,l.Uk)((0,a.zw)(s.qty)+" ",1),(0,l._)("span",z,(0,a.zw)(s.product.unit),1)])])]),(0,l._)("td",P,(0,a.zw)(s.total),1)])))),128)):(0,l.kq)("",!0)]),(0,l._)("tfoot",null,[(0,l._)("tr",null,[D,(0,l._)("td",C,(0,a.zw)(u.order.total),1)])])])])]),(0,l._)("div",U,[$,(0,l._)("ul",j,[(0,l._)("li",q,[O,(0,l._)("p",E,[H,(0,l._)("b",K,(0,a.zw)(u.order.total),1),N])]),(0,l._)("li",T,[Y,(0,l._)("p",Z,(0,a.zw)(u.order.id),1)]),(0,l._)("li",A,[B,(0,l._)("p",F,(0,a.zw)(u.order_user.email),1)]),(0,l._)("li",G,[I,(0,l._)("p",J,(0,a.zw)(u.order_user.name),1)]),(0,l._)("li",L,[M,(0,l._)("p",Q,(0,a.zw)(u.order_user.tel),1)]),(0,l._)("li",R,[S,(0,l._)("p",V,(0,a.zw)(u.order_user.address),1)]),W]),(0,l._)("button",{type:"submit",class:"btn btn-primary w-100 py-3 mt-5",onClick:e[0]||(e[0]=s=>y.payCheck())},[u.isPay?((0,l.wg)(),(0,l.iD)("p",X,"已付款")):((0,l.wg)(),(0,l.iD)("p",ss,"信用卡付款"))])])])])}var ts={data(){return{cartData:{},order:{},order_user:{},order_product:{},order_id:"",isPay:!1}},inject:["emitter"],methods:{getOrder(){this.order_id=this.$route.params.id,this.$http.get(`https://vue3-course-api.hexschool.io/v2/api/wilsoncheng/order/${this.order_id}`).then((s=>{this.order=s.data.order,this.order_user=s.data.order.user,this.order_products=s.data.order.products,this.cartData=s.data.order.products}))},payCheck(){this.$http.post(`https://vue3-course-api.hexschool.io/v2/api/wilsoncheng/pay/${this.order_id}`).then((s=>{this.emitter.emit("push-message",{style:"success",title:"已經完成繳費"}),this.isPay=!0})).catch((s=>{alert(s.response.data.message)}))}},mounted(){this.getOrder()}},ls=t(3744);const as=(0,ls.Z)(ts,[["render",es]]);var rs=as}}]);
//# sourceMappingURL=838.58d6163c.js.map
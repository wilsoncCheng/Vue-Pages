"use strict";(self["webpackChunkweek6"]=self["webpackChunkweek6"]||[]).push([[844],{3844:function(s,e,t){t.r(e),t.d(e,{default:function(){return is}});var l=t(6252),a=t(3577);const r={class:"container mt-4 mb-4"},c={class:"row d-flex-center"},i={class:"col-md-6"},d={class:"process d-flex justify-content-between list-unstyled"},o=(0,l._)("li",{class:"circle rounded-circle text-center bg-secondary text-primary py-lg-4 py-3"},[(0,l.Uk)(" 1. "),(0,l._)("br"),(0,l._)("span",{class:"d-none d-lg-inline"},"清單確認")],-1),n=(0,l.Uk)(" 2. "),_=(0,l._)("br",null,null,-1),p=(0,l._)("span",{class:"d-none d-lg-inline"},"付款確認",-1),u=[n,_,p],y=(0,l.Uk)(" 3. "),h=(0,l._)("br",null,null,-1),g=(0,l._)("span",{class:"d-none d-lg-inline"},"完成訂單",-1),x=[y,h,g],m={class:"row justify-content-between"},w={class:"col-md-12 col-lg-6"},b={class:"mt-4"},f={class:"table align-middle"},k=(0,l._)("thead",{style:{"text-align":"center"}},[(0,l._)("tr",null,[(0,l._)("th",null,"品名"),(0,l._)("th",null,"數量"),(0,l._)("th",null,"價格"),(0,l._)("th")])],-1),v={class:"text-center"},z={class:"input-group input-group-sm text-center"},P={class:"mb-3",style:{display:"flex",margin:"0 auto"}},D={class:"input-group-text",style:{"margin-left":"20px"},id:"basic-addon2"},C={class:"text-center"},U=(0,l._)("td",{colspan:"3",class:"text-end text-success"},"總價",-1),$={class:"text-end text-success"},j={class:"my-5 row col-md-12 col-lg-6 justify-content-center"},q=(0,l._)("h2",{class:"fs-4 d-flex mb-4"},"訂購資訊",-1),O={class:"list-unstyled"},E={class:"d-flex"},H=(0,l._)("p",{class:"col-4"},"訂單金額：",-1),K={class:"col text-danger"},N=(0,l.Uk)(" $ "),T={class:"fs-5"},Y=(0,l.Uk)(" NTD "),Z={class:"d-flex"},A=(0,l._)("p",{class:"col-4 text-nowrap"},"訂單編號：",-1),B={class:"col"},F={class:"d-flex"},G=(0,l._)("p",{class:"col-4"},"Email：",-1),I={class:"col"},J={class:"d-flex"},L=(0,l._)("p",{class:"col-4"},"收件人姓名：",-1),M={class:"col"},Q={class:"d-flex"},R=(0,l._)("p",{class:"col-4"},"聯絡電話",-1),S={class:"col"},V={class:"d-flex"},W=(0,l._)("p",{class:"col-4"},"收件地址：",-1),X={class:"col"},ss=(0,l._)("li",{class:"d-flex"},[(0,l._)("p",{class:"col-4"},"備註："),(0,l._)("p",{class:"col"},"無")],-1),es={key:0,class:"disable"},ts={key:1};function ls(s,e,t,n,_,p){return(0,l.wg)(),(0,l.iD)("div",r,[(0,l._)("div",c,[(0,l._)("div",i,[(0,l._)("ul",d,[o,(0,l._)("li",{class:(0,a.C_)(["circle rounded-circle text-center py-lg-4 py-3",{"bg-secondary":_.isPay,"text-primary":_.isPay,"bg-primary":!_.isPay,"text-white":!_.isPay}])},u,2),(0,l._)("li",{class:(0,a.C_)(["circle rounded-circle text-center py-lg-4 py-3",{"bg-secondary":!_.isPay,"text-primary":!_.isPay,"bg-primary":_.isPay,"text-white":_.isPay}])},x,2)])])]),(0,l._)("div",m,[(0,l._)("div",w,[(0,l._)("div",b,[(0,l._)("table",f,[k,(0,l._)("tbody",null,[_.cartData?((0,l.wg)(!0),(0,l.iD)(l.HY,{key:0},(0,l.Ko)(_.cartData,(s=>((0,l.wg)(),(0,l.iD)("tr",{key:s.id},[(0,l._)("td",v,(0,a.zw)(s.product.title),1),(0,l._)("td",null,[(0,l._)("div",z,[(0,l._)("div",P,[(0,l.Uk)((0,a.zw)(s.qty)+" ",1),(0,l._)("span",D,(0,a.zw)(s.product.unit),1)])])]),(0,l._)("td",C,(0,a.zw)(s.total),1)])))),128)):(0,l.kq)("",!0)]),(0,l._)("tfoot",null,[(0,l._)("tr",null,[U,(0,l._)("td",$,(0,a.zw)(_.order.total),1)])])])])]),(0,l._)("div",j,[q,(0,l._)("ul",O,[(0,l._)("li",E,[H,(0,l._)("p",K,[N,(0,l._)("b",T,(0,a.zw)(_.order.total),1),Y])]),(0,l._)("li",Z,[A,(0,l._)("p",B,(0,a.zw)(_.order.id),1)]),(0,l._)("li",F,[G,(0,l._)("p",I,(0,a.zw)(_.order_user.email),1)]),(0,l._)("li",J,[L,(0,l._)("p",M,(0,a.zw)(_.order_user.name),1)]),(0,l._)("li",Q,[R,(0,l._)("p",S,(0,a.zw)(_.order_user.tel),1)]),(0,l._)("li",V,[W,(0,l._)("p",X,(0,a.zw)(_.order_user.address),1)]),ss]),(0,l._)("button",{type:"submit",class:"btn btn-primary w-100 py-3 mt-5",onClick:e[0]||(e[0]=s=>p.payCheck())},[_.isPay?((0,l.wg)(),(0,l.iD)("p",es,"已付款")):((0,l.wg)(),(0,l.iD)("p",ts,"信用卡付款"))])])])])}var as={data(){return{cartData:{},order:{},order_user:{},order_product:{},order_id:"",isPay:!1}},inject:["emitter"],methods:{getOrder(){this.order_id=this.$route.params.id,this.$http.get(`https://vue3-course-api.hexschool.io/v2/api/wilsoncheng/order/${this.order_id}`).then((s=>{this.order=s.data.order,this.order_user=s.data.order.user,this.order_products=s.data.order.products,this.cartData=s.data.order.products}))},payCheck(){this.$http.post(`https://vue3-course-api.hexschool.io/v2/api/wilsoncheng/pay/${this.order_id}`).then((s=>{this.emitter.emit("push-message",{style:"success",title:"已經完成繳費"}),this.isPay=!0})).catch((s=>{alert(s.response.data.message)}))}},mounted(){this.getOrder()}},rs=t(3744);const cs=(0,rs.Z)(as,[["render",ls]]);var is=cs}}]);
//# sourceMappingURL=844.5dc823d0.js.map
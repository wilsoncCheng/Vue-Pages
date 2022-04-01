"use strict";(self["webpackChunkweek6"]=self["webpackChunkweek6"]||[]).push([[171],{7171:function(t,e,l){l.r(e),l.d(e,{default:function(){return yt}});var o=l(6252),s=l(3577),a=l(9963);const i={id:"app"},c={class:"container"},r={class:"row py-3"},d={class:"col-md-6"},n={class:"text-end mt-4"},p={class:"table table-hover mt-4 text-center"},u=(0,o._)("thead",null,[(0,o._)("th",{width:"150"},"分類"),(0,o._)("th",{width:"150"},"產品名稱"),(0,o._)("th",{width:"100"},"原價"),(0,o._)("th",{width:"100"},"售價"),(0,o._)("th",{width:"150"},"是否啟用"),(0,o._)("th",{width:"120"},"編輯")],-1),m={width:"120"},h={width:"150"},b={width:"120"},g={width:"120"},_={width:"150"},w={key:0,class:"text-success"},y={key:1,class:"text-danger"},v={width:"140",class:"d-flex justify-content-between"},P=["onClick"],f=["onClick"],k={class:"col-md-6 mt-4"},U={class:"modal-dialog modal-xl"},x={class:"modal-content border-0"},D={class:"modal-header bg-dark text-white"},$={id:"productModalLabel",class:"modal-title"},C={key:0},V={key:1},z=(0,o._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"close"},null,-1),N={class:"modal-body"},M={class:"row"},A={class:"col-sm-4"},I={class:"mb-3"},j=(0,o._)("label",{for:"imageUrl",class:"form-label"},"主要圖片",-1),G=["src"],H=(0,o._)("h3",{class:"mb-3"},"多圖新增",-1),K={key:0},Y={class:"mb-3"},L=(0,o._)("label",{for:"imageUrl",class:"form-label"},"圖片網址",-1),T=["onUpdate:modelValue"],W=["src"],Z={key:0},q={key:1},B={key:1},E={class:"col-sm-8"},F={class:"mb-3"},J=(0,o._)("label",{for:"title",class:"form-label"},"標題",-1),O={class:"row"},Q={class:"mb-3 col-md-6"},R=(0,o._)("label",{for:"category",class:"form-label"},"類別",-1),S={class:"mb-3 col-md-6"},X=(0,o._)("label",{for:"unit",class:"form-label"},"單位",-1),tt={class:"row"},et={class:"mb-3 col-md-6"},lt=(0,o._)("label",{for:"origin_price",class:"form-label"},"原價",-1),ot={class:"mb-3 col-md-6"},st=(0,o._)("label",{for:"price",class:"form-label"},"售價",-1),at=(0,o._)("hr",null,null,-1),it={class:"mb-3"},ct=(0,o._)("label",{for:"description",class:"form-label"},"產品描述",-1),rt={class:"mb-3"},dt=(0,o._)("label",{for:"content",class:"form-label"},"說明內容",-1),nt={class:"mb-3"},pt={class:"form-check"},ut=(0,o._)("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),mt={class:"modal-footer"},ht=(0,o._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function bt(t,e,l,bt,gt,_t){const wt=(0,o.up)("pagination");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("div",c,[(0,o._)("div",r,[(0,o._)("div",d,[(0,o._)("div",n,[(0,o._)("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=t=>_t.openModal("new"))}," 新增商品資料 ")]),(0,o._)("table",p,[u,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(gt.products,(t=>((0,o.wg)(),(0,o.iD)("tr",{key:t.id},[(0,o._)("th",m,(0,s.zw)(t.category),1),(0,o._)("th",h,(0,s.zw)(t.title),1),(0,o._)("th",b,(0,s.zw)(t.origin_price),1),(0,o._)("th",g,(0,s.zw)(t.price),1),(0,o._)("th",_,[t.is_enabled?((0,o.wg)(),(0,o.iD)("span",w,"啟用")):((0,o.wg)(),(0,o.iD)("span",y,"關閉"))]),(0,o._)("th",v,[(0,o._)("button",{type:"button",class:"btn btn-outline-primary",onClick:e=>_t.openModal("edit",t)}," 編輯 ",8,P),(0,o._)("button",{type:"button",class:"btn btn-outline-danger",onClick:e=>_t.delProduct(t.id)}," 刪除 ",8,f)])])))),128))])]),(0,o.Wm)(wt,{pages:gt.pagination,onGetProduct:_t.getData},null,8,["pages","onGetProduct"])]),(0,o._)("div",k,[(0,o._)("div",U,[(0,o._)("div",x,[(0,o._)("div",D,[(0,o._)("h5",$,[gt.isNew?((0,o.wg)(),(0,o.iD)("span",C,"新增商品")):((0,o.wg)(),(0,o.iD)("span",V,"編輯商品"))]),z]),(0,o._)("div",N,[(0,o._)("div",M,[(0,o._)("div",A,[(0,o._)("div",I,[j,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>gt.tempProduct.imageUrl=t),type:"text",class:"form-control mb-2",placeholder:"請輸入圖片連結"},null,512),[[a.nr,gt.tempProduct.imageUrl]]),(0,o._)("img",{class:"img-fluid",src:gt.tempProduct.imageUrl},null,8,G)]),H,Array.isArray(gt.tempProduct.imagesUrl)?((0,o.wg)(),(0,o.iD)("div",K,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(gt.tempProduct.imagesUrl,((t,e)=>((0,o.wg)(),(0,o.iD)("div",{class:"mb-1",key:t},[(0,o._)("div",Y,[L,(0,o.wy)((0,o._)("input",{id:"imageUrl","onUpdate:modelValue":t=>gt.tempProduct.imagesUrl[e]=t,type:"text",class:"form-control",placeholder:"請輸入圖片網址"},null,8,T),[[a.nr,gt.tempProduct.imagesUrl[e]]])]),(0,o._)("img",{class:"img-fluid",src:t},null,8,W)])))),128)),!gt.tempProduct.imagesUrl.length||gt.tempProduct.imagesUrl[gt.tempProduct.imagesUrl.length-1]?((0,o.wg)(),(0,o.iD)("div",Z,[(0,o._)("button",{type:"button",class:"btn btn-primary btn-sm w-100",onClick:e[2]||(e[2]=t=>gt.tempProduct.imagesUrl.push(""))},"新增圖片")])):((0,o.wg)(),(0,o.iD)("div",q,[(0,o._)("button",{type:"button",class:"btn btn-danger btn-sm w-100",onClick:e[3]||(e[3]=t=>gt.tempProduct.imagesUrl.pop())},"刪除圖片")]))])):((0,o.wg)(),(0,o.iD)("div",B,[(0,o._)("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[4]||(e[4]=(...t)=>_t.createImages&&_t.createImages(...t))}," 新增圖片 ")]))]),(0,o._)("div",E,[(0,o._)("div",F,[J,(0,o.wy)((0,o._)("input",{id:"title","onUpdate:modelValue":e[5]||(e[5]=t=>gt.tempProduct.title=t),type:"text",class:"form-control",placeholder:"請輸入標題"},null,512),[[a.nr,gt.tempProduct.title]])]),(0,o._)("div",O,[(0,o._)("div",Q,[R,(0,o.wy)((0,o._)("input",{id:"category","onUpdate:modelValue":e[6]||(e[6]=t=>gt.tempProduct.category=t),class:"form-control",placeholder:"請輸入類別"},null,512),[[a.nr,gt.tempProduct.category]])]),(0,o._)("div",S,[X,(0,o.wy)((0,o._)("input",{id:"unit","onUpdate:modelValue":e[7]||(e[7]=t=>gt.tempProduct.unit=t),class:"form-control",placeholder:"請輸入單位"},null,512),[[a.nr,gt.tempProduct.unit]])])]),(0,o._)("div",tt,[(0,o._)("div",et,[lt,(0,o.wy)((0,o._)("input",{id:"origin_price","onUpdate:modelValue":e[8]||(e[8]=t=>gt.tempProduct.origin_price=t),type:"number",min:"0",class:"form-control",placeholder:"請輸入原價"},null,512),[[a.nr,gt.tempProduct.origin_price,void 0,{number:!0}]])]),(0,o._)("div",ot,[st,(0,o.wy)((0,o._)("input",{id:"price","onUpdate:modelValue":e[9]||(e[9]=t=>gt.tempProduct.price=t),type:"number",min:"0",class:"form-control",placeholder:"請輸入售價"},null,512),[[a.nr,gt.tempProduct.price,void 0,{number:!0}]])])]),at,(0,o._)("div",it,[ct,(0,o.wy)((0,o._)("textarea",{id:"description","onUpdate:modelValue":e[10]||(e[10]=t=>gt.tempProduct.description=t),class:"form-control",type:"text",placeholder:"請輸入產品描述"},null,512),[[a.nr,gt.tempProduct.description]])]),(0,o._)("div",rt,[dt,(0,o.wy)((0,o._)("textarea",{id:"content","onUpdate:modelValue":e[11]||(e[11]=t=>gt.tempProduct.content=t),class:"form-control",type:"text",placeholder:"請輸入說明內容"},null,512),[[a.nr,gt.tempProduct.content]])]),(0,o._)("div",nt,[(0,o._)("div",pt,[(0,o.wy)((0,o._)("input",{id:"is_enabled","onUpdate:modelValue":e[12]||(e[12]=t=>gt.tempProduct.is_enabled=t),type:"checkbox",class:"form-check-input","true-value":1,"false-value":0},null,512),[[a.e8,gt.tempProduct.is_enabled]]),ut])])])])]),(0,o._)("div",mt,[ht,(0,o._)("button",{type:"button",onClick:e[13]||(e[13]=t=>_t.updateProduct()),class:"btn btn-primary","data-bs-dismiss":"modal"}," 確認 ")])])])])])])])}var gt={data(){return{products:[],isNew:!1,tempProduct:{imagesUrl:[]},pagination:{}}},inject:["emitter"],methods:{checkadmin(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=t;const e="https://vue3-course-api.hexschool.io/v2//api/user/check";this.$http.post(e).then((t=>{this.getProducts()})).catch((t=>{alert(t.data.message),window.location="index.html"}))},getProducts(){this.$http.get("https://vue3-course-api.hexschool.io/v2/api/wilsoncheng/products/all").then((t=>{this.products=t.data.products}))},getData(t=1){const e=`https://vue3-course-api.hexschool.io/v2/api/wilsoncheng/admin/products/?page=${t}`;this.$http.get(e).then((t=>{this.products=t.data.products,this.pagination=t.data.pagination,console.log(this.pagination)})).catch((t=>{alert(t.data.message)}))},updateProduct(){let t="https://vue3-course-api.hexschool.io/v2/api/wilsoncheng/admin/product",e="post";this.isNew||(t=`https://vue3-course-api.hexschool.io/v2/api/wilsoncheng/admin/product/${this.tempProduct.id}`,e="put"),this.$http[e](t,{data:this.tempProduct}).then((t=>{this.getProducts(),this.emitter.emit("push-message",{style:"success",title:"產品資料已更新"})})).catch((t=>{alert(t.data.message)}))},openModal(t,e){"new"===t?(this.tempProduct={imagesUrl:[]},this.isNew=!0):"edit"===t&&(this.tempProduct={...e},this.isNew=!1)},createImages(){this.tempProduct.imagesUrl=[],this.tempProduct.imagesUrl.push("")},delProduct(t){const e=`https://vue3-course-api.hexschool.io/v2//api/wilsoncheng/admin/product/${t}`;this.$http.delete(e,{data:this.tempProduct}).then((t=>{this.getProducts(),this.emitter.emit("push-message",{style:"danger",title:"產品資料已刪除"})})).catch((t=>{alert(t.data.message)}))}},mounted(){this.checkadmin()}},_t=l(3744);const wt=(0,_t.Z)(gt,[["render",bt]]);var yt=wt}}]);
//# sourceMappingURL=171.35ccc3b5.js.map
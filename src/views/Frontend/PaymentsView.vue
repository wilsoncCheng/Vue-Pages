<template>
<div class="container mt-4 mb-4 ">
    <div class="row d-flex-center">
        <div class="col-md-6 position-relative" ><div class="lineleftPay"></div><div :class="{'lineright':!isPay,'linerightPay':isPay}"></div>
            <ul class="process d-flex justify-content-between list-unstyled">
                <li class="circle rounded-circle text-center  bg-primary text-white py-lg-4 py-3"> 1. <br><span class="d-none d-lg-inline">清單確認</span></li>
                <li class="circle rounded-circle text-center py-lg-4 py-3 bg-primary text-white" >
                    2. <br><span class="d-none d-lg-inline">付款確認</span></li>
                <li class="circle rounded-circle text-center py-lg-4 py-3" :class="{'bg-secondary': !isPay,'text-primary': !isPay,'bg-primary': isPay,'text-white': isPay}"> 3. <br><span class="d-none d-lg-inline">完成訂單</span></li>
            </ul>
        </div>
    </div>
    <div class="row justify-content-between">
        <div class="col-md-12 col-lg-6">
            <div class="mt-4">
                <table class="table align-middle">
                    <thead>
                        <tr>
                            <th>品名</th>
                            <th>數量</th>
                            <th>價格</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-if="cartData">
          <tr v-for="item in cartData" :key="item.id">
              <td> <img :src="item.product.imageUrl" class="mr-3" style="width:100px" alt="">
                {{ item.product.title }}
              </td>
           <td >
              <div class="input-group input-group-sm text-center">
                <div class="mb-3" style="display:flex;align-content: center;">
                      {{ item.qty }}
                  <span class="input-group-text" style="margin-left:20px" id="basic-addon2">{{
                    item.product.unit
                    }}</span>
                </div>
              </div>
            </td>
            <td class="text-center">
              {{ item.total }}
            </td>
          </tr>
        </template>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="3" class="text-end text-success">總價</td>
                            <td class="text-end text-success">{{order.total}}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
        <div class="my-5 row col-md-12 col-lg-6 justify-content-center bg-green p-4" v-if="!isPay">
            <h2 class="fs-4 d-flex mb-4">訂購資訊</h2>
            <ul class="list-unstyled">
                <li class="d-flex">
                    <p class="col-4">訂單金額：</p>
                    <p class="col text-danger"> $ <b class="fs-5">{{order.total}}</b> NTD </p>
                </li>
                <li class="d-flex">
                    <p class="col-4 text-nowrap">訂單編號：</p>
                    <p class="col">{{order.id}}</p>
                </li>
                <li class="d-flex">
                    <p class="col-4">Email：</p>
                    <p class="col">{{order_user.email}}</p>
                </li>
                <li class="d-flex">
                    <p class="col-4">收件人姓名：</p>
                    <p class="col">{{order_user.name}}</p>
                </li>
                <li class="d-flex">
                    <p class="col-4">聯絡電話</p>
                    <p class="col">{{order_user.tel}}</p>
                </li>
                <li class="d-flex">
                    <p class="col-4">收件地址：</p>
                    <p class="col">{{order_user.address}}</p>
                </li>
                <li class="d-flex">
                    <p class="col-4">備註：</p>
                    <p class="col">無</p>
                </li>
            </ul><button type="submit" class="btn btn-primary w-100 py-3 mt-5" @click="payCheck()"><p v-if="isPay" class='disable'>已付款</p><p v-else>信用卡付款</p></button>
            </div>
            <div class="my-5 row col-md-12 col-lg-6 justify-content-center bg-green p-4" v-else>
              <img src="../../assets/image/laugh.jpg" alt="">
              <div class="text-center mt-3 text-success"><h3><b>謝謝尼</b></h3></div>
              </div>
    </div>
</div>
</template>
<script>
import 'vue-loading-overlay/dist/vue-loading.css'
export default {
  data () {
    return {
      cartData: {},
      order: {},
      order_user: {},
      order_product: {},
      order_id: '',
      isPay: false
    }
  },
  inject: ['emitter'],
  methods: {
    getOrder () {
      const loader = this.$loading.show()
      this.order_id = this.$route.params.id
      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.order_id}`)
        .then((res) => {
          this.order = res.data.order
          this.order_user = res.data.order.user
          this.order_products = res.data.order.products
          this.cartData = res.data.order.products
          loader.hide()
        }
        )
    },
    payCheck () {
      const loader = this.$loading.show()
      this.$http
        .post(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.order_id}`)
        .then((res) => {
          this.emitter.emit('push-message', {
            style: 'success',
            title: '已經完成繳費'
          }
          )
          this.isPay = true
          loader.hide()
        }
        ).catch((err) => {
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    this.getOrder()
  }
}
</script>

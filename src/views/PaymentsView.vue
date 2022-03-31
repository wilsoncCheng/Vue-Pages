<template>
<div class="container mt-4 mb-4">
    <!-- <div class="row justify-content-between" style=""> -->
        <!-- <div class="col-sm-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">確認訂單</h5>
                </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">建立訂單</h5>
                </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">完成訂單</h5>
                </div>
            </div>
        </div>
    </div> -->
    <!-- <div class="row g-0 justify-content-between">
        <div class="col-md-6 col-lg-5 px-3">
            <h2 class="fs-4 d-flex mb-4"> 訂單內容&nbsp; <span class="text-danger">(未付款)</span></h2>
            <ul class="list-unstyled" v-for="item in order_product" :key="item.id">
                <li class="d-flex align-items-center mb-4">
                    <img :src="item.product.imageUrl"  class="cart-img" alt="">
                    <div class="cart-cont col px-3 d-flex">
                        <div class="col-7 pe-2">
                            <p class="m-0">{{item.product.title}}</p><small>數量：1</small></div>
                        <div class="col-5 ls-1 text-end">$ {{item.product.price}} NTD</div>
                    </div>
                </li>
            </ul>
            <hr>
            <p class="text-primary"> 總計金額：$ <span class="fs-4">{{order.total}}</span> NTD </p>
        </div> -->
        <div class="col-md-12 p-4 py-5 p-md-5 bg-white">
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
                <!---->
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
            </ul><button type="submit" class="btn btn-primary w-100 py-3 mt-5" @click="payCheck()" ><p v-if="paid" class='disable'>已付款</p><p v-else>信用卡付款</p></button></div>
    </div>
<!-- </div> -->
</template>
<script>
export default {
  data () {
    return {
      order: {},
      order_user: {},
      order_product: {},
      order_id: '',
      paid: ''
    }
  },
  inject: ['emitter'],
  methods: {
    getOrder () {
      this.order_id = this.$route.params.id
      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.order_id}`)
        .then((res) => {
          this.order = res.data.order
          this.order_user = res.data.order.user
          this.order_products = res.data.order.products
        }
        )
    },
    payCheck () {
      this.$http
        .post(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.order_id}`)
        .then((res) => {
          this.emitter.emit('push-message', {
            style: 'success',
            title: '已經完成繳費'
          }
          )
          this.paid = '已繳費'
        }
        ).catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getOrder()
  }
}
</script>

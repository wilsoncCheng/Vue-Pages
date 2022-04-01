<template>
<div class="container px-4 px-lg-5 my-5">
    <div class="row gx-4 gx-lg-5 align-items-center">
        <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" :src="product.imageUrl" alt="..." /></div>
        <div class="col-md-6">
            <h1 class="display-5 fw-bolder">{{product.title}}</h1>
            <div class="fs-5 mb-5">
                <span class="text-decoration-line-through">${{product.origin_price}}</span>
                <span>${{product.price}}</span>
            </div>
            <p class="lead">{{product.content}}</p>
            <div class="d-flex">
                <router-link class="btn btn-outline-primary btn-lg" style="margin-right:24px" to="/products" replace>回到商品頁</router-link>
                <button type="button" class="btn btn-primary btn-lg" @click="addToCart(product.id,)">加入購物車</button>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import emitter from '@/libs/emitter'
export default {
  data () {
    return {
      product: {}
    }
  },
  inject: ['emitter'],
  methods: {
    getProduct () {
      const { id } = this.$route.params
      this.$http
        .get(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`
        )
        .then((res) => {
          this.product = res.data.product
        })
    },
    addToCart (id, qty = 1) {
      const data = {
        product_id: id,
        qty: qty
      }
      this.isLoadingItem = id
      this.$http
        .post(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`,
          { data }
        )
        .then((res) => {
          this.isLoadingItem = ''
          emitter.emit('get-cart')
          this.emitter.emit('push-message', {
            style: 'success',
            title: '已經加入購物車'
          })
        })
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>

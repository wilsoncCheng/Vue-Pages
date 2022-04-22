<template>
<div class="container">
    <form @submit.prevent="submit"
          class="vld-parent"
          ref="formContainer">
    </form>
    <div class="row">
        <div class="col-lg-3 col-md-12 col-sm-12">
            <div class="list-group w-100 flex-direction-column text-center">
  <a href="#/products" class="list-group-item list-group-item-action" :class="{'active': products === listproducts}" @click="ChangeList ('all')">全部</a>
  <a href="#/products" class="list-group-item list-group-item-action" @click="ChangeList ('校園')">校園</a>
  <a href="#/products" class="list-group-item list-group-item-action" @click="ChangeList ('自然')">自然</a>
  <a href="#/products" class="list-group-item list-group-item-action" @click="ChangeList ('機械')">其他</a>
            </div>
        </div>
        <div class="row col-lg-9 row-cols-lg-4 row-col-md-3 col-sm-12 mg0-a">
            <div class="pd-1 mb-2" v-for="product in listproducts" :key="product.id">
                <div class="card h-100">
                    <img :src="product.imageUrl" class="card-img-top" alt="">
                    <div class="card-body ">
                        <h5 class="card-title">{{product.title}}</h5>
                        <p class="card-text mb-5">{{product.description}}
                        </p>
                        <div class="btn-group btn-group-sm btn-absolute mb-1">
                            <router-link :to="`/product/${product.id}`" class="btn btn-outline-secondary"
                                >
                                <i class="fas fa-spinner fa-pulse" v-show="productID === product.id"></i>
                                查看更多
                            </router-link>
                            <button type="button" class="btn btn-outline-danger" @click="addToCart(product.id)">
                                <i class="fas fa-spinner fa-pulse" v-show="isLoadingItem === product.id"></i>
                                我想贊助
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <PaginationTool/>
    </div>
</div>
</template>

<script>
import PaginationTool from '@/components/PaginationTool.vue'
import 'vue-loading-overlay/dist/vue-loading.css'
export default {
  data () {
    return {
      products: [],
      cartData: {},
      listproducts: [],
      isLoadingItem: '',
      productID: ''
    }
  },
  components: {
    PaginationTool
  },
  inject: ['emitter'],
  methods: {
    getProducts (page = 1) {
      const loader = this.$loading.show()
      this.$http
        .get(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`
        )
        .then((res) => {
          this.products = res.data.products
          this.listproducts = this.products
          this.emitter.emit('push-pagination', {
            pages: res.data.pagination
          })
        })
      loader.hide()
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
          this.emitter.emit('push-message', {
            style: 'success',
            title: '已經加入購物車'
          })
          this.emitter.emit('get-cart', {
          })
        })
    },
    ChangeList (type) {
      const loader = this.$loading.show()
      this.listproducts = []
      if (type === 'all') {
        this.listproducts = this.products
      } else {
        this.products.forEach(item => {
          if (item.category === type) {
            this.listproducts.push(item)
          }
        })
      }
      loader.hide()
    }
  },
  mounted () {
    this.getProducts()
    this.emitter.on('deliver-page_now', (message) => {
      this.getProducts(message.page)
    })
  }
}
</script>

<template>
    <div class="container">
        <form @submit.prevent="submit" class="vld-parent" ref="formContainer">
        </form>
        <div class="row">
            <div class="col-lg-3 col-md-12 col-sm-12">
                <div class="list-group w-100 flex-direction-column text-center">
                    <a href="#/products" class="list-group-item list-group-item-action" :class="{'active': products === showProducts}" @click="ChangeList ('all')">全部({{allProducts.length}})</a>
                    <a href="#/products" class="list-group-item list-group-item-action" @click="ChangeList ('校園')">校園({{schoolProduct.length}})</a>
                    <a href="#/products" class="list-group-item list-group-item-action" @click="ChangeList ('自然')">自然({{natureProduct.length}})</a>
                    <a href="#/products" class="list-group-item list-group-item-action" @click="ChangeList ('機械')">其他({{othersProduct.length}})</a>
                </div>
            </div>
            <div class="row col-lg-9 row-cols-lg-4 row-col-md-3 col-sm-12 mg0-a">
                <div class="pd-1 mb-2" v-for="product in showProducts" :key="product.id">
                    <div class="card h-100">
                     <router-link :to="`/product/${product.id}`">
                        <img :src="product.imageUrl" class="card-img-top" alt="">  </router-link>
                        <div class="card-body ">
                            <h5 class="card-title">{{product.title}}</h5>
                            <p class="card-text mb-5 ellipsis">{{product.description}}
                            </p>
                            <div class="w-100 d-flex justify-content-between">
   <label class="top-0_5 end-10">
    <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" class="bi bi-heart d-inline text-danger" @click="likeProduct(product)" v-if="product.like===false" style="cursor: pointer;" viewBox="0 0 16 16">
      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
    </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill d-inline text-danger" @click="likeProduct(product)" v-else style="cursor: pointer;" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
    </svg>
                </label>
                                <button type="button" class="btn btn-outline-danger" :class="{'disabled': buyProductID === product.id}" @click="addToCart(product.id)">
                                    <div class="spinner-grow spinner-grow-sm text-danger" v-show="buyProductID === product.id" role="status"></div>
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
      isLoadingItem: '',
      buyProductID: '',
      showProducts: [],
      allProducts: [],
      schoolProduct: [],
      natureProduct: [],
      othersProduct: []
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
          this.products.forEach(item => {
            item.like = false
          })
          this.showProducts = this.products
          this.allProducts = this.products
          this.emitter.emit('push-pagination', {
            pages: res.data.pagination
          })
          res.data.products.forEach(item => {
            if (item.category === '校園') {
              this.schoolProduct.push(item)
            } else if (item.category === '自然') {
              this.natureProduct.push(item)
            } else {
              this.othersProduct.push(item)
            }
          })
          loader.hide()
        })
    },
    likeProduct (item) {
      if (item.like === false) {
        item.like = true
      } else {
        item.like = false
      }
    },
    addToCart (id, qty = 1) {
      this.buyProductID = id
      const data = {
        product_id: id,
        qty: qty
      }
      this.$http
        .post(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`,
          { data }
        )
        .then((res) => {
          this.emitter.emit('push-message', {
            style: 'success',
            title: '已經加入購物車'
          })
          this.emitter.emit('get-cart', {
          })
          this.buyProductID = ''
        })
    },
    ChangeList (type) {
      const loader = this.$loading.show()
      this.showProducts = []
      if (type === 'all') {
        this.showProducts = this.products
      } else {
        this.products.forEach(item => {
          if (item.category === type) {
            this.showProducts.push(item)
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

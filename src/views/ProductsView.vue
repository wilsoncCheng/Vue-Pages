<template>
<div class="container">
    <div class="row">
        <div class="col-3">
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group"
                style="flex-direction:column;width:100%">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
                <label class="btn btn-outline-success" for="btnradio1" @click="ChangeList ('all')">全部</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
                <label class="btn btn-outline-success" for="btnradio2" @click="ChangeList ('校園')">校園</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
                <label class="btn btn-outline-success" for="btnradio3" @click="ChangeList ('自然')">自然</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off">
                <label class="btn btn-outline-success" for="btnradio4" @click="ChangeList ('機械')">其他</label>
            </div>
        </div>
        <div class="row col-9 row-cols-4 row-cols-lg-4">
            <div class="col" v-for="product in listproducts" :key="product.id">
                <div class="card h-100">
                    <img :src="product.imageUrl" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">{{product.title}}</h5>
                        <p class="card-text">{{product.description}}
                        </p>
                        <div class="btn-group btn-group-sm">
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
    <PaginationTool></PaginationTool>
    </div>
</div>
</template>

<script>
import PaginationTool from '@/components/PaginationTool.vue'
export default {
  data () {
    return {
      products: [],
      cartData: {},
      listproducts: [],
      isLoadingItem: ''
    }
  },
  components: {
    PaginationTool
  },
  inject: ['emitter'],
  methods: {
    getProducts (page = 1) {
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
        })
    },
    ChangeList (type) {
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

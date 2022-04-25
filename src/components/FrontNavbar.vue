<template>
<nav class="navbar navbar-expand-lg py-0 fixed navbar-dark z-index-3 header-background">
    <div class="container-fluid container">
        <router-link class="navbar-brand header-a" to="/">威爾森的猴樂園</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mt-1">
                <li class="nav-item">
                    <router-link class="nav-link" to="/products" append>產品列表</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/cart" append>購物車</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/me" append>關於我</router-link>
                </li>
            </ul>
        </div>
            <button type="button" class="btn position-relative" @click="cart_have_product()">
       <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
  <span class="badge rounded-pill bg-danger">{{ cartData.carts.length }}</span>
      </button>
<div class="card position-absolute text-center" style="z-index:1500;top:80px;right:10px;width:350px" aria-live="assertive" aria-atomic="true" v-show="cartOpen">
  <div class="card-body"  v-if='cartDisabled'>
    <button type="button" class="btn-close position-absolute end-10 top-0.5"  @click="cartOpen=false" aria-label="Close" ></button>
    <p class="card-text text-success">購物車沒有商品</p>
    <router-link to="/products" @click="cartOpen=false" class="btn btn-primary">前往購物</router-link>
  </div>
    <div class="card-body" v-else>
                <table class="table align-middle">
                    <thead>
                        <tr>
                            <th></th>
                            <th>商品內容</th>
                            <th>數量</th>
                            <th>價格</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-if="cartData.carts">
            <tr v-for="item in cartData.carts" :key="item.id">
              <td>
              </td>
              <td> <img :src="item.product.imageUrl" class="mr-3" style="width:50px" alt="">
                {{ item.product.title }}
              </td>
              <td>{{ item.qty }}
              </td>
              <td class="text-end">
                {{ item.total }}
              </td>
            </tr>
          </template>
                    </tbody>
                </table>
    <router-link to="/cart" @click="cartOpen=false" class="btn btn-primary">前往結帳</router-link>
  </div>
</div>
  </div>
</nav>
</template>

<script>
export default {
  data () {
    return {
      cartData: {
        carts: []
      },
      cartDisabled: false,
      cartOpen: false
    }
  },
  methods: {
    getCart () {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`).then((res) => {
        this.cartData = res.data.data
      })
    },
    cart_have_product () {
      this.cartOpen = !this.cartOpen
      if (this.cartData.carts.length === 0) {
        this.cartDisabled = true
      } else {
        this.cartDisabled = false
      }
    }
  },
  inject: ['emitter'],
  mounted () {
    this.getCart()
    this.emitter.on('get-cart', () => {
      this.getCart()
    })
  }
}
</script>

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
        <router-link class="nav-link" to="/cart" append>
            <button type="button" class="btn position-relative">
       <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
  <span class="badge rounded-pill bg-danger">{{ cartData.carts.length }}</span>
      </button></router-link>
    </div>
</nav>
</template>

<script>
export default {
  data () {
    return {
      cartData: {
        carts: []
      }
    }
  },
  methods: {
    getCart () {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`).then((res) => {
        this.cartData = res.data.data
      })
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

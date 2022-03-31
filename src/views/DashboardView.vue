<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">後台管理頁面</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon">
        </span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/products"
              >後台產品列表</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/Order"
              >訂單</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/"
              >回到前台</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav><ToastMessages></ToastMessages>
  <router-view v-if="checkSuccess"> </router-view>
</template>
<script>
import emitter from '@/Methods/EventBus.js'
import ToastMessages from '@/components/ToastMessages.vue'
export default {
  name: 'DashBoard',
  data () {
    return {
      checkSuccess: false,
      message: ''
    }
  },
  provide () {
    return {
      emitter
    }
  },
  components: {
    ToastMessages
  },
  mounted () {
    this.checkLogin()
  },
  methods: {
    checkLogin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      if (token) {
        this.$http.defaults.headers.common.Authorization = `${token}`
        const url = `${process.env.VUE_APP_API}api/user/check`
        this.$http.post(url, { api_token: this.token })
          .then((response) => {
            this.checkSuccess = true
          })
          .catch((err) => {
            alert(err.data.message)
            this.$router.push = ('/login')
          })
      }
    }
  }
}
</script>

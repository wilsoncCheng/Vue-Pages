<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
       <router-link class="navbar-brand" to="/admin"
              >後台管理頁面</router-link
            >
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
            <router-link class="nav-link" to="/admin/Order"
              >訂單</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="logout()">
              登出
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
 <ToastMessages/>
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
            alert(err.response.data.message)
            this.$router.push = ('/login')
          })
      }
    },
    logout () {
      const api = `${process.env.VUE_APP_API}logout`
      this.$http
        .post(api)
        .then((res) => {
          this.$router.push('/')
        })
        .catch((error) => {
          alert(error.response.data.message)
        })
    }
  }
}
</script>

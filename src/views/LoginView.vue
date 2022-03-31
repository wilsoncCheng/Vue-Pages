<template >
<div id="app" style='  height:800px;display: flex;
align-items: center;
padding-top: 40px;
padding-bottom: 40px;
background-color: #f5f5f5;'>
    <div class="container">
        <main class="form-signin">
            <form @submit.prevent="login">
                <h1 class="h3 mb-3 fw-normal text-center">登入後台</h1>
                <div class="form-floating">
                    <input type="email" class="form-control" v-model="user.username" id="floatingInput" placeholder="name@example.com" required /> <label for="floatingInput">電子信箱</label>
                </div>
                <div class="form-floating">
                    <div class="form-floating">
                        <input type="password" class="form-control" v-model="user.password" id="floatingPassword" required autofocus /> <label for="floatingPassword">密碼</label>
                    </div>
                </div>
                <div class="checkbox mb-3">
                    <label>
      <input type="checkbox" value="remember-me"> Remember me
    </label>
                </div>
                <button class="w-100 btn btn-lg btn-primary mb-3" type="submit">登入</button>
                <router-link class="w-100 btn btn-lg btn-outline-primary" to="/" replace>首頁</router-link>
                <p class="mt-5 mb-3 text-muted">&copy; 六角出品，必是精品</p>
            </form>
        </main>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const api = `${process.env.VUE_APP_API}admin/signin`
      this.$http
        .post(api, this.user)
        .then((response) => {
          const { token, expired } = response.data
          document.cookie = `hexToken=${token};expires=${new Date(
            expired
          )}; path=/`
          this.$router.push('/admin/products')
        })
        .catch((error) => {
          alert(error.data.message)
          this.user.username = ''
          this.user.password = ''
        })
    }
  }
}
</script>

<template>
  <div id="app">
    <form @submit.prevent="submit"
      class="vld-parent"
      ref="formContainer">
    </form>
    <div class="container">
      <div class="row py-3">
        <div class="col-md-12">
          <div class="text-end mt-4">
            <button
              type="button"
              class="btn btn-danger"
              @click="delAllOrders()"
            >
              刪除所有訂單
            </button>
          </div>
          <table class="table table-hover mt-4 text-center">
            <thead>
              <th width="150">訂單時間</th>
              <th width="150">訂單編號</th>
              <th width="100">品項數量</th>
              <th width="100">總價</th>
              <th width="150">是否已付款</th>
              <th width="120">刪除</th>
            </thead>
            <tbody>
              <tr v-for="item in orders" :key="item.id">
                <th width="150">{{ item.create_at }}</th>
              <th width="150">{{ item.id }}</th>
              <th width="100">{{ item.num }}</th>
              <th width="100">{{ item.total }}</th>
                <th width="150">
                  <span v-if="item.is_paid" class="text-success">已付款</span>
                  <span v-else class="text-danger">未完成</span>
                </th>
                <th width="120" >
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    @click="delOrder(item.id)"
                  >
                    刪除
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import 'vue-loading-overlay/dist/vue-loading.css'
export default {
  data () {
    return {
      orders: {}
    }
  },
  methods: {
    checkadmin () {
      const loader = this.$loading.show()
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = token
      const url = `${process.env.VUE_APP_API}/api/user/check`
      this.$http.post(url)
        .then((res) => {
          this.getOrders()
          loader.hide()
        })
        .catch((err) => {
          alert(err.response.data.message)
          window.location = 'index.html'
        })
    },
    getOrders () {
      this.$http
        .get(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/orders`
        )
        .then((res) => {
          this.orders = res.data.orders
        })
    },
    delOrder (id) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${id}`
      this.$http
        .delete(url)
        .then((response) => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '訂單已刪除'
          })
          this.getOrders()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    delAllOrders () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders/all`
      this.$http
        .delete(url)
        .then((response) => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '所有訂單已刪除'
          })
          this.getOrders()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  },
  inject: ['emitter'],
  mounted () {
    this.checkadmin()
  }
}
</script>

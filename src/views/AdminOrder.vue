<template>
  <div id="app">
    <div class="container">
      <div class="row py-3">
        <div class="col-md-12">
          <div class="text-end mt-4">
            <button
              type="button"
              class="btn btn-danger"
              @click="delAllOrders()"
            >
              完成所有訂單(千萬不要)
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
              <th width="150">{{item.is_paid}}</th>
                <th width="120" >
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    @click="delOrder(item.id)"
                  >
                    完成
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
          <!--內層:pages,外層:pagination-->
          <!--內層:get-product,外層:getData-->
          <pagination :pages="pagination" @get-product="getData"></pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      orders: {}
    }
  },
  methods: {
    checkadmin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = token
      const url = `${process.env.VUE_APP_API}/api/user/check`
      this.$http.post(url)
        .then((res) => {
          this.getOrders()
        })
        .catch((err) => {
          alert(err.data.message)
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
          console.log(this.orders)
        })
    },
    delOrder (id) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${id}`
      this.$http
        .delete(url)
        .then((response) => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '訂單已完成'
          })
          this.getOrders()
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    delAllOrders () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders/all`
      this.$http
        .delete(url)
        .then((response) => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '所有訂單資料已刪除'
          })
          this.getOrders()
        })
        .catch((err) => {
          alert(err.data.message)
        })
    }
  },
  inject: ['emitter'],
  mounted () {
    this.checkadmin()
  }
}
</script>

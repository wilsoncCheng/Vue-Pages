<template>
<div class="container">
    <div class="row">
        <div class="col-md-12 col-lg-6">
            <div class="mt-4">
                <h2>購物車</h2>
                <div class="text-end">
                    <button class="btn btn-outline-danger" type="button" @click="removeCarts()">清空購物車</button>
                </div>
                <table class="table align-middle">
                    <thead>
                        <tr>
                            <th>圖片</th>
                            <th>商品名稱</th>
                            <th>價格</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-if="cartData.carts">
            <tr v-for="item in cartData.carts" :key="item.id">
              <td>
                <button type="button" @click="removeCartItem(item.id)" class="btn btn-outline-danger btn-sm">
                 <div class="spinner-grow spinner-grow-sm" role="status" v-show='isLoadingItem'>
                 <span class="visually-hidden" ></span></div>
               x
                </button>
              </td>
              <td>
                {{ item.product.title }}
                <div class="text-success">已套用優惠券</div>
              </td>
              <td>
                <div class="input-group input-group-sm">
                  <div class="input-group mb-3">
                    <!-- <input min="1" type="number" class="form-control" v-model="item.product.unit"> -->
                    <select id="" class="form-select" v-model="item.qty" @change="updateCartItem(item)">
                      <option :value="num" v-for="num in 20" :selected="item.qty === num" :key="`${num}-${item.id}`">
                        {{ num }}
                      </option>
                    </select>
                    <span class="input-group-text" id="basic-addon2">{{
                      item.product.unit
                      }}</span>
                  </div>
                </div>
              </td>
              <td class="text-end">
                {{ item.total }}
              </td>
            </tr>
          </template>
                        <div v-else>123</div>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="3" class="text-end">總計{{isShow}}</td>
                            <td class="text-end">{{cartData.total }}</td>
                        </tr>
                        <tr>
                            <td colspan="3" class="text-end text-success">折扣價</td>
                            <td class="text-end text-success">{{ cartData.final_total}}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
        <div class="my-5 row col-md-12 col-lg-6 justify-content-center">
            <Vee-form ref="form" v-slot="{ errors }" @submit="createOrder">
                {{error}}
                <div class="mb-3  w-100">
                    <label for="email" class="form-label">Email</label>
                    <Vee-field id="email" name="email" type="email" class="form-control" :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="email|required" v-model="user.email"></Vee-field>
                    <error-message name="email" class="invalid-feedback"></error-message>
                </div>
                <div class="mb-3  w-100">
                    <label for="name" class="form-label">收件人姓名</label>
                    <Vee-field id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }" placeholder="請輸入姓名" rules="required" v-model="user.name"></Vee-field>
                    <error-message name="姓名" class="invalid-feedback"></error-message>
                </div>
                <div class="mb-3">
                    <label for="tel" class="form-label">收件人電話</label>
                    <Vee-field id="tel" name="電話" type="text" class="form-control" :class="{ 'is-invalid': errors['電話'] }" placeholder="請輸入電話" rules="required|min:8|max:10" v-model="user.tel"></Vee-field>
                    <error-message name="電話" class="invalid-feedback"></error-message>
                </div>
                <div class="mb-3">
                    <label for="address" class="form-label">收件人地址{{user.address}}</label>
                    <Vee-field id="address" name="地址" type="text" class="form-control" placeholder="請輸入地址" rules="required" v-model="user.address"></Vee-field>
                    <error-message name="地址" class="invalid-feedback"></error-message>
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">留言</label>
                    <textarea name="" id="message" class="form-control" cols="30" rows="10" v-model="message"></textarea>
                </div>
                <div class="text-end">
                    <button class="btn btn-danger"><a @click="createOrder()" class="spinner-grow spinner-grow-sm" role="status" v-show='isLoadingOrder'>
                 <span class="visually-hidden" ></span></a>送出{{this.order_id}}訂單</button>
                </div>
            </Vee-form>
        </div>
    </div>
</div>
<PaginationTool></PaginationTool>
</template>
<script>
import PaginationTool from '@/components/PaginationTool.vue'
import emitter from '@/libs/emitter'
export default {
  data () {
    return {
      cartData: {},
      products: [],
      isLoadingItem: '',
      isLoadingOrder: '',
      data: {
        qty: '',
        product_id: ''
      },
      user: {},
      message: ''
    }
  },
  components: {
    PaginationTool
  },
  inject: ['emitter'],
  methods: {
    getcart () {
      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.cartData = res.data.data
        //   if (this.cartData.carts.length === 0) {
        //     alert('你現在沒有認真購買想贊助任何一隻可愛的猴猴，趕緊去花$$！')
        //     this.$router.push('/products')
        //   }
        }
        )
    },
    removeCartItem (id) {
      this.isLoadingItem = id
      this.$http.delete(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`)
        .then(res => {
          this.getcart()
          this.isLoadingItem = ''
        })
    },
    removeCarts () {
      this.isLoadingItem = 'working'
      this.$http.delete(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`)
        .then(res => {
          this.getcart()
          this.isLoadingItem = ''
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '已刪除此訂單'
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
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`,
          { data }
        )
        .then((res) => {
          this.isLoadingItem = ''
          emitter.emit('get-cart')
          this.emitter.emit('push-message', {
            style: 'success',
            title: '已經加入購物車'
          })
          this.getcart()
        })
    },
    updateCartItem (item) {
      const data = {
        product_id: item.id,
        qty: item.qty
      }
      this.isLoadingItem = item.id
      this.$http.put(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`, { data })
        .then(res => {
          this.getcart()
          this.isLoadingItem = ''
        })
    },
    createOrder () {
      this.isLoadingOrder = 'working'
      const data = {
        user: this.user,
        message: this.message
      }
      this.$http.post(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`, { data })
        .then(res => {
          this.getcart()
          this.emitter.emit('push-message', {
            style: 'success',
            title: '成功建立訂單'
          })
          this.emitter.emit('push-order', {
            res
          })
          this.$router.push({ path: `/payment/${res.data.orderId}` })
        })
      this.isLoadingOrder = ''
      this.user = {}
    }
  },
  mounted () {
    this.getcart()
  }
}
</script>

<template>
  <div id="app">
    <div class="container">
      <div class="row py-3">
        <div class="col-md-6">
          <div class="text-end mt-4">
            <button
              type="button"
              class="btn btn-primary"
              @click="openModal('new')"
            >
              新增商品資料
            </button>
          </div>
          <table class="table table-hover mt-4 text-center">
            <thead>
              <th width="150">分類</th>
              <th width="150">產品名稱</th>
              <th width="100">原價</th>
              <th width="100">售價</th>
              <th width="150">是否啟用</th>
              <th width="120">編輯</th>
            </thead>
            <tbody>
              <tr v-for="item in products" :key="item.id">
                <th width="120">{{ item.category }}</th>
                <th width="150">{{ item.title }}</th>
                <th width="120">{{ item.origin_price }}</th>
                <th width="120">{{ item.price }}</th>
                <th width="150">
                  <span v-if="item.is_enabled" class="text-success">啟用</span>
                  <span v-else class="text-danger">關閉</span>
                </th>
                <th width="140" class="d-flex justify-content-between">
                  <button
                    type="button"
                    class="btn btn-outline-primary"
                    @click="openModal('edit', item)"
                  >
                    編輯
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    @click="delProduct(item.id)"
                  >
                    刪除
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
          <!--內層:pages,外層:pagination-->
          <!--內層:get-product,外層:getData-->
          <pagination :pages="pagination" @get-product="getData"></pagination>
        </div>
        <div class="col-md-6 mt-4">
            <div class="modal-dialog modal-xl">
                    <div class="modal-content border-0">
                        <div class="modal-header bg-dark text-white">
                            <h5 id="productModalLabel" class="modal-title">
                                <span v-if="isNew">新增商品</span>
                                <span v-else>編輯商品</span>
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="mb-3">
                                        <label for="imageUrl" class="form-label">主要圖片</label>
                                        <input v-model="tempProduct.imageUrl" type="text" class="form-control mb-2"
                                            placeholder="請輸入圖片連結">
                                        <img class="img-fluid" :src="tempProduct.imageUrl">
                                    </div>
                                    <h3 class="mb-3">多圖新增</h3>
                                    <div v-if="Array.isArray(tempProduct.imagesUrl)">
                                        <div class="mb-1" :key="image " v-for="(image,key) in tempProduct.imagesUrl">
                                            <div class="mb-3">
                                                <label for="imageUrl" class="form-label">圖片網址</label>
                                                <input id="imageUrl" v-model="tempProduct.imagesUrl[key]" type="text"
                                                    class="form-control" placeholder="請輸入圖片網址">
                                            </div>
                                            <img class="img-fluid" :src="image">
                                        </div>
                                        <!-- !tempProduct.imagesUrl.length，如果不是陣列第一個值，沒有資料的話就可以按刪除 -->
                                        <!-- 抓tempProduct.imagesUrl的最後一個陣列，如果裡面有東西，就可以按新增圖片，如果沒有，則出現刪除照片 -->
                                        <div
                                            v-if="!tempProduct.imagesUrl.length||tempProduct.imagesUrl[tempProduct.imagesUrl.length-1]">
                                            <button type="button" class="btn btn-primary btn-sm w-100"
                                                @click="tempProduct.imagesUrl.push('')">新增圖片</button>
                                        </div>
                                        <div v-else>
                                            <button type="button" class="btn btn-danger btn-sm w-100"
                                                @click="tempProduct.imagesUrl.pop()">刪除圖片</button>
                                        </div>
                                    </div>
                                    <div v-else>
                                        <button class="btn btn-outline-primary btn-sm d-block w-100"
                                            @click="createImages">
                                            新增圖片
                                        </button>
                                    </div>
                                </div>
                                <div class="col-sm-8">
                                    <div class="mb-3">
                                        <label for="title" class="form-label">標題</label>
                                        <input id="title" v-model="tempProduct.title" type="text" class="form-control"
                                            placeholder="請輸入標題">
                                    </div>
                                    <div class="row">
                                        <div class="mb-3 col-md-6">
                                            <label for="category" class="form-label">類別</label>
                                            <input id="category" v-model="tempProduct.category"
                                                class="form-control"  placeholder="請輸入類別">
                                        </div>
                                        <div class="mb-3 col-md-6">
                                            <label for="unit" class="form-label">單位</label>
                                            <input id="unit" v-model="tempProduct.unit"
                                                class="form-control"  placeholder="請輸入單位">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="mb-3 col-md-6">
                                            <label for="origin_price" class="form-label">原價</label>
                                            <input id="origin_price" v-model.number="tempProduct.origin_price"
                                                type="number" min="0" class="form-control" placeholder="請輸入原價">
                                        </div>
                                        <div class="mb-3 col-md-6">
                                            <label for="price" class="form-label">售價</label>
                                            <input id="price" v-model.number="tempProduct.price" type="number"
                                                min="0" class="form-control" placeholder="請輸入售價">
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="mb-3">
                                        <label for="description" class="form-label">產品描述</label>
                                        <textarea id="description" v-model="tempProduct.description"
                                            class="form-control" type="text" placeholder="請輸入產品描述"></textarea>
                                    </div>
                                    <div class="mb-3">
                                        <label for="content" class="form-label">說明內容</label>
                                        <textarea id="content" v-model="tempProduct.content" class="form-control"
                                            type="text" placeholder="請輸入說明內容"></textarea>
                                    </div>
                                    <div class="mb-3">
                                        <div class="form-check">
                                            <input id="is_enabled" v-model="tempProduct.is_enabled" type="checkbox"
                                                class="form-check-input" :true-value="1" :false-value="0">
                                            <label class="form-check-label" for="is_enabled">是否啟用</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                                取消
                            </button><button type="button" @click="updateProduct" class="btn btn-primary"
                                data-bs-dismiss="modal">
                                確認
                            </button>
                        </div>
                    </div>
                </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      products: [],
      isNew: false,
      tempProduct: {
        imagesUrl: []
      },
      pagination: {}
    }
  },
  inject: ['emitter'],
  methods: {
    checkadmin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = token
      const url = `${process.env.VUE_APP_API}/api/user/check`
      this.$http.post(url)
        .then((res) => {
          this.getProducts()
        })
        .catch((err) => {
          alert(err.data.message)
          window.location = 'index.html'
        })
    },
    getProducts () {
      this.$http
        .get(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
        )
        .then((res) => {
          this.products = res.data.products
        })
    },
    getData (page = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`
      this.$http
        .get(url)
        .then((response) => {
          this.products = response.data.products
          this.pagination = response.data.pagination
          console.log(this.pagination)
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    updateProduct () {
      let url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      let http = 'post'
      if (!this.isNew) {
        url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
        http = 'put'
      }
      this.$http[http](url, { data: this.tempProduct })
        .then((res) => {
          this.getProducts()
          this.emitter.emit('push-message', {
            style: 'success',
            title: '產品資料已更新'
          })
        }).catch((err) => {
          alert(err.data.message)
        })
    },
    openModal (isNew, item) {
      if (isNew === 'new') {
        this.tempProduct = {
          imagesUrl: []
        }
        this.isNew = true
      } else if (isNew === 'edit') {
        this.tempProduct = { ...item }
        this.isNew = false
      }
    },
    createImages () {
      this.tempProduct.imagesUrl = []
      this.tempProduct.imagesUrl.push('')
    },
    delProduct (id) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${id}`
      this.$http
        .delete(url, { data: this.tempProduct })
        .then((response) => {
          this.getProducts()
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '產品資料已刪除'
          })
        })
        .catch((err) => {
          alert(err.data.message)
        })
    }
  },
  mounted () {
    this.checkadmin()
  }
}
</script>

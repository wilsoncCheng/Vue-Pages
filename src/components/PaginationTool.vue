<template>
            <ul class="pagination">
          <li
            class="page-item"
            :class="{'disabled': pages.current_page === 1}"
          >
            <a
              class="page-link"
              href="#/products"
              aria-label="Previous" @click.prevent="pageChange(item-1)"
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li
            v-for="(item, index) in pages.total_pages"
            :key="index"
            class="page-item"
            :class="{'active': item === pages.current_page}"
          >
            <span
              class="page-link"
              v-if="item === pages.current_page"
            >{{ item }}</span>
            <a @click.prevent="pageChange(item)"
              class="page-link"
              href="#/products"
              v-else
            >{{ item }}</a>
          </li>
          <li
            class="page-item"
            :class="{'disabled': pages.current_page === pages.total_pages}"
          >
            <a
              class="page-link"
              href="#/products"
              aria-label="Next" @click.prevent="pageChange(item+1)"
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
</template>
<script>
export default {
  data () {
    return {
      pages: {}
    }
  },
  inject: ['emitter'],
  methods: {
    pageChange (item) {
      this.emitter.emit('deliver-page_now', {
        page: item
      })
    }
  },
  mounted () {
    this.emitter.on('push-pagination', (message) => {
      this.pages = message.pages
    })
  }
}
</script>

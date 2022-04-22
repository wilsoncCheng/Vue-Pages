<template>
<div
      v-for="(msg, key) in messages"
      :key="key"
      class="toast show" style="position: fixed;right: 0;top:0;z-index:1500"
      :class="`toast${key}`"
      role="alert"
    >
      <div class="toast-header">
        <span
          :class="`bg-${msg.style}`"
          class="p-2 rounded me-2 d-inline-block"
        ></span>
        <strong class="me-auto">{{ msg.title }}</strong>
   <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      messages: []
    }
  },
  methods: {
    toastShow () {
      setTimeout(() => {
        this.messages.shift()
      }, 6000)
    }
  },
  inject: ['emitter'],
  mounted () {
    this.emitter.on('push-message', (message) => {
      const { style = 'success', title, content } = message // 先物件解構
      this.messages.push({ style, title, content }) // push 到 messages
      this.toastShow()
    })
  }
}
</script>

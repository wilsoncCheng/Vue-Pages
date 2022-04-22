<template>
 <FrontNavbar/>
 <FrontSlide/>
 <router-view/>
 <FooterInfor/>
 <ToastMessages/>
</template>
<script>
import emitter from '@/Methods/EventBus.js'
import FrontNavbar from '@/components/FrontNavbar.vue'
import FrontSlide from '@/components/FrontSlide.vue'
import FooterInfor from '@/components/FooterInfor.vue'
import ToastMessages from '@/components/ToastMessages.vue'
export default {
  components: {
    FrontSlide,
    FrontNavbar,
    FooterInfor,
    ToastMessages
  },
  provide () {
    return {
      emitter
    }
  }
}
</script>

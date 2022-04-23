/* eslint-disable */
import { createApp } from 'vue'
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import { required, email, min, max } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import 'bootstrap'
import { createPopper } from '@popperjs/core'
import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import './assets/css/base.css'
import './assets/css/animated.css'
import './assets/css/owl.css'
import './assets/css/templatemo-seo-dream.css'
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('max', max)
configure({
    generateMessage: localize({ zh_TW: zhTW }),
    validateOnInput: true
})
setLocale('zh_TW')
const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
app.use(VueLoading)
app.use(createPopper)
app.component('VeeField', Field)
app.component('VeeForm', Form)
app.component('ErrorMessage', ErrorMessage)
app.mount('#app')
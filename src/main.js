import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import './interceptors/axios'
import Vuelidate from 'vuelidate'


createApp(App).use(router, Vuelidate).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './interceptors/axios'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css'



createApp(App).use(router).mount('#app')

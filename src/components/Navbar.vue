<template>
  <header class="p-3 text-bg-dark">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link"  to="/verkauf">Verkauf</router-link>
          <router-link class="nav-link"  to="/hilfe">Hilfe</router-link>
        </ul>
      <div class="text-end" v-if="!auth">
        <router-link to="/login" class="btn btn-outline-light me-2">Login</router-link>
        <router-link to="/register" class="btn btn-outline-light me-2">Registrieren</router-link>
      </div>
        <div class="text-end" v-if="auth">
          <router-link to="/" class="btn btn-outline-light me-2" @click="logout()">Logout</router-link>
        </div>
      </div>
    </div>

  </header>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import axios from 'axios'



import {store} from '@/assets/store'
import { useStore } from 'vuex'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navbar',
  // setup(){
  //   const storee=useStore()
  //   const log=computed(()=>storee.state.auth)
  //
  //   const logout=async ()=>{
  //     await axios.post('http://localhost:8080/api/logout',{}, {withCredentials:true})
  //   }
  //
  //   return{
  //     log,logout
  //   }
  // },


  methods:{
    logout(){
      this.auth=false,
        this.store.log=false
    },

  },
  data() {
    return {
      auth:Boolean,
      store
    }
  },
  mounted () {

    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    this.auth=store.log
}
}
</script>

<style scoped>

</style>

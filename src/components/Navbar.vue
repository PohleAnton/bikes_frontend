<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Topspin</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link"  to="/verkauf">Verkauf</router-link>
          <router-link class="nav-link"  to="/hilfe">Hilfe</router-link>
          <div class="text-end" v-if="!log">
          <router-link class="nav-link" to="/login">Einloggen</router-link>
          <router-link class="nav-link" to="/register">Registrieren</router-link>
          </div>
          <div class="text-end" v-if="log">
            <router-link to="/" class="btn btn-outline-light me-2" @click="logout">Logout</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { onMounted,ref } from 'vue'
import axios from 'axios'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navbar',
  setup(){
    const log=ref(false)
    onMounted(async ()=>{
      try{
        await axios.get('http://localhost:8080/api/user')
        log.value=true;
      }
      catch (e){
        log.value=false;
      }
    });
    const logout=async ()=>{
      await axios.post('http://localhost:8080/api/logout', {}, {withCredentials: true})
        .then(async function (response) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${response.data}`
          log.value= false;
          this.forceUpdate();
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    return{
      log,
      logout
    }
  }
}
</script>

<style scoped>

</style>

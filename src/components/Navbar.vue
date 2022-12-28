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
      <div class="text-end" v-if="!log">
        <button type="button" class="btn btn-outline-light me-2">Login</button>
        <button type="button" class="btn btn-warning">Sign-up</button>
      </div>
        <div class="text-end" v-if="log">
          <button type="button" class="btn btn-outline-light me-2" @click="logout">Logout</button>
        </div>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search">
        </form>

        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2">Login</button>
          <button type="button" class="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>

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
        try{await axios.get('http://localhost:8080/api/user');
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

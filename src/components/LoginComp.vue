<template>
    <main class="form-signin w-100 m-auto">
      <form @submit.prevent="anfrage">
        <h1 class="h3 mb-3 fw-normal">Bitte melden Sie sich an</h1>

        <div class="form-floating">
          <input v-model="anfrage.username" class="form-control" id="floatingInput" placeholder="Username">
          <label for="floatingInput">Username</label>
        </div>
        <div class="form-floating">
          <input v-model="anfrage.password" type="password" class="form-control" id="floatingPassword" placeholder="Passwort">
          <label for="floatingPassword">Passwort</label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Einloggen</button>
      </form>
    </main>
  </template>

  <script>



    import router from "@/router";
    import axios from "axios";
    import { reactive } from 'vue'
    import { useRouter } from 'vue-router/dist/vue-router'
    import {store} from '@/assets/store'

    export default {
      name: "LoginComp",
      data(){
        return{
          store,

        }
      },
      methods: {
        anfrage(){
          axios.post('http://localhost:8080/api/login', {
            username: this.anfrage.username,
            password: this.anfrage.password
          },{withCredentials: true})
            .then(async function (response) {
              axios.defaults.headers.common['Authorization'] = `Bearer ${response.data}`
              if (response.message !== "Request failed with status code 400"){
                store.login = false
                await router.push('/user')
              } else {
                store.log = true
              }
            })
            .catch(function (error) {
              console.log(error);
              store.log = true
            });
        }
      }
    }

      // setup(){
      //   const data= reactive({
      //     username:'',
      //     password:'',
      //
      //   });
      //
      //   const router =useRouter();
      //
      //   const submit = async ()=>{
      //     const response = await axios.post('http://localhost:8080/api/login', data, {
      //       withCredentials:true
      //     });
      //     store.eigId=response.id
      //     console.log(response.id)
      //     console.log(response)
      //
      //     axios.defaults.headers.common['Authorization']='Bearer '+ response.data.token;
      //
      //     await router.push('/')
      //   }
      //
      // return {
      //   data,
      //   submit,
      //   store
      // }
      // }};


</script>

<style scoped>
</style>

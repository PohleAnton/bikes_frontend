<template>
    <main class="form-signin w-100 m-auto">
      <form @submit.prevent="submit">
        <h1 class="h3 mb-3 fw-normal">Bitte melden Sie sich an</h1>

        <div class="form-floating">
          <input v-model="data.username" class="form-control" id="floatingInput" placeholder="Username">
          <label for="floatingInput">Username</label>
        </div>
        <div class="form-floating">
          <input v-model="data.password" type="password" class="form-control" id="floatingPassword" placeholder="Passwort">
          <label for="floatingPassword">Passwort</label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit" @click="this.$forceUpdate()">Einloggen</button>
      </form>
    </main>
  </template>

  <script>



    import router from "@/router";
    import axios from "axios";
    import { reactive } from 'vue'

    import {store} from '@/assets/store'
    import { useRouter } from 'vue-router/dist/vue-router'

    export default {
      name: "LoginComp",

      setup(){
        const data=reactive({
          username:'',
          password:''
        });
        const router=useRouter();

          const submit= async ()=> {
            const response = await axios.post('http://localhost:8080/api/login', data, { withCredentials: true });

            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
            await router.push('/');
          }
            return{
          data, submit
        }
        /*onUpload() {
          axios.post('my-domain.com/file-upload', this.selectedFile)
        }*/
      }
    }
      // setup(){
      //   const data= reactive({
      //     username:'',
      //     password:'',
      //
      //   });
      //
      //
      //   const submit = async ()=>{
      //     const response = await axios.post('http://localhost:8080/api/login', data, {
      //       withCredentials:true
      //     });
      //
      //     console.log(response.data)
      //     console.log(response)
      //
      //     axios.defaults.headers.common['Authorization']='Bearer '+ response.data.token;
      //
      //     await router.push('/')
      //   }
      //
      //   return {
      //     data,
      //     submit
      //
      //   }
      // } };


</script>

<style scoped>
</style>

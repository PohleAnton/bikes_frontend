<template>
  <main class="form-signin w-100 m-auto">
    <form @submit.prevent="submit">
      <h1 class="h3 mb-3 fw-normal">Bitte melden Sie sich an</h1>

      <div class="form-floating">
        <input v-model="data.username" required class="form-control" placeholder="Username">
        <label>Username</label>
      </div>
      <div class="form-floating">
        <input v-model="data.firstName" required class="form-control"  placeholder="Vorname">
        <label>Vorname</label>
      </div>
      <div class="form-floating">
        <input v-model="data.lastName" required class="form-control" placeholder="Nachname">
        <label>Nachname</label>
      </div>
      <div class="form-floating">
        <input v-model="data.mailaddress" required type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label>E-Mail-Adresse</label>
      </div>
      <div class="form-floating">
        <input v-model="data.password" required  type="password"  class="form-control" id="floatingInput" placeholder="Password">
        <label>Passwort</label>
      </div>
      <div class="form-floating">
        <input v-model="data.password_confirm" required type="password" class="form-control" id="floatingInput" placeholder="Password bestätigen">
        <label>Passwort bestätigen</label>
      </div>

      <button class="w-100 btn btn-lg btn-primary" type="submit">Registrieren</button>
    </form>
  </main>
</template>

<script>
import {reactive} from "vue";
import axios from 'axios';
import {useRouter} from "vue-router/dist/vue-router";

export default {
  name: "RegisterComp",
  setup(){
    const data = reactive({
      username:'',
      firstName: '',
      lastName: '',
      mailaddress:'',
      password: '',
      password_confirm:''
    });

    const router = useRouter();
    const submit = async () => {
      console.log(data)
      await axios.post('http://localhost:8080/api/register', data)
      await router.push('/login')
    }
    return {data, submit}






  }
}
</script>

<style>
.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;}
</style>

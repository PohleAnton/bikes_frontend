<template>
  <h1 v-if="log">{{ message }}</h1>
  <h1 v-if="!log">Sie sind nicht eingeloggt</h1>
  <img alt="Vue logo" src="../assets/fahrrad_icon2.png" style="width:200px;height:200px;">
  <div class="container-fluid">
<bike-card-list :bikes="this.bikes"></bike-card-list>
  </div>
</template>

<script>

import { store } from '@/assets/store'
import BikeCardList from '@/components/BikeCardList'
import {ref, onMounted} from 'vue'
import axios from 'axios'

export default {
  name: 'HomeView',
  setup(){

    const log=ref(false);
    const message=ref('Sie sind nicht eingeloggt');

    onMounted(async ()=>{

    try {
      const response = await axios.get('http://localhost:8080/api/user');
      if (response.message !== "Request failed with status code 400") {
        message.value=`Hi ${response.data.firstName}`
        log.value = true;

       }
      console.log(response.response.data);
    }

    catch (error){
      console.error(error.response.data)
      log.value=false
      }
    });
return {
log,
message}
  },

  components: {
    BikeCardList,
  },

  data() {
    return {
      bikes: [],
      users:Object,
      store,
      user:Object

    }
  },
  mounted () {

    const requestOptions = {
         method: 'GET',
      redirect: 'follow'
    };

    fetch('http://localhost:8080/api/v1/fahrrad', requestOptions)
      .then(response => response.json())
      .then(result =>result.forEach(bike =>{
        this.bikes.push(bike)
      }))
      .catch(error => console.log('error', error));
    fetch ('http://localhost:8080/api/user', requestOptions)
      .then(response => response.json())
      .then(result =>result.forEach(user =>{
        this.users.push(user)
      }))
      .catch(error => console.log('error', error));

  },
}
</script>

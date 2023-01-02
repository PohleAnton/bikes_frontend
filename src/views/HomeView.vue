<template>
  <h1 v-if="!store.log">Sie sind nicht eingeloggt</h1>
  <div v-if="store.log">
  <h1>{{ message }}</h1>
  <img alt="Vue logo" src="../assets/fahrrad_icon2.png" style="width:200px;height:200px;">
  <div class="container-fluid">
<bike-card-list :bikes="this.bikes"></bike-card-list>
  </div>
  </div>
</template>

<script>

import { store } from '@/assets/store';
import BikeCardList from '@/components/BikeCardList';
import {ref, onMounted} from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';
import Navbar from '@/components/Navbar';

export default {
  name: 'HomeView',
  setup(){
    const message=ref('Sie sind nicht eingeloggt');
    onMounted(async ()=>{
      try {
      const response = await axios.get('http://localhost:8080/api/user');
      if (response.status !== 400|401) {
        store.log=true;
        message.value=`Hi ${response.data.firstName}`
       }
      console.log(response.data);
    }
    catch (error){
      console.error(error.response.data)
      store.log=false;
      message.value=('Sie sind nicht eingeloggt');
      }
    });
return {
message,
store}
  },
  components: {
    BikeCardList,
    Navbar
  },

  data() {
    return {
      bikes: [],
      users:Object,
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

<template>
  <div v-if="!store.log">
    <h1 >Ohne Anmeldung ist "nur gucken, nicht anfassen" </h1>
    <button  class="w-15 btn btn-lg btn-primary" type="submit">
      <router-link class="nav-link"  to="/register">Registrieren</router-link>
    </button>
    <button  class="w-15 btn btn-lg btn-primary" type="submit">
      <router-link class="nav-link"  to="/login">zum Login</router-link>
    </button>
  </div>
  <div v-if="store.log">
  <h1>{{message}}</h1>

  </div>
  <img alt="Vue logo" src="../assets/fahrrad_icon2.png" style="width:200px;height:200px;">
  <div>
    <input v-model="searchFilter" placeholder = "nach Beschreibung suchen">
    <p></p>
  </div>
  <div class="container-fluid" v-if="searchFilter.length>0">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="bike in filterBikes(searchFilter)" :key="bike.id">
        <bike-Card :bike="bike"></bike-Card>
      </div>
    </div>
  </div>
  <div v-if="searchFilter.length===0">

    <bike-card-list  :bikes="this.bikes"></bike-card-list>
  </div>


</template>

<script>

import { store } from '@/assets/store';
import BikeCardList from '@/components/BikeCardList';
import BikeCard from '@/components/BikeCard'
import {ref, onMounted} from 'vue';
import axios from 'axios';

import Navbar from '@/components/Navbar';

export default {
  name: 'HomeView',
methods:{
  filterBikes(filter){
    return this.bikes.filter(
      it=>filter.length<1||
      it.kurzeBeschreibung.toLowerCase().includes(filter.toLowerCase())
    )
  }

},


  setup(){
    const message=ref('Sie sind nicht eingeloggt');
    onMounted(async ()=>{
      try {
        const response = await axios.get('http://localhost:8080/api/user');
        if (response.status !==400) {
          store.log=true;
          store.user=response.data
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
      message, store}
  },
  components: {
    BikeCard,
    BikeCardList,
    Navbar,
    store
  },
  data() {
    return {
      bikes: [],
      users:[],
      searchFilter:'',
      user:Object
    }
  },
  async created() {
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
    store.bikes=this.bikes
    fetch('http://localhost:8080/api/user', requestOptions)
      .then(response => response.json())
      .then(result =>result.forEach(user=>{
        this.users.push(user)
      }))
      .catch(error => console.log('error', error));
  },
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

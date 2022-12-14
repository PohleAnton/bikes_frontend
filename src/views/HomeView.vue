<template>
  <h1>{{ bikes.length }}</h1>
  <img alt="Vue logo" src="../assets/fahrrad_icon2.png" style="width:200px;height:200px;">

  <div class="col" v-for="rad in bikes" :key="rad.id" >
    <div class="card h-auto" style="width: 18rem; float:left;">
      <img :src="rad.bildUrl" class="card-img-top" :alt="rad.kureBeschreibung" >
      <h5 class="card-title">{{ rad.kategorie }}</h5>
      <p class="card-text">{{ rad.id }} {{rad.kurzeBeschreibung}} </p>

      <router-link class="nav-link" to="/einkauf/fahrrad">

        <button type="button" @click="store.bike=rad" class="btn btn-primary" >Angebot ansehen</button>
      </router-link>
    </div>
  </div>
</template>

<script>

import { store } from '@/views/store'

export default {
  name: 'HomeView',
  data() {
    return {
      persons: [],
      bikes: [],
      store
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

  },
}
</script>

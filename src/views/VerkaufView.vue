<template>

  <div v-if="!store.log">
    <h1 >Neugierig geworden? </h1>
    <button  class="w-15 btn btn-lg btn-primary" type="submit">
      <router-link class="nav-link"  to="/register">Registrieren</router-link>
    </button>
    <button  class="w-15 btn btn-lg btn-primary" type="submit">
      <router-link class="nav-link"  to="/login">zum Login</router-link>
    </button>
  </div>
  <div v-if="store.log" class="verkauf">

    <div >
    <h1>Fahrrad-Verkauf</h1>#
      <h2>Deine Bikes:</h2>
      <div v-for="bike in filterBikes(store.user.id)" :key="bike.id">
        <div class="card" style="width: 18rem; float:left;">
          <img src="../assets/fahrrad_icon.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ bike.kurzeBeschreibung }}</h5>
            <p class="card-text">{{bike.kategorie}} {{bike.farbe}}</p>
            <router-link class="nav-link" to="/">
            <button type="button"  class="btn btn-primary" @click="erase(bike.id),this.$forceUpdate()" >Bike löschen</button>
            </router-link>
          </div>
        </div>
      </div>
  </div>


  <div>
    <router-link class="nav-link" to="/verkauf/neues_fahrrad">
      <button type="button" class="btn btn-outline-secondary" style="width:270px;height:455px; float:left;">+</button>
    </router-link>

  </div>
  </div>
</template>


<script>

import {store} from '@/assets/store'

import { markRaw } from 'vue'



export default {
  name: 'VerkaufView',
  data() {
    return {
      auth:Boolean,
      bikes:[],
     store,
      filter:''
    }
  },
  methods:{

    erase(id){
      const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      };
      fetch('http://localhost:8080/api/v1/fahrrad/'+ id,requestOptions)
         .catch(error => console.log('error')
        )
    },
    filterBikes(filter){
      return this.bikes.filter(
        it =>it.eigentuemer.id===filter
      )
    }


  },
  mounted () {

    this.bikes=store.bikes
  }
}


</script>

<template>
<div class="card h-auto">
  <!-- <img :src="bike.bildUrl" class="card-img-top" :alt="bike.id"> -->
  <div class="card-body">
    <h5 class="card-title"> {{bike.kurzeBeschreibung}}</h5>
    <p class="card-text">{{bike.kategorie}} {{bike.farbe}}
      <router-link class="nav-link" to="/einkauf/fahrrad">

        <button type="button" @click="store.user=bike.eigentuemer; store.bike=bike" class="btn btn-primary" >Angebot ansehen</button>
      </router-link>
    </p>

  </div>
</div>
</template>

<script>


import { store } from '@/assets/store'

export default {
  name: 'BikeCard',
  data (){
    return {
      store
    }
  },
  props: {
    bike: {
      type:Object,
      required:true
    },
  }
}
</script>

<style scoped>

</style>

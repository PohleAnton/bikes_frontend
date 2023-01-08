<template>
<div class="card h-auto">
  <!-- <img :src="bike.bildUrl" class="card-img-top" :alt="bike.id"> -->
  <img :src=getImage() class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"> "{{bike.kurzeBeschreibung}}"</h5>
    <p class="card-text">Kategorie: {{bike.kategorie}} Farbe:{{bike.farbe}}
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
    }
  },
  methods: {
    getImageFromBase64(String) {
      var image = new Image();
      image.src = bike.bildUrl;
      document.body.appendChild(image);
    },
    getImage() { // https://stackoverflow.com/questions/40491506/vue-js-dynamic-images-not-working
      switch(this.bike.farbe) {
        case "BLAU": return require('../assets/fahrrad_icon_schwarz.png')
      }
      return require('../assets/fahrrad_icon.png')
    }
  }
}
</script>

<style scoped>

</style>

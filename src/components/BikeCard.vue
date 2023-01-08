<template>
<div class="card h-auto">
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
    getImage() { // https://stackoverflow.com/questions/40491506/vue-js-dynamic-images-not-working
      switch(this.bike.farbe) {
        case "SCHWARZ": return require('../assets/fahrrad_icon_schwarz.png')
        case "GRAU": return require('../assets/fahrrad_icon_grau.png')
        case "WEISS": return require('../assets/fahrrad_icon_weiss.png')
        case "ROT": return require('../assets/fahrrad_icon_rot.png')
        case "BLAU": return require('../assets/fahrrad_icon_blau.png')
        case "GRUEN": return require('../assets/fahrrad_icon_gruen.png')
        case "SONSTIGE": return require('../assets/fahrrad_icon_sonstige.png')
        case "MIXED": return require('../assets/fahrrad_icon.png')
      }
      return require('../assets/fahrrad_icon.png')
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div v-if="!store.log">
<h1 >Melden Sie sich bitte an </h1>
  <button  class="w-15 btn btn-lg btn-primary" type="submit">Registrieren</button>
    <button  class="w-15 btn btn-lg btn-primary" type="submit">
      <router-link class="nav-link"  to="/login">zum Login</router-link>

    </button>
  </div>
  <div v-if="store.log">
  <h3>Hi {{store.user.username}} </h3>
    <img :src=getImage() class="card-img-top" alt="..." style="width:300px;height:300px;">
    <h4>Hier nochmal ein paar mehr Details:</h4>
   <p>Der Eigentümer ist {{eigentuemer.username}}</p>
    <p>Er hat einen Preis von {{bike.price}} Euro veranschlagt - du weißt ja, wie das läuft</p>
  <p>Hier noch eine ausführlichere Beschreibung: {{bike.langeBeschreibung}}</p>

<h5>Interesse? Dann nimm Kontakt auf:</h5>
  <a  :href="'mailto:' +eigentuemer.mailaddress +'?subject=deine Anzeige auf BikeBay: &quot ' + bike.kurzeBeschreibung + '&quot'">
  <button class="btn btn-primary">Kontakt aufnehmen</button>
  </a>


  </div>
</template>

<script>

import { store } from '@/assets/store'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'BikeView',
data() {
    return {
      bike: Object,
      eigentuemer: Object,
      store,
      url:"https://imgur.com/gallery/ZYDoLwD"
    }
  },
  mounted () {

    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    this.bike = store.bike;
    this.eigentuemer=store.user;



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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>


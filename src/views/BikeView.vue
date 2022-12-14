<template>
  <p>Das ausgewaehlte Fahrrad ist: {{bike.id}} </p>
  <a :href="'mailto:' +eigentuemer.mailaddress +'?subject=deine Anzeige auf BikeBay: ' + bike.kurzeBeschreibung">
  <button class="btn btn-primary">Kontakt aufnehmen</button>
  </a>
  <p>Jetzt muss sich nur noch "irgendjemand" um das Design kümmern...</p>



</template>

<script>

import { store } from './store.js'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'BikeView',
data() {
    return {
      bike: Object,
      eigentuemer: Object,
      store,
    }
  },
  mounted () {

    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };


    this.bike=store.bike;

    fetch('http://localhost:8080/api/v1/person/'+store.eigId, requestOptions)
      .then(response => response.json()).then(response=>this.eigentuemer=response)
      .catch(error => console.log('error', error));






  },
  methods: {
    mail() {
      return 'mailto:'+this.eigentuemer.mailaddress

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


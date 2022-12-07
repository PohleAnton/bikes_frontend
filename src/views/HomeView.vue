<template>
  <h1>Willkommen zu BikeBay!</h1>
    <img alt="Vue logo" src="../assets/fahrrad_icon2.png" style="width:200px;height:200px;">
  <div class="container-fluid">
    <div class="col" v-for="bike in bikes" :key="bike.id">
    <div class="card h-auto" style="width: 18rem; float:left;">
      <img :src="bike.bildUrl" class="card-img-top" :alt="bike.kureBeschreibung">
      <h5 class="card-title">{{ bike.kategorie }}</h5>
      <p class="card-text">{{ bike.farbe }} {{bike.kurzeBeschreibung}}</p>
      <router-link class="nav-link" to="{name: 'BikeView', data: {id: bike.id} }">
        <button type="button" class="btn btn-primary">Angebot ansehen</button>
      </router-link>
    </div>
      </div>
  </div>


</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  data() {
    return {
      persons: [],
      bikes: []
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL +'api/v1/person'
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

  methods: {
    getPicture(fahrrad) {
      if(fahrrad.abnutzungsgrad === 'NEU' ) {
        return require("../assets/old.png")
      }
      if(fahrrad.abnutzungsgrad === 'STARKE_ABNUTZUNG') {
        return require("../assets/berlit.png")
      }
      else return require("../assets/city.png")
    },
    getBild(person){
      if(person.username==='top'){
        return require("../assets/dude.png")
      }
      else return require("../assets/gollum.png")
    }
  }
}
</script>

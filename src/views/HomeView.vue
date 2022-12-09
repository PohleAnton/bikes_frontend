<template>
  <h1>Willkommen zu BikeBay!</h1>
    <img alt="Vue logo" src="../assets/fahrrad_icon2.png" style="width:200px;height:200px;">
  <div class="container-fluid">
    <div class="col" v-for="rad in bikes" :key="rad.id">
      <Bike id="rad.id" />
     <div class="card h-auto" style="width: 18rem; float:left;">



      <img :src="rad.bildUrl" class="card-img-top" :alt="rad.kureBeschreibung">
      <h5 class="card-title">{{ rad.kategorie }}</h5>
      <p class="card-text">{{ rad.farbe }} {{rad.kurzeBeschreibung}}</p>

      <router-link class="nav-link" to="/einkauf/fahrrad">
        <button type="button" class="btn btn-primary" > Angebot ansehen</button>
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
      bikes: [],
      bike: Object,
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

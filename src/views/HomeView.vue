<template>
  <h1>Willkommen zu BikeBay!</h1>
    <img alt="Vue logo" src="../assets/fahrrad_icon2.png" style="width:200px;height:200px;">
  <div class="container-fluid">
    <div class="col" v-for="fahrrad in bikes" :key="fahrrad.id">
      <div class="card h-auto" style="width: 18rem; float:left;">
        <img :src="getPicture(fahrrad)" class="card-img-top" :alt="fahrrad.beschreibungAbnutzung + fahrrad.price">
        <div class="card-body">
          <h5 class="card-title">{{ fahrrad.beschreibungAbnutzung }} {{fahrrad.price}}</h5>
          <p class="card-text">{{ fahrrad.beschreibungAbnutzung }} {{fahrrad.price}}</p>
          <a href="#" class="btn btn-primary">Angebot ansehen</a>
        </div>
      </div>
    </div>
  </div>

  <!--    <div class="card" style="width: 18rem; float:left;">
     <img src="../assets/old.png" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">GTXR09</h5>
       <p class="card-text">Ein Sportfahrrad mit perfektem Topspin.</p>
       <a href="#" class="btn btn-primary">Angebot ansehen</a>
     </div>
   </div>
   <div class="card" style="width: 18rem; float:left;">
     <img src="../assets/berlit.png" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">Mountainbike-3GXs</h5>
       <p class="card-text">Gebrauchtes Mountainbike, Qualität: Berlit.</p>
       <a href="#" class="btn btn-primary">Angebot ansehen</a>
     </div>
   </div>
   <div class="card" style="width: 18rem;">
     <img src="../assets/city.png" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">Citybike-Flups</h5>
       <p class="card-text">Du möchtest entspannt in der Stadt rumcruisen? Perfekt!.</p>
       <a href="#" class="btn btn-primary">Angebot ansehen</a>
     </div>
   </div>-->
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  data() {
    return {
      persons: [
        {
          id: 1,
          username: 'titties',
          firstName: 'Eric',
          lastName: 'Cartman',
          mailaddress: 'cartman@topspin.de'
        }
      ],
      bikes: [
        {
          id: 1,
          kategorie: 'SONSTIGE',
          beschreibungAbnutzung: 'topspin',
          abnutzungsgrad: 'NEU',
          farbe: 'MIXED',
          price: 10.00,
          eigentuemer_id: 1
        },
        {
          id: 2,
          kategorie: 'KINDERFAHRRAD',
          beschreibungAbnutzung: 'Berlit. Der reine SChrott',
          abnutzungsgrad: 'STARKE_ABNUTZUNG',
          farbe: 'SCHWARZ',
          price: 1,
          eigentuemer_id: 1
        }
      ]
    }
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
    }
  }
}
</script>

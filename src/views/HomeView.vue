<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/fahrrad_icon2.png" style="width:200px;height:200px;">
    <HelloWorld msg="Willkommen zu BikeBay!"/>
  </div>
  <div>
    <p>
      .
    </p>
    <p>
      .
    </p>
  </div>
  <div class="card" style="width: 18rem; float:left;">
    <img src="../assets/fahrrad_icon.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">GTXR09</h5>
      <p class="card-text">Ein Sportfahrrad mit perfektem Topspin.</p>
      <a href="#" class="btn btn-primary">Angebot ansehen</a>
    </div>
  </div>
  <div class="card" style="width: 18rem; float:left;">
    <img src="../assets/fahrrad_icon.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Mountainbike-3GXs</h5>
      <p class="card-text">Gebrauchtes Mountainbike, Qualität: Berlit.</p>
      <a href="#" class="btn btn-primary">Angebot ansehen</a>
    </div>
  </div>
  <div class="card" style="width: 18rem;">
    <img src="../assets/fahrrad_icon.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Citybike-Flups</h5>
      <p class="card-text">Du möchtest entspannt in der Stadt rumcruisen? Perfekt!.</p>
      <a href="#" class="btn btn-primary">Angebot ansehen</a>
    </div>
  </div>
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
  components: {
    HelloWorld
  }
}
</script>

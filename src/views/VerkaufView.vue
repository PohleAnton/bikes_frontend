<template>
  <div class="verkauf">
    <h1>Fahrrad-Verkauf</h1>
    <h3>Deine Fahrräder:</h3>
  </div>
  <div class="card" style="width: 18rem; float:left;">
    <img src="../assets/fahrrad_icon.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">GTXR09</h5>
      <p class="card-text">Ein Sportfahrrad mit perfektem Topspin.</p>
      <a href="#" class="btn btn-primary">Angebot ansehen</a>
    </div>
  </div>
  <div>
    <router-link class="nav-link" to="/verkauf/neues_fahrrad">
      <button type="button" class="btn btn-outline-secondary" style="width:270px;height:455px; float:left;">+</button>
    </router-link>

  </div>

</template>

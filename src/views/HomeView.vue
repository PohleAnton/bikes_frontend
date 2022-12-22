<template>
  <h1>Topspin</h1>
  <img alt="Vue logo" src="../assets/fahrrad_icon2.png" style="width:200px;height:200px;">
  <div class="container-fluid">
<bike-card-list :bikes="this.bikes"></bike-card-list>
  </div>
</template>

<script>

import { store } from '@/assets/store'
import BikeCardList from '@/components/BikeCardList'

export default {
  name: 'HomeView',
  components: {
    BikeCardList,
  },
  data() {
    return {
      bikes: [],
      store
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/fahrrad'
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
}
</script>

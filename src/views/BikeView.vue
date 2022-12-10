<template>

  <p >Das ausgewaehlte Fahrrad ist: {{bike}}</p>
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
      eigentuemer:Object,
      store
    }
  },
  mounted () {

    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };


    fetch('http://localhost:8080/api/v1/fahrrad/'+store.id, requestOptions)
      .then(response => response.json()).then(response=>this.bike=response)
      .catch(error => console.log('error', error));

    fetch('http://localhost:8080/api/v1/person/'+this.bike.eigentuemer, requestOptions)
      .then(response => response.json()).then(response=>this.eigentuemer=response)
      .catch(error => console.log('error', error));


  },
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


<template></template>

<script>
import HomeView from '@/views/HomeView'

export default {
  name: 'BikeView',
  created () {
    let uri = window.location.search.substring(1);
    let params = new URLSearchParams(uri);
    console.log(params.get("var_name"));
  }
}



</script>

<style scoped>

</style>

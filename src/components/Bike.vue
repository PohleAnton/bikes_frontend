<template>
  <button type="button" class="btn btn-primary" >{{ bike.id }}</button>


  <p>Hi </p>


</template>

<script>
import HomeView from '@/views/HomeView'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Bike',
  props: ['bike'],


}
</script>

<style scoped>

</style>

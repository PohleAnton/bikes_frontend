<template>
<div class="row row-cols-1 row-cols-md-4 g-4">
  <div class="col" v-for="bike in bikes" :key="bike.id">
    <bike-Card :bike="bike"></bike-Card>
  </div>
</div>
</template>

<script>
import BikeCard from '@/components/BikeCard'
import {store} from '@/assets/store'

export default {
  name: 'BikeCardList',
  components: { BikeCard },
  data (){
    return {
      store
    }
  },
  props: {
    bikes: {
      type:Array,
      required: true
    }

  }
}
</script>

<style scoped>

</style>

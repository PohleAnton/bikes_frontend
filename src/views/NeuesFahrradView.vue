<template>
  <h1>
    Neues Angebot erstellen
  </h1>
  <div>
    <input v-model = "nameField" placeholder = "Name" type = "text" ref="nameInput">
  </div>
</template>

<script>
export default {
  name: 'NeuesFahrradView',
  data() {
    return {
      nameField:''
    }
  }
}
</script>

<style scoped>

</style>

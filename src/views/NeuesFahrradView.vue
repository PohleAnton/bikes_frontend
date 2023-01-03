<template>
  <h1>
    Neues Angebot erstellen
  </h1>
  <div>
    <h4>Kategorie:</h4>
    <select v-model = "kategorie">
      <option disabled value = "">Bitte wähle aus</option>
      <option>Sportfahrrad</option>
      <option>E-Bike</option>
      <option>Mountainbike</option>
      <option>Citybike</option>
      <option>Kinderfahrrad</option>
      <option>Sonstige</option>
    </select>
    <p></p>
  </div>
  <div>
    <h4>Abnutzungsgrad:</h4>
    <select v-model = "abnutzungsgrad">
      <option disabled value = "">Bitte wähle aus</option>
      <option>Neu</option>
      <option>Geringe Abnutzung</option>
      <option>Mittlere Abnutzung</option>
      <option>Starke Abnutzung</option>
    </select>
    <p></p>
  </div>
  <div>
    <h4>Farbe:</h4>
    <select v-model = "farbe">
      <option disabled value = "">Bitte wähle aus</option>
      <option>Schwarz</option>
      <option>Grau</option>
      <option>Weiß</option>
      <option>Rot</option>
      <option>Blau</option>
      <option>Grün</option>
      <option>Sonstige</option>
      <option>Mixed</option>
    </select>
    <p></p>
  </div>
  <h4>Weiteres:</h4>
  <div>
    <input v-model = "preis" placeholder = "preis" type = "text" ref="nameInput">
    <p></p>
  </div>
  <div>
    <input v-model = "bildUrl" placeholder = "bildUrl" type = "text" ref="nameInput">
    <p></p>
  </div>
  <div>
    <input v-model = "kurzbeschreibung" placeholder = "kurzbeschreibung" type = "text" ref="nameInput">
    <p></p>
  </div>
  <div>
    <input v-model = "langbeschreibung" placeholder = "langbeschreibung" type = "text" ref="nameInput">
    <p></p>
  </div>
</template>

<script>
export default {
  name: 'NeuesFahrradView',
  data() {
    return {
      kategorie:'',
      abnutzungsgrad:'',
      farbe:'',
      preis:'',
      bildUrl:'',
      kurzbeschreibung:'',
      langbeschreibung:''
    }
  }
}
</script>

<style scoped>

</style>

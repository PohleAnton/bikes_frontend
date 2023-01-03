<template>
  <h1>
    Neues Angebot erstellen
  </h1>
  <div>
    <p> Kategorie:</p>
    <select v-model = "kategorie">
      <option disabled value = "">Bitte wähle eins aus</option>
      <option>SPORTFAHRRAD</option>
      <option>EBIKE</option>
      <option>MOUNTAINBIKE</option>
      <option>CITYBIKE</option>
      <option>KINDERFAHRRAD</option>
      <option>SONSTIGE</option>
    </select>
    <p></p>
  </div>
  <div>
    <p> Abnutzungsgrad:</p>
    <select v-model = "abnutzungsgrad">
      <option disabled value = "">Bitte wähle eins aus</option>
      <option>NEU</option>
      <option>GERINGE ABNUTZUNG</option>
      <option>MITTLERE ABNUTZUNG</option>
      <option>STARKE ABNUTZUNG</option>
    </select>
    <p></p>
  </div>
  <div>
    <p> Farbe:</p>
    <select v-model = "farbe">
      <option disabled value = "">Bitte wähle eins aus</option>
      <option>SCHWARZ</option>
      <option>GRAU</option>
      <option>WEISS</option>
      <option>ROT</option>
      <option>BLAU</option>
      <option>GRUEN</option>
      <option>SONSTIGE</option>
      <option>MIXED</option>
    </select>
    <p></p>
  </div>
  <p>Weiteres:  </p>
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

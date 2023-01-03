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
  <h4>Preis:</h4>
  <div>
    <input v-model = "preis" placeholder = "ganze Zahl" type = "text" ref="nameInput">
    .
    <input v-model = "preis2" placeholder = "Kommazahl" type = "text" ref="nameInput">
    <p></p>
  </div>
  <div>
    <h4>Bild:</h4>
    <input v-model = "bildUrl" placeholder = "bildUrl" type = "text" ref="nameInput">
    <p></p>
  </div>
  <div>
    <h4>Kurzbeschreibung:</h4>
    <input v-model = "kurzbeschreibung" placeholder = "kurzbeschreibung" type = "text" ref="nameInput">
    <p></p>
  </div>
  <div>
    <h4>Langbeschreibung:</h4>
    <input v-model = "langbeschreibung" placeholder = "langbeschreibung" type = "text" ref="nameInput">
    <p></p>
  </div>
  <div>
    <button type="button" @click="save()">Speichern</button>
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
  },
  methods: {
    save() {
      const endpoint = 'http://localhost:8080'
      const data = {
        kategorie: this.kategorie,
        abnutzung: this.abnutzungsgrad,
        farbe: this.farbe,
        preis: this.preis,
        bild: this.bildUrl,
        kurzbesch: this.kurzbeschreibung,
        langbesch: this.langbeschreibung
      }
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data)
        })
        .catch(error => console.log('error', error))
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div v-if="!store.log">
    <h1 >Neugierig geworden? </h1>
    <button  class="w-15 btn btn-lg btn-primary" type="submit">
      <router-link class="nav-link"  to="/register">Registrieren</router-link>
    </button>
    <button  class="w-15 btn btn-lg btn-primary" type="submit">
      <router-link class="nav-link"  to="/login">zum Login</router-link>
    </button>
  </div>
  <div v-if="store.log">
  <h1>
    {{ store.eigId }}
  </h1>
  <div>
    <h4>Kategorie°:</h4>
    <select v-model = "kategorie">
      <option disabled value = "">Bitte wähle aus</option>
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
    <h4>Abnutzungsgrad°:</h4>
    <select v-model = "abnutzungsgrad">
      <option disabled value = "">Bitte wähle aus</option>
      <option>NEU</option>
      <option>GERINGE_ABNUTZUNG</option>
      <option>MITTLERE_ABNUTZUNG</option>
      <option>STARKE_ABNUTZUNG</option>
    </select>
    <p></p>
  </div>
  <div>
    <h4>Farbe°:</h4>
    <select v-model = "farbe">
      <option disabled value = "">Bitte wähle aus</option>
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
  <h4>Preis°:</h4>
  <div>
    <input v-model = "preis" required placeholder = "preis" type = "text" ref="nameInput">
    <p></p>
  </div>
  <div>
    <h4>Kurzbeschreibung°:</h4>
    <input v-model = "kurzbeschreibung" required placeholder = "kurzbeschreibung" type = "text" ref="nameInput">
    <p></p>
  </div>
  <div>
    <h4>Langbeschreibung:</h4>
    <input v-model = "langbeschreibung" placeholder = "langbeschreibung" type = "text" ref="nameInput">
    <p></p>
  </div>
  <div>
    <button type="button"  @click="save();this.$forceUpdate()">Speichern</button>
  </div>
  <p>
    ° = obligatorisch
  </p>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { store } from '@/assets/store'
import router from '@/router'

export default {
  name: 'NeuesFahrradView',
  setup(){
    const message=ref('Sie sind nicht eingeloggt');
    onMounted(async ()=>{
      try {
        const response = await axios.get('http://localhost:8080/api/user');
        if (response.status !==400) {
          store.log=true;
          store.eigId=response.data.id
        }
        console.log(response.data);
      }
      catch (error){

        store.log=false;
        message.value=('Sie sind nicht eingeloggt');
      }
    });
    return {
       store}
  },
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

    save () {
      const endpoint = 'http://localhost:8080/api/v1/fahrrad'
      const data = {
        kategorie: this.kategorie,
        abnutzungsgrad: this.abnutzungsgrad,
        farbe: this.farbe,
        price: this.preis,
        eigentuemerId: store.eigId,
        bildUrl: this.farbe,
        kurzeBeschreibung: this.kurzbeschreibung,
        langeBeschreibung: this.langbeschreibung
      }
      let worked = false
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data)
        })
        .catch(error => console.log('error', error)
        )
      router.push("/"), { withCredentials: true }
    }
  }
}


</script>

<style scoped>

</style>

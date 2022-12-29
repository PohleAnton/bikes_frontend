<template>
<h1 v-if="!log">Melden Sie sich bitte an </h1>
  <div v-if="log">
  <p>Das ausgewaehlte Fahrrad ist: {{bike.id}} </p>
<!--  das öffnet den Standard Email Client und setzt in den Betreff die kurze Beschreibung ein. Ich werde dem Bike mal doch
  eine lange Beschreibung geben, dann könnte man die speziell auf dieser Seite anzeigen. Wider meinte außerdem in der
  Vorlesung, dass es für Input Control Zusatzpunkte gibt - vielleicht kann man beim anlegne die Zeichenzahl für die kurze
  Beschreibung einschränken?-->
  <a :href="'mailto:' +eigentuemer.mailaddress +'?subject=deine Anzeige auf BikeBay: &quot ' + bike.kurzeBeschreibung + '&quot'">
  <button class="btn btn-primary">Kontakt aufnehmen</button>
  </a>
  <p>Hier könnte die ausführliche Beschreibung stehen: {{bike.langeBeschreibung}}</p>
  <p>Jetzt muss sich nur noch "irgendjemand" um das Design kümmern...</p>


  </div>
</template>

<script>

import { store } from '@/assets/store'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'BikeView',
data() {
    return {
      bike: Object,
      eigentuemer: Object,
      store,
      log:Boolean
    }
  },
  mounted () {

    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    this.bike = store.bike;
    this.log=store.log;

    fetch('http://localhost:8080/api/user/' + store.eigId, requestOptions)
      .then(response => response.json()).then(response => this.eigentuemer = response)
      .catch(error => console.log('error', error));
  }
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


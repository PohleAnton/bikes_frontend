
# frontend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


Beschreibung:
BikeBay ist eine simple Fahrradtauschbörse.
Auf der Startseite sieht man alle Fahrräder, die von den Usern eingestellt wurde.
Über das kleine Suchfeld kann man auf gut Glück nach einer Beschreibung suchen, die einem passend erscheint.
Für alle weiteren Funktionen muss man registriert und angemeldet sein:
Sowohl Registrierung als auch Anmeldung sind unkompliziert über die Buttons in der Navigationsleiste zu erledigen.
Bei der Registrierung findet eine minimalistische Eingabekontrolle statt: Felder können nicht leer bleiben und das Feld
"E-Mail-Adresse" muss dem Format einer E-Mail-Adresse entsprechen. Diese ist wichtig, da über diese die Kontaktaufnahme
erfolgt
Interessiert man sich für ein gefundenes Fahrrad, so kann man über den Button "Angebot ansehen" eine Detailansicht
mit zusätzlichen Informationen aufrufen. Über diese Detailansicht ist dann auch eine Kontaktaufnahme via E-Mail möglich:
Der Button "Kontakt aufnehmen" öffnet den Standard E-Mail-Client; die Mailadresse des Fahrradeigentuemers sowie eine
knappe Betreffzeile werden automatisch eingetragen. Die weitere Transaktion obliegt den Nutzern.
Ferner findet sich in der Navigationsleiste die Option "Verkauf" - diese ist ebenfalls nur für eingeloggte User zugänglich
Ist man eingeloggt, sieht man dort alle eigenen Fahrraeder auf der Plattform - und einen Button, um diese zu löschen
(etwa falls das Fahrrad verkauft wurde). Außerdem hat man hier die Option, ein neues Fahrrad einzustellen: Über das leere
Feld mit dem "+" gelangt man in eine neue Ansicht. Dort hat man einige Dropdownmenues sowie einige freie Feldeingaben
Pflichtfelder sind entsprechend markiert. Sind alle Pflichtfelder ausgefüllt, kann das Fahrrad über den Buttun "speichen"
angelegt werden und der User gelangt zurück zur Startseite, wo er sogleich sein neues Fahrrad sieht.



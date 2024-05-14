// Firebase-Konfiguration
var firebaseConfig = {
    apiKey: "AIzaSyD1fptCiGz__h_A1X_0Hb3FxDe71PUv_rE",
    authDomain: "dpc-lernplattform-fcbf9.firebaseapp.com",
    projectId: "dpc-lernplattform-fcbf9",
    storageBucket: "dpc-lernplattform-fcbf9.appspot.com",
    messagingSenderId: "59992383024",
    appId: "1:59992383024:web:73b51b9b56db02b258d7f5"
};



// Initialisiere Firebase
firebase.initializeApp(firebaseConfig);

function speichereFormularDaten() {
    // Formularelemente abrufen
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    
    // Objekt erstellen und Daten speichern
    var datenObjekt = {
        name: name,
        email: email
    };
    
    // Speichere die Daten in der Firebase Realtime Database
    var database = firebase.database();
    
    // ref leerstring um auf die gesamte Datenbank zuzugreifen
    database.ref('').push(datenObjekt);

    // Optional: Daten anzeigen
    console.log(datenObjekt);
    
    // Rückgabe des Objekts
    return datenObjekt;
}
var formularDaten = speichereFormularDaten();
console.log(speichereFormularDaten);


// Diese Zeile schreibt den Eintrag, der unter dem Key "toll" in der Datenbank steht und schreibt ihn in die Konsole
console.log(tollerEintrag);
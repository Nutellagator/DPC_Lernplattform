// der Event-Listener wartet das DOM vollständig geladen wurde, bevor code ausgeführt
document.addEventListener("DOMContentLoaded", function () {
  // Referenz auf die Firebase Realtime Database erstellen
  let database = firebase.database();

  // Referenz auf den Pfad in der Datenbank erstellen
  let scrumRef = database.ref("Scrum");
  
  // Daten abrufen
  scrumRef.on("value", function (snapshot) {
    var scrumData = snapshot.val();

    let frageElement = document.getElementById("frageID");
    frageElement.innerText = scrumData[1]["Frage"];

    for (let i = 1; i <= 4; i++) {
      let antwortElement = document.getElementById("antwort" + i);
      antwortElement.innerText = scrumData[1][i];
    }
    //Elemente werden in NodeList gespeichert
    let antwortElemente = document.querySelectorAll(".antwort");

    antwortElemente.forEach(function (antwortElement) {
      antwortElement.addEventListener("click", function () {
        // ID des geklickten Antwortelements erhalten und in Int ändern
        let iD = parseInt(antwortElement.id);

        console.log("Id: " + iD);

        if (iD == scrumData[1]["richtig"]) {
          alert("gg");
        } else alert("falsch");
      });
    });
  });
});

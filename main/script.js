// der Event-Listener wartet das DOM vollständig geladen wurde, bevor code ausgeführt
document.addEventListener("DOMContentLoaded", function () {
  // Referenz auf die Firebase Realtime Database erstellen
  let database = firebase.database();

  // Referenz auf den Pfad in der Datenbank erstellen
  let scrumRef = database.ref("QuizData/Scrum");

  
  // Daten abrufen
    scrumRef.on("value", function (snapshot) {
      let scrumData = snapshot.val();
      let numberOfFirebaseObjects = snapshot.numChildren();
      console.log("Du hast "+numberOfFirebaseObjects+" Objekte in deiner Database.");
      let theQuizNumber = Math.floor((Math.random()*numberOfFirebaseObjects-1)+1);
      console.log("Quiz nr. "+theQuizNumber);

      let frageElement = document.getElementById("frageID");
      frageElement.innerText = scrumData[theQuizNumber]["Question"];

      for (let i = 1; i <= 4; i++) {
        let antwortElement = document.getElementById("antwort" + i);
        antwortElement.innerText = scrumData[theQuizNumber][i];
      }
      //Elemente werden in NodeList gespeichert
      let antwortElemente = document.querySelectorAll(".antwort");

      antwortElemente.forEach(function (antwortElement) {
        antwortElement.addEventListener("click", function () {
          // ID des geklickten Antwortelements erhalten und in Int ändern
          let iD = parseInt(antwortElement.id);

          console.log("Id: " + iD);

          if (iD == scrumData[theQuizNumber]["True"]) {
            antwortElement.style.backgroundColor = "green";
            setTimeout(function() {
              location.reload(); 
            }, 3000);
          } else antwortElement.style.backgroundColor = "red";
        });
      });
    });
    
});

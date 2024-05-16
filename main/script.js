        // der Event-Listener wartet das DOM vollständig geladen wurde, bevor code ausgeführt
        document.addEventListener('DOMContentLoaded', function(){
          // Referenz auf die Firebase Realtime Database erstellen
          let database = firebase.database();

          // Referenz auf den Pfad in der Datenbank erstellen
          let scrumRef = database.ref('Scrum');

          // Daten abrufen
          scrumRef.on('value', function(snapshot) {
              var scrumData = snapshot.val();
              //console.log(scrumData[1]["Frage"]); 
              
              const frage = document.createElement("h1");
              frage.innerText = scrumData[1]["Frage"];
              document.body.appendChild(frage);

              for (let i = 1; i <= 4; i++) {
                const antwort = document.createElement("p")
                antwort.innerText = scrumData[1][i];
                document.body.appendChild(antwort);
              }

          });
      });
        
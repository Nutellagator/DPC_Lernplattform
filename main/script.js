// Your web app's Firebase configuration 
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyD1fptCiGz__h_A1X_0Hb3FxDe71PUv_rE",
    authDomain: "dpc-lernplattform-fcbf9.firebaseapp.com",
    projectId: "dpc-lernplattform-fcbf9",
    storageBucket: "dpc-lernplattform-fcbf9.appspot.com",
    messagingSenderId: "59992383024",
    appId: "1:59992383024:web:73b51b9b56db02b258d7f5"
  };

  // Initialize Firebase
  // Initialize variables
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const database = getDatabase(app);


  //Spielwiese

  //const spielen = () => { console.log("funktioniert"); }
  // document.getElementById("Spielbutton").addEventListener("click", spielen, false)

  
  
  // function register() {
  //   console.log("funktioniert");
  //   var preName = document.getElementById('preName').value;
  //   var Name = document.getElementById('Name').value;
  //   var email = document.getElementById('email').value;
  //   var password = document.getElementById('password').value;

  //   createUserWithEmailAndPassword(auth, email, password)
  //       .then((userCredential) => {
  //           const user = userCredential.user;
  //           alert('Benutzer wurde erstellt!')
  //       })
  //       .catch((error) => {
  //           const errorCOde = error.code;
  //           const errorMessage = error.message;
  //           alert(errorMessage);
  //       })

  // }

console.log("Hello " + preName)

  
  function register(){
    preName = document.getElementById('preName').value
    Name = document.getElementById('Name').value
    email = document.getElementById('email').value
    password = document.getElementById('password').value

    auth.createUserWithEmailAndPassword(email, password)
        .then(function(){
            var user = auth.currentUser;
            //Den User zur Firebase-Datenbank hinzufügen
            var database_ref = database.ref()

            var user_data = {
                preName:preName,
                Name:Name,
                email:email,
                password:password,
                last_login:Date.now() 
            }
            database_ref.child('users/' + user.uid).set

            alert("User erstellt !")


        })
        .catch(function(error) {
            var error_code = error.error_code;
            var error_message = error_message;
            alert(error_message)
        })   
    
   }

  function login(){
    email = document.getElementById('email').value
    password = document.getElementById('password').value
  }

var firebaseConfig = {
      apiKey: "AIzaSyDqJnrXd-g-guwZrIHQ9BTHtEa1ckaQ29A",
      authDomain: "kwitter-13b30.firebaseapp.com",
      databaseURL: "https://kwitter-13b30-default-rtdb.firebaseio.com",
      projectId: "kwitter-13b30",
      storageBucket: "kwitter-13b30.appspot.com",
      messagingSenderId: "876929489387",
      appId: "1:876929489387:web:1145a2310a6f8ecde861ae"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

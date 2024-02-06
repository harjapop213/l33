const firebaseConfig = {
      apiKey: "AIzaSyD-Pe4yQEa5SUecR-3l-s9siqR799u4T4w",
      authDomain: "kwitter-71cb9.firebaseapp.com",
      databaseURL: "https://kwitter-71cb9-default-rtdb.firebaseio.com",
      projectId: "kwitter-71cb9",
      storageBucket: "kwitter-71cb9.appspot.com",
      messagingSenderId: "166612819584",
      appId: "1:166612819584:web:7cecb476122b4d70875065"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
        
        user_name = localStorage.getItem("user_name");
        
        document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
        
        function addRoom()
        {
          room_name = document.getElementById("room_name").value;
        
          firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
          });
        
            localStorage.setItem("room_name", room_name);
            
            window.location = "kwitter_page.html";
        }
        
        function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
               Room_names = childKey;
               console.log("Room Name - " + Room_names);
              row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
              document.getElementById("output").innerHTML += row;
            });
          });
        
        }
        
        getData();
        
        function redirectToRoomName(name)
        {
          console.log(name);
          localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";
        }
        
        function logout() {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
            window.location = "index.html";
        }
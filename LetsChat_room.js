var firebaseConfig = {
  apiKey: "AIzaSyDrQjdBjH9s6i1gur1zOgYbbeLUiktr4Zw",
  authDomain: "emeralds-and-rubies-a1383.firebaseapp.com",
  databaseURL: "https://emeralds-and-rubies-a1383-default-rtdb.firebaseio.com",
  projectId: "emeralds-and-rubies-a1383",
  storageBucket: "emeralds-and-rubies-a1383.appspot.com",
  messagingSenderId: "119886941310",
  appId: "1:119886941310:web:73342501fccbf3352b5c2f"
};

firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
function addroom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
  purpose:"adding room name"
    });
  localStorage.setItem("room_name",room_name);
  window.location="LetsChat_page.html";
}
function getData() { 
  firebase.database().ref("/").on('value', function(snapshot) 
  { document.getElementById("output").innerHTML = ""; 
   snapshot.forEach(function(childSnapshot) 
 { childKey = childSnapshot.key; Room_names = childKey;
   console.log("room_name"+Room_names);
   row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML += row;
});
}); 
}
function redirectToRoomName(name){
console.log(name);
  localStorage.setItem("room_name",name);
  window.location="LetsChat_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html"
}

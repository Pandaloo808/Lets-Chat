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
function adduser() {
  user_name=document.getElementById("user_name").value;
  localStorage.setItem("user_name",user_name);
  window.location="kwitter_room.html";
}

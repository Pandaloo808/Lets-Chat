ar firebaseConfig = {
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
room_name=localStorage.getItem("room_name")
function send(){
  msg=document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  });
  document.getElementVyId("msg").value="";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="LetsChat_page.html"
}

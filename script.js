// STEP 1: PASTE YOUR FIREBASE CONFIG HERE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVkn_LvrbOFKmZLoJxMsrZXqugUQvml74",
  authDomain: "throneofchristministries-6a88a.firebaseapp.com",
  projectId: "throneofchristministries-6a88a",
  storageBucket: "throneofchristministries-6a88a.firebasestorage.app",
  messagingSenderId: "970066493474",
  appId: "1:970066493474:web:99d8f66402206b90998a7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// LOAD MESSAGES TO WEBSITE
if(document.getElementById("messages")){
db.collection("messages").orderBy("date","desc").onSnapshot(snap=>{
messages.innerHTML="";
snap.forEach(doc=>{
const m=doc.data();
messages.innerHTML+=`
<div class="message" data-date="${m.date}">
<h3>${m.title}</h3>
<p>${m.date}</p>
<iframe src="${m.video}" allowfullscreen></iframe>
<iframe src="${m.audio}"></iframe>
</div>`;
});
});
}

// SAVE MESSAGE FROM ADMIN
function save(){
db.collection("messages").add({
title:title.value,
date:date.value,
video:video.value,
audio:audio.value
});
alert("Message saved");
title.value="";
date.value="";
video.value="";
audio.value="";
}

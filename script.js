// STEP 1: PASTE YOUR FIREBASE CONFIG HERE
const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_DOMAIN",
projectId: "YOUR_PROJECT_ID",
};

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

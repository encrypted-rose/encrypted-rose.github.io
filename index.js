// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase,
    ref,
    child,
    get,
    onValue,
 } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

 // TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyD2VKCjWQnj3QzpOo9hXRCKYKQivrovG-w",

    authDomain: "humber-test.firebaseapp.com",

    projectId: "humber-test",

    storageBucket: "humber-test.appspot.com",

    messagingSenderId: "1018616076671",

    appId: "1:1018616076671:web:eba009debb5c3d2fe5224a"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase();

const messages = ref(database, "messages");

onValue(
    messages,
    (snapshot) => {
        //console.log(snapshot);
        const ul = document.getElementById("messages");

        ul.replaceChildren();

        snapshot.forEach((childSnapshot) => {
            console.log(childSnapshot.key);
            console.log(childSnapshot.val());

            const childData = childSnapshot.val();

            const text = document.createTextNode(
                childData.message + " ~ " + childData.name);

            const li = document.createElement("li");

            li.appendChild(text);
            ul.appendChild(li);
        });
});
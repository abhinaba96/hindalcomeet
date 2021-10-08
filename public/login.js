const firebase = require('firebase');
//const axios = require('axios');

const firebaseConfig = {
    apiKey: "AIzaSyCC2f8KTAlCE4fky9bcmH5Hv-YQ5UIoeV0",
    authDomain: "hindalcovoip.firebaseapp.com",
    projectId: "hindalcovoip",
    storageBucket: "hindalcovoip.appspot.com",
    messagingSenderId: "540108766878",
    appId: "1:540108766878:web:31b4172bc45c24d707858f",
    measurementId: "G-YFMMYZKYH7"
};

//firebase.initializeApp(firebaseConfig);





function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    axios.post('/validate', { email: email, password: password }).then(function (response) { 
        console.log(response);
        window.location.href = "/home"; 
    }).catch(function (error) { console.log(error); });
    // firebase.auth().signInWithEmailAndPassword(email, password).then(res => {

    //     console.log('login success');

    // }).catch(err => {
    //     console.log(err);

    // })
}
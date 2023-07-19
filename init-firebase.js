console.log(1111111111111111111);
var firebaseConfig = {
    apiKey: "AIzaSyDO7RvAnHcGoK-wPcpMpOvMtZcIGmQQdxY",
    authDomain: "fluent-optics-391207.firebaseapp.com",
    projectId: "fluent-optics-391207",
    storageBucket: "fluent-optics-391207.appspot.com",
    messagingSenderId: "832286164612",
    appId: "1:832286164612:web:fb60d1753fdc31c29924d1",
    measurementId: "G-SVSB3SFS1H"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

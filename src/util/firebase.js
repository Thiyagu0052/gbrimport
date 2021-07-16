import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyAu1ynVp-PW1_DttEUTPYrpdu3OgxIs1Ts",
    authDomain: "gbrefinery.firebaseapp.com",
    databaseURL: "https://gbrefinery-default-rtdb.firebaseio.com",
    projectId: "gbrefinery",
    storageBucket: "gbrefinery.appspot.com",
    messagingSenderId: "759037659972",
    appId: "1:759037659972:web:347566cba4e6583d846511"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase
import firebase from 'firebase'
// var firebaseConfig = {
//   apiKey: "AIzaSyDOw8eiG_P_vTzh8N68AX9ml4udEiRlt54",
//   authDomain: "gbrefinery-16802.firebaseapp.com",
//   projectId: "gbrefinery-16802",
//   storageBucket: "gbrefinery-16802.appspot.com",
//   messagingSenderId: "463784534874",
//   appId: "1:463784534874:web:551ddb726bda6a69878963"
// };
// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAu1ynVp-PW1_DttEUTPYrpdu3OgxIs1Ts",
  authDomain: "gbrefinery.firebaseapp.com",
  databaseURL: "https://gbrefinery-default-rtdb.firebaseio.com/",
  projectId: "gbrefinery",
  storageBucket: "gbrefinery.appspot.com",
  messagingSenderId: "759037659972",
  appId: "1:759037659972:web:347566cba4e6583d846511"
  
};
firebase.initializeApp(firebaseConfig);

  export default firebase
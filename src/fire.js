import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyBAEmofZvIkmhphs_JjzpZRZVyzuPjC8pM",
    authDomain: "quiz-app-a18cd.firebaseapp.com",
    projectId: "quiz-app-a18cd",
    storageBucket: "quiz-app-a18cd.appspot.com",
    messagingSenderId: "450610608519",
    appId: "1:450610608519:web:225ce431250f3229c87b22"
  };

  const fire = firebase.initializeApp(firebaseConfig);


  export default fire;
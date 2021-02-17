import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBn5iL5fawqL0kc1b8w1xH0Y-KbNWZntcE",
  authDomain: "wily-8d1a6.firebaseapp.com",
  projectId: "wily-8d1a6",
  storageBucket: "wily-8d1a6.appspot.com",
  messagingSenderId: "392895055723",
  appId: "1:392895055723:web:7b5fd5689286da482d2e2e"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
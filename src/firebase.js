import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCELL8AS7ibtyJrJ9_lVzY4laZLmM5_dUs",
  authDomain: "react-slack-clone-412c4.firebaseapp.com",
  databaseURL: "https://react-slack-clone-412c4.firebaseio.com",
  projectId: "react-slack-clone-412c4",
  storageBucket: "react-slack-clone-412c4.appspot.com",
  messagingSenderId: "371392320506"
};
firebase.initializeApp(config);

export default firebase;

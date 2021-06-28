import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCIDRaY4X81uhgrUO6XTj6g540KD67we9w",
  authDomain: "challenge-4341a.firebaseapp.com",
  databaseURL: "https://challenge-4341a.firebaseio.com",
  projectId: "challenge-4341a",
  storageBucket: "challenge-4341a.appspot.com",
  messagingSenderId: "234434888036",
  appId: "1:234434888036:web:d6d43056537c0232013a71"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
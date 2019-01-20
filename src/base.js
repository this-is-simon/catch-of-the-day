import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDDQVQmaR-ZFler2rWoJHWZOAOn2MT7t78",
  authDomain: "catch-of-the-day-simon-atkins.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-simon-atkins.firebaseio.com" 
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;

import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyBFrkOrFjumnki7jpBefJ3dDCCYp5HUcUA",
  authDomain: "keedo-crowdfunding.firebaseapp.com",
  databaseURL: "https://keedo-crowdfunding.firebaseio.com",
  projectId: "keedo-crowdfunding",
  storageBucket: "",
  messagingSenderId: "987810876998"
};
var fire = firebase.initializeApp(config);
export default fire;

import firebase from "firebase";
const config = {
  apiKey: "AIzaSyCH6R17nAY6ma0Tm3s-ojhyu-e2SlEiFa0",
  authDomain: "auctionwebsite-f8118.firebaseapp.com",
  databaseURL: "https://auctionwebsite-f8118.firebaseio.com",
  projectId: "auctionwebsite-f8118",
  storageBucket: "auctionwebsite-f8118.appspot.com",
  messagingSenderId: "324266589853"
};

firebase.initializeApp(config);
export default firebase;

import fb from "firebase";
export const chunk = (arr, size) => {
  return arr.reduce((chunks, item, index) => {
    if (index % size === 0) {
      chunks.push([item]);
    } else {
      chunks[chunks.length - 1].push(item);
    }
    return chunks;
  }, []);
};
const config = {
  apiKey: "AIzaSyCH6R17nAY6ma0Tm3s-ojhyu-e2SlEiFa0",
  authDomain: "auctionwebsite-f8118.firebaseapp.com",
  databaseURL: "https://auctionwebsite-f8118.firebaseio.com",
  projectId: "auctionwebsite-f8118",
  storageBucket: "auctionwebsite-f8118.appspot.com",
  messagingSenderId: "324266589853"
};
export const regexPassword = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/; //password
export const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //email
export const firebase = fb.initializeApp(config);

export const getHeader = headers => {
  console.log("==============Headers=================");
  console.log(headers);
  console.log("====================================");
  return {
    "access-token": headers["access-token"],
    client: headers["client"],
    expiry: headers["expiry"],
    uid: headers["uid"]
  };
};

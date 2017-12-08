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

export const firebase = fb.initializeApp(config);

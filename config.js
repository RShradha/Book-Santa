import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyB1AjrQfb1sEg_Ot9KXVZSgYnXkA6R-BNk",
  authDomain: "book-santa-30b81.firebaseapp.com",
  projectId: "book-santa-30b81",
  storageBucket: "book-santa-30b81.appspot.com",
  messagingSenderId: "258486182108",
  appId: "1:258486182108:web:f9077e95038283cc045419"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

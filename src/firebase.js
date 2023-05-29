// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGf36x9tgRIX1WULW8wNfvZHH491pq6P4",
  authDomain: "flashcards-c0c09.firebaseapp.com",
  projectId: "flashcards-c0c09",
  storageBucket: "flashcards-c0c09.appspot.com",
  messagingSenderId: "95275444842",
  appId: "1:95275444842:web:886867eefb72827f583813",
  measurementId: "G-Y8QCCK9T6N"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// firebase.initializeApp(firebaseConfig);

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
// // const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// const database = firebase.database();

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


export { app, database };
export default firebaseConfig;


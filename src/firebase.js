import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAWDYjerLrzP600_F9A8uY_ORoC26uR0L0",
    authDomain: "mcclan-3b9de.firebaseapp.com",
    projectId: "mcclan-3b9de",
    storageBucket: "mcclan-3b9de.appspot.com",
    messagingSenderId: "913914715115",
    appId: "1:913914715115:web:9d1b4d47132c868d39d7ae",
    measurementId: "G-5PVYFDTJ0Y"
  };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
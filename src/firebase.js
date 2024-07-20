// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCurwhbPXfV-faSa8rnSpORRszXfFycO-U",
  authDomain: "healthcare-b8196.firebaseapp.com",
  projectId: "healthcare-b8196",
  storageBucket: "healthcare-b8196.appspot.com",
  messagingSenderId: "223821078126",
  appId: "1:223821078126:web:1c7bb6a36161d3f9f7d07f",
  measurementId: "G-G4FXRCTRQH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const auth = getAuth(app);
export {auth};
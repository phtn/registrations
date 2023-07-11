// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwHNI2ulQEKR4ODB2YB4zRbj09kXEK4MQ",
  authDomain: "registrations-2a36d.firebaseapp.com",
  projectId: "registrations-2a36d",
  storageBucket: "registrations-2a36d.appspot.com",
  messagingSenderId: "481664511511",
  appId: "1:481664511511:web:9c57294dd40d3aede83652",
  measurementId: "G-Q75G3YNHZY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export const analytics = getAnalytics(app);

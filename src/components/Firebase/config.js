// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC4oHNdHOsVJfEWu9rxzR8th-K0AnjA-n4",
    authDomain: "ecommerce-react-fran.firebaseapp.com",
    projectId: "ecommerce-react-fran",
    storageBucket: "ecommerce-react-fran.appspot.com",
    messagingSenderId: "794857246925",
    appId: "1:794857246925:web:180fd255c2ac51223bd984",
    measurementId: "G-TYGCSH368Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app)

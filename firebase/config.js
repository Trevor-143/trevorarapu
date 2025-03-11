import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRexV1AC9jmnouE6Brgyu7k5b3oHKDXMM",
    authDomain: "my-portfolio-209c4.firebaseapp.com",
    projectId: "my-portfolio-209c4",
    storageBucket: "my-portfolio-209c4.appspot.com",
    messagingSenderId: "898129993202",
    appId: "1:898129993202:web:9c2bc74b6f39ff8f0f5f6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DataStore = getFirestore(app);

export {
    DataStore
}
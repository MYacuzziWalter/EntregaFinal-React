// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
        apiKey: "AIzaSyA_VKO7IkKfHGtiwjQdqLVA-kH4cSWNXxw",
        authDomain: "proyecto-doopel.firebaseapp.com",
        projectId: "proyecto-doopel",
        storageBucket: "proyecto-doopel.appspot.com",
        messagingSenderId: "150479108420",
        appId: "1:150479108420:web:981148d72f52734888ff11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

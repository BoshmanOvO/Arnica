// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAARGwqd0zbt5r6nMXzhOw0DfQrC8Pz-OI",
	authDomain: "arnicadb.firebaseapp.com",
	projectId: "arnicadb",
	storageBucket: "arnicadb.appspot.com",
	messagingSenderId: "288457682741",
	appId: "1:288457682741:web:209d9231d879a8b002267c",
	measurementId: "G-SS62X9XDQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
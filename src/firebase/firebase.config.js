// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbTv3OqGQTtjRdFxCZO_0nX4n7mV9ZiHU",
  authDomain: "dragon-news-ffc52.firebaseapp.com",
  projectId: "dragon-news-ffc52",
  storageBucket: "dragon-news-ffc52.appspot.com",
  messagingSenderId: "320434091818",
  appId: "1:320434091818:web:a561cbffb460e45d719053"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };
const firebaseConfig = {
  apiKey: "AIzaSyBGx8FX2GQI7uN1mwdUGjBT45kr4_LhnZk",
  authDomain: "dragon-news-client-71102.firebaseapp.com",
  projectId: "dragon-news-client-71102",
  storageBucket: "dragon-news-client-71102.appspot.com",
  messagingSenderId: "467766181512",
  appId: "1:467766181512:web:14ee61e8a3ab2b870e693d"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
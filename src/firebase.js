// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlAhPdpL3S_7wjJMXqhUkm5tGzPuUgILc",
  authDomain: "otp-app-a5e7e.firebaseapp.com",
  projectId: "otp-app-a5e7e",
  storageBucket: "otp-app-a5e7e.appspot.com",
  messagingSenderId: "590956546757",
  appId: "1:590956546757:web:9aa4ac5c0a00858818beac"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

// import { initializeApp } from "firebase/app";
// import {getAuth} from 'firebase/auth'

// const firebaseConfig = {
//   apiKey: "AIzaSyBSa3pooOWOld4Cejh626rpnYeH8sKo1kk",
//   authDomain: "prayojana-stage.firebaseapp.com",
//   projectId: "prayojana-stage",
//   storageBucket: "prayojana-stage.appspot.com",
//   messagingSenderId: "172940963011",
//   appId: "1:172940963011:web:bc185ebfcad18928b3c676",
//   measurementId: "G-4L83N7LS3L"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// export const auth = getAuth(app)
// export default app;
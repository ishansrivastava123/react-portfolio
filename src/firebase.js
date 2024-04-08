import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdl8Qz9y2AGYlN82IlrMHf2SO-pjSYFCo",
  authDomain: "react-portfolio-ishan.firebaseapp.com",
  projectId: "react-portfolio-ishan",
  storageBucket: "react-portfolio-ishan.appspot.com",
  messagingSenderId: "828002288151",
  appId: "1:828002288151:web:b095a6240cd27fd0a35252"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
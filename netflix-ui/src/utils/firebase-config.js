import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBNwsYsQm9TjRu-p0mwC8iA9jCFPxqS-lI",
  authDomain: "react-netflix-clone-49408.firebaseapp.com",
  projectId: "react-netflix-clone-49408",
  storageBucket: "react-netflix-clone-49408.appspot.com",
  messagingSenderId: "694027268338",
  appId: "1:694027268338:web:1bc87f96a3303cf2c0e06b",
  measurementId: "G-T74S81J58W",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

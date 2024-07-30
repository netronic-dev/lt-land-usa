import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCg6tzWQ2dCOAnM5ExkRD6WquhhLD0CCzw",
  authDomain: "netronic-3d67d.firebaseapp.com",
  projectId: "netronic-3d67d",
  storageBucket: "netronic-3d67d.appspot.com",
  messagingSenderId: "440661475796",
  appId: "1:440661475796:web:a8360fededebeb593a5641",
  measurementId: "G-MVPSC2TGFM",
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);

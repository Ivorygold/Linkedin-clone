import { initializeApp } from "firebase/app";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBDxUydZ_Egd8NTG5oVi3kLADK5-DAulgA",
  authDomain: "linkedin-clone-6e1bd.firebaseapp.com",
  projectId: "linkedin-clone-6e1bd",
  storageBucket: "linkedin-clone-6e1bd.appspot.com",
  messagingSenderId: "1067386167226",
  appId: "1:1067386167226:web:8d1669d280a2f0929bc783",
};

//const app = initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

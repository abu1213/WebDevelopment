import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth';
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyA2dgkzlnK0amHdEK1PWj2dIehAOTRw9no",
    authDomain: "netflix-clone-react-2515f.firebaseapp.com",
    projectId: "netflix-clone-react-2515f",
    storageBucket: "netflix-clone-react-2515f.appspot.com",
    messagingSenderId: "698632267434",
    appId: "1:698632267434:web:34ba1fa495cde6b2dd12d3"
 };

const app =  initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {app,auth,db}

 
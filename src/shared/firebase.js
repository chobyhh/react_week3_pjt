//firebase
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";



const firebaseConfig = {
    apiKey: "",
    authDomain: "pjt3-9210e.firebaseapp.com",
    projectId: "pjt3-9210e",
    storageBucket: "pjt3-9210e.appspot.com",
    messagingSenderId: "192603633301",
    appId: "1:192603633301:web:806918c70d9c7098b64d9c",
    measurementId: "G-PYZL1FY40M"
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export{auth, apiKey, firestore, storage};

import firebase from "firebase/compat/app";
import "firebase/compat/auth";




const firebaseConfig = {
    apiKey: "AIzaSyABospMdtOgDiR_zscvt5D5b_7amFRWXz0",
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

export{auth, apiKey};
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCEntnEqBP5EyqDdmaBpEMwqOFKP1b9xrk",
    authDomain: "test-7d27f.firebaseapp.com",
    projectId: "test-7d27f",
    storageBucket: "test-7d27f.appspot.com",
    messagingSenderId: "430347437983",
    appId: "1:430347437983:web:f93169f814d67acc911faa"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
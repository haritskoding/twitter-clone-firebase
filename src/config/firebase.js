// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyC9JqrwDko25WFZGLU4A1eZNcHhvhu5UV4",
    authDomain: "twitter-clone-d5196.firebaseapp.com",
    projectId: "twitter-clone-d5196",
    storageBucket: "twitter-clone-d5196.appspot.com",
    messagingSenderId: "404205777050",
    appId: "1:404205777050:web:11e7669bb2510d1e506f23",
    measurementId: "G-408W1B42EH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const githubAuth = new firebase.auth.GithubAuthProvider();
const googleAuth = new firebase.auth.GoogleAuthProvider();

export { firebase, githubAuth, googleAuth };
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAU1IOcFOAUzuGubmnf88cmJfgEIemrV-Q",
    authDomain: "whatsapp-clone-30259.firebaseapp.com",
    databaseURL: "https://whats-app-clone-a468f.firebaseio.com",
    projectId: "whatsapp-clone-30259",
    storageBucket: "whatsapp-clone-30259.appspot.com",
    messagingSenderId: "145175522275",
    appId: "1:145175522275:web:f37297406f3e2312008ed6",
    measurementId: "G-2JFCJLRCKB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
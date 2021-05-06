import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBmW8Uxg2zrN-l8srPpURjRW7yEw2AhbXw",
    authDomain: "shoenique-c919c.firebaseapp.com",
    projectId: "shoenique-c919c",
    storageBucket: "shoenique-c919c.appspot.com",
    messagingSenderId: "425250582363",
    appId: "1:425250582363:web:15fe3e1faee5540e8cf47e",
    measurementId: "G-GGTWW8S4CK"
});

export default firebaseConfig;

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email } = user;
    const { displayName } = additionalData;

    try {
      await userRef.set({
        displayName,
        email,
        createdAt: new Date(),
      });
    } catch (error) {
      console.log('Error in creating user', error);
    }
  }
};
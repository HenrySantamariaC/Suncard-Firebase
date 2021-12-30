// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { getDatabase, onValue, ref, set, push, child } from "firebase/database";
import Usuario from "../models/Usuario";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUTXLZcbyA6ovO8Qz_jMBUOMP8UrY4Cz4",
  authDomain: "suncard-b3271.firebaseapp.com",
  databaseURL: "https://suncard-b3271-default-rtdb.firebaseio.com",
  projectId: "suncard-b3271",
  storageBucket: "suncard-b3271.appspot.com",
  messagingSenderId: "366699255735",
  appId: "1:366699255735:web:27d2949a61a343504dba32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const database = getDatabase(app);

// Authentication with Firebase emailAndPassword
async function registerUserFirebaseEmail(email, password){
    await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(auth.currentUser, {
        displayName: "User",
        photoURL: "user-1.png"
      })
}

async function loginUserWithFirebaseEmail(email, password){
    await signInWithEmailAndPassword(auth, email, password)
    console.log(auth.currentUser);
}

async function logoutUserWithFirebaseEmail(){
    await signOut(auth)
}

export const UserSession = {
    registerUserFirebaseEmail,
    loginUserWithFirebaseEmail,
    logoutUserWithFirebaseEmail
}

// Operations with RealTime Database
async function readDataUser() {
    let newUser = new Usuario()
    newUser.uid = auth.currentUser.uid
    newUser.name = auth.currentUser.displayName
    newUser.email = auth.currentUser.email
    newUser.avatar = auth.currentUser.photoURL
    onValue(ref(database, 'users/' + auth.currentUser.uid +'/data'),(snapshot)=>{
        let data = snapshot.val()
        newUser.lasNameM = data.lasNameM
        newUser.lasNameP = data.lasNameP
        newUser.birth = data.birth
    })
    return newUser
}
async function writeDataUser() {
    // let uid = push(child(ref(database), 'users/'+auth.currentUser.uid)).key;
    await set(ref(database, 'users/' + auth.currentUser.uid), {
        data: {
            lasNameP: 'Santamaria',
            lasNameM: 'Capuñay',
            birth : '2000-06-18'
        }
      });
      console.log('hola desde crud');
}

export const CrudUser = {
    writeDataUser,
    readDataUser
}

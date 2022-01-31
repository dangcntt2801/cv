import { initializeApp } from 'firebase/app';
// import { getFirestore, getDocs } from 'firebase/firestore/lite';
import { getFirestore, onSnapshot, doc, collection, getDocs, query, where } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB9nJzbxvY4csjw3_1alM9MSI_HY11wvyk",
    authDomain: "hdtool-991b9.firebaseapp.com",
    projectId: "hdtool-991b9",
    storageBucket: "hdtool-991b9.appspot.com",
    messagingSenderId: "444604320252",
    appId: "1:444604320252:web:7bdafedf147e1b3a3e4a79",
    measurementId: "G-2GCH0GGS6Y"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db,
    collection,
    getDocs,
    onSnapshot,
    doc,
    query,
    where
};
import { getApps, initializeApp, getApp, deleteApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA3p6_oB1tAt-qvdL8Kvb-ZwVRctsdVtwA",
  authDomain: "sveltekit-fullstack-1e220.firebaseapp.com",
  projectId: "sveltekit-fullstack-1e220",
  storageBucket: "sveltekit-fullstack-1e220.appspot.com",
  messagingSenderId: "385655485248",
  appId: "1:385655485248:web:3be0500e7e5cfd273e00a5"
};
let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApp();
  deleteApp(firebaseApp);
  firebaseApp = initializeApp(firebaseConfig);
}
getFirestore(firebaseApp);
getAuth(firebaseApp);

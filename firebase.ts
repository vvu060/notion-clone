import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAd6aaC54IokDwsnqLBxtD2cpd7MmYnbPY',
  authDomain: 'notion-clone-49310.firebaseapp.com',
  projectId: 'notion-clone-49310',
  storageBucket: 'notion-clone-49310.appspot.com',
  messagingSenderId: '411739810158',
  appId: '1:411739810158:web:be12766b4b466eac48b97f',
};

// Initialize Firebase
const app = getApps.length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };

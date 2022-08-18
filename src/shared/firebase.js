import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjsmS6uirJK343FWznmLHvcy31GXD1vIg",
  authDomain: "test-12a64.firebaseapp.com",
  projectId: "test-12a64",
  storageBucket: "test-12a64.appspot.com",
  messagingSenderId: "875944687779",
  appId: "1:875944687779:web:746bb4661e943d8b34a716",
  measurementId: "G-QSYP3K2DMN",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {

apiKey: "AIzaSyDQE_1mBVB-5p_Upf9E2dVZtTMCn8waD4M",
authDomain: "redafilovplace.firebaseapp.com",
databaseURL: "https://redafilovplace-default-rtdb.europe-west1.firebasedatabase.app",
projectId: "redafilovplace",
storageBucket: "redafilovplace.firebasestorage.app",
messagingSenderId: "601893733902",
appId: "1:601893733902:web:a1865ab0cf298bbe7f9e5f"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

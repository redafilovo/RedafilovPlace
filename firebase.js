import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyDQE_1mBVB-5p_Upf9E2dVZtTMCn8waD4M",
  authDomain: "redafilovplace.firebaseapp.com",
  projectId: "redafilovplace",
  storageBucket: "redafilovplace.firebasestorage.app",
  messagingSenderId: "601893733902",
  appId: "1:601893733902:web:a1865ab0cf298bbe7f9e5f"
};

const app = initializeApp(firebaseConfig);

export { app };
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjeFtEA8nXJ8VmoMTZ-gPwejYmdjXj7Ss",
  authDomain: "todo-space-proto.firebaseapp.com",
  projectId: "todo-space-proto",
  storageBucket: "todo-space-proto.appspot.com",
  messagingSenderId: "545490360096",
  appId: "1:545490360096:web:93840510fb853e8bf86945",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

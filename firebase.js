import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2jPd_5MuDNTYBh93hHtXc9_G3-mpcZTE",

  authDomain: "forum-c4a06.firebaseapp.com",

  projectId: "forum-c4a06",

  storageBucket: "forum-c4a06.appspot.com",

  messagingSenderId: "751522601729",

  appId: "1:751522601729:web:de3d697b7914ed17481900",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

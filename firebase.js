import { initializeApp, getApps } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJsgsJy90rV02sA1hyNG0aTmUVIhtJtko",
  authDomain: "fb-clone-73e7c.firebaseapp.com",
  projectId: "fb-clone-73e7c",
  storageBucket: "fb-clone-73e7c.appspot.com",
  messagingSenderId: "866686299122",
  appId: "1:866686299122:web:e651efd686af7716ce996b"
};

// Initialize Firebase
let app;
// could have one from next.js
if(getApps().length) {
    app = getApps()[0];
} else {
    app = initializeApp(firebaseConfig);
}
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db, storage }
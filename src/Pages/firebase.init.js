// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID
apiKey: "AIzaSyCNOEPLNnvTfrDDZnYS6zX7fMY8FH9OwPo",
  authDomain: "doctors-portal-27fed.firebaseapp.com",
  projectId: "doctors-portal-27fed",
  storageBucket: "doctors-portal-27fed.appspot.com",
  messagingSenderId: "265798342337",
  appId: "1:265798342337:web:4383479753a7fd3c9de640"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
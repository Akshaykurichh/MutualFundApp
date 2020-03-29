import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCgjbAFh8lVouQC8zEtVUkp2SWeYtOqWlA",
  authDomain: "mutualfund-33dc5.firebaseapp.com",
  databaseURL: "https://mutualfund-33dc5.firebaseio.com",
  projectId: "mutualfund-33dc5",
  storageBucket: "mutualfund-33dc5.appspot.com",
  messagingSenderId: "878831100505",
  appId: "1:878831100505:web:8165df3a460fc6d4ffc748",
  measurementId: "G-GZQB9937M0"
};
class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.database();
    //firebase.analytics();
  }
  //mutualfund API
  //user = uid => this.db.ref(`mutualfunds/${uid}`);
  users = () => this.db.ref("mutualfunds");
}
export default Firebase;

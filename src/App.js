import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Signup from "./signup";
import { TabsComponent } from "./TabsComponent";
import Firebase from "./firebase.js";

function App() {
  // useEffect();
  // {
  //   const db = firebase.database();
  //   console.log("db is :", db);
  //   return () => {
  //     db = null;
  //   };
  // }
  return (
    <div className="App">
      <script src="https://www.gstatic.com/firebasejs/7.12.0/firebase-app.js"></script>

      <script src="https://www.gstatic.com/firebasejs/7.12.0/firebase-analytics.js"></script>

      {/* /* <script src="/__/firebase/7.12.0/firebase-app.js"></script>

      <script src="/__/firebase/7.12.0/firebase-analytics.js"></script>

      <script src="/__/firebase/init.js"></script> */}
      <TabsComponent firebase={Firebase} />
      <Signup />
    </div>
  );
}

export default App;

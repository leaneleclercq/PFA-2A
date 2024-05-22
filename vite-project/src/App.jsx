import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import menuLeft from './pages/menuLeft'
import "./App.css";
import { useEffect } from "react";
const { userName, coords, agence } = require("./ep");

// blabla

function App() {

  useEffect(() => {
    (async () => {
      const q = query(collection(db, "leads"));
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        docs.push({ id: doc.id, ...doc.data() });
      });
      setLeads(docs);
    })();
  }, []);

  return (
    <>
      {/*<menuLeft />*/}
      <div>
        <p>
          (`${userName} ${coords} ${agence}`)
        </p>
      </div>
    </>
  );
}

export default App;

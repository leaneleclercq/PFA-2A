import { useState } from "react";
//import menuLeft from './pages/menuLeft'
import "./App.css";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../ep";
import { useEffect } from "react";

const { userName, coords, agence } = require("./ep");

function App() {

  const [leads, setLeads] = useState([]);

  {/**  useEffect(() => {
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
  }, []); */}

  useEffect(() => {
    const fetchLeads = async () => {
      const q = query(collection(db, "leads")); // pour aller au bon endroit 
      const querySnapshot = await getDocs(q); // pour aller au bon endroit aussi
      const docs = []; // création d'un tableau 
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        docs.push({ id: doc.id, ...doc.data() }); // ajoute au tableau 
      });
      setLeads(docs);
    };
    fetchLeads();
  }, []);

  

  return (
    <>
""      <div>
        <h1>Leads</h1>
        <ul>
          {leads.map(lead => (
            <li key={lead.id}>{JSON.stringify(lead)}</li> 
          ))}
          </ul>
      </div>
    </>
  );
}

export default App;

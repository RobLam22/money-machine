import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db, auth } from "../firebase";
import "firebase/auth";

function Entries() {
  const [entries, setEntries] = useState([]);
  const entriesCollectionRef = collection(db, "entries");
  useEffect(() => {
    const getEntries = async () => {
      const data = await getDocs(entriesCollectionRef);
      setEntries(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getEntries();
  });

  return (
    <div>
      <h2>Your Entries:</h2>
      {entries.map((entry) => {
        return <div>{entry.result}</div>;
      })}
    </div>
  );
}

export default Entries;

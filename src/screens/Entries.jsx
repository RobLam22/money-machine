import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db, auth } from "../firebase";
import "firebase/auth";
import { UserAuth } from "../context/AuthContext";

function Entries() {
  const { user } = UserAuth();
  const [entries, setEntries] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const entriesCollectionRef = collection(db, "entries");

  useEffect(() => {
    const getEntries = async () => {
      if (!user) return;

      const data = await getDocs(entriesCollectionRef);
      const userEntries = data.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .filter((entry) => entry.author && entry.author.id === user.uid);
      setEntries(userEntries);
    };

    getEntries();
  }, [user]);

  const extractH1 = (htmlString) => {
    const div = document.createElement("div");
    div.innerHTML = htmlString;
    const h1 = div.querySelector("h1");
    return h1 ? h1.outerHTML : null;
  };

  return (
    <div className="grid grid-cols-2 h-full">
      <div className="border-r border-gray-300 p-4 overflow-auto">
        <h1 class="text-2xl font-black mb-6 text-center text-blue-600">
          Your Entries:
        </h1>
        {entries.map((entry) => (
          <div
            key={entry.id}
            dangerouslySetInnerHTML={{ __html: extractH1(entry.result) }}
            onClick={() => setSelectedEntry(entry.result)}
            className="cursor-pointer hover:bg-gray-100 p-2 rounded"
          ></div>
        ))}
      </div>

      <div className="p-4 overflow-auto flex items-center justify-center">
        {selectedEntry && (
          <div
            className="text-center"
            dangerouslySetInnerHTML={{ __html: selectedEntry }}
          ></div>
        )}
      </div>
    </div>
  );
}

export default Entries;

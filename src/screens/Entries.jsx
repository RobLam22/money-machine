import { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase";
import "firebase/auth";
import { UserAuth } from "../context/AuthContext";

function Entries() {
  const { user } = UserAuth();
  const [entries, setEntries] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const entriesCollectionRef = collection(db, "entries");

  useEffect(() => {
    console.log("test");
    const getEntries = async () => {
      console.log(user);
      if (!user) return;

      const data = await getDocs(entriesCollectionRef);
      const userEntries = data.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .filter((entry) => entry.author && entry.author.id === user.uid);
      setEntries(userEntries);
    };

    getEntries();
  }, []);

  const extractH1 = (htmlString) => {
    const div = document.createElement("div");
    div.innerHTML = htmlString;
    const h1 = div.querySelector("h1");
    return h1 ? h1.outerHTML : null;
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "entries", id));
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  return (
    <div className="grid grid-cols-2 h-full">
      <div className="border-r border-gray-300 p-4 overflow-auto">
        <h1 className="text-2xl font-black mb-6 text-center text-blue-600">
          Your Entries:
        </h1>
        {entries.map((entry) => (
          <div key={entry.id} className="mb-4 flex flex-col items-center">
            <div
              dangerouslySetInnerHTML={{ __html: extractH1(entry.result) }}
              onClick={() => setSelectedEntry(entry.result)}
              className="cursor-pointer hover:bg-gray-100 p-2 rounded text-center"
            ></div>
            <button
              onClick={() => handleDelete(entry.id)}
              className="mt-2 text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded transition duration-200"
            >
              Delete
            </button>
          </div>
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

// import { useEffect, useState } from "react";
// import { db, auth } from "../firebase";
// import firebase from "firebase/app";
// import "firebase/auth";

// function Entries() {
//   const [entries, setEntries] = useState([]);

//   useEffect(() => {
//     const user = firebase.auth().currentUser;

//     if (!user) return;

//     const unsubscribe = db
//       .collection("entries")
//       .where("userId", "==", user.uid)
//       .orderBy("timestamp", "desc")
//       .onSnapshot((snapshot) => {
//         const fetchedEntries = snapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setEntries(fetchedEntries);
//       });

//     return () => unsubscribe(); // Cleanup the listener on component unmount
//   }, []);

//   return (
//     <div>
//       <h2>Your Entries:</h2>
//       <ul>
//         {entries.map((entry) => (
//           <li key={entry.id}>{entry.entryText}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Entries;

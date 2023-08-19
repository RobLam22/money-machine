import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { query, where, getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

const SubscriptionGuard = ({ children }) => {
  const { user } = UserAuth();
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    if (user) {
      const statusCollectionRef = collection(db, "status");
      const q = query(statusCollectionRef, where("id", "==", user.uid));

      const fetchData = async () => {
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const data = querySnapshot.docs[0].data();
          setIsSubscribed(data.subscribed);
        } else {
          console.log("No matching document for user:", user.uid);
          setIsSubscribed(false);
        }
      };
      fetchData();
    }
  }, [user]);

  if (!isSubscribed) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default SubscriptionGuard;

import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import supabase from "./supabase";

export const SessionsContext = createContext([]);

const SessionsContextComponent = ({ children }) => {
  const [session, setSession] = useState(null);
  const [username, setUsername] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      navigate("/dashboard");
    });
    return () => subscription.unsubscribe();
  }, []);

  return (
    <SessionsContext.Provider value={{ session, setSession }}>
      {children}
    </SessionsContext.Provider>
  );
};

export default SessionsContextComponent;

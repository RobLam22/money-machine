import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "./supabase";
import Faq from "./screens/Faq";
import Navbar from "./Navbar";
import Landing from "./Navbar";
import Dashboard from "./screens/Dashboard";

function App() {
  const [session, setSession] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {!session ? (
          <Route path="/" element={<Navbar />}>
            <Route element={<Landing />} />
            <Route path="faq" element={<Faq />} />
            <Route
              path="login"
              element={
                <Auth
                  supabaseClient={supabase}
                  providers={[]}
                  appearance={{
                    theme: ThemeSupa,
                    variables: { default: { colors: { brand: "blue" } } },
                  }}
                />
              }
            />
          </Route>
        ) : (
          <Route path="/" element={<Dashboard />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "./supabase";
import Home from "./screens/Home";

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

  if (!session) {
    return (
      <Auth
        supabaseClient={supabase}
        providers={[]}
        appearance={{
          theme: ThemeSupa,
          variables: { default: { colors: { brand: "blue" } } },
        }}
      />
    );
  } else {
    return (
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/About"
            element={
              <div>
                <h1>About</h1>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;

import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { ChakraProvider } from "@chakra-ui/react";
import supabase from "./supabase";
import Navbar from "./Navbar";
import NavbarSession from "./NavbarSession";
import HowItWorks from "./screens/HowItWorks";
import Pricing from "./screens/Pricing";
import Faq from "./screens/Faq";
import Dashboard from "./screens/Dashboard";
import Features from "./screens/Features";

function App() {
  const [session, setSession] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      navigate("/");
      // console.log(_event);
      // if (session && !window.location.href) window.location.href = "/";
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <ChakraProvider>
      {session ? <NavbarSession /> : <Navbar session={session} />}
      <Routes>
        {!session ? (
          <>
            <Route index path="how" element={<HowItWorks />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="features" element={<Features />} />
            <Route path="faq" element={<Faq />} />
            <Route
              path="login"
              element={
                <>
                  <Auth
                    supabaseClient={supabase}
                    redirectTo="/"
                    providers={[]}
                    appearance={{
                      theme: ThemeSupa,
                      variables: { default: { colors: { brand: "blue" } } },
                    }}
                  />
                </>
              }
            />
          </>
        ) : (
          <>
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/*"
              element={
                <Auth
                  supabaseClient={supabase}
                  redirectTo="/"
                  providers={[]}
                  appearance={{
                    theme: ThemeSupa,
                    variables: { default: { colors: { brand: "blue" } } },
                  }}
                />
              }
            />
          </>
        )}
      </Routes>
    </ChakraProvider>
  );
}

export default App;

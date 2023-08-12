import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
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
import BlogPostWriter from "./screens/Tools/BlogPostWriter";
import ArticleGenerator from "./screens/Tools/ArticleGenerator";
import GrammarFix from "./screens/Tools/GrammarFix";
import ProductDescriptions from "./screens/Tools/ProductDescriptions";
import SentenceRewriter from "./screens/Tools/SentenceRewriter";
import SocialMediaPost from "./screens/Tools/SocialMediaPost";
import SentenceExpander from "./screens/Tools/SentenceExpander";
import IdeaGenerator from "./screens/Tools/IdeaGenerator";
import KeywordSuggestionsSEO from "./screens/Tools/KeywordSuggestionsSEO";

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
                    // redirectTo="/"
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
            <Route path="/blog-post-writer" element={<BlogPostWriter />} />
            <Route path="/article-generator" element={<ArticleGenerator />} />
            <Route path="/grammar-fix" element={<GrammarFix />} />
            <Route
              path="/product-descriptions"
              element={<ProductDescriptions />}
            />
            <Route path="/sentence-rewriter" element={<SentenceRewriter />} />
            <Route path="/social-media-post" element={<SocialMediaPost />} />
            <Route path="/sentence-expander" element={<SentenceExpander />} />
            <Route path="/idea-generator" element={<IdeaGenerator />} />
            <Route
              path="/keyword-suggestions-seo"
              element={<KeywordSuggestionsSEO />}
            />
            <Route
              path="/*"
              element={
                <Auth
                  supabaseClient={supabase}
                  // redirectTo="/login"
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

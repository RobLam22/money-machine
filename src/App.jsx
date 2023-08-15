import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "./supabase";
import Navbar from "./Navbar";
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
import Home from "./screens/Home";
import SessionsContextComp from "./SessionsContext";
import Signup from "./screens/Signup";

function App() {
  return (
    <SessionsContextComp>
      <Navbar />
      <Routes>
        <>
          <Route index path="/" element={<Home />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="features" element={<Features />} />
          <Route path="faq" element={<Faq />} />
          <Route path="signup" element={<Signup />} />
          <Route
            path="signin"
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
        <>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/dashboard/blog-post-writer"
            element={<BlogPostWriter />}
          />
          <Route
            path="/dashboard/article-generator"
            element={<ArticleGenerator />}
          />
          <Route path="/dashboard/grammar-fix" element={<GrammarFix />} />
          <Route
            path="/dashboard/product-descriptions"
            element={<ProductDescriptions />}
          />
          <Route
            path="/dashboardsentence-rewriter"
            element={<SentenceRewriter />}
          />
          <Route
            path="/dashboard/social-media-post"
            element={<SocialMediaPost />}
          />
          <Route
            path="/dashboard/sentence-expander"
            element={<SentenceExpander />}
          />
          <Route path="/dashboard/idea-generator" element={<IdeaGenerator />} />
          <Route
            path="/dashboard/keyword-suggestions-seo"
            element={<KeywordSuggestionsSEO />}
          />
          <Route
            path="/*"
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
        </>
      </Routes>
    </SessionsContextComp>
  );
}

export default App;

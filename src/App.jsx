import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "./supabase";
import Navbar from "./Navbar";
import Dashboard from "./screens/Dashboard";
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
          <Route path="signup" element={<Signup />} />
          <Route
            path="signin"
            element={
              <>
                <Auth
                  supabaseClient={supabase}
                  providers={[]}
                  appearance={{
                    theme: ThemeSupa,
                    variables: { default: { colors: { brand: "blue" } } },
                  }}
                />
              </>
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
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

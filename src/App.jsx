import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";
import Dashboard from "./screens/Dashboard";
import Entries from "./screens/Entries";
import ArticleGenerator from "./screens/Tools/ArticleGenerator";
import Navbar from "./Navbar";
import Home from "./screens/Home";
import BlogPostWriter from "./screens/Tools/BlogPostWriter";
import GrammarFix from "./screens/Tools/GrammarFix";
import ProductDescriptions from "./screens/Tools/ProductDescriptions";
import SentenceRewriter from "./screens/Tools/SentenceRewriter";
import SocialMediaPost from "./screens/Tools/SocialMediaPost";
import SentenceExpander from "./screens/Tools/SentenceExpander";
import KeywordSuggestionsSEO from "./screens/Tools/KeywordSuggestionsSEO";
import Subscription from "./screens/Subscription";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/article-generator" element={<ArticleGenerator />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/subscription"
            element={
              <ProtectedRoute>
                <Subscription />
              </ProtectedRoute>
            }
          />
          <Route
            path="/entries"
            element={
              <ProtectedRoute>
                <Entries />
              </ProtectedRoute>
            }
          />
          <Route
            path="/blog-post-writer"
            element={
              <ProtectedRoute>
                <BlogPostWriter />
              </ProtectedRoute>
            }
          />
          <Route
            path="/article-generator"
            element={
              <ProtectedRoute>
                <ArticleGenerator />
              </ProtectedRoute>
            }
          />
          <Route
            path="/grammar-fix"
            element={
              <ProtectedRoute>
                <GrammarFix />
              </ProtectedRoute>
            }
          />
          <Route
            path="/product-descriptions"
            element={
              <ProtectedRoute>
                <ProductDescriptions />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sentence-rewriter"
            element={
              <ProtectedRoute>
                <SentenceRewriter />
              </ProtectedRoute>
            }
          />
          <Route
            path="/social-media-post"
            element={
              <ProtectedRoute>
                <SocialMediaPost />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sentence-expander"
            element={
              <ProtectedRoute>
                <SentenceExpander />
              </ProtectedRoute>
            }
          />
          <Route
            path="/keyword-suggestions-seo"
            element={
              <ProtectedRoute>
                <KeywordSuggestionsSEO />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;

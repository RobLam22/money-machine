import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider, UserAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import SubscriptionGuard from "./components/SubscriptionGuard";
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
import Upgrade from "./screens/Upgrade";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/upgrade"
            element={
              <ProtectedRoute>
                <Upgrade />
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
            path="/article-generator"
            element={
              <SubscriptionGuard>
                <ProtectedRoute>
                  <ArticleGenerator />
                </ProtectedRoute>
              </SubscriptionGuard>
            }
          />
          <Route
            path="/social-media-post"
            element={
              <SubscriptionGuard>
                <ProtectedRoute>
                  <SocialMediaPost />
                </ProtectedRoute>
              </SubscriptionGuard>
            }
          />
          <Route
            path="/sentence-expander"
            element={
              <SubscriptionGuard>
                <ProtectedRoute>
                  <SentenceExpander />
                </ProtectedRoute>
              </SubscriptionGuard>
            }
          />
          <Route
            path="/keyword-suggestions-seo"
            element={
              <SubscriptionGuard>
                <ProtectedRoute>
                  <KeywordSuggestionsSEO />
                </ProtectedRoute>
              </SubscriptionGuard>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;

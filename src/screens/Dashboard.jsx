import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { query, where, getDocs } from "firebase/firestore";
import { db, auth } from "../firebase";
import "firebase/auth";
import { collection } from "firebase/firestore";

export default function Dashboard() {
  const navigate = useNavigate();
  const statusCollectionRef = collection(db, "status");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      const q = query(statusCollectionRef, where("id", "==", user.uid));

      const fetchData = async () => {
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const data = querySnapshot.docs[0].data();
          console.log("Fetched document data:", data);
          setIsSubscribed(data.subscribed);
        } else {
          console.log("No matching document for user:", user.uid);
          setIsSubscribed(false);
        }
      };
      fetchData();
    }
  }, [user]);

  return (
    <>
      <div className="grid grid-cols-4 gap-6 p-8">
        <div
          onClick={() => navigate("/blog-post-writer")}
          className="cursor-pointer border rounded-lg p-4 hover:bg-blue-600 hover:text-white transition ease-in-out duration-150"
        >
          <h2 className="text-xl font-bold mb-2">Blog Post Writer</h2>
          <p>Generate engaging blog posts effortlessly.</p>
        </div>

        <div
          onClick={() => navigate("/grammar-fix")}
          className="cursor-pointer border rounded-lg p-4 hover:bg-blue-600 hover:text-white transition ease-in-out duration-150"
        >
          <h2 className="text-xl font-bold mb-2">Grammar Fix</h2>
          <p>Correct and enhance your grammar.</p>
        </div>

        <div
          onClick={() => navigate("/product-descriptions")}
          className="cursor-pointer border rounded-lg p-4 hover:bg-blue-600 hover:text-white transition ease-in-out duration-150"
        >
          <h2 className="text-xl font-bold mb-2">Product Descriptions</h2>
          <p>Boost your product listings with compelling descriptions.</p>
        </div>

        <div
          onClick={() => navigate("/sentence-rewriter")}
          className="cursor-pointer border rounded-lg p-4 hover:bg-blue-600 hover:text-white transition ease-in-out duration-150"
        >
          <h2 className="text-xl font-bold mb-2">Sentence Rewriter</h2>
          <p>Rephrase sentences while maintaining the original meaning.</p>
        </div>

        <div
          onClick={isSubscribed ? () => navigate("/article-generator") : null}
          className={`cursor-pointer border rounded-lg p-4 ${
            isSubscribed
              ? "hover:bg-blue-600 hover:text-white transition ease-in-out duration-150"
              : "bg-gray-300 cursor-not-allowed"
          }`}
          title={isSubscribed ? "" : "You need to upgrade to use this tool."}
        >
          <h2
            className={`text-xl font-bold mb-2 ${
              isSubscribed ? "" : "text-gray-500"
            }`}
          >
            Article Generator
          </h2>
          <p className={`${isSubscribed ? "" : "text-gray-500"}`}>
            Create informative articles in seconds.
          </p>
        </div>

        <div
          onClick={isSubscribed ? () => navigate("/social-media-post") : null}
          className={`cursor-pointer border rounded-lg p-4 ${
            isSubscribed
              ? "hover:bg-blue-600 hover:text-white transition ease-in-out duration-150"
              : "bg-gray-300 cursor-not-allowed"
          }`}
          title={isSubscribed ? "" : "You need to upgrade to use this tool."}
        >
          <h2
            className={`text-xl font-bold mb-2 ${
              isSubscribed ? "" : "text-gray-500"
            }`}
          >
            Social Media Post
          </h2>
          <p className={`${isSubscribed ? "" : "text-gray-500"}`}>
            Craft engaging posts for your social media profiles.
          </p>
        </div>

        <div
          onClick={isSubscribed ? () => navigate("/sentence-expander") : null}
          className={`cursor-pointer border rounded-lg p-4 ${
            isSubscribed
              ? "hover:bg-blue-600 hover:text-white transition ease-in-out duration-150"
              : "bg-gray-300 cursor-not-allowed"
          }`}
          title={isSubscribed ? "" : "You need to upgrade to use this tool."}
        >
          <h2
            className={`text-xl font-bold mb-2 ${
              isSubscribed ? "" : "text-gray-500"
            }`}
          >
            Sentence Expander
          </h2>
          <p className={`${isSubscribed ? "" : "text-gray-500"}`}>
            Expand your sentences with rich details.
          </p>
        </div>

        <div
          onClick={
            isSubscribed ? () => navigate("/keyword-suggestions-seo") : null
          }
          className={`cursor-pointer border rounded-lg p-4 ${
            isSubscribed
              ? "hover:bg-blue-600 hover:text-white transition ease-in-out duration-150"
              : "bg-gray-300 cursor-not-allowed"
          }`}
          title={isSubscribed ? "" : "You need to upgrade to use this tool."}
        >
          <h2
            className={`text-xl font-bold mb-2 ${
              isSubscribed ? "" : "text-gray-500"
            }`}
          >
            Keyword Suggestions SEO
          </h2>
          <p className={`${isSubscribed ? "" : "text-gray-500"}`}>
            Optimize your content for search engines with keyword suggestions.
          </p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

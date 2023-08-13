import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-4 gap-6 p-8">
      <div
        onClick={() => navigate("blog-post-writer")}
        className="cursor-pointer border rounded-lg p-4 hover:bg-blue-600 hover:text-white transition ease-in-out duration-150"
      >
        <h2 className="text-xl font-bold mb-2">Blog Post Writer</h2>
        <p>Generate engaging blog posts effortlessly.</p>
      </div>

      <div
        onClick={() => navigate("article-generator")}
        className="cursor-pointer border rounded-lg p-4 hover:bg-blue-600 hover:text-white transition ease-in-out duration-150"
      >
        <h2 className="text-xl font-bold mb-2">Article Generator</h2>
        <p>Create informative articles in seconds.</p>
      </div>

      <div
        onClick={() => navigate("grammar-fix")}
        className="cursor-pointer border rounded-lg p-4 hover:bg-blue-600 hover:text-white transition ease-in-out duration-150"
      >
        <h2 className="text-xl font-bold mb-2">Grammar Fix</h2>
        <p>Correct and enhance your grammar.</p>
      </div>

      <div
        onClick={() => navigate("product-descriptions")}
        className="cursor-pointer border rounded-lg p-4 hover:bg-blue-600 hover:text-white transition ease-in-out duration-150"
      >
        <h2 className="text-xl font-bold mb-2">Product Descriptions</h2>
        <p>Boost your product listings with compelling descriptions.</p>
      </div>

      <div
        onClick={() => navigate("sentence-rewriter")}
        className="cursor-pointer border rounded-lg p-4 hover:bg-blue-600 hover:text-white transition ease-in-out duration-150"
      >
        <h2 className="text-xl font-bold mb-2">Sentence Rewriter</h2>
        <p>Rephrase sentences while maintaining the original meaning.</p>
      </div>

      <div
        onClick={() => navigate("social-media-post")}
        className="cursor-pointer border rounded-lg p-4 hover:bg-blue-600 hover:text-white transition ease-in-out duration-150"
      >
        <h2 className="text-xl font-bold mb-2">Social Media Post</h2>
        <p>Craft engaging posts for your social media profiles.</p>
      </div>

      <div
        onClick={() => navigate("sentence-expander")}
        className="cursor-pointer border rounded-lg p-4 hover:bg-blue-600 hover:text-white transition ease-in-out duration-150"
      >
        <h2 className="text-xl font-bold mb-2">Sentence Expander</h2>
        <p>Expand your sentences with rich details.</p>
      </div>

      <div
        onClick={() => navigate("idea-generator")}
        className="cursor-pointer border rounded-lg p-4 hover:bg-blue-600 hover:text-white transition ease-in-out duration-150"
      >
        <h2 className="text-xl font-bold mb-2">Idea Generator</h2>
        <p>Spark creativity and come up with novel ideas.</p>
      </div>

      <div
        onClick={() => navigate("keyword-suggestions-seo")}
        className="cursor-pointer border rounded-lg p-4 hover:bg-blue-600 hover:text-white transition ease-in-out duration-150"
      >
        <h2 className="text-xl font-bold mb-2">Keyword Suggestions SEO</h2>
        <p>
          Optimize your content for search engines with keyword suggestions.
        </p>
      </div>
    </div>
  );
}

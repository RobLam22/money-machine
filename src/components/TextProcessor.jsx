import { useState } from "react";
import gptUtil from "../components/gptUtil";
import { db, auth } from "../firebase";
import "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

const TextProcessor = ({
  systemPrompt,
  buttonText,
  onComplete,
  placeholder,
  placeholderAudience,
  title,
  subtitle,
  showAudience = false,
}) => {
  const [inputText, setInputText] = useState("");
  const [audience, setAudience] = useState("");
  const [result, setResult] = useState("");

  const entriesCollectionRef = collection(db, "entries");

  const createEntry = async () => {
    await addDoc(entriesCollectionRef, {
      result,
      author: { id: auth.currentUser.uid },
    });
  };

  const processText = async () => {
    const fullPrompt = systemPrompt(audience);
    const processedResult = await gptUtil(inputText, fullPrompt);
    setResult(processedResult);
    onComplete(processedResult);
  };

  const handleAutoResize = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-4xl font-black mb-6 text-center text-blue-600">
        {title}
      </h1>
      <h2 className="text-center font-bold mb-4 text-blue-600">{subtitle}</h2>

      <textarea
        rows="2"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder={placeholder}
        className="w-3/4 px-4 py-2 border-2 border-blue-400 rounded-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none mb-4 resize-none"
        style={{ overflowY: "hidden" }}
        onInput={handleAutoResize}
      />

      {showAudience && (
        <textarea
          rows="1"
          value={audience}
          onChange={(e) => setAudience(e.target.value)}
          placeholder={placeholderAudience}
          className="w-3/4 px-4 py-2 border-2 border-blue-400 rounded-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none mb-4 resize-none"
        />
      )}

      <button
        className="w-3/4 px-4 py-3 text-lg font-bold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 active:bg-blue-800 transition-colors"
        onClick={processText}
      >
        {buttonText}
      </button>

      <h2 className="text-2xl text-center font-bold mb-4 text-blue-600">
        Result:
      </h2>
      <div
        className="text-gray-800 text-center"
        dangerouslySetInnerHTML={{ __html: result }}
      ></div>
      <button
        className="w-3/4 px-4 py-3 text-lg font-bold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 active:bg-blue-800 transition-colors"
        onClick={createEntry}
      >
        Save Entry
      </button>
    </div>
  );
};

export default TextProcessor;

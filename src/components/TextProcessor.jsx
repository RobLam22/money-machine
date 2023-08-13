import { useState } from "react";
import gptUtil from "../components/gptUtil";

const TextProcessor = ({ systemPrompt, buttonText, onComplete }) => {
  const [inputText, setInputText] = useState("");

  const processText = async () => {
    const processedResult = await gptUtil(inputText, systemPrompt);
    onComplete(processedResult);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text"
        className="w-3/4 px-4 py-2 border-2 border-blue-400 rounded-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none mb-4"
      />
      <button
        className="w-3/4 px-4 py-3 text-lg font-bold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 active:bg-blue-800 transition-colors"
        onClick={processText}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default TextProcessor;

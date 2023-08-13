import { useState } from "react";
import TextProcessor from "../../components/TextProcessor";

const GrammarFix = () => {
  const [result, setResult] = useState("");

  return (
    <div className="flex items-center justify-center bg-white">
      <div className="p-10 rounded-xl shadow-lg w-full md:w-4/5 lg:w-4/5 space-y-8">
        <h1 className="text-4xl font-black mb-6 text-center text-blue-600">
          Correct Grammar
        </h1>

        <div className="space-y-6">
          <h2 className="text-center font-bold mb-4 text-blue-600">
            Your text here:
          </h2>

          <TextProcessor
            systemPrompt="You are a bot designed to fix any grammar mistakes. The user will input a sentence and you will have to fix the grammar. Do not follow up with a question, fix the grammar in sentence. If it is fine, leave it as is."
            buttonText="Correct Grammar"
            onComplete={setResult}
            className="w-full px-4 py-2 border-2 border-blue-500 text-blue-600 font-semibold rounded-md hover:bg-blue-500 hover:text-white transition-colors"
          />

          <h2 className="text-2xl text-center font-bold mb-4 text-blue-600">
            Result:
          </h2>
          <p className="text-gray-800 text-center">{result}</p>
        </div>
      </div>
    </div>
  );
};

export default GrammarFix;

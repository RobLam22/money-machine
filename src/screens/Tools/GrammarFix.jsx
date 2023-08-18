import { useState, useContext } from "react";
import TextProcessor from "../../components/TextProcessor";

const GrammarFix = () => {
  const [finalResult, setFinalResult] = useState("");

  const systemPrompt = () => `
    You are a sophisticated AI designed to generate correct grammar. Take the context of the text and ensure output is grammatically correct sentence/sentences.
    The output will be in HTML.
    GENERATE A H1 FOR THE TITLE AT ALL COSTS, which has class="text-2xl font-black mb-6 text-center text-black-600".
    Do NOT ask a question, only correct grammar.
    `;

  console.log(systemPrompt);
  console.log(finalResult);

  return (
    <div className="flex items-center justify-center bg-white">
      <div className="p-10 rounded-xl shadow-lg w-full md:w-4/5 lg:w-4/5 space-y-8">
        <TextProcessor
          showAudience={false}
          systemPrompt={systemPrompt}
          buttonText="Correct Grammar with AI"
          onComplete={setFinalResult}
          placeholder="Write your text here"
          //   placeholderAudience="Who is the audience? e.g. Digital marketers, developers, etc."
          title="Grammar Corrector"
          subtitle="Transform your text into grammatical perfection!"
        />
      </div>
    </div>
  );
};

export default GrammarFix;

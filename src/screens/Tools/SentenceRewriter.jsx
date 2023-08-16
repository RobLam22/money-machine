import { useState, useContext } from "react";
import TextProcessor from "../../components/TextProcessor";

const SentenceRewriter = () => {
  const [finalResult, setFinalResult] = useState("");

  const systemPrompt = (tone) => `
    You're an advanced AI designed to rewrite sentences while preserving their original meaning, but adjusting to the specified tone of ${tone}.
    Take the provided sentence and rewrite it in the desired tone without changing its core message.
    Output in HTML, separate by headings and paragraphs.
    h1 for the title, which has className="text-2xl font-black mb-6 text-center text-black-600" and
    h2 for the subheadings, with className="text-1xl text-center font-bold mb-4 text-black-600".
    Use no more than 200 words. Do NOT ask a question, simply rewrite the provided sentence in the given tone.
    `;
  console.log(systemPrompt);
  console.log(finalResult);

  return (
    <div className="flex items-center justify-center bg-white">
      <div className="p-10 rounded-xl shadow-lg w-full md:w-4/5 lg:w-4/5 space-y-8">
        <TextProcessor
          showAudience={true}
          systemPrompt={systemPrompt}
          buttonText="Rewrite Sentence"
          onComplete={setFinalResult}
          placeholder="Enter a sentence you want to rewrite. eg. 'The sun shines brightly.'"
          placeholderAudience="Specify the tone for the rewrite. eg. Formal, casual, poetic, etc."
          title="Sentence Rewriter"
          subtitle="Input a sentence, and we'll rewrite it in your desired tone while preserving its original meaning."
        />
      </div>
    </div>
  );
};

export default SentenceRewriter;

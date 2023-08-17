import { useState, useContext } from "react";
import TextProcessor from "../../components/TextProcessor";

const SentenceExpander = () => {
  const [finalResult, setFinalResult] = useState("");
  const [tailorPrompt, setTailorPrompt] = useState("");

  const systemPrompt = (audience) => `
    You're an advanced AI that specializes in expanding concise sentences by providing additional context and details without altering the original intent.
    Given a sentence, expand it with rich details and in the tone of ${audience}.
    The output will be in HTML.
    h1 for the title, which has class="text-2xl font-black mb-6 text-center text-black-600" and
    h2 for the subheadings, with class="text-1xl text-center font-bold mb-4 text-black-600".
    The remaining text will be in <p></p> tags. Include <br> AFTER EVERY </p> (</p><br>)
    Use no more than 100 words. Do NOT ask a question, generate a blog post regardless of output.
    `;

  return (
    <div className="flex items-center justify-center bg-white">
      <div className="p-10 rounded-xl shadow-lg w-full md:w-4/5 lg:w-4/5 space-y-8">
        <TextProcessor
          showTailorPrompt={true}
          placeholderTailorPrompt="Specify the tone of the sentence eg. Funny, professional, casual."
          systemPromptFunction={systemPrompt}
          onTailorPromptChange={setTailorPrompt}
          buttonText="AI Expand Sentence"
          onComplete={setFinalResult}
          placeholder="Enter text you would like to expand upon"
          title="Sentence Expander"
          subtitle="Input a brief sentence, and we'll expand it with more details and context."
        />
      </div>
    </div>
  );
};

export default SentenceExpander;

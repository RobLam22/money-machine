import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SessionsContext } from "../../SessionsContext";
import { checkSessionAndNavigate } from "../../util/SessionUtil";
import TextProcessor from "../../components/TextProcessor";

const SentenceExpander = () => {
  const [finalResult, setFinalResult] = useState("");

  const navigate = useNavigate();
  const SessionCheck = useContext(SessionsContext);
  checkSessionAndNavigate(SessionCheck, navigate);

  const systemPrompt = (audience) => `
    You're an advanced AI that specializes in expanding concise sentences by providing additional context and details without altering the original intent.
    Given a sentence, expand it with rich details and in the tone of ${audience}.
    Output in HTML, separate by headings and paragraphs.
    h1 for the title, which has className="text-2xl font-black mb-6 text-center text-black-600" and
    h2 for the subheadings, with className="text-1xl text-center font-bold mb-4 text-black-600".
    Use no more than 200 words. Do NOT ask a question, simply expand on the provided sentence.
    `;
  console.log(systemPrompt);
  console.log(finalResult);

  return (
    <div className="flex items-center justify-center bg-white">
      <div className="p-10 rounded-xl shadow-lg w-full md:w-4/5 lg:w-4/5 space-y-8">
        <TextProcessor
          showAudience={true}
          systemPrompt={systemPrompt}
          buttonText="AI Expand Sentence"
          onComplete={setFinalResult}
          placeholder="Enter text you would like to expand upon"
          placeholderAudience="Specify the tone of the sentence eg. Funny, professional, casual."
          title="Sentence Expander"
          subtitle="Input a brief sentence, and we'll expand it with more details and context."
        />
      </div>
    </div>
  );
};

export default SentenceExpander;

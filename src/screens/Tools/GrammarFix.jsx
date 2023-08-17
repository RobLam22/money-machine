import { useState, useContext } from "react";
import TextProcessor from "../../components/TextProcessor";

const GrammarFix = () => {
  const [finalResult, setFinalResult] = useState("");

  const systemPrompt = (audience) => `
    You are a sophisticated AI designed to generate comprehensive and engaging blog posts.
    Based on the topic provided, write a detailed and informative blog post.
    Write this in a style which appeals to ${audience}. The output will be in HTML.
    h1 for the title, which has class="text-2xl font-black mb-6 text-center text-black-600" and
    h2 for the subheadings, with class="text-1xl text-center font-bold mb-4 text-black-600".
    The remaining text will be in <p></p> tags. Include <br> AFTER EVERY </p> (</p><br>)
    Use no more than 200 words. Do NOT ask a question, generate a blog post regardless of output.
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

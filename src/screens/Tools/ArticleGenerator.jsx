import { useState, useContext } from "react";
import TextProcessor from "../../components/TextProcessor";

const ArticleGenerator = () => {
  const [finalResult, setFinalResult] = useState("");

  const systemPrompt = (audience) => `
    You are a sophisticated AI programmed to create detailed and well-researched articles.
    Given the subject, draft a concise and factual article.
    Write this in a style which appeals to ${audience}. Output in HTML, separate by headings and paragraphs.
    h1 for the title, which has className="text-2xl font-black mb-6 text-center text-black-600" and
    h2 for the subheadings, with className="text-1xl text-center font-bold mb-4 text-black-600".
    Use no more than 200 words. Do NOT ask a question, generate a blog post regardless of output.
    `;
  // console.log(systemPrompt);
  // console.log(finalResult);

  return (
    <div className="flex items-center justify-center bg-white">
      <div className="p-10 rounded-xl shadow-lg w-full md:w-4/5 lg:w-4/5 space-y-8">
        <TextProcessor
          showAudience={true}
          systemPrompt={systemPrompt}
          buttonText="Generate AI Article"
          onComplete={setFinalResult}
          placeholder="Describe the article you want to create. eg An article explaining how AI writing tools can boost engagement with your content"
          placeholderAudience="Who is the audience? e.g. Digital marketers, developers, millennials, students etc."
          title="Article Generator"
          subtitle="Need an instant article? Give us a topic and watch the magic happen!"
        />
      </div>
    </div>
  );
};

export default ArticleGenerator;

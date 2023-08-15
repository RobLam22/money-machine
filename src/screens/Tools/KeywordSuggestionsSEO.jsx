import { useState } from "react";
import TextProcessor from "../../components/TextProcessor";

const KeywordSuggestionsSEO = () => {
  const [finalResult, setFinalResult] = useState("");

  const systemPrompt = (industry) => `
    You are an advanced AI trained in SEO best practices. Given a primary keyword or topic, provide a list of related keyword suggestions tailored for the ${industry} industry. 
    Ensure these keywords are relevant and can potentially drive organic traffic. The aim is to optimize content for better search engine visibility.
    Output in HTML, list down the suggestions using the <ul> and <li> tags.
    Each <li> should be wrapped with className="text-lg font-medium text-black-600".
    Focus on quality and relevance rather than quantity. Do NOT ask questions, provide keyword suggestions based on the input.
    `;

  console.log(systemPrompt);
  console.log(finalResult);

  return (
    <div className="flex items-center justify-center bg-white">
      <div className="p-10 rounded-xl shadow-lg w-full md:w-4/5 lg:w-4/5 space-y-8">
        <TextProcessor
          showAudience={true}
          systemPrompt={systemPrompt}
          buttonText="Generate Keyword Suggestions"
          onComplete={setFinalResult}
          placeholder="Enter your primary keyword or topic. eg. 'organic skincare'"
          placeholderAudience="Specify the industry or niche. eg. Beauty, Tech, Real Estate, etc."
          title="SEO Keyword Suggestions Generator"
          subtitle="Input a primary keyword, and we'll provide SEO-tailored keyword suggestions for your industry."
        />
      </div>
    </div>
  );
};

export default KeywordSuggestionsSEO;

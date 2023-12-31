import { useState, useContext } from "react";
import TextProcessor from "../../components/TextProcessor";

const SocialMediaPost = () => {
  const [finalResult, setFinalResult] = useState("");

  const systemPrompt = (platform) => `
    You're an advanced AI designed to create captivating social media posts tailored for different platforms. Given the information provided, generate a post suitable for the ${platform} platform.
    Craft the post to resonate with the typical audience of ${platform}, optimizing for engagement and clarity.
    The output will be in HTML.
    GENERATE A H1 FOR THE TITLE AT ALL COSTS, which has class="text-2xl font-black mb-6 text-center text-black-600" and
    h2 for the subheadings, with class="text-1xl text-center font-bold mb-4 text-black-600".
    The remaining text will be in <p></p> tags. Include <br> AFTER EVERY </p> (</p><br>)
    Use no more than 200 words. Do NOT ask a question.
    `;
  console.log(systemPrompt);
  console.log(finalResult);

  return (
    <div className="flex items-center justify-center bg-white">
      <div className="p-10 rounded-xl shadow-lg w-full md:w-4/5 lg:w-4/5 space-y-8">
        <TextProcessor
          showAudience={true}
          systemPrompt={systemPrompt}
          buttonText="Generate Post"
          onComplete={setFinalResult}
          placeholder="Enter some information or context for your post. eg. 'Launching a new eco-friendly product line.'"
          placeholderAudience="Choose the platform for the post. eg. Twitter, Instagram, LinkedIn, etc."
          title="Social Media Post Generator"
          subtitle="Provide some context, and we'll generate a post tailored for your chosen social media platform."
        />
      </div>
    </div>
  );
};

export default SocialMediaPost;

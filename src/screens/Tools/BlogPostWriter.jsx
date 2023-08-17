import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import TextProcessor from "../../components/TextProcessor";

const BlogPostWriter = () => {
  const [finalResult, setFinalResult] = useState("");
  const [tailorPrompt, setTailorPrompt] = useState("");

  const systemPrompt = (audience) => `
    You are a sophisticated AI designed to generate comprehensive and engaging blog posts.
    Based on the topic provided, write a detailed and informative blog post.
    Write this in a style which appeals to ${audience}. 
    The output will be in HTML.
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
          showTailor={true}
          systemPrompt={systemPrompt}
          onTailorPromptChange={setTailorPrompt}
          buttonText="Write Blog Post"
          onComplete={setFinalResult}
          placeholder="Describe the blog post you want to create. eg A blog article explaining how AI writing tools can boost engagement with your content"
          placeholderTailorPrompt="Who is the audience? e.g. Digital marketers, developers, etc."
          title="Blog Post Writer"
          subtitle="Craft a compelling blog post effortlessly!"
        />
      </div>
    </div>
  );
};

export default BlogPostWriter;

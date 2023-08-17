import { useState, useContext } from "react";
import TextProcessor from "../../components/TextProcessor";

const ProductDescriptions = () => {
  const [finalResult, setFinalResult] = useState("");
  const [tailorPrompt, setTailorPrompt] = useState("");

  const systemPrompt = (audience) => `
    You are a sophisticated AI designed to generate comprehensive and engaging product descriptions for e-Commerce.
    Based on the product provided, write a detailed and informative product description to entice potential buyers.
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
          showTailorPrompt={true}
          placeholderTailorPrompt="Who are you selling this product to? eg. Millenials, students, parents, pet owners"
          systemPromptFunction={systemPrompt}
          onTailorPromptChange={setTailorPrompt}
          buttonText="Generate AI description"
          onComplete={setFinalResult}
          placeholder="Describe your product. eg. Small Round Coffee Table, Rustic Style, made from Metal and Wood. Colour is Walnut"
          title="E-Commerce Product Description Generator"
          subtitle="Describe your product, and we'll generate a catchy and enticing product description for you"
        />
      </div>
    </div>
  );
};

export default ProductDescriptions;

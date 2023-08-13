import { Configuration, OpenAIApi } from "openai";

const gptUtil = async (inputPrompt, systemPrompt) => {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const data = {
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: inputPrompt },
    ],
    temperature: 0,
  };

  try {
    const response = await openai.createChatCompletion(data);
    let r = response.data.choices[0].message.content;
    if (r === "") r = "N/A";
    return r;
  } catch (err) {
    console.error("OpenAI API Error:", err);
    return "Error processing request.";
  }
};

export default gptUtil;

import { GoogleGenerativeAI } from "@google/generative-ai";
console.log('asdasd')
console.log(process.env.NEXT_PUBLIC_API_KEY);
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_INT_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const sendMessageToGemini = async (message) => {
  try {
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "Hello" }],
        },
        {
          role: "model",
          parts: [{ text: "Great to meet you. What would you like to know?" }],
        },
      ],
    });

    const result = await chat.sendMessageStream(message);
    let responseText = "";
    for await (const chunk of result.stream) {
      responseText += chunk.text();
    }
    return responseText;
  } catch (error) {
    console.error("Error sending message:", error);
    throw new Error("Failed to send message. Please check your API key and try again.");
  }
};

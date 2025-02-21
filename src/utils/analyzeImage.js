import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_INT_KEY);

export default async function analyzeImage(imageFile) {
  
  const fileToGenerativePart = async (file) => {
    const base64EncodedData = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(',')[1]);
      reader.readAsDataURL(file);
    });
    
    return {
      inlineData: {
        data: base64EncodedData,
        mimeType: file.type
      }
    };
  };

  try {
    
    const imagePart = await fileToGenerativePart(imageFile);

   
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

   
    const prompt = "What kind of diseases is this? Do I need to consult a doctor or is there any home remedy? Limit the word count 50 words";

   
    const result = await model.generateContent([prompt, imagePart]);
    const response = await result.response;
    
    return response.text();
  } catch (error) {
    console.error('Error analyzing image:', error);
    throw new Error('Failed to analyze image: ' + error.message);
  }
}
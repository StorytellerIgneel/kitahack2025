import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(await import.meta.env.VITE_GEMINI_API_KEY);

// Get the generative model (in this case, "gemini-pro")
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const generationConfig = {
    temperature: 1,
    top_p: 0.95,
    top_k: 0,
    max_output_tokens: 8192,
  };
  
  // Set up safety settings
  const safetySettings = [
    {
      category: "HARM_CATEGORY_HARASSMENT",
      threshold: "BLOCK_NONE"
    },
    {
      category: "HARM_CATEGORY_HATE_SPEECH",
      threshold: "BLOCK_NONE"
    },
    {
      category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
      threshold: "BLOCK_NONE"
    },
    {
      category: "HARM_CATEGORY_DANGEROUS_CONTENT",
      threshold: "BLOCK_NONE"
    },
  ];


// Export the 'model' variable for use in other modules
export { model };
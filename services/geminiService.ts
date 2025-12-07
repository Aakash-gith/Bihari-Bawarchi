import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the Gemini client
const ai = new GoogleGenAI({ apiKey });

export const generateRecipe = async (ingredients: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      You are "Bihari Bawarchi", a warm, rustic, and expert home chef specializing in authentic Bihari and Indian cuisine.
      
      The user has these ingredients or request: "${ingredients}".
      
      Please suggest a short, delicious recipe idea or cooking tip using these ingredients. 
      Keep the tone friendly, encouraging, and authentic (maybe use a few Hindi words like "Swadisht" or "Tadka" where appropriate).
      Keep the response concise (under 150 words) and formatted nicely.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for faster response on simple queries
      }
    });

    return response.text || "Sorry, I couldn't cook up a recipe right now. Please try again!";
  } catch (error) {
    console.error("Error generating recipe:", error);
    throw new Error("Failed to generate recipe.");
  }
};
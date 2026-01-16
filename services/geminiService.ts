import { GoogleGenAI } from "@google/genai";

export const generateQuoteAssistance = async (userNeed: string): Promise<string> => {
  // Récupération de la clé API configurée dans Vercel
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;


  if (!apiKey) {
    return "La clé API n'est pas configurée. Veuillez sélectionner une clé pour continuer.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const model = "gemini-2.5-flash";
    const systemInstruction = `
      Tu es l'assistant virtuel expert de ACS (Alpes Cycles Services).
      TON BUT : Rédiger UNE SEULE proposition de message que l'utilisateur pourra copier-coller directement dans le formulaire de contact.
      
      RÈGLES STRICTES DE FORMATAGE :
      - AUCUN FORMATAGE MARKDOWN (pas de gras **, pas de titres ###, pas d'italique *).
      - Pas de listes à puces avec des astérisques. Utilise des tirets simples (-) si besoin.
      - Pas de phrase d'introduction du type "Voici une proposition...".
      - Uniquement le texte brut du message.
      
      CONTENU DU MESSAGE À GÉNÉRER :
      - Commence par une politesse simple.
      - Décris le besoin technique basé sur l'activité de l'utilisateur (ex: "Je suis livreur...").
      - Suggère le matériel adapté (Vélos Cargo/Trekking, moteur Bosch, etc.) et les services (Maintenance sur site).
      - Termine par une demande de devis ou de rappel.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: `Le client a écrit : "${userNeed}".`,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "Désolé, je n'ai pas pu générer de réponse.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Une erreur est survenue lors de la communication avec l'assistant.";
  }
}
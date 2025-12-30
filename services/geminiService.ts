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
      Tu es l'assistant virtuel expert de ACS (Alpes Cycles Services), une entreprise de mobilité pro en Haute Tarentaise.
      Tes services :
      1. Location de vélos électriques (Ville, Trekking, Cargo, Utilitaire) avec moteurs Bosch.
      2. Atelier mobile (déplacement sur site).
      3. Modèle économique : Location 12 mois avec rachat à -30%.
      4. Packs techniques : Hiver (pneus neige), Sécurité, Transport.
      
      Ton but : Aider un professionnel à rédiger une demande de devis concise et pertinente.
      Propose une configuration de matériel et un message type pour le formulaire de contact.
      Sois professionnel, court, direct.
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
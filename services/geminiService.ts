import { GoogleGenAI } from "@google/genai";

export const generateQuoteAssistance = async (userNeed: string): Promise<string> => {
  // Récupération de la clé API configurée
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

  if (!apiKey) {
    return "La clé API n'est pas configurée. Veuillez sélectionner une clé pour continuer.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    // Utilisation du modèle stable 1.5 (le 2.5 n'existe pas encore officiellement, cela évite des erreurs)
    const model = "gemini-1.5-flash";
    
    const systemInstruction = `
      Tu es l'assistant virtuel expert de ACS (Alpes Cycles Services).
      
      RÈGLES DE FORMATAGE STRICTES (IMPORTANT) :
      1. Réponds UNIQUEMENT en texte brut.
      2. N'utilise JAMAIS de Markdown.
      3. N'utilise JAMAIS d'astérisques (** ou *) pour le gras ou les listes.
      4. N'utilise JAMAIS de dièses (#) pour les titres.
      5. Pour faire des listes, utilise simplement un tiret du milieu (-).
      6. Pour mettre en valeur un titre, écris-le EN MAJUSCULES.

      Tes services :
      1. Location de vélos électriques (Ville, Trekking, Cargo, Utilitaire) avec moteurs Bosch.
      2. Atelier mobile (déplacement sur site).
      3. Modèle économique : Location 12 mois avec rachat à -30%.
      4. Packs techniques : Hiver (pneus neige), Sécurité, Transport.
      
      Ton but : Aider un professionnel à rédiger une demande de devis concise.
      Propose une configuration de matériel et un message type pour le formulaire.
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

    // La méthode .text() est la façon standard de récupérer le texte
    return response.text() || "Désolé, je n'ai pas pu générer de réponse.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Une erreur est survenue lors de la communication avec l'assistant.";
  }
}
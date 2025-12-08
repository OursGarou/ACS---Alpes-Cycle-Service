import React, { useState } from 'react';
import { Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import Button from '../components/Button';
import { generateQuoteAssistance } from '../services/geminiService';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  // AI Assistant States
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    alert("Merci ! Votre demande a été envoyée. (Simulation)");
  };

  const handleAiAssist = async () => {
    // Check if the environment requires key selection and if a key is selected
    const extendedWindow = window as any;
    if (extendedWindow.aistudio) {
      const hasKey = await extendedWindow.aistudio.hasSelectedApiKey();
      if (!hasKey) {
        try {
          await extendedWindow.aistudio.openSelectKey();
          // Assume the key is now set in process.env.API_KEY after selection
        } catch (error) {
          console.error("Erreur lors de la sélection de la clé API", error);
          setAiResponse("Veuillez sélectionner une clé API pour utiliser l'assistant.");
          return;
        }
      }
    }

    if (!aiPrompt.trim()) return;
    setAiLoading(true);
    setAiResponse('');
    
    const suggestion = await generateQuoteAssistance(aiPrompt);
    
    setAiResponse(suggestion);
    setAiLoading(false);
  };

  const applyAiSuggestion = () => {
    // Extract the message part roughly or just append to message
    setFormData(prev => ({
        ...prev,
        message: aiResponse
    }));
    setAiResponse('');
    setAiPrompt('');
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">Contactez-nous</h1>
          <p className="text-xl text-gray-600">Discutons de vos besoins en mobilité.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-primary mb-6">Nos Coordonnées</h3>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-accent mt-1" />
                        <div>
                            <p className="font-semibold text-gray-900">Adresse</p>
                            <p className="text-gray-600">123 Avenue de la Gare<br/>73700 Bourg-Saint-Maurice</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Phone className="h-6 w-6 text-accent mt-1" />
                        <div>
                            <p className="font-semibold text-gray-900">Téléphone</p>
                            <p className="text-gray-600">06 36 47 31 49</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Mail className="h-6 w-6 text-accent mt-1" />
                        <div>
                            <p className="font-semibold text-gray-900">Email</p>
                            <p className="text-gray-600">contact@acs-mobility.fr</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* AI Assistant Widget */}
            <div className="bg-gradient-to-br from-primary to-slate-800 p-8 rounded-2xl shadow-lg text-white">
                <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="text-yellow-400 h-6 w-6" />
                    <h3 className="text-xl font-bold">Assistant Devis IA</h3>
                </div>
                <p className="text-gray-300 text-sm mb-6">
                    Vous ne savez pas quel matériel choisir ? Décrivez votre activité (ex: "Je suis livreur de pizza aux Arcs"), et notre IA vous suggérera la meilleure configuration.
                </p>
                
                <div className="space-y-4">
                    <textarea
                        value={aiPrompt}
                        onChange={(e) => setAiPrompt(e.target.value)}
                        placeholder="Décrivez votre besoin ici..."
                        className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent text-sm h-24"
                    />
                    <Button 
                        onClick={handleAiAssist} 
                        variant="primary" 
                        fullWidth 
                        className="bg-accent hover:bg-emerald-600 border-none"
                        disabled={aiLoading}
                    >
                        {aiLoading ? 'Analyse en cours...' : 'Obtenir une suggestion'}
                    </Button>
                </div>

                {aiResponse && (
                    <div className="mt-6 bg-white/10 p-4 rounded-md border border-white/20 animate-fade-in">
                        <p className="text-sm text-gray-200 whitespace-pre-line italic mb-4">
                            {aiResponse}
                        </p>
                        <button 
                            onClick={applyAiSuggestion}
                            className="text-xs font-bold uppercase tracking-wide text-accent hover:text-white transition-colors"
                        >
                            Utiliser ce texte dans le formulaire →
                        </button>
                    </div>
                )}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-primary mb-8">Envoyer une demande</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                            placeholder="Jean Dupont"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Société</label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                            placeholder="Votre entreprise"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                            placeholder="jean@entreprise.com"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                            placeholder="06 36 47 31 49"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Votre message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                        placeholder="Détaillez votre besoin..."
                        required
                    ></textarea>
                </div>

                <Button type="submit" fullWidth className="text-lg">
                    Envoyer ma demande
                </Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Sparkles, Send, CheckCircle, AlertCircle } from 'lucide-react';
import Button from '../components/Button';
import { generateQuoteAssistance } from '../services/geminiService';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  // États pour l'envoi d'email
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // États pour l'Assistant IA
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAiAssist = async () => {
    if (!aiPrompt.trim()) return;
    setAiLoading(true);
    setAiResponse('');
    
    try {
      const suggestion = await generateQuoteAssistance(aiPrompt);
      setAiResponse(suggestion);
    } catch (error) {
      console.error(error);
      setAiResponse("Désolé, je n'ai pas pu joindre l'assistant.");
    } finally {
      setAiLoading(false);
    }
  };

  const applyAiSuggestion = () => {
    setFormData(prev => ({
        ...prev,
        message: aiResponse
    }));
    setAiResponse('');
    setAiPrompt('');
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // REMPLACEZ CES 3 VALEURS PAR CELLES DE VOTRE COMPTE EMAILJS (Voir instructions)
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    if (formRef.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            setStatus('success');
            setFormData({ name: '', company: '', email: '', phone: '', message: '' }); // Reset form
        }, (error) => {
            console.log(error.text);
            setStatus('error');
        });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">Contactez-nous</h1>
          <p className="text-xl text-gray-600">Discutons de vos besoins en mobilité.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Colonne Gauche : Infos + Widget IA */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-primary mb-6">Nos Coordonnées</h3>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-accent mt-1" />
                        <div>
                            <p className="font-semibold text-gray-900">Adresse</p>
                            <p className="text-gray-600">Bourg-Saint-Maurice<br/>Haute Tarentaise</p>
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
                            <p className="text-gray-600">contact@acs-alpine-cycle-studio.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Widget IA */}
            <div className="bg-gradient-to-br from-primary to-slate-800 p-8 rounded-2xl shadow-lg text-white">
                <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="text-yellow-400 h-6 w-6" />
                    <h3 className="text-xl font-bold">Assistant Devis IA</h3>
                </div>
                <p className="text-gray-300 text-sm mb-6">
                    Vous ne savez pas quel matériel choisir ? Décrivez votre activité, et notre IA vous suggérera la meilleure configuration.
                </p>
                
                <div className="space-y-4">
                    <textarea
                        value={aiPrompt}
                        onChange={(e) => setAiPrompt(e.target.value)}
                        placeholder="Ex: Je suis livreur de pizza aux Arcs..."
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
                        <div className="text-sm text-gray-200 whitespace-pre-line italic mb-4">
                            {aiResponse}
                        </div>
                        <button 
                            type="button"
                            onClick={applyAiSuggestion}
                            className="text-xs font-bold uppercase tracking-wide text-accent hover:text-white transition-colors"
                        >
                            Utiliser ce texte dans le formulaire →
                        </button>
                    </div>
                )}
            </div>
          </div>

          {/* Colonne Droite : Formulaire */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-primary mb-8">Envoyer une demande</h3>
            
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
                        <input
                            type="text"
                            name="name" // Important pour EmailJS
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Société</label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent outline-none"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent outline-none"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Votre message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent outline-none"
                        required
                    ></textarea>
                </div>

                <Button type="submit" fullWidth className="text-lg" disabled={status === 'sending' || status === 'success'}>
                    {status === 'sending' && <span className="flex items-center justify-center"><Send className="animate-spin mr-2 h-5 w-5"/> Envoi...</span>}
                    {status === 'success' && <span className="flex items-center justify-center"><CheckCircle className="mr-2 h-5 w-5"/> Envoyé !</span>}
                    {status === 'error' && <span className="flex items-center justify-center"><AlertCircle className="mr-2 h-5 w-5"/> Erreur, réessayez.</span>}
                    {status === 'idle' && "Envoyer ma demande"}
                </Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
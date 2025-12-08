import React from 'react';
import { MapPin, Target, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
        <div className="relative h-[60vh] flex items-center justify-center">
             <img 
                src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2070&auto=format&fit=crop" 
                alt="Montagne" 
                className="absolute inset-0 w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-primary/80"></div>
             <div className="relative z-10 text-center px-4">
                 <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">L'Entreprise</h1>
                 <p className="text-xl text-gray-300">Ancrée en Haute Tarentaise, tournée vers l'avenir.</p>
             </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-24">
            <div className="prose prose-lg text-gray-600 mx-auto">
                <p className="lead text-2xl font-light text-primary mb-12">
                    "ACS est née d'un constat simple : la montagne est un terrain de jeu exceptionnel, mais aussi un défi logistique quotidien pour les professionnels. Le vélo électrique n'est plus un loisir, c'est un outil de travail."
                </p>

                <h3 className="text-2xl font-bold text-primary mt-12 mb-6">Notre Mission</h3>
                <p>
                    Apporter une solution de mobilité concrète, fiable et économiquement viable aux entreprises de la vallée. Que vous soyez hôtelier à Val d'Isère, artisan à Bourg-Saint-Maurice ou restaurateur aux Arcs, nous avons conçu nos offres pour résister à l'usage intensif et au climat alpin.
                </p>

                <div className="grid md:grid-cols-2 gap-8 my-16 not-prose">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                        <div className="flex items-center gap-4 mb-4">
                            <MapPin className="text-accent h-8 w-8" />
                            <h4 className="text-xl font-bold text-primary">Territoire</h4>
                        </div>
                        <p className="text-sm">Nous intervenons exclusivement en Haute Tarentaise pour garantir une réactivité maximale de notre atelier mobile.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                        <div className="flex items-center gap-4 mb-4">
                             <Target className="text-accent h-8 w-8" />
                            <h4 className="text-xl font-bold text-primary">Objectif Zéro Carbone</h4>
                        </div>
                        <p className="text-sm">Toute notre logistique interne (livraison de vélos, déplacements techniques) est effectuée en vélo cargo électrique.</p>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-primary mt-12 mb-6">L'Équipe</h3>
                <p>
                    Fondée par des passionnés de cyclisme et de mécanique, ACS combine expertise technique (certifications Bosch eBike Systems) et connaissance du tissu économique local. Nous ne sommes pas des vendeurs de vélos, nous sommes vos gestionnaires de flotte.
                </p>
            </div>
        </div>
    </div>
  );
};

export default About;
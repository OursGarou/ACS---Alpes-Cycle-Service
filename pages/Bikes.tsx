import React from 'react';
import { Check } from 'lucide-react';
import { Bike, BikeCategory } from '../types';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const BIKES: Bike[] = [
  {
    id: '1',
    name: 'E-Cargo Load 75',
    category: BikeCategory.CARGO,
    description: 'Le remplacement idéal de la camionnette. Jusqu\'à 100kg de charge utile, parfait pour les livraisons du dernier kilomètre en station.',
    specs: ['Moteur Bosch Cargo Line', 'Batterie 1000Wh (Dual)', 'Transmission Enviolo', 'Suspension intégrale'],
    imageUrl: 'https://images.unsplash.com/photo-1519757306869-7d04f141b714?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '2',
    name: 'Trekking Pro X',
    category: BikeCategory.TREKKING,
    description: 'Polyvalence absolue. Pour les déplacements inter-sites, la surveillance de domaine ou les trajets domicile-travail exigeants.',
    specs: ['Moteur Bosch Performance CX', 'Pneus larges anti-crevaison', 'Éclairage Supernova', 'Porte-bagages renforcé'],
    imageUrl: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '3',
    name: 'Urban Connect',
    category: BikeCategory.CITY,
    description: 'Agilité urbaine pour Bourg-Saint-Maurice. Enjambement bas, confort optimal pour les équipes administratives.',
    specs: ['Moteur Bosch Active Line Plus', 'Courroie Gates (sans entretien)', 'Freins à disque hydrauliques', 'Connectivité Smartphone'],
    imageUrl: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '4',
    name: 'Heavy Duty Trailer',
    category: BikeCategory.UTILITY,
    description: 'Solution de remorquage professionnel pour charges lourdes et volumineuses. Compatible avec toute notre gamme.',
    specs: ['Charge utile 150kg', 'Freinage à inertie', 'Modulable (Plateau/Box)', 'Attelage sécurisé'],
    imageUrl: 'https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&q=80&w=1000'
  }
];

const Bikes: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">Notre Flotte Professionnelle</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des vélos sélectionnés pour leur fiabilité, leur robustesse et leur capacité à affronter le relief de la Tarentaise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {BIKES.map((bike) => (
            <div key={bike.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col">
              <div className="h-64 overflow-hidden relative group">
                {/* Fixed Badge Style */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-accent px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wide shadow-md z-10 border border-emerald-100">
                  {bike.category}
                </div>
                <img 
                    src={bike.imageUrl} 
                    alt={bike.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-primary mb-3">{bike.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                  {bike.description}
                </p>
                
                <div className="bg-gray-50 rounded-xl p-5 mb-8">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Caractéristiques Clés</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {bike.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Check className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/contact">
                    <Button variant="primary" fullWidth className="bg-accent hover:bg-emerald-700 text-white shadow-md hover:shadow-lg transition-all">
                      Demander un devis pour ce modèle
                    </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-primary rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-accent opacity-10"></div>
             <div className="relative z-10">
                 <h2 className="text-3xl font-bold mb-6">Besoin d'une configuration spécifique ?</h2>
                 <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                     Nous équipons nos vélos avec des accessoires professionnels : caisses isothermes, supports publicitaires, pneus cloutés pour l'hiver.
                 </p>
                 <Link to="/contact">
                    <Button variant="outline" className="bg-white text-primary hover:bg-gray-100 border-none">
                        Contacter l'atelier sur-mesure
                    </Button>
                 </Link>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Bikes;
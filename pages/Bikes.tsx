import React from 'react';
import { Check, Zap, Mountain, Gauge } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

// On définit les données localement pour avoir une flexibilité totale sur les 7 catégories
const BIKES = [
  {
    id: '1',
    category: 'VAE Ville & Polyvalent',
    title: 'Le Quotidien Alpin',
    target: 'Pour qui ? Particuliers, Navettes staff, Administrations.',
    description: 'Oubliez le vélo de ville fragile. Ici, on parle d\'un cadre ouvert mais rigide, capable d\'avaler les côtes de Bourg-Saint-Maurice sans faiblir.',
    tech: ['Moteur Bosch Performance (75Nm)', 'Freins à disques hydrauliques 4 pistons', 'Pneus larges renforcés', 'Porte-bagages compatible MIK'],
    imageUrl: '/image3.jpg' 
  },
  {
    id: '2',
    category: 'VAE Trekking',
    title: 'L\'Aventurier Tout-Chemin',
    target: 'Pour qui ? Loueurs, Guides, Trajets inter-stations.',
    description: 'Le SUV du vélo électrique. Suspendu, robuste et autonome, il passe de la route aux chemins carrossables sans compromis sur le confort.',
    tech: ['Moteur Bosch Performance CX (85Nm)', 'Batterie Grande Autonomie (625/750Wh)', 'Fourche suspendue 100mm', 'Éclairage puissant sur batterie'],
    imageUrl: '/image1.jpeg' 
  },
  {
    id: '3',
    category: 'Speedbike (45 km/h)',
    title: 'L\'Alternative Voiture',
    target: 'Pour qui ? Commuters longue distance, Liaison vallée-station.',
    description: 'Pour ceux qui comptent en minutes. Une véritable alternative à la voiture pour les trajets domicile-travail de plus de 10km.',
    tech: ['Moteur Bosch Speed (Assistance jusqu\'à 45km/h)', 'Rétroviseur & Klaxon homologués', 'Cadre ultra-rigide', 'Immatriculation requise'],
    imageUrl: 'https://images.unsplash.com/photo-1558981806-ec527fa84c3d?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '4',
    category: 'Longtail',
    title: 'Le Station Wagon',
    target: 'Pour qui ? Familles (2 enfants), Artisans, Livraison express.',
    description: 'La capacité de chargement d\'un cargo, l\'agilité d\'un vélo classique. Idéal pour déposer les enfants à l\'école puis aller sur un chantier.',
    tech: ['Moteur Bosch Cargo Line', 'Charge arrière jusqu\'à 80kg', 'Compatible sièges enfants & caisses Euro', 'Béquille centrale double'],
    // Note: Utilisation de votre image locale
    imageUrl: '/image0.jpeg' 
  },
  {
    id: '5',
    category: 'Biporteur',
    title: 'Le Gros Porteur',
    target: 'Pour qui ? Transport de volume, Petite logistique, Enfants en bas âge.',
    description: 'La caisse à l\'avant permet de garder un œil sur votre chargement (ou vos enfants). Centre de gravité bas pour une stabilité maximale.',
    tech: ['Moteur Bosch Cargo Line', 'Direction par câbles (rayon de braquage court)', 'Box EPP sécurisée', 'Protection pluie intégrale'],
    imageUrl: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '6',
    category: 'Triporteur Pro (VUF)',
    title: 'L\'Utilitaire Lourd',
    target: 'Pour qui ? Collectivités, Propreté urbaine, Logistique dernier km.',
    description: 'Stabilité absolue à l\'arrêt comme en charge. Conçu pour remplacer les petits véhicules thermiques dans les zones piétonnes.',
    tech: ['Moteur VALEO Cyclee (Boîte auto intégrée)', 'Couple démoniaque (130Nm)', 'Charge utile XXL (+150kg)', 'Marche arrière'],
    imageUrl: 'https://images.unsplash.com/photo-1519965099309-80e475f4305c?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: '7',
    category: 'Remorques Pro (VUF)',
    title: 'Le Module Extension',
    target: 'Pour qui ? Tout professionnel ayant un besoin ponctuel de volume.',
    description: 'Transformez n\'importe quel vélo de la gamme en outil logistique. Des remorques freinées, sécurisées et modulables.',
    tech: ['Compatible toute gamme VUF', 'Freinage à inertie', 'Modules : Plateau, Box, Isotherme', 'Attelage sécurisé'],
    imageUrl: 'https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&q=80&w=1000'
  }
];

const Bikes: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de page */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Mountain className="w-4 h-4" />
            <span>Spécialiste Mobilité Montagne</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Une flotte adaptée à <span className="text-accent">VOS</span> besoins
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pas de modèles standards imposés. Que vous soyez en station, en vallée, professionnel ou particulier, 
            nous configurons le vélo qui correspond exactement à votre usage et à votre dénivelé.
          </p>
        </div>

        {/* Grille des vélos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BIKES.map((bike) => (
            <div key={bike.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group">
              
              {/* Image Container */}
              <div className="h-64 overflow-hidden relative">
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide z-10 shadow-lg">
                  {bike.category}
                </div>
                {bike.tech.some(t => t.includes('45km/h')) && (
                   <div className="absolute top-4 right-4 bg-orange-500 text-white px-2 py-1 rounded-md z-10 shadow-lg">
                     <Gauge className="w-4 h-4" />
                   </div>
                )}
                <img 
                    src={bike.imageUrl} 
                    alt={bike.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                />
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-primary mb-2">{bike.title}</h3>
                <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-4">
                  {bike.target}
                </p>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-1 border-b border-gray-100 pb-6">
                  {bike.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-primary mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-500" /> Exemple de configuration :
                  </h4>
                  <ul className="space-y-2">
                    {bike.tech.map((spec, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <Check className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/contact" className="mt-auto">
                    <Button variant="outline" fullWidth className="group-hover:bg-primary group-hover:text-white group-hover:border-transparent transition-all">
                      Configurer ce vélo
                    </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Banner */}
        <div className="mt-24 bg-primary rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-20 rounded-full blur-3xl -mr-16 -mt-16"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 opacity-20 rounded-full blur-3xl -ml-16 -mb-16"></div>
             
             <div className="relative z-10">
                 <h2 className="text-3xl font-bold mb-6">Vous ne trouvez pas exactement ce qu'il vous faut ?</h2>
                 <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                     C'est normal, chaque métier est différent. Nous travaillons avec les meilleurs équipementiers pour adapter nos bases roulantes à vos contraintes (caisses isothermes, supports publicitaires, gyrophares...).
                 </p>
                 <Link to="/contact">
                    <Button variant="primary" className="bg-accent hover:bg-emerald-600 border-none text-lg px-8 py-4">
                        Parler de mon projet avec un expert
                    </Button>
                 </Link>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Bikes;
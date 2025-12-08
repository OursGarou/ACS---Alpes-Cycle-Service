import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mountain, Wrench, Briefcase } from 'lucide-react';
import Button from '../components/Button';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?q=80&w=2070&auto=format&fit=crop" 
            alt="Paysage montagne et vélo" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Mobilité Pro <br />
              <span className="text-accent">Durable & Efficace</span> <br />
              en Haute Tarentaise
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Transformez vos déplacements professionnels avec nos solutions de vélos électriques, notre atelier mobile et nos contrats sur-mesure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="w-full sm:w-auto text-lg px-8 py-4">
                  Demander un devis
                </Button>
              </Link>
              <Link to="/modele">
                <Button className="w-full sm:w-auto text-lg px-8 py-4 bg-slate-800 text-white border-transparent hover:bg-slate-700">
                  Découvrir l'offre Pro
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Une offre globale pour les pros</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous ne vendons pas simplement des vélos, nous garantissons votre mobilité opérationnelle au quotidien.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start">
              <div className="h-14 w-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mountain className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Vélos Haute Performance</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Une flotte sélectionnée pour la montagne : Cargo, Trekking, Utilitaire. Motorisation Bosch pour une fiabilité totale.
              </p>
              <Link to="/velos" className="w-full">
                <Button variant="primary" fullWidth className="mt-2 group-hover:bg-emerald-700">
                  Voir la gamme <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start">
              <div className="h-14 w-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Wrench className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Atelier Mobile</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Ne perdez pas de temps. Notre atelier cargo vient à votre entreprise pour l'entretien et les réparations.
              </p>
              <Link to="/services" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 mt-4">
                Nos services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start">
              <div className="h-14 w-14 bg-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Briefcase className="h-7 w-7 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Modèle Économique</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Contrats 12 mois, rachat garanti, avantages fiscaux. Une gestion de flotte optimisée pour votre trésorerie.
              </p>
              <Link to="/modele" className="inline-flex items-center text-slate-700 font-semibold hover:text-slate-900 mt-4">
                Comprendre l'offre <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Plus qu'un prestataire, un partenaire local.</h2>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                ACS est né d'une conviction : la mobilité en montagne peut être décarbonée sans sacrifier l'efficacité. 
                Basés à Bourg-Saint-Maurice, nous connaissons vos contraintes géographiques et climatiques.
              </p>
              <Link to="/entreprise">
                <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
                  En savoir plus sur ACS
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1618413156227-8141703e839e?q=80&w=1000&auto=format&fit=crop" 
                  alt="ACS Atelier" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
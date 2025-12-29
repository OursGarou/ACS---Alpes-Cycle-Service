import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mountain, Wrench, Layers, Snowflake, ShieldCheck, Clock } from 'lucide-react';
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
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Mobilité durable en montagne,<br />
              <span className="text-accent">pour les pros et les particuliers</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed font-medium">
              Des vélos électriques conçus pour la pente, la neige et l'usage quotidien.
              <br/>
              <span className="text-white font-bold">Un vélo adapté à VOS besoins, pas un modèle standard.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="w-full sm:w-auto text-lg px-8 py-4">
                  Demander un devis
                </Button>
              </Link>
              <Link to="/velos">
                <Button className="w-full sm:w-auto text-lg px-8 py-4 bg-slate-800 text-white border-transparent hover:bg-slate-700">
                  Découvrir nos offres
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
            <h2 className="text-3xl font-bold text-primary mb-4">Une expertise locale, une offre complète</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              ACS vous accompagne toute l'année, que vous soyez une famille, un artisan, un saisonnier ou une entreprise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Carte 1 : Les Vélos */}
            <div className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start">
              <div className="h-14 w-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mountain className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Une gamme complète & adaptée</h3>
              <div className="text-gray-600 mb-6 flex-grow text-sm space-y-2">
                <p>Du trajet quotidien aux usages professionnels intensifs :</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li><strong>VAE Ville & Trekking</strong> (Famille/Travail)</li>
                    <li><strong>Speedbike</strong> (45km/h)</li>
                    <li><strong>Cargo</strong> : Longtail, Biporteur</li>
                    <li><strong>Triporteur & Remorques</strong> (VUF)</li>
                </ul>
              </div>
              <Link to="/velos" className="w-full">
                <Button variant="primary" fullWidth className="mt-2 group-hover:bg-emerald-700">
                  Voir la gamme <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Carte 2 : Atelier Mobile */}
            <div className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start">
              <div className="h-14 w-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Wrench className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Atelier Mobile</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Notre atelier mobile se déplace directement <strong>chez vous</strong> ou sur votre <strong>lieu de travail</strong> pour l'entretien et le dépannage.
                <br/><br/>
                <span className="font-semibold text-blue-800">Gain de temps • Continuité d'usage • Vélo opérationnel</span>
              </p>
              <Link to="/services" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 mt-4">
                Nos services atelier <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Carte 3 : Offre Globale */}
            <div className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start">
              <div className="h-14 w-14 bg-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Layers className="h-7 w-7 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Une offre globale</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Nous vendons bien plus qu'un vélo. Nous gérons votre mobilité de A à Z :
                <br/><br/>
                <strong>Location</strong> (courte, moyenne, longue durée), <strong>Vente</strong>, Accompagnement, Maintenance.
                <br/>
                <em className="block mt-2 text-primary font-medium">"Vous roulez, on s'occupe du reste."</em>
              </p>
              <Link to="/modele" className="inline-flex items-center text-slate-700 font-semibold hover:text-slate-900 mt-4">
                Découvrir nos solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Packs & Sérénité Teaser */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-primary mb-6">Ne soyez jamais seul face à la montagne</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Parce que la météo et le terrain en Haute Tarentaise ne pardonnent pas, nous avons conçu des packs pour sécuriser vos trajets, toute l'année.
                    </p>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-white p-3 rounded-lg shadow-sm">
                                <Snowflake className="h-6 w-6 text-blue-500" />
                            </div>
                            <div>
                                <h4 className="font-bold text-primary">Packs Hiver</h4>
                                <p className="text-sm text-gray-600">Pneus cloutés, éclairage renforcé, protection thermique batterie.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-white p-3 rounded-lg shadow-sm">
                                <ShieldCheck className="h-6 w-6 text-emerald-500" />
                            </div>
                            <div>
                                <h4 className="font-bold text-primary">Packs Sécurité</h4>
                                <p className="text-sm text-gray-600">Antivols certifiés, assurance, traceurs GPS intégrés.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-white p-3 rounded-lg shadow-sm">
                                <Clock className="h-6 w-6 text-orange-500" />
                            </div>
                            <div>
                                <h4 className="font-bold text-primary">Maintenance Préventive</h4>
                                <p className="text-sm text-gray-600">On anticipe l'usure pour éviter la panne. Assistance rapide incluse.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                        src="https://images.unsplash.com/photo-1519965099309-80e475f4305c?q=80&w=2069&auto=format&fit=crop" 
                        alt="Vélo en conditions hivernales" 
                        className="w-full h-full object-cover"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                        <p className="text-white font-medium italic">"ACS, c'est un vélo adapté à ton usage, à la montagne, toute l'année."</p>
                     </div>
                </div>
            </div>
        </div>
      </section>

      {/* About Teaser / Proximité */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Plus qu'un prestataire, un partenaire de proximité.</h2>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                ACS est né d'une conviction : la mobilité en montagne ne doit pas être une contrainte.
                Basés à Bourg-Saint-Maurice, nous connaissons vos routes, vos horaires et vos besoins réels. 
                <br/><br/>
                Nous ne faisons pas que livrer des vélos, nous créons des solutions pour que vous puissiez vous déplacer librement, été comme hiver.
              </p>
              <Link to="/entreprise">
                <Button className="w-full sm:w-auto text-lg px-8 py-4 bg-slate-800 text-white border-transparent hover:bg-slate-700">
                  Qui sommes-nous ?
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop" 
                  alt="ACS Atelier de proximité" 
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
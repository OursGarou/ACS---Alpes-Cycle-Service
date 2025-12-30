import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { 
  Briefcase, 
  Users, 
  Calendar, 
  Search, 
  Bike, 
  Wrench, 
  CheckCircle2, 
  Snowflake, 
  Shield 
} from 'lucide-react';

const Model: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* 1. Header : Message Principal */}
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Des solutions de vélos électriques<br/>
              <span className="text-accent">adaptées à vos usages en montagne</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Location, longue durée ou saisonnière, avec accompagnement complet.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* 2. Cibles : Clairement affichées */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-gray-50 p-6 rounded-xl flex items-center gap-4 border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
                <div className="bg-white p-3 rounded-full shadow-sm text-accent">
                    <Briefcase className="h-6 w-6" />
                </div>
                <div>
                    <h3 className="font-bold text-lg text-primary">Professionnels</h3>
                    <p className="text-sm text-gray-600">Entreprises, artisans, collectivités</p>
                </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl flex items-center gap-4 border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
                <div className="bg-white p-3 rounded-full shadow-sm text-accent">
                    <Users className="h-6 w-6" />
                </div>
                <div>
                    <h3 className="font-bold text-lg text-primary">Particuliers</h3>
                    <p className="text-sm text-gray-600">Familles, trajets domicile-travail</p>
                </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl flex items-center gap-4 border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
                <div className="bg-white p-3 rounded-full shadow-sm text-accent">
                    <Calendar className="h-6 w-6" />
                </div>
                <div>
                    <h3 className="font-bold text-lg text-primary">Saisonniers</h3>
                    <p className="text-sm text-gray-600">Contrats courts, besoins ponctuels</p>
                </div>
            </div>
        </div>

        {/* 3. Structure de l'offre (Notre Approche) */}
        <div className="mb-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary">Notre Approche</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-12 relative">
                {/* Ligne connecteur (visible sur desktop) */}
                <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10"></div>

                <div className="bg-white p-6 relative text-center">
                    <div className="w-16 h-16 bg-white text-primary rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-gray-100 shadow-lg">
                        <Search className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-primary">1. Analyse du besoin</h3>
                    <p className="text-gray-600 leading-relaxed">Nous étudions ensemble votre usage, votre terrain (dénivelé) et la durée souhaitée.</p>
                </div>

                <div className="bg-white p-6 relative text-center">
                    <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg ring-4 ring-emerald-50">
                        <Bike className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-primary">2. Vélo adapté</h3>
                    <p className="text-gray-600 leading-relaxed">Mise à disposition du matériel configuré spécifiquement pour la montagne.</p>
                </div>

                <div className="bg-white p-6 relative text-center">
                    <div className="w-16 h-16 bg-white text-primary rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-gray-100 shadow-lg">
                        <Wrench className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-primary">3. Suivi & Maintenance</h3>
                    <p className="text-gray-600 leading-relaxed">Entretien inclus, intervention sur site et évolution de la solution si besoin.</p>
                </div>
            </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20 items-start">
            {/* 4. Types de solutions */}
            <div>
                <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                    <span className="w-10 h-1 bg-accent rounded-full block"></span>
                    Nos Solutions
                </h2>
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                    <p className="font-bold text-accent mb-6 flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 mt-1 flex-shrink-0" />
                        <span>Tous nos vélos sont configurés pour un usage montagne (motorisations puissantes, freinage renforcé, fiabilité hiver).</span>
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                            <span className="text-gray-700"><strong>VAE Ville & Trekking</strong></span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                            <span className="text-gray-700"><strong>Speedbike</strong> (45 km/h)</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                            <span className="text-gray-700"><strong>Cargos</strong> (Biporteurs et Longtails)</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                            <span className="text-gray-700"><strong>Triporteurs</strong> (Motorisation Valeo)</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                            <span className="text-gray-700"><strong>Remorques professionnelles</strong> (Compatibles toute gamme)</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* 5. Packs & Flexibilité */}
            <div>
                <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                    <span className="w-10 h-1 bg-accent rounded-full block"></span>
                    Packs & Services
                </h2>
                <p className="text-gray-600 italic mb-8 border-l-4 border-gray-200 pl-4">
                    "Les packs sont adaptables selon votre usage et votre statut."
                </p>
                
                <div className="space-y-6">
                    <div className="flex gap-4 items-start group">
                        <div className="bg-blue-50 p-3 rounded-xl mt-1 group-hover:bg-blue-100 transition-colors">
                            <Snowflake className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                            <h4 className="font-bold text-primary text-lg">Packs Techniques (Hiver)</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">Pneus cloutés, protection thermique batterie, éclairage haute visibilité.</p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start group">
                        <div className="bg-emerald-50 p-3 rounded-xl mt-1 group-hover:bg-emerald-100 transition-colors">
                            <Shield className="h-6 w-6 text-emerald-600" />
                        </div>
                        <div>
                            <h4 className="font-bold text-primary text-lg">Packs Sécurité</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">Antivols certifiés SRA, traceur GPS, marquage.</p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start group">
                        <div className="bg-purple-50 p-3 rounded-xl mt-1 group-hover:bg-purple-100 transition-colors">
                            <CheckCircle2 className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                            <h4 className="font-bold text-primary text-lg">Packs Sérénité</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">Assurance vol/casse, assistance 0km, véhicule de remplacement.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* 6. Avantages Fiscaux */}
        <div className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-xl p-8 mb-16 shadow-sm">
            <div className="flex gap-4 items-start">
                <span className="text-accent font-bold text-2xl leading-none mt-1">*</span>
                <div className="text-sm text-gray-600 space-y-1">
                    <p className="font-medium text-primary text-base mb-1">Avantages Fiscaux & Aides</p>
                    <p>
                        Pour les professionnels et certains saisonniers, des avantages fiscaux et aides à la mobilité peuvent s’appliquer 
                        (Forfait Mobilités Durables, charges déductibles, dispositifs locaux).
                    </p>
                    <p className="font-medium text-accent">Étude au cas par cas lors de la prise de contact.</p>
                </div>
            </div>
        </div>

        {/* 7. CTA Final */}
        <div className="bg-primary rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl -ml-24 -mb-24"></div>
            
            <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Un besoin spécifique ?</h2>
                <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                    Une contrainte terrain ou saisonnière ? Ne restez pas avec vos questions.
                </p>
                <Link to="/contact">
                    <Button variant="primary" className="bg-accent hover:bg-emerald-600 border-none text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                        Demander une étude personnalisée
                    </Button>
                </Link>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Model;
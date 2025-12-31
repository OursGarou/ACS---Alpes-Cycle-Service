import React from 'react';
import { Truck, PenTool, ShieldCheck, ThermometerSnowflake } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Services: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
       {/* Services Hero */}
       <section className="bg-primary text-white py-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Services & Maintenance</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Parce qu'un vélo professionnel ne doit jamais être immobilisé, nous avons conçu un service après-vente proactif et mobile.
            </p>
         </div>
       </section>

       {/* Service Cards */}
       <section className="py-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-12">
             
             {/* Atelier Mobile */}
             <div className="flex gap-6 items-start">
               <div className="bg-accent/10 p-4 rounded-xl flex-shrink-0">
                 <Truck className="h-10 w-10 text-accent" />
               </div>
               <div>
                 <h3 className="text-2xl font-bold text-primary mb-3">Atelier Mobile Cargo</h3>
                 <p className="text-gray-600 mb-4 leading-relaxed">
                   Plus besoin d'amener vos vélos au magasin. Notre technicien se déplace directement sur votre site avec un vélo cargo atelier tout équipé.
                   <br/>
                   <span className="font-medium text-primary">Intervention sur site pour limiter l’immobilisation des équipes.</span>
                 </p>
                 <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                        Intervention sous 24/48h
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                        Zéro émission carbone lors du déplacement
                    </li>
                 </ul>
               </div>
             </div>

             {/* Maintenance */}
             <div className="flex gap-6 items-start">
               <div className="bg-blue-100 p-4 rounded-xl flex-shrink-0">
                 <PenTool className="h-10 w-10 text-blue-600" />
               </div>
               <div>
                 <h3 className="text-2xl font-bold text-primary mb-3">Maintenance Préventive</h3>
                 <p className="text-gray-600 mb-4 leading-relaxed">
                   Planification des révisions pour anticiper les pannes. Nous suivons le kilométrage de votre flotte et intervenons avant que l'usure ne devienne critique.
                 </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                        Mises à jour logicielles Bosch
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                        Remplacement pièces d'usure (freins, pneus, ...)
                    </li>
                 </ul>
               </div>
             </div>

             {/* Packs Equipement */}
             <div className="flex gap-6 items-start">
               <div className="bg-indigo-100 p-4 rounded-xl flex-shrink-0">
                 <ThermometerSnowflake className="h-10 w-10 text-indigo-600" />
               </div>
               <div>
                 <h3 className="text-2xl font-bold text-primary mb-3">Packs Techniques</h3>
                 <p className="text-gray-600 mb-4 leading-relaxed">
                   Adaptez votre flotte aux conditions.
                   <br/>
                   <span className="text-sm italic">Des packs modulables, du niveau essentiel au niveau premium, selon votre usage et vos contraintes terrain.</span>
                 </p>
                 <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <h4 className="font-semibold text-primary mb-2">Pack Hiver</h4>
                    <p className="text-sm text-gray-600">
                        Conçu pour un usage quotidien en conditions froides, humides et enneigées. Pneus cloutés ou lamellisés, protection batterie néoprène, éclairage renforcé.
                    </p>
                 </div>
               </div>
             </div>

             {/* Sécurité */}
             <div className="flex gap-6 items-start">
               <div className="bg-slate-100 p-4 rounded-xl flex-shrink-0">
                 <ShieldCheck className="h-10 w-10 text-slate-600" />
               </div>
               <div>
                 <h3 className="text-2xl font-bold text-primary mb-3">Sécurité & Sérénité</h3>
                 <p className="text-gray-600 mb-4 leading-relaxed">
                   Protégez votre investissement et vos collaborateurs.
                 </p>
                 <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <p className="text-sm text-gray-600">Antivols certifiés, traceurs GPS intégrés, casques haute visibilité fournis.</p>
                    <p className="text-xs text-gray-500 mt-3 pt-2 border-t border-gray-200 italic">
                        Niveau de protection adaptable selon la valeur du vélo et l’usage professionnel.
                    </p>
                 </div>
               </div>
             </div>

           </div>
         </div>
       </section>
        
        {/* CTA Banner */}
        <section className="bg-gray-50 border-t border-gray-100 py-16">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-primary mb-6">Un problème sur un vélo ?</h2>
                <p className="text-gray-600 mb-8">
                    Contactez notre support pro dédié. Intervention prioritaire garantie pour les contrats flotte.
                </p>
                <Link to="/contact">
                    <Button>Contacter le support</Button>
                </Link>
            </div>
        </section>

    </div>
  );
};

export default Services;

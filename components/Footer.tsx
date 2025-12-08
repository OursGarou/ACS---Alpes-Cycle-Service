import React from 'react';
import { Bike, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
               <div className="bg-white/10 p-2 rounded-full">
                <Bike className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl">ACS</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              La mobilité professionnelle durable en Haute Tarentaise. Solutions de vélos électriques, maintenance sur site et gestion de flotte.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li><Link to="/velos" className="text-gray-300 hover:text-white transition-colors">Nos Vélos</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services Pro</Link></li>
              <li><Link to="/modele" className="text-gray-300 hover:text-white transition-colors">Offre Location/Vente</Link></li>
              <li><Link to="/entreprise" className="text-gray-300 hover:text-white transition-colors">L'Entreprise</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">Atelier Mobile</li>
              <li className="text-gray-300">Maintenance Préventive</li>
              <li className="text-gray-300">Packs Hiver & Sécurité</li>
              <li className="text-gray-300">Étude fiscale</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-300">
                <MapPin className="h-5 w-5 text-accent" />
                <span>Bourg-Saint-Maurice, 73700</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone className="h-5 w-5 text-accent" />
                <span>06 36 47 31 49</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Mail className="h-5 w-5 text-accent" />
                <span>contact@acs-mobility.fr</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© 2024 Alpes Cycles Services. Tous droits réservés.</p>
          <div className="flex gap-4">
            <span className="text-sm text-gray-500 hover:text-white cursor-pointer">Mentions Légales</span>
            <span className="text-sm text-gray-500 hover:text-white cursor-pointer">Politique de Confidentialité</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
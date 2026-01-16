import React from 'react';
import { Check, Zap, Mountain, Gauge } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

// On garde l'ID et l'image ici, le reste est dans les fichiers de traduction
const BIKES = [
  { id: '1', imageUrl: '/image3.jpg' },
  { id: '2', imageUrl: '/image1.jpeg' },
  { id: '3', imageUrl: '/image4.jpeg' },
  { id: '4', imageUrl: '/image0.jpeg' },
  { id: '5', imageUrl: '/image2.jpeg' },
  { id: '6', imageUrl: '/image5.jpeg' },
  { id: '7', imageUrl: '/image6.jpeg' }
];

const Bikes: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* En-tête de page */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Mountain className="w-4 h-4" />
            <span>{t('bikes.header_badge')}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            <Trans i18nKey="bikes.header_title">
              Une flotte adaptée à <span className="text-accent">VOS</span> besoins
            </Trans>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('bikes.header_desc')}
          </p>
        </div>

        {/* Grille des vélos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BIKES.map((bike) => {
            const techSpecs = t(`bikes.items.${bike.id}.tech`, { returnObjects: true }) as string[];
            const category = t(`bikes.items.${bike.id}.category`);
            const title = t(`bikes.items.${bike.id}.title`);

            return (
              <div key={bike.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group">

                {/* Image Container */}
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide z-10 shadow-lg">
                    {category}
                  </div>
                  {techSpecs.some(t => t.includes('45km/h') || t.includes('45km/h')) && (
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-2 py-1 rounded-md z-10 shadow-lg">
                      <Gauge className="w-4 h-4" />
                    </div>
                  )}
                  <img
                    src={bike.imageUrl}
                    alt={title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-primary mb-2">{title}</h3>
                  <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-4">
                    {t(`bikes.items.${bike.id}.target`)}
                  </p>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-1 border-b border-gray-100 pb-6">
                    {t(`bikes.items.${bike.id}.description`)}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-primary mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-500" /> {t('bikes.config_example')}
                    </h4>
                    <ul className="space-y-2">
                      {techSpecs.map((spec, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <Check className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to="/contact" state={{ bike: `${category} (${title})` }} className="mt-auto">
                    <Button variant="outline" fullWidth className="group-hover:bg-primary group-hover:text-white group-hover:border-transparent transition-all">
                      {t('bikes.configure_btn')}
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-24 bg-primary rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-20 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 opacity-20 rounded-full blur-3xl -ml-16 -mb-16"></div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">{t('bikes.banner_title')}</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('bikes.banner_desc')}
            </p>
            <Link to="/contact">
              <Button variant="primary" className="bg-accent hover:bg-emerald-600 border-none text-lg px-8 py-4">
                {t('bikes.banner_cta')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bikes;
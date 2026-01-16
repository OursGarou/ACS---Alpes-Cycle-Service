import React from 'react';
import { Truck, PenTool, ShieldCheck, ThermometerSnowflake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import Button from '../components/Button';

const Services: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white min-h-screen">
      {/* Services Hero */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('services.header_title')}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('services.header_desc')}
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
                <h3 className="text-2xl font-bold text-primary mb-3">{t('services.cards.workshop.title')}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {t('services.cards.workshop.desc_1')}
                  <br />
                  <span className="font-medium text-primary">{t('services.cards.workshop.desc_2')}</span>
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                    {t('services.cards.workshop.list_1')}
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                    {t('services.cards.workshop.list_2')}
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
                <h3 className="text-2xl font-bold text-primary mb-3">{t('services.cards.maintenance.title')}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {t('services.cards.maintenance.desc')}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    {t('services.cards.maintenance.list_1')}
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    {t('services.cards.maintenance.list_2')}
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
                <h3 className="text-2xl font-bold text-primary mb-3">{t('services.cards.packs.title')}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {t('services.cards.packs.desc')}
                  <br />
                  <span className="text-sm italic">{t('services.cards.packs.desc_sub')}</span>
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h4 className="font-semibold text-primary mb-2">{t('services.cards.packs.winter_title')}</h4>
                  <p className="text-sm text-gray-600">
                    {t('services.cards.packs.winter_desc')}
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
                <h3 className="text-2xl font-bold text-primary mb-3">{t('services.cards.security.title')}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {t('services.cards.security.desc')}
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <p className="text-sm text-gray-600">{t('services.cards.security.text_1')}</p>
                  <p className="text-xs text-gray-500 mt-3 pt-2 border-t border-gray-200 italic">
                    {t('services.cards.security.text_2')}
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
          <h2 className="text-3xl font-bold text-primary mb-6">{t('services.cta_banner.title')}</h2>
          <p className="text-gray-600 mb-8">
            {t('services.cta_banner.desc')}
          </p>
          <Link to="/contact">
            <Button>{t('services.cta_banner.btn')}</Button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Services;

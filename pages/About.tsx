import React from 'react';
import { MapPin, Target, Wrench, Mountain } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-white">
            {/* Hero Section avec l'image des Arcs */}
            <div className="relative h-[60vh] flex items-center justify-center">
                <img
                    src="/lesarcs.jpg"
                    alt="Les Arcs / Haute Tarentaise"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/70"></div> {/* Assombrissement pour lisibilité */}
                <div className="relative z-10 text-center px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        <Trans i18nKey="about_page.hero_title">
                            Notre Terrain de Jeu,<br />C'est Votre Lieu de Travail.
                        </Trans>
                    </h1>
                    <p className="text-xl text-gray-200 font-medium">
                        {t('about_page.hero_desc')}
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 py-24">

                {/* L'Histoire / Le Constat */}
                <div className="prose prose-lg text-gray-600 mx-auto text-center mb-20">
                    <Mountain className="h-12 w-12 text-accent mx-auto mb-6" />
                    <p className="lead text-2xl font-light text-primary italic">
                        {t('about_page.intro_quote')}
                    </p>
                    <p className="mt-8 leading-relaxed">
                        <Trans i18nKey="about_page.intro_text">
                            ACS est née d'un constat simple en Savoie : les professionnels ont besoin de fiabilité absolue.
                            <br /><br />
                            Nous ne sommes pas juste des passionnés de vélo. Nous sommes des experts de la logistique.
                            Notre mission est de fournir des outils (vélos) et des services (maintenance) capables de résister aux conditions les plus rudes.
                        </Trans>
                    </p>
                </div>

                {/* Les 3 Piliers (Valeurs) */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {/* Pilier 1 : Expansion (MODIFIÉ) */}
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                        <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm mb-6">
                            <MapPin className="text-accent h-7 w-7" />
                        </div>
                        <h4 className="text-xl font-bold text-primary mb-3">{t('about_page.pillars.expansion.title')}</h4>
                        <p className="text-sm text-gray-600">
                            <Trans i18nKey="about_page.pillars.expansion.desc">
                                Si l'activité commence en Savoie, berceau de notre expertise, elle s'étend aujourd'hui <strong>partout en France</strong> et très prochainement en <strong>Suisse</strong>. Nous portons notre exigence alpine sur tous les nouveaux territoires.
                            </Trans>
                        </p>
                    </div>

                    {/* Pilier 2 : Expertise */}
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                        <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm mb-6">
                            <Wrench className="text-blue-600 h-7 w-7" />
                        </div>
                        <h4 className="text-xl font-bold text-primary mb-3">{t('about_page.pillars.expertise.title')}</h4>
                        <p className="text-sm text-gray-600">
                            <Trans i18nKey="about_page.pillars.expertise.desc">
                                Nos vélos ne sont pas des jouets. Certifiés <strong>Bosch eBike Systems</strong> et partenaires <strong>Valeo</strong>, nous maîtrisons les motorisations complexes adaptées à la charge et à la pente.
                            </Trans>
                        </p>
                    </div>

                    {/* Pilier 3 : Écologie */}
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                        <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm mb-6">
                            <Target className="text-emerald-600 h-7 w-7" />
                        </div>
                        <h4 className="text-xl font-bold text-primary mb-3">{t('about_page.pillars.ecology.title')}</h4>
                        <p className="text-sm text-gray-600">
                            {t('about_page.pillars.ecology.desc')}
                        </p>
                    </div>
                </div>

                {/* Le Mot de la Fin */}
                <div className="bg-primary rounded-3xl p-12 text-center text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-4">{t('about_page.cta.title')}</h3>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            {t('about_page.cta.desc')}
                        </p>
                        {/* Lien vers contact maquillé en signature/bouton */}
                        <Link to="/contact" className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
                            {t('about_page.cta.btn')}
                        </Link>
                    </div>
                    {/* Effet déco fond */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                </div>

            </div>
        </div>
    );
};

export default About;
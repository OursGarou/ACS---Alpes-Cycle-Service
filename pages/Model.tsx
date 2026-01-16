import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { useTranslation, Trans } from 'react-i18next';
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
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-white">

            {/* 1. Header : Message Principal */}
            <div className="bg-primary text-white py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        <Trans i18nKey="model.hero_title">
                            Des solutions de vélos électriques<br />
                            <span className="text-accent">adaptées à vos usages en montagne</span>
                        </Trans>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        {t('model.hero_desc')}
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
                            <h3 className="font-bold text-lg text-primary">{t('model.targets.pros.title')}</h3>
                            <p className="text-sm text-gray-600">{t('model.targets.pros.desc')}</p>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl flex items-center gap-4 border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
                        <div className="bg-white p-3 rounded-full shadow-sm text-accent">
                            <Users className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-primary">{t('model.targets.individuals.title')}</h3>
                            <p className="text-sm text-gray-600">{t('model.targets.individuals.desc')}</p>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl flex items-center gap-4 border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
                        <div className="bg-white p-3 rounded-full shadow-sm text-accent">
                            <Calendar className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-primary">{t('model.targets.seasonals.title')}</h3>
                            <p className="text-sm text-gray-600">{t('model.targets.seasonals.desc')}</p>
                        </div>
                    </div>
                </div>

                {/* 3. Structure de l'offre (Notre Approche) */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-primary">{t('model.approach.title')}</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12 relative">
                        {/* Ligne connecteur (visible sur desktop) */}
                        <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10"></div>

                        <div className="bg-white p-6 relative text-center">
                            <div className="w-16 h-16 bg-white text-primary rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-gray-100 shadow-lg">
                                <Search className="h-7 w-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-primary">{t('model.approach.step_1.title')}</h3>
                            <p className="text-gray-600 leading-relaxed">{t('model.approach.step_1.desc')}</p>
                        </div>

                        <div className="bg-white p-6 relative text-center">
                            <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg ring-4 ring-emerald-50">
                                <Bike className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-primary">{t('model.approach.step_2.title')}</h3>
                            <p className="text-gray-600 leading-relaxed">{t('model.approach.step_2.desc')}</p>
                        </div>

                        <div className="bg-white p-6 relative text-center">
                            <div className="w-16 h-16 bg-white text-primary rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-gray-100 shadow-lg">
                                <Wrench className="h-7 w-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-primary">{t('model.approach.step_3.title')}</h3>
                            <p className="text-gray-600 leading-relaxed">{t('model.approach.step_3.desc')}</p>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20 items-start">
                    {/* 4. Types de solutions */}
                    <div>
                        <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                            <span className="w-10 h-1 bg-accent rounded-full block"></span>
                            {t('model.solutions.title')}
                        </h2>
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                            <p className="font-bold text-accent mb-6 flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 mt-1 flex-shrink-0" />
                                <span>{t('model.solutions.intro')}</span>
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                                    <span className="text-gray-700"><strong>{t('model.solutions.list.city')}</strong></span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                                    <span className="text-gray-700"><strong>{t('model.solutions.list.speed')}</strong></span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                                    <span className="text-gray-700"><strong>{t('model.solutions.list.cargo')}</strong></span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                                    <span className="text-gray-700"><strong>{t('model.solutions.list.trike')}</strong></span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                                    <span className="text-gray-700"><strong>{t('model.solutions.list.trailers')}</strong></span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* 5. Packs & Flexibilité */}
                    <div>
                        <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                            <span className="w-10 h-1 bg-accent rounded-full block"></span>
                            {t('model.packs.title')}
                        </h2>
                        <p className="text-gray-600 italic mb-8 border-l-4 border-gray-200 pl-4">
                            {t('model.packs.subtitle')}
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4 items-start group">
                                <div className="bg-blue-50 p-3 rounded-xl mt-1 group-hover:bg-blue-100 transition-colors">
                                    <Snowflake className="h-6 w-6 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary text-lg">{t('model.packs.technical.title')}</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">{t('model.packs.technical.desc')}</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start group">
                                <div className="bg-emerald-50 p-3 rounded-xl mt-1 group-hover:bg-emerald-100 transition-colors">
                                    <Shield className="h-6 w-6 text-emerald-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary text-lg">{t('model.packs.security.title')}</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">{t('model.packs.security.desc')}</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start group">
                                <div className="bg-purple-50 p-3 rounded-xl mt-1 group-hover:bg-purple-100 transition-colors">
                                    <CheckCircle2 className="h-6 w-6 text-purple-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary text-lg">{t('model.packs.serenity.title')}</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">{t('model.packs.serenity.desc')}</p>
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
                            <p className="font-medium text-primary text-base mb-1">{t('model.fiscal.title')}</p>
                            <p>
                                {t('model.fiscal.desc_1')}
                            </p>
                            <p className="font-medium text-accent">{t('model.fiscal.desc_2')}</p>
                        </div>
                    </div>
                </div>

                {/* 7. CTA Final */}
                <div className="bg-primary rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                    {/* Background pattern */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl -ml-24 -mb-24"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('model.cta.title')}</h2>
                        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                            {t('model.cta.desc')}
                        </p>
                        <Link to="/contact">
                            <Button variant="primary" className="bg-accent hover:bg-emerald-600 border-none text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                                {t('model.cta.btn')}
                            </Button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Model;
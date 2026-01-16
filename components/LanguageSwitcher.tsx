import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="flex items-center bg-gray-100 rounded-full p-1 h-8">
            <button
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${i18n.language === 'fr'
                        ? 'bg-white text-primary shadow-sm'
                        : 'text-gray-500 hover:text-primary'
                    }`}
                onClick={() => changeLanguage('fr')}
            >
                FR
            </button>
            <button
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${i18n.language === 'en'
                        ? 'bg-white text-primary shadow-sm'
                        : 'text-gray-500 hover:text-primary'
                    }`}
                onClick={() => changeLanguage('en')}
            >
                EN
            </button>
        </div>
    );
};

export default LanguageSwitcher;

import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Home, ArrowRight } from 'lucide-react';
import Button from '../components/Button';

const NotFound: React.FC = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
            <div className="text-center max-w-md mx-auto">
                <div className="relative mb-8 inline-block">
                    {/* Animated Icons */}
                    <div className="absolute -top-4 -right-4 text-accent animate-spin-slow">
                        <Settings className="w-12 h-12" />
                    </div>
                    <div className="text-primary">
                        <Settings className="w-24 h-24" />
                    </div>
                </div>

                <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Oups, vous avez déraillé !</h2>

                <p className="text-gray-600 mb-8 leading-relaxed">
                    Il semblerait que la chaîne ait sauté. Cette page est introuvable ou a été déplacée vers un autre col.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/">
                        <Button variant="primary" className="flex items-center gap-2">
                            <Home className="w-4 h-4" />
                            Retour au garage
                        </Button>
                    </Link>
                    <Link to="/contact">
                        <Button variant="outline" className="flex items-center gap-2">
                            Nous contacter
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { TrendingDown, RefreshCcw, PiggyBank } from 'lucide-react';

const data = [
  {
    name: 'Année 1',
    "Coût Flotte Classique": 100,
    "Coût Modèle ACS": 70,
  },
  {
    name: 'Année 2',
    "Coût Flotte Classique": 40,
    "Coût Modèle ACS": 70,
  },
  {
    name: 'Année 3',
    "Coût Flotte Classique": 60, 
    "Coût Modèle ACS": 70,
  },
];

const Model: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Le Modèle ACS</h1>
            <p className="text-xl text-gray-300">Flexibilité. Maîtrise des coûts. Renouvellement.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* The Concept */}
        <div className="mb-24">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Comment ça marche ?</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-2xl font-bold text-accent">1</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Location 12 Mois</h3>
                    <p className="text-gray-600">Vous louez votre flotte neuve pour une durée d'un an. Loyer fixe, tout inclus (maintenance, assurance).</p>
                </div>
                <div className="p-6">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                         <span className="text-2xl font-bold text-accent">2</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Rachat ou Renouvellement</h3>
                    <p className="text-gray-600">À la fin du contrat, deux choix : racheter les vélos avec une décote importante, ou repartir sur une flotte neuve.</p>
                </div>
                <div className="p-6">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                         <span className="text-2xl font-bold text-accent">3</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4">-30% à la Revente</h3>
                    <p className="text-gray-600">Si vous rachetez, vous bénéficiez d'une remise de 30% sur la valeur initiale. Un actif amorti et performant.</p>
                </div>
            </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Pourquoi choisir ce modèle ?</h2>
                <div className="space-y-8">
                    <div className="flex gap-4">
                        <RefreshCcw className="h-8 w-8 text-accent flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-lg">Matériel toujours au top</h4>
                            <p className="text-gray-600">Renouvelez votre flotte régulièrement pour bénéficier des dernières technologies batteries et moteurs.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <TrendingDown className="h-8 w-8 text-accent flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-lg">Trésorerie lissée</h4>
                            <p className="text-gray-600">Pas d'investissement lourd initial. Passez vos loyers en charges d'exploitation.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <PiggyBank className="h-8 w-8 text-accent flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-lg">Avantages Fiscaux</h4>
                            <p className="text-gray-600">Éligible au Forfait Mobilités Durables (FMD) et réduction d'impôt sur les sociétés pour mise à disposition de vélos (25%).</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Chart */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-lg">
                <h3 className="text-lg font-semibold text-center mb-6">Comparatif de structure de coûts (Est.)</h3>
                <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Coût Flotte Classique" fill="#94a3b8" />
                        <Bar dataKey="Coût Modèle ACS" fill="#059669" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <p className="text-xs text-center text-gray-400 mt-4">*Simulation indicative hors taxes</p>
            </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Prêt à optimiser vos déplacements ?</h2>
            <Link to="/contact">
                <Button variant="primary" className="text-lg px-8">Demander une étude personnalisée</Button>
            </Link>
        </div>

      </div>
    </div>
  );
};

export default Model;

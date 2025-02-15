import React, { useState } from 'react';
import { Users, Building2, ChevronRight, Calendar } from 'lucide-react';
import UserAuthForm from './Auth/user-signup-form';
import BusinessAuthForm from './Auth/business-auth-form';


const HomePage = () => {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="min-h-screen" >
      <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white text-center py-24" style={{
      backgroundImage: "url(/images/background_food.png)",
    }}>
        <h1 className="text-4xl font-bold mb-6">Connect Over Great Food</h1>
        <p className="text-xl mb-12 text-blue-100">Intégrer le groupes, meet new people, and discover amazing restaurants</p>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Button text="Continuer en tant qu'utilisateur" icon={<Users />} onClick={() => setActiveModal('user')} />
          <Button text="Continuer en tant qu'entrprise" icon={<Building2 />} onClick={() => setActiveModal('business')} bgColor="bg-blue-800" hoverColor="hover:bg-blue-900" textColor="text-white" />
        </div>
      </div>
      <FeatureSection />
      {activeModal=='user' && <UserAuthForm onClose={() => setActiveModal(null)} />}
      {activeModal=='business' && <BusinessAuthForm onClose={() => setActiveModal(null)} />}
    </div>
  );
};

const Button = ({ text, icon, onClick, bgColor = "bg-white", hoverColor = "hover:bg-blue-50", textColor = "text-blue-600" }) => (
  <button onClick={onClick} className={`${bgColor} ${textColor} ${hoverColor} px-6 py-4 rounded-lg flex items-center justify-center space-x-3 group`}> 
    {icon} <span className="font-medium">{text}</span> <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </button>
);

const FeatureSection = () => (
  <div className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold mb-12">Comment ça fonctionne</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <Feature title="Joindre une Table de réseautage" icon={<Users className="w-8 h-8 text-blue-600" />} text="Trouvez et intégrez des groupes dans vos restaurants préférés pour rencontrer de nouvelles personnes" />
        <Feature title="Entreprise ? Inscrivez votre restaurant pour réseauter" icon={<Building2 className="w-8 h-8 text-blue-600" />} text="Créez un profil entreprise et permettez l'organisation de repas sociaux" />
        <Feature title="Créer ses opportunités" icon={<Calendar className="w-8 h-8 text-blue-600" />} text="Créez vos opportunités et suivez facilement vos rendez-vous et sessions" />
      </div>
    </div>
  </div>
);

const Feature = ({ title, icon, text }) => (
  <div className="text-center">
    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{text}</p>
  </div>
);

export default HomePage;

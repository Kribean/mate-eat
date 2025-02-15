import React, { useState } from 'react';
import {Navbar} from '../base-components';
import SearchOptions from './SearchOptions';
import SearchResultsPage from './searchComp/SearchResultsPage';
import ChatRoomModal from '../ChatRoomModal';

const UserDashboard = () => {
  const [step, setStep] = useState(1);
  const [searchType, setSearchType] = useState('');
  const [searchCriteria, setSearchCriteria] = useState({ postalCode: '', professions: [] });
  const [selectedRestaurant,setSelectedRestaurant]=useState([])
  const [filteredRestaurants,setFilteredRestaurants]=useState([])

  const professions =
  [
    "Agriculture, pêche, chasse et espaces naturels" ,
    "Arts et arts du spectacle" ,
    "Banque, assurance, immobilier" ,
    "Commerce, vente et grande distribution" ,
    "Communication, médias et multimédia" ,
    "Construction, bâtiment et travaux publics" ,
    "Hôtellerie-restauration, tourisme, loisirs et animation" ,
    "Industrie" ,
    "Informatique et télécommunications" ,
    "Juridique" ,
    "Management et gestion des entreprises" ,
    "Santé" ,
    "Sciences humaines et sociales" ,
    "Secrétariat et assistanat" ,
    "Services à la personne et à la collectivité" ,
    "Transport et logistique" 
  ];
  const restaurants = [
    { id: 1, name: "Le Duplex", type: "French", address: "24 All. Jean Jaurès", postalCode: "31000" },
    { id: 2, name: "Sushi Master", type: "Japanese", address: "456 Oak St", postalCode: "75002" }
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar step={step} setStep={setStep} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {step === 1 ? (
          <SearchOptions {...{ searchType, setSearchType, searchCriteria, setSearchCriteria, handleSearchSubmit, professions }} />
        ) : (
          <>
            <SearchResultsPage filteredRestaurants={restaurants} setSelectedRestaurant={setSelectedRestaurant} />
            <ChatRoomModal />
            </>
        )}
      </main>
    </div>
  );
};

export default UserDashboard;

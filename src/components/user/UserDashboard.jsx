import React, { useState } from 'react';
import {Navbar} from '../base-components';
import SearchOptions from './SearchOptions';
import RestaurantList from './RestaurantList';
import SearchResultsPage from './searchComp/SearchResultsPage';

const UserDashboard = () => {
  const [step, setStep] = useState(1);
  const [searchType, setSearchType] = useState('');
  const [searchCriteria, setSearchCriteria] = useState({ postalCode: '', profession: '' });
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [showCreateTable, setShowCreateTable] = useState(false);

  const professions = ["Software Engineer", "Designer", "Marketing", "Finance", "Healthcare", "Education"];
  const restaurants = [
    { id: 1, name: "La Bella Italia", type: "Italian", address: "123 Main St", postalCode: "75001" },
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
            <SearchResultsPage filteredRestaurants={restaurants} setSelectedRestaurant={setSelectedRestaurant} setShowCreateTable={setShowCreateTable} />
        )}
      </main>
    </div>
  );
};

export default UserDashboard;

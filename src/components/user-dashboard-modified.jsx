import React, { useState } from 'react';
import { Calendar, Users, Clock, MapPin, Briefcase, Search, ArrowLeft } from 'lucide-react';

const UserDashboard = () => {
  const [step, setStep] = useState(1); // 1: Initial selection, 2: Restaurant selection
  const [searchType, setSearchType] = useState(''); // 'location' or 'profession'
  const [searchCriteria, setSearchCriteria] = useState({
    postalCode: '',
    profession: '',
    preferredTime: '',
    groupSize: ''
  });
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [showCreateTable, setShowCreateTable] = useState(false);

  const professions = [
    "Software Engineer",
    "Designer",
    "Marketing",
    "Finance",
    "Healthcare",
    "Education"
  ];

  const restaurants = [
    {
      id: 1,
      name: "La Bella Italia",
      type: "Italian",
      address: "123 Main St",
      postalCode: "75001",
      tables: [
        { profession: "Software Engineer", size: 4, time: "19:00" },
        { profession: "Marketing", size: 6, time: "20:00" }
      ]
    },
    {
      id: 2,
      name: "Sushi Master",
      type: "Japanese",
      address: "456 Oak St",
      postalCode: "75002",
      tables: [
        { profession: "Finance", size: 4, time: "19:30" },
        { profession: "Designer", size: 4, time: "20:30" }
      ]
    }
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const filteredRestaurants = restaurants.filter(restaurant => {
    if (searchType === 'location') {
      return restaurant.postalCode.includes(searchCriteria.postalCode);
    } else {
      return restaurant.tables.some(table => table.profession === searchCriteria.profession);
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              {step === 2 && (
                <button 
                  onClick={() => setStep(1)}
                  className="mr-4 text-gray-600 hover:text-gray-900 flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
              )}
              <span className="text-xl font-semibold">DineConnect</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">John Doe</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {step === 1 && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold">How would you like to find your table?</h1>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Location-based search */}
              <div 
                className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                  searchType === 'location' 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-blue-200'
                }`}
                onClick={() => setSearchType('location')}
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-blue-500" />
                  <h2 className="text-xl font-semibold">Search by Location</h2>
                </div>
                {searchType === 'location' && (
                  <form onSubmit={handleSearchSubmit} className="mt-4 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        value={searchCriteria.postalCode}
                        onChange={(e) => setSearchCriteria({...searchCriteria, postalCode: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Search Restaurants
                    </button>
                  </form>
                )}
              </div>

              {/* Profession-based search */}
              <div 
                className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                  searchType === 'profession' 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-blue-200'
                }`}
                onClick={() => setSearchType('profession')}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="w-6 h-6 text-blue-500" />
                  <h2 className="text-xl font-semibold">Join by Profession</h2>
                </div>
                {searchType === 'profession' && (
                  <form onSubmit={handleSearchSubmit} className="mt-4 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Professional Background
                      </label>
                      <select
                        value={searchCriteria.profession}
                        onChange={(e) => setSearchCriteria({...searchCriteria, profession: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      >
                        <option value="">Select profession</option>
                        {professions.map(prof => (
                          <option key={prof} value={prof}>{prof}</option>
                        ))}
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Find Tables
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">
                {searchType === 'location' 
                  ? `Restaurants in ${searchCriteria.postalCode}`
                  : `Tables for ${searchCriteria.profession}`}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRestaurants.map(restaurant => (
                <div key={restaurant.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{restaurant.name}</h3>
                    <p className="text-gray-600 mb-4">{restaurant.type}</p>
                    <div className="space-y-2 mb-4">
                      <p className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        {restaurant.address}, {restaurant.postalCode}
                      </p>
                    </div>
                    
                    {searchType === 'profession' && (
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Available Tables</h4>
                        {restaurant.tables
                          .filter(table => table.profession === searchCriteria.profession)
                          .map((table, idx) => (
                            <div key={idx} className="bg-gray-50 p-3 rounded-lg mb-2">
                              <p className="text-sm">
                                {table.size} seats · {table.time}
                              </p>
                            </div>
                          ))}
                      </div>
                    )}
                    
                    <div className="space-x-3">
                      <button
                        onClick={() => {
                          setSelectedRestaurant(restaurant);
                          setShowCreateTable(true);
                        }}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Create Table
                      </button>
                      {searchType === 'profession' && (
                        <button
                          className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          Join Table
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default UserDashboard;

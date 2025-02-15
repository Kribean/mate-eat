import React, { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { Filter } from 'lucide-react';

const SearchResultsPage = ({filteredRestaurants,activities, searchCriteria, setSearchCriteria}) => {

  const [expandedTables, setExpandedTables] = useState(new Set());
  const [showFilters, setShowFilters] = useState(false);

  const handleActivityChange = (activity) => {
    setSearchCriteria(prev => ({
      ...prev
      ,
      activities: prev.activities?.includes(activity)
        ? prev.activities.filter(p => p !== activity)
        : [...(prev.activities || []), activity]
    }));
  };

  const handleChangePostal = (e)=>{
    const regex =/^\d*$/;
    if(regex.test(e.target.value))
    {return setSearchCriteria({ ...searchCriteria, postalCode: e.target.value })}
  }

  const toggleTableParticipants = (tableId) => {
    setExpandedTables(prev => {
      const newSet = new Set(prev);
      newSet.has(tableId) ? newSet.delete(tableId) : newSet.add(tableId);
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* Filter Header */}
                <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Résultats de recherche</h2>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <Filter className="w-4 h-4" />
              Filtres
            </button>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
              <div className="grid md:grid-cols-2 gap-4">
                {/* Postal Code Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Code Postal
                  </label>
                  <input
                    type="text"
                    value={searchCriteria.postalCode}
                    onChange={(e) =>handleChangePostal(e) }
                    placeholder="Enter postal code"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Activities Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Activités
                  </label>
                  <div className="max-h-48 overflow-y-auto border border-gray-300 rounded-lg p-3">
                  {activities.map((activity) => (
                <label key={activity} className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded cursor-pointer">
                  <input
                    type="checkbox"
                    checked={searchCriteria.activities?.includes(activity) || false}
                    onChange={() => handleActivityChange(activity)}
                    className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-sm">{activity}</span>
                </label>
              ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Results Count */}
          <div className="text-sm text-gray-600">
            {filteredRestaurants.length} resultats trouvés
          </div>
        </div>




        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRestaurants.map(restaurant => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              expandedTables={expandedTables}
              toggleTableParticipants={toggleTableParticipants}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default SearchResultsPage;

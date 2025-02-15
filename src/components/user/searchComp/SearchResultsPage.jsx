import React, { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { Filter } from 'lucide-react';

const SearchResultsPage = ({filteredRestaurants}) => {

  const activities = [
    { code: "A", name: "Agriculture, pêche, chasse et espaces naturels" },
    { code: "B", name: "Arts et arts du spectacle" },
    { code: "C", name: "Banque, assurance, immobilier" },
    { code: "D", name: "Commerce, vente et grande distribution" },
    { code: "E", name: "Communication, médias et multimédia" },
    { code: "F", name: "Construction, bâtiment et travaux publics" },
    { code: "G", name: "Hôtellerie-restauration, tourisme, loisirs et animation" },
    { code: "H", name: "Industrie" },
    { code: "I", name: "Informatique et télécommunications" },
    { code: "J", name: "Juridique" },
    { code: "K", name: "Management et gestion des entreprises" },
    { code: "L", name: "Santé" },
    { code: "M", name: "Sciences humaines et sociales" },
    { code: "N", name: "Secrétariat et assistanat" },
    { code: "P", name: "Services à la personne et à la collectivité" },
    { code: "Q", name: "Transport et logistique" }
  ];
  const [expandedTables, setExpandedTables] = useState(new Set());
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    postalCode: '',
    selectedActivities: []
  });
  const [filteredResults, setFilteredResults] = useState(filteredRestaurants);


  const handleActivityToggle = (activityCode) => {
    setFilters(prev => ({
      ...prev,
      selectedActivities: prev.selectedActivities.includes(activityCode)
        ? prev.selectedActivities.filter(code => code !== activityCode)
        : [...prev.selectedActivities, activityCode]
    }));
  };

  useEffect(() => {
    let results = [...filteredRestaurants];

    if (filters.postalCode) {
      results = results.filter(restaurant => 
        restaurant.postalCode.startsWith(filters.postalCode)
      );
    }

    if (filters.selectedActivities.length > 0) {
      results = results.filter(restaurant => 
        restaurant.tables.some(table => 
          table.participants.some(participant => 
            filters.selectedActivities.includes(participant.activity)
          )
        )
      );
    }

    setFilteredResults(results);
  }, [filters, filteredRestaurants]);

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
            <h2 className="text-xl font-semibold">Search Results</h2>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
              <div className="grid md:grid-cols-2 gap-4">
                {/* Postal Code Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    value={filters.postalCode}
                    onChange={(e) => setFilters(prev => ({ ...prev, postalCode: e.target.value }))}
                    placeholder="Enter postal code"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Activities Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Activities
                  </label>
                  <div className="max-h-48 overflow-y-auto border border-gray-300 rounded-lg p-3">
                    {activities.map((activity) => (
                      <label
                        key={activity.code}
                        className="flex items-center space-x-2 hover:bg-gray-50 p-2 rounded cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={filters.selectedActivities.includes(activity.code)}
                          onChange={() => handleActivityToggle(activity.code)}
                          className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-sm">
                          {activity.code} - {activity.name}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Results Count */}
          <div className="text-sm text-gray-600">
            {filteredResults.length} results found
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

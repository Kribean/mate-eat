import React, { useState } from 'react';
import RestaurantCard from '../user/searchComp/RestaurantCard';
import { Navbar } from '../base-components';
import ChatRoomModal from '../ChatRoomModal';

const PresentielRestau = () => {
    const [filteredRestaurants] = useState([
        {
          id: 1,
          name: "Le Duplex",
          type: "French",
          address: "24 All. Jean Jaurès",
          postalCode: "31000",
          priceRange: "$$",
          placeType: "restaurant",
          availableTables: [
            {
              id: 1,
              time: "12:00",
              size: 4,
              description: "À la recherche de passionnés de technologie pour discuter d'idées de startups autour d'une authentique cuisine ! Ouvert à tous les niveaux d'expérience.",
              creator: {
                name: "Sarah Chen",
                profession: "Software Engineer"
              },
              participants: [
                { name: "Sarah Chen", profession: "Software Engineer" },
                { name: "Mike Ross", profession: "Product Manager" },
                { name: "Alex Kim", profession: "UX Designer" }
              ]
            },
            {
              id: 2,
              time: "12:30",
              size: 6,
              description: "Rencontre des professionnels du marketing – Partageons nos connaissances sur l'industrie et élargissons notre réseau tout en savourant un excellent repas !",
              creator: {
                name: "David Wilson",
                profession: "Marketing Director"
              },
              participants: [
                { name: "David Wilson", profession: "Marketing Director" },
                { name: "Emma Thompson", profession: "Content Strategist" }
              ]
            }
          ],
          images: ["/images/restaurant-img.png"]
        },
      ]);

  const [expandedTables, setExpandedTables] = useState(new Set());

  const toggleTableParticipants = (tableId) => {
    setExpandedTables(prev => {
      const newSet = new Set(prev);
      newSet.has(tableId) ? newSet.delete(tableId) : newSet.add(tableId);
      return newSet;
    });
  };

  return (
    <>
    <div className="min-h-screen bg-gray-50">
        <Navbar/>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
    <ChatRoomModal/>
    </>
  );
};

export default PresentielRestau;

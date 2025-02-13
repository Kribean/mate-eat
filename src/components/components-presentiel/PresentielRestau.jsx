import React, { useState } from 'react';
import RestaurantCard from '../user/searchComp/RestaurantCard';
import { Navbar } from '../base-components';

const PresentielRestau = () => {
    const [filteredRestaurants] = useState([
        {
          id: 1,
          name: "La Bella Italia",
          type: "Italian",
          address: "123 Main St",
          postalCode: "75001",
          priceRange: "$$",
          rating: 4.5,
          availableTables: [
            {
              id: 1,
              time: "18:00",
              size: 4,
              description: "Looking for fellow tech enthusiasts to discuss startup ideas over authentic Italian cuisine! Open to all experience levels.",
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
              time: "19:30",
              size: 6,
              description: "Marketing professionals meetup - Let's share industry insights and network while enjoying great food!",
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
  );
};

export default PresentielRestau;

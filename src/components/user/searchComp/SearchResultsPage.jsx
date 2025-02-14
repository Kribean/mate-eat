import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';

const SearchResultsPage = () => {
    const [filteredRestaurants] = useState([
        {
          id: 1,
          name: "Le Duplex",
          type: "Italian",
          address: "24 All. Jean Jaurès",
          postalCode: "31000",
          priceRange: "$$",
          rating: 4.5,
          availableTables: [
            {
              id: 1,
              time: "18:00",
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
        {
          id: 2,
          name: "Sushi Master",
          type: "Japanese",
          address: "456 Oak St",
          postalCode: "75002",
          priceRange: "$$$",
          rating: 4.8,
          availableTables: [
            {
              id: 1,
              time: "19:00",
              size: 4,
              description: "Creative minds dinner - Join us for an evening of design talk and amazing sushi!",
              creator: {
                name: "Lisa Park",
                profession: "Designer"
              },
              participants: [
                { name: "Lisa Park", profession: "Designer" },
                { name: "James Chen", profession: "Art Director" }
              ]
            }
          ],
          images: ["/images/restaurant-img.png"]
        },
        {
          id: 3,
          name: "Le Petit Bistro",
          type: "French",
          address: "789 Elm St",
          postalCode: "75003",
          priceRange: "$$$",
          rating: 4.7,
          availableTables: [
            {
              id: 1,
              time: "20:00",
              size: 6,
              description: "Writers and poets gathering - Let's discuss literature over fine French cuisine!",
              creator: {
                name: "Marie Laurent",
                profession: "Author"
              },
              participants: [
                { name: "Marie Laurent", profession: "Author" },
                { name: "John Smith", profession: "Poet" },
                { name: "Emily Brown", profession: "Editor" }
              ]
            }
          ],
          images: ["/images/restaurant-img.png"]
        },
        {
          id: 4,
          name: "Taco Fiesta",
          type: "Mexican",
          address: "321 Pine St",
          postalCode: "75004",
          priceRange: "$",
          rating: 4.3,
          availableTables: [
            {
              id: 1,
              time: "19:30",
              size: 8,
              description: "Casual networking dinner for entrepreneurs and freelancers!",
              creator: {
                name: "Carlos Rodriguez",
                profession: "Entrepreneur"
              },
              participants: [
                { name: "Carlos Rodriguez", profession: "Entrepreneur" },
                { name: "Sarah Lee", profession: "Freelance Developer" },
                { name: "Tom Wilson", profession: "Business Consultant" }
              ]
            }
          ],
          images: ["/images/restaurant-img.png"]
        },
        {
          id: 5,
          name: "The Green Garden",
          type: "Vegetarian",
          address: "567 Maple Ave",
          postalCode: "75005",
          priceRange: "$$",
          rating: 4.6,
          availableTables: [
            {
              id: 1,
              time: "18:30",
              size: 4,
              description: "Health and wellness professionals meetup - Let's discuss latest trends in nutrition!",
              creator: {
                name: "Amanda Green",
                profession: "Nutritionist"
              },
              participants: [
                { name: "Amanda Green", profession: "Nutritionist" },
                { name: "David Cooper", profession: "Fitness Trainer" }
              ]
            }
          ],
          images: ["/images/restaurant-img.png"]
        }
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

export default SearchResultsPage;

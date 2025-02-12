import React, { useState, useEffect } from 'react';
import { MapPin, Briefcase, Search, Filter, X, Clock, Users, ChevronDown, ArrowLeft, ChevronRight } from 'lucide-react';

const TableParticipants = ({ participants, isOpen, onToggle }) => {
  return (
    <div className="mt-2">
      <button
        onClick={onToggle}
        className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
      >
        {isOpen ? 'Hide' : 'Show'} participants ({participants.length})
        <ChevronDown className={`w-4 h-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="mt-2 space-y-2">
          {participants.map((participant, idx) => (
            <div key={idx} className="text-sm bg-gray-50 p-2 rounded">
              <p className="font-medium">{participant.name}</p>
              <p className="text-gray-600">{participant.profession}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const SearchResultsPage = () => {
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
      images: ["/api/placeholder/400/200"]
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
      images: ["/api/placeholder/400/200"]
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
      images: ["/api/placeholder/400/200"]
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
      images: ["/api/placeholder/400/200"]
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
      images: ["/api/placeholder/400/200"]
    }
  ]);

  // State for tracking which tables have expanded participant lists
  const [expandedTables, setExpandedTables] = useState(new Set());

  const toggleTableParticipants = (tableId) => {
    setExpandedTables(prev => {
      const newSet = new Set(prev);
      if (newSet.has(tableId)) {
        newSet.delete(tableId);
      } else {
        newSet.add(tableId);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Restaurant Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map(restaurant => (
            <div key={restaurant.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src={restaurant.images[0]}
                alt={restaurant.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">{restaurant.name}</h3>
                    <p className="text-gray-600">{restaurant.type}</p>
                  </div>
                  <span className="text-gray-600">{restaurant.priceRange}</span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <p className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    {restaurant.address}, {restaurant.postalCode}
                  </p>
                  <p className="text-sm text-gray-600">
                    ⭐ {restaurant.rating}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium mb-2">Available Tables</h4>
                  <div className="space-y-4">
                    {restaurant.availableTables.map((table) => (
                      <div key={table.id} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="w-4 h-4 text-gray-600" />
                            {table.time}
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Users className="w-4 h-4 text-gray-600" />
                            {table.participants.length}/{table.size}
                          </div>
                        </div>
                        
                        <div className="mb-2">
                          <p className="text-sm text-gray-800">{table.description}</p>
                        </div>
                        
                        <div className="text-sm text-gray-600 mb-2">
                          Created by: {table.creator.name} • {table.creator.profession}
                        </div>

                        <TableParticipants
                          participants={table.participants}
                          isOpen={expandedTables.has(table.id)}
                          onToggle={() => toggleTableParticipants(table.id)}
                        />

                        {table.participants.length < table.size && (
                          <button className="mt-3 w-full border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors text-sm">
                            Join Table
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Create New Table
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SearchResultsPage;

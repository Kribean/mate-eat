import React from 'react';
import { Navbar, FilterSection, RestaurantCard, Button } from './base-components';
import { Calendar, Users, Clock } from 'lucide-react';

const RestoDashboard = () => {
  const [selectedRestaurant, setSelectedRestaurant] = React.useState({
    name: "Sushi Master",
    type: "Japanese"
  });
  const [showCreateTable, setShowCreateTable] = React.useState(false);


  const CreateTableForm = () => (
    <div className="border rounded-lg p-6 bg-white shadow-sm space-y-4">
      <h3 className="text-lg font-semibold">Create a Table</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date and Time
          </label>
          <input
            type="datetime-local"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Number of Guests
          </label>
          <input
            type="number"
            min="1"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>
      
      <div className="pt-4">
        <Button variant="outline" className="w-full mb-4">
          Advanced Options
        </Button>
        <Button className="w-full">
          Create Table
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar userName="John Doe" />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {selectedRestaurant && (
          <div className="mb-8 bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold">{selectedRestaurant.name}</h2>
                <p className="text-gray-600">{selectedRestaurant.type}</p>
              </div>
              <div className="space-x-4">
                <Button onClick={() => setShowCreateTable(true)}>
                  Create Table
                </Button>
                <Button variant="outline">
                  Intégrer le groupe
                </Button>
              </div>
            </div>
            
            {showCreateTable && <div className="mt-6"><CreateTableForm /></div>}
          </div>
        )}
      </main>
    </div>
  );
};

export default RestoDashboard;

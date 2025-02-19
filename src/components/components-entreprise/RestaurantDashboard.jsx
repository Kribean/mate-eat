import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import RestaurantList from './RestaurantList';
import RestaurantForm from './RestaurantForm';
import RestaurantCreationForm from './RestaurantCreationForm';

const RestaurantDashboard = () => {
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      businessName: "Le Duplex",
      managerName: "John Doe",
      address: "24 All. Jean Jaurès",
      postalCode: "31000",
      foodType: "French",
      bookingUrl: "https://www.google.com/maps/reserve/v/dine/c/BZyjhyELQHg",
      bookings: [
        { date: "2025-02-11", guests: [
          { name: "Alice Smith", time: "12:00", party: 4 },
          { name: "Bob Johnson", time: "12:30", party: 2 }
        ]}
      ]
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [showForm2, setShowForm2] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handleAddRestaurant = (restaurantData) => {
      setRestaurants([...restaurants, { ...restaurantData, id: restaurants.length + 1, bookings: [] }]);
    setShowForm(false);
    setSelectedRestaurant(null);
  };

  const handleModifyRestaurant = (restaurantData) => {

      setRestaurants(restaurants.map(r => r.id === selectedRestaurant.id ? { ...restaurantData, id: r.id, bookings: r.bookings } : r));

    setShowForm2(false);
    setSelectedRestaurant(null);
  };

  const handleEdit = (restaurant) => {
    console.log("hello",restaurant)
    setSelectedRestaurant(restaurant);
    setShowForm2(true);
  };


  const handleDelete = (id) => {
    setRestaurants(restaurants.filter(r => r.id !== id));
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Restaurant Dashboard</h1>
        <button 
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <PlusCircle className="w-4 h-4" />
          Ajouter Restaurant
        </button>
      </div>

      {showForm && (
        <RestaurantCreationForm 
          onSubmit={handleAddRestaurant} 
          onClose={() => setShowForm(false)} 
        />
      )}
            {showForm2 && (
        <RestaurantForm
        selectedRestaurant={selectedRestaurant}
          onSubmit={handleModifyRestaurant} 
          onClose={() => setShowForm2(false)} 
        />
      )}
      <RestaurantList restaurants={restaurants} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default RestaurantDashboard;
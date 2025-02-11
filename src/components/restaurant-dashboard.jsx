import React, { useState } from 'react';
import { PlusCircle, Pencil, Trash2, Calendar, X } from 'lucide-react';

const RestaurantDashboard = () => {
  // Sample data structure for restaurants
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      businessName: "Italian Delight",
      managerName: "John Doe",
      address: "123 Main St",
      postalCode: "12345",
      foodType: "Italian",
      bookingUrl: "https://booking.italiandelight.com",
      bookings: [
        { date: "2025-02-11", guests: [
          { name: "Alice Smith", time: "12:00", party: 4 },
          { name: "Bob Johnson", time: "12:30", party: 2 }
        ]}
      ]
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [formData, setFormData] = useState({
    businessName: "",
    managerName: "",
    address: "",
    postalCode: "",
    foodType: "",
    bookingUrl: ""
  });

  const foodTypes = ["Italian", "Japanese", "Mexican", "Indian", "French"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedRestaurant) {
      setRestaurants(restaurants.map(r => 
        r.id === selectedRestaurant.id ? { ...formData, id: r.id, bookings: r.bookings } : r
      ));
    } else {
      setRestaurants([...restaurants, { 
        ...formData, 
        id: restaurants.length + 1,
        bookings: []
      }]);
    }
    setShowForm(false);
    setSelectedRestaurant(null);
    setFormData({
      businessName: "",
      managerName: "",
      address: "",
      postalCode: "",
      foodType: "",
      bookingUrl: ""
    });
  };

  const handleEdit = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setFormData(restaurant);
    setShowForm(true);
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
          Add Restaurant
        </button>
      </div>

      {/* Restaurant Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">
                {selectedRestaurant ? 'Edit Restaurant' : 'Add New Restaurant'}
              </h2>
              <button 
                onClick={() => {
                  setShowForm(false);
                  setSelectedRestaurant(null);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business Name
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Manager's Name
                  </label>
                  <input
                    type="text"
                    value={formData.managerName}
                    onChange={(e) => setFormData({...formData, managerName: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business Address
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    value={formData.postalCode}
                    onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Type of Food Served
                  </label>
                  <select
                    value={formData.foodType}
                    onChange={(e) => setFormData({...formData, foodType: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select food type</option>
                    {foodTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Booking URL (Optional)
                  </label>
                  <input
                    type="url"
                    value={formData.bookingUrl}
                    onChange={(e) => setFormData({...formData, bookingUrl: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setSelectedRestaurant(null);
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  {selectedRestaurant ? 'Update' : 'Create'} Restaurant
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Restaurants List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">{restaurant.businessName}</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(restaurant)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <Pencil className="w-4 h-4 text-gray-600" />
                  </button>
                  <button
                    onClick={() => handleDelete(restaurant.id)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </button>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <p><span className="font-medium">Manager:</span> {restaurant.managerName}</p>
                <p><span className="font-medium">Address:</span> {restaurant.address}</p>
                <p><span className="font-medium">Postal Code:</span> {restaurant.postalCode}</p>
                <p><span className="font-medium">Cuisine:</span> {restaurant.foodType}</p>
                {restaurant.bookingUrl && (
                  <p>
                    <span className="font-medium">Booking:</span>{' '}
                    <a 
                      href={restaurant.bookingUrl}
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book Now
                    </a>
                  </p>
                )}
              </div>

              {/* Today's Bookings */}
              <div className="mt-4">
                <h4 className="text-md font-semibold flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4" />
                  Today's Bookings
                </h4>
                <div className="space-y-2">
                  {restaurant.bookings[0]?.guests.map((booking, index) => (
                    <div key={index} className="bg-gray-50 p-2 rounded text-sm">
                      {booking.time} - {booking.name} (Party of {booking.party})
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantDashboard;

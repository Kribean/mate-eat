import { MapPin } from 'lucide-react';

const RestaurantCard = ({ restaurant, setSelectedRestaurant, setShowCreateTable }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6">
      <h3 className="text-xl font-semibold mb-2">{restaurant.name}</h3>
      <p className="text-gray-600 mb-4">{restaurant.type}</p>
      <p className="flex items-center gap-2 text-sm text-gray-600">
        <MapPin className="w-4 h-4" />
        {restaurant.address}, {restaurant.postalCode}
      </p>
      <div className="mt-4 space-x-3">
        <button
          onClick={() => {
            setSelectedRestaurant(restaurant);
            setShowCreateTable(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Create Table
        </button>
      </div>
    </div>
  );
};

export default RestaurantCard;

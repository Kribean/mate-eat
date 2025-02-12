import RestaurantCard from './RestaurantCard';

const RestaurantList = ({ filteredRestaurants, setSelectedRestaurant, setShowCreateTable }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredRestaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          restaurant={restaurant}
          setSelectedRestaurant={setSelectedRestaurant}
          setShowCreateTable={setShowCreateTable}
        />
      ))}
    </div>
  );
};

export default RestaurantList;

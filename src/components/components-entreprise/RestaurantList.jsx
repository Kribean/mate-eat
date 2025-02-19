import React from 'react';
import RestaurantCard from './RestaurantCard';

const RestaurantList = ({ restaurants, onEdit, onDelete }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default RestaurantList;
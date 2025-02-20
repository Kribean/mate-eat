import React from 'react';
import RestaurantCardEntre from './RestaurantCardEntre';

const RestaurantList = ({ restaurants, onEdit, onDelete }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {restaurants?.map((restaurant) => (
        <RestaurantCardEntre key={restaurant._id} restaurant={restaurant} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default RestaurantList;
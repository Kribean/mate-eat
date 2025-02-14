import React from 'react';
import { MapPin } from 'lucide-react';
import AvailableTable from './AvailableTable';
import CreateGroupModal from '../../CreateGroupModal';

const RestaurantCard = ({ restaurant, expandedTables, toggleTableParticipants }) => {
  return (
    <>
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
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

        <p className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <MapPin className="w-4 h-4" />
          {restaurant.address}, {restaurant.postalCode}
        </p>

        <p className="text-sm text-gray-600 mb-4">⭐ {restaurant.rating}</p>

        <h4 className="font-medium mb-2">Groupes disponibles</h4>
        <div className="space-y-4">
          {restaurant.availableTables.map((table) => (
            <AvailableTable
              key={table.id}
              table={table}
              isExpanded={expandedTables.has(table.id)}
              toggleExpand={() => toggleTableParticipants(table.id)}
            />
          ))}
        </div>
        <CreateGroupModal restaurant={restaurant}/>
      </div>
    </div>
    </>
  );
};

export default RestaurantCard;

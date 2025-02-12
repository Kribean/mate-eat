import React from 'react';
import { Clock, Users } from 'lucide-react';
import TableParticipants from './TableParticipants';

const AvailableTable = ({ table, isExpanded, toggleExpand }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
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

      <p className="text-sm text-gray-800 mb-2">{table.description}</p>
      <p className="text-sm text-gray-600 mb-2">
        Created by: {table.creator.name} • {table.creator.profession}
      </p>

      <TableParticipants
        participants={table.participants}
        isOpen={isExpanded}
        onToggle={toggleExpand}
      />

      {table.participants.length < table.size && (
        <button className="mt-3 w-full border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors text-sm">
          Join Table
        </button>
      )}
    </div>
  );
};

export default AvailableTable;
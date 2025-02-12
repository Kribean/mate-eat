import React from 'react';
import { ChevronDown } from 'lucide-react';

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

export default TableParticipants;

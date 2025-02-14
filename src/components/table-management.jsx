import React, { useState } from 'react';
import { Calendar, Clock, Users, MapPin } from 'lucide-react';

const JoinTableModal = ({ onClose, session }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <h3 className="text-xl font-semibold mb-4">Intégrer le groupe at {session.restaurantName}</h3>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Calendar className="w-5 h-5 text-gray-500 mt-1" />
            <div>
              <p className="font-medium">Date & Time</p>
              <p className="text-gray-600">{session.datetime}</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Users className="w-5 h-5 text-gray-500 mt-1" />
            <div>
              <p className="font-medium">Available Seats</p>
              <p className="text-gray-600">{session.availableSeats} seats left</p>
            </div>
          </div>

          {session.description && (
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-medium mb-1">Session Description</p>
              <p className="text-gray-600 text-sm">{session.description}</p>
            </div>
          )}

          {session.preferredProfiles && (
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="font-medium mb-1">Preferred Guest Profiles</p>
              <p className="text-gray-600 text-sm">{session.preferredProfiles}</p>
            </div>
          )}

          <div className="flex gap-3 mt-6">
            <button 
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
              onClick={() => {
                // Handle join logic
                onClose();
              }}
            >
              Confirm Join
            </button>
            <button 
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AppointmentsPage = () => {
  const [filter, setFilter] = useState('upcoming'); // 'upcoming' or 'past'
  
  // Example appointments data
  const appointments = [
    {
      id: 1,
      restaurantName: "Le Duplex",
      datetime: "2025-02-15 19:30",
      status: "upcoming",
      guests: 4,
      address: "24 All. Jean Jaurès, 31000 Paris",
      type: "Italian"
    },
    {
      id: 3,
      restaurantName: "Le Duplex",
      datetime: "2025-02-15 19:30",
      status: "upcoming",
      guests: 4,
      address: "24 All. Jean Jaurès, 31000 Paris",
      type: "Italian"
    },
    {
      id: 2,
      restaurantName: "Sushi Master",
      datetime: "2025-02-10 20:00",
      status: "past",
      guests: 3,
      address: "456 Oak St, 75002 Paris",
      type: "Japanese"
    }
  ];

  const filteredAppointments = appointments.filter(app => app.status === filter);

  const AppointmentCard = ({ appointment }) => (
    <div className="bg-white rounded-lg shadow-sm border p-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold text-lg">{appointment.restaurantName}</h3>
          <p className="text-gray-600">{appointment.type}</p>
        </div>
        {appointment.status === 'upcoming' && (
          <button 
            className="text-red-600 text-sm hover:text-red-700"
            onClick={() => {/* Handle cancellation */}}
          >
            Cancel Booking
          </button>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex items-center text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{appointment.datetime}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <Users className="w-4 h-4 mr-2" />
          <span>{appointment.guests} guests</span>
        </div>

        <div className="flex items-center text-gray-600">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{appointment.address}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Mes rendez-vous</h1>

        <div className="bg-white rounded-lg shadow-sm p-1 mb-6 inline-flex">
          <button
            className={`px-4 py-2 rounded-md ${
              filter === 'upcoming' 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => setFilter('upcoming')}
          >
            Upcoming
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              filter === 'past' 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => setFilter('past')}
          >
            Past
          </button>
        </div>

        <div className="space-y-4">
          {filteredAppointments.map(appointment => (
            <AppointmentCard key={appointment.id} appointment={appointment} />
          ))}
          
          {filteredAppointments.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No {filter} appointments found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentsPage;

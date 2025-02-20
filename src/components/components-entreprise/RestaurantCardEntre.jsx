import React, { useRef, useState } from 'react';
import { Pencil, Trash2, Calendar, Printer, Download, Mail, X } from 'lucide-react';
import { QRCodeCanvas } from 'qrcode.react';
import html2canvas from 'html2canvas';

const RestaurantCardEntre = ({ restaurant, onEdit, onDelete }) => {
  const [booking,setBooking]=useState([])
  const flyerRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  const handleDownload = async (format) => {
    if (!flyerRef.current) return;
    const canvas = await html2canvas(flyerRef.current);
    const dataUrl = canvas.toDataURL(`image/${format.toLowerCase()}`);
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = `flyer_${restaurant.businessName}.${format.toLowerCase()}`;
    link.click();
  };


  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">{restaurant.businessName}</h3>
          <div className="flex gap-2">
            <button onClick={() => onEdit(restaurant)} className="p-1 hover:bg-gray-100 rounded">
              <Pencil className="w-4 h-4 text-gray-600" />
            </button>
            <button onClick={() => onDelete(restaurant._id)} className="p-1 hover:bg-gray-100 rounded">
              <Trash2 className="w-4 h-4 text-red-600" />
            </button>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p><span className="font-medium">Manager:</span> {restaurant.managerName}</p>
          <p><span className="font-medium">Address:</span> {restaurant?.businessAddress}</p>
          <p><span className="font-medium">Postal Code:</span> {restaurant.postalCode}</p>
          <p><span className="font-medium">Cuisine:</span> {restaurant?.typeOfFoodServed}</p>
          {restaurant.bookingUrl && (
            <p>
              <span className="font-medium">Booking:</span> <a href={restaurant?.bookingUrl} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Book Now</a>
            </p>
          )}
        </div>
        <div className="mt-4">
          <h4 className="text-md font-semibold flex items-center gap-2 mb-2">
            <Calendar className="w-4 h-4" /> Réservations du jour
          </h4>
          <div className="space-y-2">
            {/* {restaurant.bookings[0]?.guests.map((booking, index) => (
              <div key={index} className="bg-gray-50 p-2 rounded text-sm">
                {booking.time} - {booking.name} (Party of {booking.party})
              </div>
            ))} */}
          </div>
        </div>
        <div className="mt-4 border-t pt-4">
          <button 
            onClick={() => setShowModal(true)}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            <Printer className="w-4 h-4" />
            Generate Flyer
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-lg p-6 relative">
            <button 
              onClick={() => {
                setShowModal(false);
              }}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6" ref={flyerRef}>
                <div className="flex flex-col items-center justify-center text-center space-y-6">
                  <h2 className="text-2xl font-bold">Jirani</h2>
                  <p className="text-xl font-bold">Un scan suffit pour réseauter le temps d’un repas </p>
                  <div className="flex justify-center">
                    <QRCodeCanvas value={`http://jirani.com/${restaurant.id}`} />
                  </div>
                  <div className="text-lg">
                    <p className="font-semibold">{restaurant.businessName}</p>
                    <p>{restaurant.address}</p>
                    <p>{restaurant.postalCode}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                  <button onClick={() => handleDownload('PNG')} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <Download className="w-4 h-4" />
                    PNG
                  </button>
                  <button onClick={() => handleDownload('JPG')} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <Download className="w-4 h-4" />
                    JPG
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantCardEntre;

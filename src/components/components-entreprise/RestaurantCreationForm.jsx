import React, { useState } from 'react';
import { X } from 'lucide-react';

const RestaurantCreationForm = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    businessName: "",
    managerName: "",
    address: "",
    postalCode: "",
    foodType: "",
    bookingUrl: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData.businessName,
    formData.address,
    formData.postalCode,
    formData.foodType,
    formData.bookingUrl
    );
    setFormData({
      businessName: "",
      managerName: "",
      address: "",
      postalCode: "",
      foodType: "",
      bookingUrl: ""
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Ajouter un Restaurant</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Nom du restaurant" value={formData.businessName} onChange={(e) => setFormData({ ...formData, businessName: e.target.value })} required className="w-full p-2 border rounded" />
          <input type="text" placeholder="Nom du gérant" value={formData.managerName} onChange={(e) => setFormData({ ...formData, managerName: e.target.value })} required className="w-full p-2 border rounded" />
          <input type="text" placeholder="Adresse" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} required className="w-full p-2 border rounded" />
          <input type="text" placeholder="Code postal" value={formData.postalCode} onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })} required className="w-full p-2 border rounded" />
          <input type="text" placeholder="Type de cuisine" value={formData.foodType} onChange={(e) => setFormData({ ...formData, foodType: e.target.value })} required className="w-full p-2 border rounded" />
          <input type="url" placeholder="URL de réservation" value={formData.bookingUrl} onChange={(e) => setFormData({ ...formData, bookingUrl: e.target.value })} className="w-full p-2 border rounded" />
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 border rounded">Annuler</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Créer</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RestaurantCreationForm;
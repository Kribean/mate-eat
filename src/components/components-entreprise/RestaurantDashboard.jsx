"use client"
import React, { useEffect, useState } from 'react';
import { PlusCircle } from 'lucide-react';
import RestaurantList from './RestaurantList';
import RestaurantForm from './RestaurantForm';
import RestaurantCreationForm from './RestaurantCreationForm';
import { getInLocal } from '@/services/userFct';
import { useRouter } from 'next/navigation';
import { createRestoByCompanyId, deleteRestoById, getAllRestoByCompanyId } from '@/services/restaurant_services';


const RestaurantDashboardEntre = () => {
  const router = useRouter()
  const [restaurants, setRestaurants] = useState([]);
  const [userDetail,setUserDetail]=useState()
  const [showForm, setShowForm] = useState(false);
  const [showForm2, setShowForm2] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);


  useEffect(()=>{
    const user = getInLocal()
    setUserDetail(user)
    if(!user || user?.type!=="company")
    {
      router.push("/")
    }else{
      getAllRestoByCompanyId(user._id).then((data)=>{
        if(data)
          {
            setRestaurants(data)
          }
      })

    }
  },[])
  const handleAddRestaurant = (businessName,
    businessAddress,
    postalCode,
    typeOfFoodServed,
    bookingURL) => {
    createRestoByCompanyId(businessName,
      userDetail._id,
      businessAddress,
      postalCode,
      typeOfFoodServed,
      bookingURL)
      .then(() => {
        return getAllRestoByCompanyId(userDetail._id); // Récupérer les nouveaux restaurants
      })
      .then((updatedRestaurants) => {
        setRestaurants(updatedRestaurants); // Mettre à jour l'état
      })
      .catch((error) => {
        console.error("Erreur lors de l'ajout du restaurant :", error);
      });
    setShowForm(false);
    setSelectedRestaurant(null);
  };

  const handleModifyRestaurant = (restaurantData) => {

      // setRestaurants(restaurants?.map(r => r.?id === selectedRestaurant.id ? { ...restaurantData, id: r.id, bookings: r.bookings } : r));

    setShowForm2(false);
    setSelectedRestaurant(null);
  };

  const handleEdit = (restaurant) => {
    console.log("hello",restaurant)
    setSelectedRestaurant(restaurant);
    setShowForm2(true);
  };


  const handleDelete = (id) => {
    deleteRestoById(id)
      .then(() => {
        return getAllRestoByCompanyId(userDetail._id); // Récupérer les nouveaux restaurants
      })
      .then((updatedRestaurants) => {
        setRestaurants(updatedRestaurants); // Mettre à jour l'état
      })
      .catch((error) => {
        console.error("Erreur lors de l'ajout du restaurant :", error);
      });
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Restaurant Dashboard</h1>
        <button 
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <PlusCircle className="w-4 h-4" />
          Ajouter Restaurant
        </button>
      </div>

      {showForm && (
        <RestaurantCreationForm 
          onSubmit={handleAddRestaurant} 
          onClose={() => setShowForm(false)} 
        />
      )}
            {showForm2 && (
        <RestaurantForm
        selectedRestaurant={selectedRestaurant}
          onSubmit={handleModifyRestaurant} 
          onClose={() => setShowForm2(false)} 
        />
      )}
      <RestaurantList restaurants={restaurants} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default RestaurantDashboardEntre;
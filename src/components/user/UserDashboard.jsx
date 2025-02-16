import React, { useEffect, useState } from 'react';
import {Navbar} from '../base-components';
import SearchOptions from './SearchOptions';
import SearchResultsPage from './searchComp/SearchResultsPage';
import ChatRoomModal from '../ChatRoomModal';

const UserDashboard = () => {
  const [step, setStep] = useState(1);
  const [searchType, setSearchType] = useState('');
  const [searchCriteria, setSearchCriteria] = useState({ postalCode: '', activities: [] });
  const [selectedRestaurant,setSelectedRestaurant]=useState([])
  const [filteredRestaurants,setFilteredRestaurants]=useState([])

  const activities =
  [
    "Agriculture, pêche, chasse et espaces naturels" ,
    "Arts et arts du spectacle" ,
    "Banque, assurance, immobilier" ,
    "Commerce, vente et grande distribution" ,
    "Communication, médias et multimédia" ,
    "Construction, bâtiment et travaux publics" ,
    "Hôtellerie-restauration, tourisme, loisirs et animation" ,
    "Industrie" ,
    "Informatique et télécommunications" ,
    "Juridique" ,
    "Management et gestion des entreprises" ,
    "Santé" ,
    "Sciences humaines et sociales" ,
    "Secrétariat et assistanat" ,
    "Services à la personne et à la collectivité" ,
    "Transport et logistique" 
  ];
  const restaurants = [
    {
      id: 1,
      name: "Le Duplex",
      type: "Italian",
      address: "24 All. Jean Jaurès",
      postalCode: "31000",
      priceRange: "$$",
      placeType: "restaurant",
      availableTables: [
        {
          id: 1,
          time: "18:00",
          size: 4,
          description: "À la recherche de passionnés de technologie pour discuter d'idées de startups autour d'une authentique cuisine ! Ouvert à tous les niveaux d'expérience.",
          creator: {
            name: "Sarah Chen",
            profession: "Software Engineer"
          },
          participants: [
            { name: "Sarah Chen", profession: "Software Engineer" },
            { name: "Mike Ross", profession: "Product Manager" },
            { name: "Alex Kim", profession: "UX Designer" }
          ]
        },
        {
          id: 2,
          time: "19:30",
          size: 6,
          description: "Marketing professionals meetup - Let's share industry insights and network while enjoying great food!",
          creator: {
            name: "David Wilson",
            profession: "Marketing Director"
          },
          participants: [
            { name: "David Wilson", profession: "Marketing Director" },
            { name: "Emma Thompson", profession: "Content Strategist" }
          ]
        }
      ],
      images: ["/images/restaurant-img.png"]
    },
    {
      id: 2,
      name: "Sushi Master",
      type: "Japanese",
      address: "456 Oak St",
      postalCode: "75002",
      priceRange: "$$$",
      placeType: "Lieu public",
      availableTables: [
        {
          id: 1,
          time: "19:00",
          size: 4,
          description: "Creative minds dinner - Join us for an evening of design talk and amazing sushi!",
          creator: {
            name: "Lisa Park",
            activities:["Transport et logistique"],
            profession: "Designer"
          },
          participants: [
            { name: "Lisa Park",activities:["Transport et logistique"], profession: "Designer" },
            { name: "James Chen",activities:["Transport et logistique"], profession: "Art Director" }
          ]
        }
      ],
      images: ["/images/restaurant-img.png"]
    },
    {
      id: 3,
      name: "Le Petit Bistro",
      type: "French",
      address: "789 Elm St",
      postalCode: "75003",
      priceRange: "$$$",
      rating: 4.7,
      availableTables: [
        {
          id: 1,
          time: "20:00",
          size: 6,
          description: "Writers and poets gathering - Let's discuss literature over fine French cuisine!",
          creator: {
            name: "Marie Laurent",
            activities:["Transport et logistique"],
            profession: "Author"
          },
          participants: [
            { name: "Marie Laurent", profession: "Author",activities:["Transport et logistique"], },
            { name: "John Smith", profession: "Poet",activities:["Transport et logistique"], },
            { name: "Emily Brown", profession: "Editor",activities:["Transport et logistique"], }
          ]
        }
      ],
      images: ["/images/restaurant-img.png"]
    },
    {
      id: 4,
      name: "Taco Fiesta",
      type: "Mexican",
      address: "321 Pine St",
      postalCode: "75004",
      priceRange: "$",
      placeType: "restaurant",
      availableTables: [
        {
          id: 1,
          time: "19:30",
          size: 8,
          description: "Casual networking dinner for entrepreneurs and freelancers!",
          creator: {
            name: "Carlos Rodriguez",
            activities:["Transport et logistique"],
            profession: "Entrepreneur"
          },
          participants: [
            { name: "Carlos Rodriguez",activities:["Transport et logistique"], profession: "Entrepreneur" },
            { name: "Sarah Lee",activities:["Transport et logistique"], profession: "Freelance Developer" },
            { name: "Tom Wilson",activities:["Transport et logistique"], profession: "Business Consultant" }
          ]
        }
      ],
      images: ["/images/restaurant-img.png"]
    },
    {
      id: 5,
      name: "The Green Garden",
      type: "Vegetarian",
      address: "567 Maple Ave",
      postalCode: "75005",
      priceRange: "$$",
      placeType: "Espace partagé",
      availableTables: [
        {
          id: 1,
          time: "18:30",
          size: 4,
          description: "Health and wellness professionals meetup - Let's discuss latest trends in nutrition!",
          creator: {
            name: "Amanda Green",
            activities:["Transport et logistique"],
            profession: "Nutritionist"
          },
          participants: [
            { name: "Amanda Green",activities:["Transport et logistique"], profession: "Nutritionist" },
            { name: "David Cooper",activities:["Transport et logistique"], profession: "Fitness Trainer" }
          ]
        }
      ],
      images: ["/images/restaurant-img.png"]
    }
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  useEffect(()=>{
    if(searchCriteria.postalCode.length==0&&searchCriteria.activities.length==0)
    {
      setFilteredRestaurants(restaurants)
    }else if(searchCriteria.activities.length==0){
      const restos = restaurants
      .filter(r => 
          r.postalCode.length === searchCriteria.postalCode.length && 
          r.postalCode[0] === searchCriteria.postalCode[0]
      )
      .sort((a, b) => 
          Math.abs(parseInt(a.postalCode) - parseInt(searchCriteria.postalCode)) - 
          Math.abs(parseInt(b.postalCode) - parseInt(searchCriteria.postalCode))
      );
      setFilteredRestaurants(restos.length===0?restaurants:restos)
    }else if(searchCriteria.postalCode.length==0){
      const x0 = restaurants.filter(restaurant => 
        restaurant.availableTables.some(table =>
            // Vérifier si le créateur a une activité dans y
            (table.creator.activities && table.creator.activities.some(activity => searchCriteria.activities.includes(activity))) ||
            // Vérifier si un participant a une activité dans y
            table.participants.some(participant => 
                participant.activities && participant.activities.some(activity => searchCriteria.activities.includes(activity))
            )
        )
    );
    setFilteredRestaurants(x0.length===0?restaurants:x0)
    }else{
      const restaurants_filter = restaurants
      .filter(r => 
          r.postalCode.length === searchCriteria.postalCode.length && 
          r.postalCode[0] === searchCriteria.postalCode[0]
      )
      .sort((a, b) => 
          Math.abs(parseInt(a.postalCode) - parseInt(searchCriteria.postalCode)) - 
          Math.abs(parseInt(b.postalCode) - parseInt(searchCriteria.postalCode))
      );
      restaurants_filter.filter(restaurant => 
        restaurant.availableTables.some(table =>
            // Vérifier si le créateur a une activité dans y
            (table.creator.activities && table.creator.activities.some(activity => searchCriteria.activities.includes(activity))) ||
            // Vérifier si un participant a une activité dans y
            table.participants.some(participant => 
                participant.activities && participant.activities.some(activity => searchCriteria.activities.includes(activity))
            )
        )
    );
    setFilteredRestaurants(restaurants_filter)
    }
    
  },[searchCriteria])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar step={step} setStep={setStep} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {step === 1 ? (
          <SearchOptions {...{ searchType, setSearchType, searchCriteria, setSearchCriteria, handleSearchSubmit, activities }} />
        ) : (
          <>
            <SearchResultsPage 
            filteredRestaurants={filteredRestaurants} 
            setSelectedRestaurant={setSelectedRestaurant}
            activities={activities}
            searchCriteria={searchCriteria}
            setSearchCriteria={setSearchCriteria} />
            <ChatRoomModal />
            </>
        )}
      </main>
    </div>
  );
};

export default UserDashboard;

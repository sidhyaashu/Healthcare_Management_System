import React from 'react';

// Sample hospital data (you can replace this with your actual data)
const hospitals = [
  {
    id: 1,
    name: "City Hospital",
    address: "123 Main St, Cityville",
    phone: "123-456-7890",
    distance: "2.1 miles away",
    rating: "4.5",
    services: ["Emergency", "Outpatient", "Surgery"],
    website: "www.cityhospital.com",
  },
  {
    id: 2,
    name: "HealthCare Center",
    address: "456 Elm St, Cityville",
    phone: "987-654-3210",
    distance: "3.4 miles away",
    rating: "4.0",
    services: ["General Practice", "Lab Services", "Pediatrics"],
    website: "www.healthcarecenter.com",
  },
  // Add more hospitals as needed
];

const HospitalCard = ({ hospital }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-lg font-semibold">{hospital.name}</h2>
      <p className="text-gray-600">{hospital.address}</p>
      <p className="text-gray-600">Phone: {hospital.phone}</p>
      <p className="text-gray-600">{hospital.distance}</p>
      <p className="text-gray-600">Rating: {hospital.rating} ⭐</p>
      <p className="text-gray-600">Services: {hospital.services.join(', ')}</p>
      <p className="text-gray-600">
        Website: <a href={`https://${hospital.website}`} className="text-blue-500 underline">{hospital.website}</a>
      </p>
    </div>
  );
};

const MapPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-120">
      {/* Map Section */}
      <div className="flex-1 h-120 bg-gray-200">
        <img 
          src='https://wallpapercave.com/wp/wp6009504.jpg' 
          alt="Map"
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Hospital Details Section */}
      <div className="flex-none w-full md:w-1/3 p-4 overflow-y-auto">
        <h1 className="text-xl font-semibold mb-4">Nearest Hospitals</h1>
        {hospitals.map((hospital) => (
          <HospitalCard key={hospital.id} hospital={hospital} />
        ))}
      </div>
    </div>
  );
};

export default MapPage;

import React, { useState } from 'react';

// Sample hospital data (you can replace this with your actual data)
const hospitals = [
    {
      id: 1,
      name: "City Hospital",
      address: "123 Main St, Cityville",
      phone: "123-456-7890",
      distance: "2.1 miles away",
      rating: "4.5",
      services: ["Emergency", "Outpatient", "Surgery", "Pediatrics"],
      website: "www.cityhospital.com",
      image: "https://via.placeholder.com/150", // Placeholder image URL
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
      image: "https://via.placeholder.com/150", // Placeholder image URL
    },
    {
      id: 3,
      name: "Specialty Care Clinic",
      address: "789 Oak St, Cityville",
      phone: "555-123-4567",
      distance: "1.2 miles away",
      rating: "4.8",
      services: ["Specialty Care", "Nutrition and Dietetics", "Telehealth Services"],
      website: "www.specialtycareclinic.com",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Women's Health Institute",
      address: "321 Maple St, Cityville",
      phone: "555-987-6543",
      distance: "4.5 miles away",
      rating: "4.7",
      services: ["Women's Health", "Pediatrics", "General Practice"],
      website: "www.womenshealthinstitute.com",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Geriatrics Care Center",
      address: "654 Pine St, Cityville",
      phone: "555-555-1212",
      distance: "2.9 miles away",
      rating: "4.3",
      services: ["Geriatrics", "Rehabilitative Services", "Palliative Care"],
      website: "www.geriatricscarecenter.com",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Mental Health Services",
      address: "852 Cedar St, Cityville",
      phone: "555-111-2222",
      distance: "3.1 miles away",
      rating: "4.6",
      services: ["Mental Health", "Telehealth Services", "Occupational Health"],
      website: "www.mentalhealthservices.com",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      name: "Urgent Care Center",
      address: "963 Birch St, Cityville",
      phone: "555-222-3333",
      distance: "0.8 miles away",
      rating: "4.2",
      services: ["Urgent Care", "Emergency", "Radiology"],
      website: "www.urgentcarecenter.com",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      name: "Acupuncture Clinic",
      address: "147 Spruce St, Cityville",
      phone: "555-333-4444",
      distance: "5.0 miles away",
      rating: "4.9",
      services: ["Acupuncture and Alternative Therapies", "Chiropractic Care"],
      website: "www.acupunctureclinic.com",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 9,
      name: "Family Practice",
      address: "258 Fir St, Cityville",
      phone: "555-444-5555",
      distance: "4.2 miles away",
      rating: "4.1",
      services: ["Primary Care", "General Practice", "Nutrition and Dietetics"],
      website: "www.familypractice.com",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 10,
      name: "Surgical Services Center",
      address: "369 Willow St, Cityville",
      phone: "555-555-6666",
      distance: "2.8 miles away",
      rating: "4.4",
      services: ["Surgical Services", "Emergency", "Laboratory Services"],
      website: "www.surgicalservicescenter.com",
      image: "https://via.placeholder.com/150",
    },
  ];

// Filter options for healthcare types
const healthcareTypes = [
  { value: "Primary Care", label: "Primary Care" },
  { value: "Emergency Care", label: "Emergency Care" },
  { value: "Specialty Care", label: "Specialty Care" },
  { value: "Pediatrics", label: "Pediatrics" },
  { value: "Geriatrics", label: "Geriatrics" },
  { value: "Women's Health", label: "Women's Health" },
  { value: "Mental Health", label: "Mental Health" },
  { value: "Rehabilitative Services", label: "Rehabilitative Services" },
  { value: "Surgical Services", label: "Surgical Services" },
  { value: "Laboratory Services", label: "Laboratory Services" },
  { value: "Nutrition and Dietetics", label: "Nutrition and Dietetics" },
  { value: "Pharmacy Services", label: "Pharmacy Services" },
];

const HospitalCard = ({ hospital }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex">
      <img src={hospital.image} alt={hospital.name} className="w-32 h-32 object-cover rounded-lg mr-4" />
      <div>
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
    </div>
  );
};

const HealthCare = () => {
  const [selectedType, setSelectedType] = useState("");

  const handleFilterChange = (event) => {
    setSelectedType(event.target.value);
  };

  const filteredHospitals = selectedType
    ? hospitals.filter((hospital) => hospital.services.includes(selectedType))
    : hospitals;

  return (
    <div className="flex flex-col md:flex-row p-4">
      {/* Filter Section */}
      <div className="md:w-1/3 bg-gray-100 p-4 rounded-lg shadow-md mb-4 md:mr-4">
        <h2 className="text-xl font-semibold mb-4">Filter Healthcare</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Select Healthcare Type:</label>
            {healthcareTypes.map((type) => (
              <div key={type.value} className="flex items-center mb-2">
                <input
                  type="radio"
                  id={type.value}
                  name="healthcareType"
                  value={type.value}
                  checked={selectedType === type.value}
                  onChange={handleFilterChange}
                  className="mr-2"
                />
                <label htmlFor={type.value} className="text-gray-700">{type.label}</label>
              </div>
            ))}
          </div>
        </form>
      </div>

      {/* Hospital Details Section */}
      <div className="md:w-2/3 p-4 overflow-y-auto">
        <h1 className="text-xl font-semibold mb-4">Hospital Details</h1>
        {filteredHospitals.map((hospital) => (
          <HospitalCard key={hospital.id} hospital={hospital} />
        ))}
      </div>
    </div>
  );
};

export default HealthCare;

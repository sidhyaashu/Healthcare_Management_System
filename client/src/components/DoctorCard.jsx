// src/components/DoctorCard.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const DoctorCard = ({ doctor }) => {
  const history = useParams();

  const handleClick = () => {
    history.push(`/doctors/${doctor.id}`);
  };

  return (
    <div className="border rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg" onClick={handleClick}>
      <img src={doctor.image} alt={doctor.name} className="w-full h-32 object-cover rounded-md mb-2" />
      <h2 className="text-xl font-semibold">{doctor.name}</h2>
      <p className="text-gray-600">{doctor.specialty}</p>
      <p className="text-yellow-500">Rating: {doctor.rating}</p>
    </div>
  );
};

export default DoctorCard;

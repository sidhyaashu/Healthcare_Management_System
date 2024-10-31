// src/components/DoctorProfile.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import TimeSlotSelector from './TimeSlotSelector';
import { doctors } from '../data/doctors.js';

const DoctorProfile = () => {
  const { id } = useParams();
  const doctor = doctors.find(doc => doc.id === parseInt(id));

  if (!doctor) return <div>Doctor not found</div>;

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row">
        <img src={doctor.image} alt={doctor.name} className="w-48 h-48 object-cover rounded-md mr-4" />
        <div className="md:flex-grow">
          <h2 className="text-2xl font-bold">{doctor.name}</h2>
          <p className="text-gray-600">{doctor.bio}</p>
          <p className="text-yellow-500">Specialty: {doctor.specialty}</p>
          <p className="text-yellow-500">Rating: {doctor.rating}</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-6">Available Time Slots</h3>
      <TimeSlotSelector availableSlots={doctor.availableSlots} doctorId={doctor.id} />
    </div>
  );
};

export default DoctorProfile;

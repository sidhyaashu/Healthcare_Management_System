// src/pages/DoctorList.jsx
import React from 'react';
import { doctors } from '../data/doctors';
import DoctorCard from "../components/DoctorCard"

const DoctorList = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Available Doctors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {doctors.map(doctor => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default DoctorList;

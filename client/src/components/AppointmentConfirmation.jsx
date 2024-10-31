// src/pages/AppointmentConfirmation.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { doctors } from '../data/doctors.js';

const AppointmentConfirmation = () => {
  const { doctorId, slot } = useParams();
  const doctor = doctors.find(doc => doc.id === parseInt(doctorId));

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Appointment Confirmation</h2>
      <p>Your appointment with {doctor.name} has been successfully booked!</p>
      <p>Time: {decodeURIComponent(slot)}</p>
      <p>Thank you for choosing us!</p>
    </div>
  );
};

export default AppointmentConfirmation;

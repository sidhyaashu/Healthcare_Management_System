// src/components/AppointmentCard.jsx
import React from 'react';

const AppointmentCard = ({ appointment, onClick, onCancel }) => {
  return (
    <div
      className="rounded-lg shadow-lg p-6 bg-white hover:shadow-xl transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <h2 className="text-xl font-semibold">{appointment.doctorName}</h2>
      <p className="text-gray-700">Date: {appointment.date}</p>
      <p className="text-gray-700">Time: {appointment.time}</p>
      <p className="text-gray-700">Location: {appointment.location}</p>
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent click event from firing for the card
          onCancel(appointment);
        }}
        className="mt-4 text-red-600 hover:underline"
      >
        Cancel Appointment
      </button>
    </div>
  );
};

export default AppointmentCard;

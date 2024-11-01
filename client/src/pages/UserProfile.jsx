// src/pages/UserProfile.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { appointmentsData } from '../components/appoinments/appointments.js';
import AppointmentCard from '../components/appoinments/AppointmentCard.jsx';

const UserProfile = () => {
  const [appointments] = useState(appointmentsData); // Store appointments data
  const navigate = useNavigate();

  const handleAppointmentClick = (appointment) => {
    navigate(`/appointment/${appointment.id}`); // Redirect to appointment details page
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-700">Your Appointments</h1>
      
      {appointments.length === 0 ? (
        <p className="text-center text-gray-600">You have no appointments scheduled.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appointments.map((appointment) => (
            <AppointmentCard
              key={appointment.id}
              appointment={appointment}
              onClick={() => handleAppointmentClick(appointment)} // Navigate to details
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserProfile;

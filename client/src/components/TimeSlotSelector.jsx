// src/components/TimeSlotSelector.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const TimeSlotSelector = ({ availableSlots, doctorId }) => {
  const [selectedSlot, setSelectedSlot] = useState('');
  const history = useParams();

  const handleBookAppointment = () => {
    if (selectedSlot) {
      history.push(`/confirmation/${doctorId}/${encodeURIComponent(selectedSlot)}`);
    }
  };

  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold mb-2">Select a Time Slot</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {availableSlots.map(slot => (
          <button
            key={slot}
            className={`border rounded-md p-2 ${selectedSlot === slot ? 'bg-blue-500 text-white' : 'hover:bg-blue-100'}`}
            onClick={() => setSelectedSlot(slot)}
          >
            {new Date(slot).toLocaleString()}
          </button>
        ))}
      </div>
      <button
        onClick={handleBookAppointment}
        className={`mt-4 p-2 bg-green-500 text-white rounded-md ${!selectedSlot ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'}`}
        disabled={!selectedSlot}
      >
        Book Appointment
      </button>
    </div>
  );
};

export default TimeSlotSelector;

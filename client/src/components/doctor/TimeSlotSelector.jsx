// src/components/TimeSlotSelector.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TimeSlotSelector = ({ availableSlots, doctorId }) => {
  const [selectedSlot, setSelectedSlot] = useState('');
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    if (selectedSlot) {
      navigate(`/appointment/confirmation/${doctorId}/${encodeURIComponent(selectedSlot)}`);
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4">Select a Time Slot</h3>
      {availableSlots.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {availableSlots.map(slot => (
            <button
              key={slot}
              className={`border rounded-md p-3 transition-transform transform hover:scale-105 ${
                selectedSlot === slot ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedSlot(slot)}
            >
              {new Date(slot).toLocaleString()}
            </button>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No available slots at the moment.</p>
      )}
      <button
        onClick={handleBookAppointment}
        className={`w-full py-2 bg-green-500 text-white rounded-md ${
          !selectedSlot ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'
        } transition-colors`}
        disabled={!selectedSlot}
      >
        Book Appointment
      </button>
    </div>
  );
};

export default TimeSlotSelector;

// src/components/DoctorProfile.jsx
import { useParams, useNavigate } from 'react-router-dom';
import TimeSlotSelector from './TimeSlotSelector';
import { doctors } from '../../data/doctors.js';

const DoctorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = doctors.find(doc => doc.id === parseInt(id));

  if (!doctor) return <div className="container mx-auto py-8 text-center">Doctor not found</div>;

  return (
    <div className="container mx-auto py-8 px-4 md:px-0">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 hover:underline"
      >
        &larr; Back to Doctor List
      </button>

      <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-48 h-48 object-cover rounded-md mb-4 md:mb-0 md:mr-6"
        />
        <div>
          <h2 className="text-3xl font-bold mb-2">{doctor.name}</h2>
          <p className="text-gray-600 mb-1">{doctor.bio}</p>
          <p className="text-yellow-600 font-medium">Specialty: {doctor.specialty}</p>
          <p className="text-yellow-500 font-medium">Rating: {doctor.rating}</p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold">Available Time Slots</h3>
        <TimeSlotSelector availableSlots={doctor.availableSlots} doctorId={doctor.id} />
      </div>
    </div>
  );
};

export default DoctorProfile;

// src/pages/DoctorList.jsx
import { doctors } from '../data/doctors';
import DoctorCard from '../components/doctor/DoctorCard';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const DoctorList = () => {
  const navigate = useNavigate();
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  const handleDoctorClick = (id) => {
    navigate(`/doctors/${id}`);
  };

  const handleSpecialtyChange = (specialty) => {
    setSelectedSpecialty(specialty);
  };

  const filteredDoctors = selectedSpecialty
    ? doctors.filter(doctor => doctor.specialty === selectedSpecialty)
    : doctors;

  const specialties = Array.from(new Set(doctors.map(doctor => doctor.specialty)));

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-700">Available Doctors</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Specialty Filter Section */}
        <div className="col-span-1">
          <h2 className="text-lg font-semibold mb-4 text-left">Filter by Specialty</h2>
          <div className="flex flex-col">
            {specialties.map((specialty) => (
              <button 
                key={specialty} 
                onClick={() => handleSpecialtyChange(specialty)}
                className={`mb-2 px-4 py-2 rounded-md text-white 
                  ${selectedSpecialty === specialty ? 'bg-blue-600' : 'bg-blue-400'}`}
              >
                {specialty}
              </button>
            ))}
            <button
              onClick={() => handleSpecialtyChange('')}
              className={`mb-2 px-4 py-2 rounded-md text-white 
                ${selectedSpecialty === '' ? 'bg-blue-600' : 'bg-blue-400'}`}
            >
              All
            </button>
          </div>
        </div>

        {/* Doctor Cards Section */}
        <div className="col-span-2">
          {filteredDoctors.length === 0 ? (
            <p className="text-center text-gray-600">No doctors found for the selected specialty.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDoctors.map(doctor => (
                <div
                  key={doctor.id}
                  className="rounded-lg shadow-lg p-6 bg-white hover:bg-blue-50 cursor-pointer transition-transform transform hover:-translate-y-2"
                  onClick={() => handleDoctorClick(doctor.id)}
                >
                  <DoctorCard doctor={doctor} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorList;

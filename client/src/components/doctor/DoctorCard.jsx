// src/components/DoctorCard.jsx
const DoctorCard = ({ doctor }) => {
  return (
    <div className="text-center">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
      />
      <h3 className="text-lg font-semibold text-blue-700">{doctor.name}</h3>
      <p className="text-gray-500">{doctor.specialty}</p>
      <p className="text-yellow-500">Rating: {doctor.rating}</p>
    </div>
  );
};

export default DoctorCard;

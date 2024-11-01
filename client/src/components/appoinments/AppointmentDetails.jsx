import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { appointmentsData } from './appointments.js';
import { Button, Typography, Box } from '@mui/material';
import ConfirmationModal from '../../modals/ConfirmationModal.jsx';

const AppointmentDetails = () => {
  const { id } = useParams();
  const appointment = appointmentsData.find(app => app.id === parseInt(id));
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleCancelClick = () => {
    setIsConfirmationModalOpen(true);
  };

  const confirmCancel = () => {
    // Logic for cancellation (update appointments data as needed)
    navigate('/profile'); // Redirect back to user profile after cancellation
  };

  const handleReschedule = () => {
    // Logic for rescheduling (you can implement a modal or redirect to a scheduling page)
    console.log('Rescheduling appointment'); // Placeholder for reschedule functionality
  };

  if (!appointment) {
    return <Typography color="error" textAlign="center">Appointment not found.</Typography>;
  }

  return (
    <Box className="container mx-auto py-8 px-4">
      <Typography variant="h4" fontWeight="bold" className="text-center mb-4">Appointment Details</Typography>
      <Typography variant="h6">Doctor: {appointment.doctorName}</Typography>
      <Typography variant="body1">Date & Time: {appointment.date} at {appointment.time}</Typography>
      <Typography variant="body1">Status: {appointment.status}</Typography>
      <Typography variant="body1" className="mt-4">Additional Notes: {appointment.notes}</Typography>
      
      <Box display="flex" justifyContent="space-between" mt={4}>
        <Button variant="contained" color="primary" onClick={handleReschedule}>Reschedule</Button>
        <Button variant="outlined" color="secondary" onClick={handleCancelClick}>Cancel Appointment</Button>
      </Box>

      {/* Confirmation Modal */}
      {isConfirmationModalOpen && (
        <ConfirmationModal
          onClose={() => setIsConfirmationModalOpen(false)}
          onConfirm={confirmCancel}
          title="Confirm Cancellation"
          message={`Are you sure you want to cancel the appointment with Dr. ${appointment.doctorName}?`}
        />
      )}
    </Box>
  );
};

export default AppointmentDetails;

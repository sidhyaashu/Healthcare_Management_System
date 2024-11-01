// src/pages/AppointmentConfirmation.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { doctors } from '../../data/doctors.js';
import { Container, Typography, Box, Button, Divider } from '@mui/material';
import { CheckCircle, AccessTime, ArrowBack } from '@mui/icons-material';

const AppointmentConfirmation = () => {
  const { doctorId, slot } = useParams();
  const decodedSlot = decodeURIComponent(slot); // Decode the slot here
  const doctor = doctors.find(doc => doc.id === parseInt(doctorId));
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" className="py-8">
      <Box textAlign="center" mt={4} mb={6}>
        <CheckCircle style={{ fontSize: 60, color: '#4CAF50' }} />
        <Typography variant="h4" fontWeight="bold" color="primary" mt={2}>
          Appointment Confirmed!
        </Typography>
      </Box>

      {doctor ? (
        <>
          <Box textAlign="center" mb={4}>
            <Typography variant="h6" color="textSecondary">
              Your appointment with <strong>Dr. {doctor.name}</strong> has been successfully booked!
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
              <AccessTime style={{ color: '#FFA726', marginRight: 8 }} />
              <Typography variant="body1" fontWeight="bold">
                {decodedSlot}
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Typography textAlign="center" variant="body2" color="textSecondary">
            Thank you for choosing us! We look forward to serving you.
          </Typography>
        </>
      ) : (
        <Typography color="error" textAlign="center">
          Doctor not found.
        </Typography>
      )}

      <Box textAlign="center" mt={6}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<ArrowBack />}
          onClick={() => navigate('/doctors')}
        >
          Back to Doctor List
        </Button>
      </Box>
    </Container>
  );
};

export default AppointmentConfirmation;

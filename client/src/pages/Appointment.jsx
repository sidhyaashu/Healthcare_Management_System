import{ useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Grid,
  Snackbar,
} from '@mui/material';

const Appointment = () => {
  const [hospitals, setHospitals] = useState([]); // State for hospitals
  const [selectedHospital, setSelectedHospital] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]); // State for available slots
  const [selectedSlot, setSelectedSlot] = useState('');
  const [userName, setUserName] = useState('');
  const [appointmentMessage, setAppointmentMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Sample data for hospitals
  useEffect(() => {
    setHospitals([
      { id: 1, name: "City Hospital" },
      { id: 2, name: "HealthCare Center" },
      // Add more hospitals as needed
    ]);
  }, []);

  // Function to simulate fetching available slots
  const fetchAvailableSlots = (hospitalId) => {
    // Here you would usually fetch available slots from an API
    const slots = hospitalId === 1 
      ? ['10:00 AM', '11:00 AM', '01:00 PM']
      : ['09:00 AM', '12:00 PM', '03:00 PM'];
    setAvailableSlots(slots);
  };

  const handleHospitalChange = (event) => {
    setSelectedHospital(event.target.value);
    setAvailableSlots([]); // Clear previous slots
    fetchAvailableSlots(event.target.value); // Fetch new slots
  };

  const handleSlotChange = (event) => {
    setSelectedSlot(event.target.value);
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleAppointmentBooking = () => {
    // Here you would usually make an API call to book the appointment
    if (selectedHospital && selectedSlot && userName) {
      setAppointmentMessage(`Appointment booked at ${selectedHospital} on ${selectedSlot} for ${userName}`);
      setSnackbarOpen(true);
      // Reset the form after booking
      setSelectedSlot('');
      setUserName('');
    } else {
      setAppointmentMessage('Please fill all fields.');
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box sx={{ p: 4, maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Schedule an Appointment
      </Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="hospital-select-label">Select Hospital</InputLabel>
        <Select
          labelId="hospital-select-label"
          value={selectedHospital}
          onChange={handleHospitalChange}
        >
          {hospitals.map((hospital) => (
            <MenuItem key={hospital.id} value={hospital.name}>
              {hospital.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }} disabled={!availableSlots.length}>
        <InputLabel id="slot-select-label">Select Time Slot</InputLabel>
        <Select
          labelId="slot-select-label"
          value={selectedSlot}
          onChange={handleSlotChange}
        >
          {availableSlots.map((slot, index) => (
            <MenuItem key={index} value={slot}>
              {slot}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        label="Your Name"
        variant="outlined"
        fullWidth
        value={userName}
        onChange={handleUserNameChange}
        sx={{ mb: 2 }}
      />

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAppointmentBooking}
            fullWidth
          >
            Book Appointment
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="outlined" color="secondary" fullWidth>
            Cancel Appointment
          </Button>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={appointmentMessage}
      />
    </Box>
  );
};

export default Appointment;

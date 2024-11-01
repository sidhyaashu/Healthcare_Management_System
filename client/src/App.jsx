import Layout from "./components/Layout";
import HealthCare from "./pages/HealthCare";
import MapPage from "./pages/MapPage";
import DoctorList from "./pages/DoctorList";
import DoctorProfile from "./components/doctor/DoctorProfile";
import AppointmentConfirmation from "./components/appoinments/AppointmentConfirmation"; 
import UserProfile from "./pages/UserProfile";
import AppointmentDetails from "./components/appoinments/AppointmentDetails"; // Import new component
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MapPage />,
      },
      {
        path: "health-care",
        element: <HealthCare />,
      },
      {
        path: "appointment/confirmation/:doctorId/:slot",
        element: <AppointmentConfirmation />,
      },
      {
        path: "doctors",
        element: <DoctorList />,
      },
      {
        path: "doctors/:id",
        element: <DoctorProfile />,
      },
      {
        path: "profile",
        element: <UserProfile />,
      },
      {
        path: "appointment/:id", // New route for appointment details
        element: <AppointmentDetails />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

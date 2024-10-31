import Layout from "./components/Layout";
import Appointment from "./pages/Appointment";
import HealthCare from "./pages/HealthCare";
import MapPage from "./pages/MapPage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DoctorList from "./pages/DoctorList"
import DoctorProfile from "./components/DoctorProfile"
import AppointmentConfirmation from "./components/AppointmentConfirmation"




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MapPage />,
      },
      {
        path: "/health-care",
        element: <HealthCare/>,
      },
      {
        path: "/appointment",
        element: <Appointment/>,
        children:[
          {
            path:"confirmation/:doctorId/:slot",
            element:<AppointmentConfirmation/>
          },
        ]
      },
      {
        path: "/doctors",
        element: <DoctorList/>,
        children:[
          {
            path:":id",
            element:<DoctorProfile/>
          },
          
        ]
      },
    ],
    
  },
]);


function App() {
  return <RouterProvider router={router} />
}

export default App;


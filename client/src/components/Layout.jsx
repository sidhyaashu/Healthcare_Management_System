// src/layout/Layout.jsx
import { useState } from 'react';
import { NavLink , Outlet} from 'react-router-dom';
import { Home, Info, ContactMail, Menu } from '@mui/icons-material';
import Header from './Header';

const Layout = ( ) => {
  
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-blue-800 text-white p-4 ${isSidebarExpanded ? 'w-64' : 'w-20'} transition-all duration-300`}>
        {/* Toggle Button */}
        <button 
          onClick={toggleSidebar}
          className="text-white mb-8 focus:outline-none"
        >
          <Menu fontSize="large" />
        </button>

        <nav>
          <ul>
            <li className="mb-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center p-2 ${isActive ? 'text-blue-300' : 'text-white'} hover:text-blue-300`
                }
              >
                <Home />
                {isSidebarExpanded && <span className="ml-4">Nearby Hospitals</span>}
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to="/health-care"
                className={({ isActive }) =>
                  `flex items-center p-2 ${isActive ? 'text-blue-300' : 'text-white'} hover:text-blue-300`
                }
              >
                <Info />
                {isSidebarExpanded && <span className="ml-4">Hospitals</span>}
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink
                to="/doctors"
                className={({ isActive }) =>
                  `flex items-center p-2 ${isActive ? 'text-blue-300' : 'text-white'} hover:text-blue-300`
                }
              >
                <ContactMail />
                {isSidebarExpanded && <span className="ml-4">Appointment</span>}
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header/>
       
        {/* Content */}
        <main className="flex-1 p-6">
          <Outlet/>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center p-4">
          <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;

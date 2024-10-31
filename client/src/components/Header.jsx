import React, { useState } from 'react';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Implement search logic here (e.g., filter hospitals, call an API, etc.)
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="bg-white shadow p-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold text-gray-700">Nearby Hospitals</h1>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search Healthcare..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          className="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-500"
          onClick={handleSearch}
        >
          Search
        </button>
        <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">
          Sign Out
        </button>
      </div>
    </header>
  );
};

export default Header;

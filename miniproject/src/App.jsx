// App.jsx
import React from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

import { Routes, Route } from 'react-router-dom';

import Dashboard from './Pages/Dashboard';
import Community from './Pages/Community';
import Notifications from './Pages/Notifications';
import Profile from './Pages/Profile';
import Logout from './Pages/Logout';

function App() {
  return (
    <div className="flex min-h-screen bg-linear-to-b from-pink-50 to-white mb-20 ">
      
      <Sidebar />

      <div className="flex-1">
        
        <Header />

        {/* All routes must be inside <Routes> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/community" element={<Community />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;

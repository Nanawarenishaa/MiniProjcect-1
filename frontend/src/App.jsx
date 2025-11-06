import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import CommunityFeed from "./Pages/CommunityFeed";
import Notifications from "./Pages/Notifications";
import Profile from "./Pages/Profile";


export default function App() {
  return (
    <Router>
      <div className="bg-white shadow-md">
        <nav className="flex justify-between items-center max-w-6xl mx-auto px-6 py-4">
          <Link to="/" className="text-2xl font-bold text-indigo-700">
            SkillSprint 🏃‍♂️
          </Link>
          <div className="flex space-x-6 text-gray-700">
            <Link
              to="/"
              className="hover:text-indigo-600 transition font-medium"
            >
              Dashboard
            </Link>
            <Link
              to="/community"
              className="hover:text-indigo-600 transition font-medium"
            >
              Community
            </Link>
            <Link
              to="/notifications"
              className="hover:text-indigo-600 transition font-medium"
            >
              Notifications
            </Link>
            <Link
              to="/profile"
              className="hover:text-indigo-600 transition font-medium"
            >
              Profile
            </Link>
          </div>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/community" element={<CommunityFeed />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

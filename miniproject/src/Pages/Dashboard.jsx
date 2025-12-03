import React from "react";
import { FiBookOpen, FiUsers, FiTrendingUp, FiClock, FiPlusCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-[#fff9f9] min-h-screen mt-20 text-gray-800">
      {/* Top Greeting */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-6">
        <h1 className="text-2xl font-bold">Welcome back to SkillVerse 🌸</h1>
        <p className="text-gray-600 mt-1">Showcase your daily learning journey!</p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left Column - Stats */}
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-2xl shadow">
              <FiBookOpen className="text-3xl mb-2" />
              <h3 className="font-bold">Courses</h3>
              <p className="text-xl font-bold">12</p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow">
              <FiUsers className="text-3xl mb-2" />
              <h3 className="font-bold">Community</h3>
              <p className="text-xl font-bold">248 Members</p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow">
              <FiTrendingUp className="text-3xl mb-2" />
              <h3 className="font-bold">Progress</h3>
              <p className="text-xl font-bold">76%</p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow">
              <FiClock className="text-3xl mb-2" />
              <h3 className="font-bold">Study Hours</h3>
              <p className="text-xl font-bold">14 hrs</p>
            </div>
          </div>
        </div>

        {/* Right Column - Quick Actions */}
        <div className="flex flex-col gap-6">
          <div className="bg-white p-5 rounded-2xl shadow flex flex-col gap-4">
            <button
              onClick={() => navigate("/community")}
              className="w-full bg-[#ffe1e1] p-3 rounded-xl font-semibold flex items-center gap-2 justify-center"
            >
              <FiPlusCircle /> Create New Post & Visit Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

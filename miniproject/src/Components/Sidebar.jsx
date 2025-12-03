// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiUsers, FiBell, FiUser, FiLogOut } from 'react-icons/fi';

const navItems = [
  { name: 'Dashboard', icon: <FiHome />, path: '/' },
  { name: 'Community', icon: <FiUsers />, path: '/Community' },
  { name: 'Notifications', icon: <FiBell />, path: '/Notifications' },
  { name: 'Profile', icon: <FiUser />, path: '/Profile' },
  { name: 'LogOut', icon: <FiLogOut />, path: '/Logout' },
];

const Sidebar = () => {
  return (
    <div className="flex md:hidden fixed bottom-0 w-full bg-rose-100/80 backdrop-blur-md shadow-md border-t border-white/40 z-50 justify-around items-center py-3">
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className="flex flex-col items-center text-rose-900 hover:text-rose-800 relative"
        >
          <div className="text-2xl">{item.icon}</div>

        </Link>
      ))}
    </div>
  );
};

export default Sidebar;

// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'Dashboard', path: '/' },
  { name: 'Community', path: '/Community' },
  { name: 'Notifications', path: '/Notifications' },
  { name: 'Profile', path: '/Profile' },
  { name: 'LogOut', path: '/Logout' },
];

const Header = () => {
  return (
    <div className="h-20 backdrop-blur-xl bg-rose-100/30 shadow-md border-b border-white/40 fixed top-0 left-0 z-20 w-full flex justify-around items-center px-6">
      <h1 className="text-rose-900 text-2xl font-bold">SkillVerse 🏃‍♂️</h1>

 
      <div className="hidden md:flex gap-8 text-xl text-neutral-900">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="hover:text-rose-800"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;

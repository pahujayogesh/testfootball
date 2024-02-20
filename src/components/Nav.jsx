import React, { useState } from 'react';
import icon from '../assets/Football_Icon 1.png';
import { Link } from 'react-router-dom';

export const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <nav className="bg-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-start">
          <img src={icon} className="h-8 justify-start mr-5" alt="Football Logo" />
          <span className="self-center text-xl whitespace-nowrap dark:text-white">Fantasy Football</span>
        </Link>
        <div className="hidden md:flex space-x-4 text-white">
          <Link to="/" onClick={closeSidebar} className="hover:text-yellow-400 transition duration-200 ease-out cursor-pointer">Home</Link>
          <Link to="/Matches" onClick={closeSidebar} className="hover:text-yellow-400 transition duration-200 ease-out cursor-pointer">Matches</Link>
          <Link to="/ScoreCard" onClick={closeSidebar} className="hover:text-yellow-400 transition duration-200 ease-out cursor-pointer">Scores</Link>
          <Link to="/Playerinfo" onClick={closeSidebar} className="hover:text-yellow-400 transition duration-200 ease-out cursor-pointer">Player Info</Link>
        </div>
        {/* Sidebar for mobile view */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none" onClick={toggleSidebar}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile sidebar */}
      {isSidebarOpen && (
        <div className="md:hidden bg-black text-white absolute top-0 right-0 h-full z-50 flex flex-col">
          {/* Close button */}
          <button className="text-white self-end mr-4 mt-4" onClick={toggleSidebar}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {/* Sidebar content */}
          <div className="flex-shrink flex justify-center items-center">
            <div className="p-8 mt-10 text-center ">
              <Link to="/" onClick={closeSidebar} className="block py-4">Home</Link>
              <Link to="" onClick={closeSidebar} className="block py-4">Matches</Link>
              <Link to="" onClick={closeSidebar} className="block py-4">Scores</Link>
              <Link to="" onClick={closeSidebar} className="block py-4">Player Info</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;

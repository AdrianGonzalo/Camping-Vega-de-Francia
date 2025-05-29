import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-800 p-4">
      <h2 className="text-white text-xl font-bold">Mi Navbar</h2>
      <ul className="flex space-x-6">
        <li>
          <a href="#home" className="text-white hover:text-gray-400">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-white hover:text-gray-400">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="text-white hover:text-gray-400">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

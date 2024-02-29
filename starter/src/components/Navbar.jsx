import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div className="bg-slate-900 px-4 md:px-80 md:py-3">
      <div className="flex justify-between items-center">
        <NavLink to="/">
          <div className="ml-5">
            <img
              src="logo.png"
              alt="Logo"
              className="w-26 h-16"
            />
          </div>
        </NavLink>
        <div className="flex space-x-4 gap-6 items-center text-white">
          <NavLink to="/" className="hidden md:inline">
            <p className="cursor-pointer transform hover:scale-110 transition-transform duration-300">
              Home
            </p>
          </NavLink>
          <NavLink to="/cart" className="relative">
            <FaShoppingCart className="w-10 h-10" />
            {cart.length > 0 && (
              <span   className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
              justify-center items-center animate-bounce rounded-full text-white" >
                {cart.length}
              </span>
            )}
          </NavLink>
        </div>
      </div>
     
      <div className="md:hidden mt-4 flex justify-center">
        <NavLink to="/" className="text-white">
          Home
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

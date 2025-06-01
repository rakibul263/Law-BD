import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState('Home');

  const navItems = ['Home', 'My-Bookings', 'Blogs', 'Contact Us'];

  const links = navItems.map((item) => (
    <li key={item} className='font-semibold'>
      {item === 'Home' ? (
        <Link to="/" className={`btn btn-sm rounded-full transition-all duration-300 ${
          active === item
            ? 'btn-outline btn-primary text-lg'
            : 'btn-ghost hover:bg-primary hover:text-white'
        }`} onClick={() => setActive(item)}>
          {item}
        </Link>
      ) : item === 'My-Bookings' ? (
        <Link to="/BookedConsultations" className={`btn btn-sm rounded-full transition-all duration-300 ${
          active === item
            ? 'btn-outline btn-primary text-lg'
            : 'btn-ghost hover:bg-primary hover:text-white'
        }`} onClick={() => setActive(item)}>
          {item}
        </Link>
      ) : (
        <Link to="/error" className={`btn btn-sm rounded-full transition-all duration-300 ${
          active === item
            ? 'btn-outline btn-primary text-lg'
            : 'btn-ghost hover:bg-primary hover:text-white'
        }`} onClick={() => setActive(item)}>
          {item}
        </Link>
      )}
    </li>
  ));

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl gap-2">
          <img src={logo} alt="logo" className="h-8" /> Law.BD
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          {links}
        </ul>
      </div>

      <div className="navbar-end">
        <a className="btn btn-success rounded-full font-bold">Contact Now</a>
      </div>
    </div>
  );
};

export default Navbar;

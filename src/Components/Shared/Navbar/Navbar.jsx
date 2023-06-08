import React from "react";
import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png'

const Navbar = () => {
    const navOption = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/'>Instructors</Link></li>
    <li><Link to='/'>Classes</Link></li>
    <li><Link to='/'>Dashboard</Link></li>
    </>
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-orange-800 text-white py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-orange-400 text-white rounded-box w-52"
            >
                {navOption}
              
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img className="rounded-lg" src={logo} alt="Bucket Head" />
        </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOption}
          </ul>
        </div>
        <div className="navbar-end">
        <Link className="btn btn-error text-white mr-3" to='/login'>Logout</Link>
        <Link className="btn btn-error text-white" to='/login'>Login</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

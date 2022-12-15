import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaDribbble, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from './logo.png'
import { AuthContext } from "../../../Context/UserContext";

const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/">Learn</Link>
      </li>
      <li>
        <Link to="/">Book Marks</Link>
      </li>
      <li>
        <Link to="/">Lain</Link>
      </li>
      <li>
        <Link to="/">Blog</Link>
      </li>

      {/* <li>
        <Link to="/login">Login</Link>
      </li> */}

      <li></li>
    </React.Fragment>
  );

  return (
    <div className="navbar bg-white sticky top-0 z-50  flex justify-around drop-shadow-sm ">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 uppercase"
          >
            {menuItems}

            {user || user?.email || user?.uid || user?.displayName ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} alt="user.displayName" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 uppercase"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <Link onClick={logoutUser}>Logout</Link>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="flex gap-4">
                <button className="btn btn-sm outline-none border-none bg-rose-500 hover:bg-rose-600">
                  <Link to="/login">Log in</Link>
                </button>
              </div>
            )}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl overflow-hidden"
        >
          <img src={logo} className="w-8 h-8" alt="logo" />
        </Link>
        <ul className="menu menu-horizontal p-0 navbar-center hidden lg:flex">
          {menuItems}
        </ul>
      </div>

      <div className="navbar-center hidden lg:flex">
        <div className="flex gap-3 mr-3">
          <a href="https://twitter.com/pace_financial">
            <FaTwitter className="text-gray-500 h-5 w-5 hover:text-rose-600 active:text-rose-600 transition duration-100"></FaTwitter>
          </a>
          <a href="https://www.instagram.com/pace_financial/">
            <FaInstagram className="text-gray-500 h-5 w-5 hover:text-rose-600 active:text-rose-600 transition duration-100"></FaInstagram>
          </a>
          <a href="https://www.instagram.com/pace_financial/">
            <FaDribbble className="text-gray-500 h-5 w-5 hover:text-rose-600 active:text-rose-600 transition duration-100"></FaDribbble>
          </a>
        </div>

        {user || user?.email || user?.uid || user?.displayName ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} alt="user.displayName" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <Link onClick={logoutUser}>Logout</Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-4">
            <button className="btn btn-sm outline-none border-none bg-rose-500 hover:bg-rose-600">
              <Link to="/login">Log in</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

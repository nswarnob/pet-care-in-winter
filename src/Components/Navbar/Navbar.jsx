import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { FaRegUserCircle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const Links = (
    <>
      <span className=" md:flex gap-5 items-center font-medium text-accent bg-base-100 md:text-[18px] lg:text-[19px] text-15px">
        <NavLink to={"/"}>
          <li>Home</li>
        </NavLink>
        <NavLink to={"/services"}>
          <li>Services</li>
        </NavLink>
        {user && (
          <NavLink to={"/my-profile"}>
            <li>My Profile</li>
          </NavLink>
        )}
      </span>
    </>
  );

  return (
    <div className="navbar max-w-[1240px] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-[#76a33e] lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {Links}
          </ul>
        </div>
        <Link to={"/"} className="text-[#76a33e] font-bold text-xl">
          WarmPaws
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
      { !user ? (
        <div className="navbar-end text-[#76a33e] gap-2">
          <FaRegUserCircle size={26} />
          <Link to={"/login"} className=" rounded-3xl text-xl font-semibold">
            {" "}
            Login
          </Link>
        </div>
      ) : (
        <div className="navbar-end text-[#76a33e] gap-2">
          <img src={user.photoURL} className="w-8 h-8 rounded-full" alt="" />
          <Link onClick={logOut} className=" rounded-3xl text-xl font-semibold">
            {" "}
            Logout
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

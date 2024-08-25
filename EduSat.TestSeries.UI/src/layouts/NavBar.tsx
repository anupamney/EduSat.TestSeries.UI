import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../assets/logo.jpg";

interface NavLink {
  label: string;
  path: string;
}

const navbarLinks: NavLink[] = [
  { label: "ADD SCHOOL", path: "/add-school" },
  { label: "ADD TEACHER", path: "/add-teachers" },
  { label: "SCHOOL LIST", path: "/schools" },
  { label: "ADD SCHOLARSHIP", path: "/add-scholarship" },
  { label: "MY PROFILE", path: "/profile" },
  { label: "LOGOUT", path: "/" },
];
const Navbar: React.FC = () => {
  const logout = () => {
    window.localStorage.setItem("isLoggedIn", "false");
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-header">
          <img src={logo} alt="logo" className="navbar-logo" />
          <Link to="/" className="navbar-header">
            EDUSAT TEST SERIES, SATARA
          </Link>
        </div>

        {/* Menu Items */}
        <ul className="nav-menu">
          {navbarLinks.map((navLink) => (
            <li key={navLink.label} className="nav-item">
              {navLink.label === "LOGOUT" ? (
                <Link to={navLink.path} onClick={logout} className="nav-links">
                  {navLink.label}
                </Link>
              ) : (
                <Link to={navLink.path} className="nav-links">
                  {navLink.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

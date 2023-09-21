import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.scss";
import Logo from "../../../Assets/SVG/logo.svg";
//import Login from "../../../Assets/Layout/icon-unlock.svg";

const NavBar = () => {
  /* Setting up the variable to handle the state of mobile menu */

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <>
      {/* Start of the navigation component */}
      <nav className="navigation">
        <div className="brand-name">
          {/* Logo */}
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        {/* Button with a onclick event from useState hook used  for  a hamburger menu */}
        <button
          className="showMenu"
          aria-label="showMenu"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M4 18L20 18"
                stroke="#6da830"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>{" "}
              <path
                d="M4 12L20 12"
                stroke="#6da830"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>{" "}
              <path
                d="M4 6L20 6"
                stroke="#6da830"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
        {/* Menu changing state depending on screen size */}
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              {/* Navlinks for internal navigation, changing color based on active/inactive state */}
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "#6da830" : "black",
                  borderTop: isActive ? "solid 1px grey" : "none",
                })}
              >
                Forside
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sortering"
                style={({ isActive }) => ({
                  color: isActive ? "#6da830" : "black",
                  borderTop: isActive ? "solid 1px grey" : "none",
                })}
              >
                Sortering
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/stationer"
                style={({ isActive }) => ({
                  color: isActive ? "#6da830" : "black",
                  borderTop: isActive ? "solid 1px grey" : "none",
                })}
              >
                Genbrugsstationer
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bestil"
                style={({ isActive }) => ({
                  color: isActive ? "#6da830" : "black",
                  borderTop: isActive ? "solid 1px grey" : "none",
                })}
              >
                Bestil beholder
              </NavLink>
            </li>
            <span className="login">
              <li>
                <NavLink to="/login">
                  <img
                    src={require("../../../Assets/Images/Ellipse_1.png")}
                    alt="login"
                  />
                </NavLink>
              </li>
            </span>
          </ul>
        </div>
      </nav>
    </>
  );
};

/* Exporting the component so it can be used elsewhere */
export default NavBar;

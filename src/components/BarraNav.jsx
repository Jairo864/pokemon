import React from "react";
import { NavLink } from "react-router-dom";

const BarraNav = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "inActive");
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <NavLink
          className={({ isActive }) =>
            `navbar-brand ${setActiveClass({ isActive })}`
          }
          to="/"
        >
          <img
            src="./src/assets/img/pokeball.png"
            alt="logo_nav"
            className="logo"
          />
        </NavLink>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${setActiveClass({ isActive })}`
                }
                to="/"
                aria-current="page"
                href="#"
              >
                Home
              </NavLink>
            </li>
                  
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${setActiveClass({ isActive })}`
                }
                to="/Pokemones"
              >
                Pokemones
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default BarraNav;

import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="d-flex">
          <Link className="navbar-brand" to="/">
            Movies.COM
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <NavLink className="nav-item nav-link" to="/movies">
                Movies
              </NavLink>
              <NavLink className="nav-item nav-link" to="/customers">
                Customers
              </NavLink>
              <NavLink className="nav-item nav-link" to="/rentals">
                Rentals
              </NavLink>
              <NavLink className="nav-item nav-link" to="/login">
                Login
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

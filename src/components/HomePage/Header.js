import React from "react";
import { NavLink } from "react-router-dom";
export default function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          Cybersoft
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/register"
              >
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/login"
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Hooks
              </NavLink>
              <div
                className="dropdown-menu bg-dark"
                aria-labelledby="dropdownId"
              >
                <NavLink
                  activeClassName="active"
                  className="dropdown-item bg-dark text-white"
                  to="/usestate"
                >
                  Use State
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="dropdown-item bg-dark text-white"
                  to="/useeffect"
                >
                  Use Effect
                </NavLink>

                <NavLink
                  activeClassName="active"
                  className="dropdown-item bg-dark text-white"
                  to="/reduxhook"
                >
                  Redux Hook Demo
                </NavLink>

                <NavLink
                  activeClassName="active"
                  className="dropdown-item bg-dark text-white"
                  to="/ajaxrcc"
                >
                  Axios RCC
                </NavLink>

                <NavLink
                  activeClassName="active"
                  className="dropdown-item bg-dark text-white"
                  to="/ajaxrfc"
                >
                  Axios RFC
                </NavLink>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

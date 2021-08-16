import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/userActions";

function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <div id="logo">
          <h1>
            <a href="/">
              <span>11th Hour</span> Assistance
            </a>
          </h1>
        </div>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto" href="/">
                Home
              </a>
            </li>
            <li className="dropdown">
              <a>
                <span>Emergency Services</span>{" "}
                <i className="bi bi-chevron-down" />
              </a>
              <ul>
                <li>
                  <Link
                    className="btn-get-started scrollto"
                    to={"/blood-requests"}
                  >
                    Blood Donation Service
                  </Link>
                </li>
                <li>
                  <Link
                    className="btn-get-started scrollto"
                    to={"/equipment-requests"}
                  >
                    Equipment Service
                  </Link>
                </li>
                <li>
                  <Link
                    className="btn-get-started scrollto"
                    to={"/ambulance-service"}
                  >
                    Ambulance Service
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="btn-get-started scrollto" to={"/articles"}>
                Articles
              </Link>
            </li>

            {userInfo ? (
              <li className="dropdown">
                <a >
                  <span>{userInfo.name}</span>{" "}
                  <i className="bi bi-chevron-down" />
                </a>
                <ul>
                  <li>
                    <Link className="btn-get-started scrollto" to={"/profile"}>
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="btn-get-started scrollto"
                      onClick={logoutHandler}
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="dropdown">
                <a>
                  <span>Get Started</span> <i className="bi bi-chevron-down" />
                </a>
                <ul>
                  <li>
                    <Link className="btn-get-started scrollto" to={"/login"}>
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link className="btn-get-started scrollto" to={"/register"}>
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </li>
            )}
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
      </div>
    </header>
  );
}

export default Header;

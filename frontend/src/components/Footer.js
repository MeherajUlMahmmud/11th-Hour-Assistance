import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-4">
            <div className="footer-logo">
              <a className="navbar-brand" href="#">
                11th Hour Assistance
              </a>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the.
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="list-menu"></div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="list-menu"></div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="list-menu">
              <h4>Support</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="list-menu">
              <h4>About Us</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Developers</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function HomeScreen() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <div>
      <section id="hero" className="wow fadeIn">
        <div className="hero-container">
          <h1>Welcome to 11th Hour Assistance </h1>
          <h2>Cloud based Emergency Service</h2>
          <img
            src={process.env.PUBLIC_URL + "assets/img/hero-img.png"}
            alt="Hero Imgs"
          />
          {userInfo ? null : (
            <Link className="btn-get-started" to={"/register"}>
              Get Started
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}

export default HomeScreen;

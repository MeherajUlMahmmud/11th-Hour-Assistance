import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function HomeScreen() {
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
          <Link className="btn-get-started scrollto" to={"/register"}>
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomeScreen;

import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/landingPageImage.jpg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Walkable Cities
          </h1>
          <p className="primary-text">
               The Objective of the initiative is to improve first and last-mile connectivity for public transport,modal shifts away from private vehicles,and improve accessibility.In turn,investing in Walkability has the benefits of reducing air pollution and improving road safety and well-being.
          </p>
          <button className="secondary-button">
            Next <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;

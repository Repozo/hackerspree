import React, { useState } from "react";
import "./styles/index.css";
import Lottie from "lottie-react-web";
import animation from "./lottie.json";
import RegisterModal from "./components/register-modal";
import { Link } from "react-router-dom";

const Landing = () => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [hasRegistered, setHasRegistered] = useState(false);

  return (
    <section className="row landing__wrapper" id="landing-section">
      <div className="col-md-6 landing__content">
 <h1 className="landing_heading">HackerSpree</h1>

        <span className="landing__date">
          <i className="fas fa-calendar-alt"></i> From August, 2020
          <span className="landing__separator">|</span>
          <i className="fas fa-globe"></i> Online
        </span>

        <div className="landing__description">
         The description
        </div>

        <div className="landing__actions">
          <Link to="/know-about-hackathon">
            <button className="secondary__btn">Know About Hackathon</button>
          </Link>

          <button
            className="primary__btn"
            onClick={() => setisModalOpen(true)}
            disabled={hasRegistered}
            style={{ cursor: hasRegistered ? "not-allowed" : "pointer" }}
          >
            {hasRegistered ? "Registered" : "Register as a team"}
          </button>
        </div>
      </div>
      <div className="col-md-6 landing__lottie">
        <Lottie
          options={{
            animationData: animation,
          }}
        />
      </div>

      <RegisterModal
        isOpen={isModalOpen}
        closeModal={() => setisModalOpen(false)}
        setRegistered={() => {
          setisModalOpen(false);
          setHasRegistered(true);
        }}
      />
    </section>
  );
};

export default Landing;

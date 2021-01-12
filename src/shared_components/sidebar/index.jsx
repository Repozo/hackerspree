import React from "react";
import "./styles/index.css";

const Sidebar = () => {
  return (
    <nav className="sidebar__wrapper">
      <ul className="sidebar__nav">
        <li className="sidebar__item  sidebar__logo">
          <a href="#landing-section" className="sidebar__item__link">
            <img
              src="favicon.png"
              alt="Hackerspree"
              className="sidebar__logo__img"
            />
          </a>
          <span className="sidebar__text">Home</span>
        </li>

        <li className="sidebar__item">
          <a href="#landing-section" className="sidebar__item__link">
            <i className="fas fa-bowling-ball"></i>
          </a>
          <span className="sidebar__text">About</span>
        </li>

        <li className="sidebar__item">
          <a href="#about-section" className="sidebar__item__link">
            <i className="fas fa-puzzle-piece"></i>
          </a>
          <span className="sidebar__text">About</span>
        </li>

        {/* <li className="sidebar__item">
          <a href="#schedule" className="sidebar__item__link">
            <i className="fas fa-calendar"></i>
          </a>
          <span className="sidebar__text">Schedule</span>
        </li> */}

        <li className="sidebar__item">
          <a href="#speakers-section" className="sidebar__item__link">
            <i className="fas fa-headset"></i>
          </a>
          <span className="sidebar__text">Speakers</span>
        </li>

        <li className="sidebar__item">
          <a href="#sponsors-section" className="sidebar__item__link">
            <i className="far fa-handshake"></i>
          </a>
          <span className="sidebar__text">Sponsors</span>
        </li>

        <li className="sidebar__item">
          <a href="#faq-section" className="sidebar__item__link">
            <i className="fas fa-question"></i>
          </a>
          <span className="sidebar__text">FAQ</span>
        </li>

        {/* <li className="sidebar__item">
          <a href="#contact-section" className="sidebar__item__link">
            <i className="fa fa-at"></i>
          </a>
          <span className="sidebar__text">Contact</span>
        </li> */}
      </ul>
    </nav>
  );
};

export default Sidebar;

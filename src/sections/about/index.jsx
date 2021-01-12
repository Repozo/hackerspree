import React from "react";
import "./styles/index.css";
import Typed from "react-typed";

import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about__section" id="about-section">
      <div className="row ">
        <div className="col-md-5">
         SVG
        </div>
        <div className="col-md-6 about-content mt-5">
          <h3 className="hackerspree-header">
            <green>About</green>
          </h3>
          Helping students to give the closure of Networking and Exposure.
          <div className="typed-content mt-3 mb-5">
            <Typed
              className="about-typer"
              style={{ wordSpacing: "3px", letterSpacing: "1px" }}
              strings={[
                "<green>DSC JIIT Noida</green>",
                "<red>50+ Hackathons<red/>",
                "<blue>100+ Registrations</blue>",
              ]}
              typeSpeed={30}
              backSpeed={30}
              backDelay={1500}
              cursorChar={["_"]}
              loop
            />
          </div>
          <div className="about-text">
            <p className="mb-3">
              More About
            </p>

            <Link to="http:/dscjiit.live">
              <button className="secondary__btn">
                About DSC 
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

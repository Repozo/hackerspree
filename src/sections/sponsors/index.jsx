import React from "react";
import "./styles/index.css";
//import LazyLoad from "react-lazyload";

import devfolio from "./assets/devfolio.png";


const Sponsors = () => {
  return (
    <section id="sponsors-section">
      <div className="row section__header justify-content-center">
        <div className="col-md-10">Our Proud Sponsors</div>
      </div>

      <div className="our-sponsors">
      <div className="sponsor-tier">
          <div className="sponsor-tier-title">Title Sponsors</div>
          <div className="row justify-content-center">
            <div className="col-md-10">
                <div className="row sponsors justify-content-center">
                  <div className="col-md-4 sponsor-img-wrapper">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.devfolio.co"
                    >
                      <img
                        src="images/loader.gif"
                        data-src={devfolio}
                        className="sponsor-img lazy"
                        alt="scaler"
                      ></img>
                    </a>
                  </div>
                </div>
            </div>
          </div>
     </div>
     <br/>

    

      </div>


      <br />

      <br />
    </section>
  );
};

export default Sponsors;

import React from "react";
import "./styles/index.css";
import Typed from "react-typed";

import { Link } from "react-router-dom";

const About = () => {
 
	var svg = document.getElementById('svg-animation-example');

	function changeSvgStyle () {
		var svg = document.getElementById('svg-animation-example');
		var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
		var anotherRandomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
		var randomStrokeWidth = Math.floor(Math.random() * 8) + 1;
		
		[].forEach.call(svg.querySelectorAll('.svg-line-drawing .stroke'), function (element) {
			
			element.setAttribute('style', 'stroke:' + randomColor + ';stroke-width: ' + randomStrokeWidth + ';');
		});
		[].forEach.call(svg.querySelectorAll('.svg-line-drawing .stroke-alt'), function (element) {
			element.setAttribute('style', 'stroke:' + anotherRandomColor + ';stroke-width: ' + randomStrokeWidth + ';');
		});
	
	}
  return (
    <section className="about__section" id="about-section">
      <div className="row ">
        <div className="col-md-5">
        <svg version="1.1" id="svg-animation-example" className="svg-line-drawing rtl-magazine-animation" xmlns="http://www.w3.org/2000/svg" xmlnsXxlink="http://www.w3.org/1999/xlink" x="0" y="0" width="720" height="310" viewBox="0 0 720 310" xmlSpace="preserve" aria-hidden="true" onClick={changeSvgStyle} >
	  <defs>
		 <clipPath id="mask-page">
			<path className="stroke-alt stroke-width linecap" d="m240,275 l240,0 0,-217 -240,0z" />
		 </clipPath>
	  </defs>

	  <g clip-path="url(#mask-page)">
		 <g className="ani-move-page is-animated">

			<path className="stroke stroke-width linecap" d="m0,275 m254,-203 l212,0 0,112 -212,0z" fill="none" />
			<path className="stroke-alt stroke-width linecap" d="m0,275 m272,-172 a13 13 180 0 1 26,0 a13 13 180 0 1 -26,0" fill="none" />
			<path className="stroke stroke-width linecap" d="m0,275 m254,-203 m22,112 l34,-44 a9 9 180 0 1 13,-1 l15,16 38,-48 a5 5 180 0 1 8.4,0 l60,77" fill="none" />
			<path className="stroke stroke-width linecap" d="m0,275 m254,-67 l212,0 m-212,10 l54,0 m25,0 l54,0 m25,0 l54,0 m-212,10 l54,0 m25,0 l54,0 m25,0 l54,0" fill="none" />

			<path className="stroke stroke-width linecap" d="m350,250 a10 10 180 0 1 20,0 a10 10 180 0 1 -20,0 m6.8,-1.7 l3.2,3.2 3.2,-3.2" fill="none" />
			<path className="stroke stroke-width linecap" d="m318,290 l0,430" fill="none" />
			<path className="stroke stroke-width linecap" d="m333,306 l54,0 m-54,10 l54,0 m-54,10 l133,0 m-133,10 l133,0" fill="none" />
			<path className="stroke stroke-width linecap" d="m333,356 l133,0 0,78 -133,0 0,-78 m0,90 l54,0 m-54,10 l54,0 m-54,20 133,0 0,78 -133,0 0,-78 m0,90 l54,0 m-54,10 l54,0 m-54,20 133,0 0,78 -133,0 0,-78 m0,90 l54,0 m-54,10 l54,0 m-54,20" fill="none" />

			<path className="stroke stroke-width linecap" d="m0,680 m0,275 m254,-203 l212,0 0,112 -212,0z" fill="none" />
			<path className="stroke-alt stroke-width linecap" d="m0,680 m0,275 m272,-172 a13 13 180 0 1 26,0 a13 13 180 0 1 -26,0" fill="none" />
			<path className="stroke stroke-width linecap" d="m0,680 m0,275 m254,-203 m22,112 l34,-44 a9 9 180 0 1 13,-1 l15,16 38,-48 a5 5 180 0 1 8.4,0 l60,77" fill="none" />
			<path className="stroke stroke-width linecap" d="m0,680 m0,275 m254,-67 l212,0 m-212,10 l54,0 m25,0 l54,0 m25,0 l54,0 m-212,10 l54,0 m25,0 l54,0 m25,0 l54,0" fill="none" />
			
			<path className="stroke stroke-width linecap" d="m0,680 m350,250 a10 10 180 0 1 20,0 a10 10 180 0 1 -20,0 m6.8,-1.7 l3.2,3.2 3.2,-3.2" fill="none" />
		 </g>
		 <g className="ani-move-menu is-animated">
			<g>
			   <path className="stroke stroke-width linecap" d="m254,306 l54,0 m-54,10 l54,0 m-54,10 l54,0 m-54,10 l54,0" fill="none" />
			</g>
		 </g>
	  </g>

	  <g className="ani-fade-button is-animated" opacity="0" >
		 <path className="stroke-background stroke-overlay linecap" d="m350,250 a10 10 180 0 1 20,0 a10 10 180 0 1 -20,0 m6.8,-1.7 l3.2,3.2 3.2,-3.2" fill="none" />
		 <path className="stroke-alt stroke-width linecap" d="m350,250 a10 10 180 0 1 20,0 a10 10 180 0 1 -20,0 m6.8,-1.7 l3.2,3.2 3.2,-3.2" fill="none" />
	  </g>

	  <path className="stroke stroke-width linecap" d="m0,275 l240,0 0,-230 a5 5 90 0 1 5,-5 l230,0 a5 5 90 0 1 5,5 l0,230 240,0" fill="none" />
	  <path className="stroke stroke-width linecap" d="m0,275 m240,-217 l240,0" fill="none" />
	  <path className="stroke stroke-width linecap" d="m0,275 m240,-226 m10,0 a4 4 180 0 1 8,0 a4 4 180 0 1 -8,0 m14,0 a4 4 180 0 1 8,0 a4 4 180 0 1 -8,0 m14,0 a4 4 180 0 1 8,0 a4 4 180 0 1 -8,0" fill="none" />
	
   </svg>


        </div>
        <div className="col-md-6 about-content mt-5">
          <h3 className="hackerspree-header">
            <green>About</green>
          </h3>
          <div className="about_text">Helping students to give the closure of Networking and Exposure.</div>
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
              <div className="about_text">More About</div>
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

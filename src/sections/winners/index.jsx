import React from "react";
import WinnerCard from "./components/winnercard";
import "./styles/index.css";

const Winnerslist = [
  {
    name: "Atishay Srivastava",
    title: "DSC Technical Coordinator",
    description:
      "Frontend Engineer",
      a_description:"Problem Solver ",
      add_description:"15+ Hackathons Experience",
    linkedin: "https://www.linkedin.com/in/atishay-srivastava-7a1140174/",
    github:"https://github.com/xAtishayx/",
    image: "images/winners/atishay.jpg",
  },
  {
    name: "Ayan Goyal",
    title: "DSC Coordinator",
    description:
      "Flutter Developer",
      a_description:"AR/VR enthusiast",
      add_description:"Campus Facilitator for 30 Days of Google Cloud and yeah I code in JAVA.",
    linkedin: "https://www.linkedin.com/in/ayan-goel-2a30ab190/",
    github:"https://github.com/GAyan17",
    image: "images/winners/ayan.jpeg",
  },
  {
    name: "Satakshi Garg",
    title: "DSC Technical Coordinator",
    description:
      "Competitive Programmer ",
      a_description:"WTEF@google |Cryptography",
      add_description:"AR/VR | ML | Web/App Dev",
    linkedin: "https://www.linkedin.com/in/satakshigarg",
    github:"https://github.com/satakshigarg",
    image: "images/winners/Satakshi.jpg",
  },
  {
    name: "Ashpreet Singh",
    title: "DSC Technical Coordinator",
    description:
      " Organizer at KDM Delhi NCR",
      a_description:"ML and Health-tech Enthusiast",
      add_description:"",
    linkedin: "https://www.linkedin.com/in/arshpreet-singh-791721173/",
    github:"https://github.com/arshpreet10",
    image: "images/winners/ashpreet.jpg",
  },
 
];

const Winners = () => {
  return (
    <section className="speakers__wrapper" id="speakers-section">
      <div className="row section__header justify-content-center">
        <div className="col-md-10">Mentors</div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-9 col-xs-12 ">
          <div className="row">
            {Winnerslist.map((e) => (
              <WinnerCard
                key={e.linkedin}
                title={e.title}
                linkedin={e.linkedin}
                github={e.github}
                name={e.name}
                description={e.description}
                a_description={e.a_description}
                add_description={e.add_description}
                image={e.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Winners;

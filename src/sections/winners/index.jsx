import React from "react";
import WinnerCard from "./components/winnercard";
import "./styles/index.css";

const Winnerslist = [
  {
    name: "John",
    title: "Doe",
    description:
      "Description",
    linkedin: "#",
    image: "images/winners/test.jpg",
  },
  
  
];

const Winners = () => {
  return (
    <section className="speakers__wrapper" id="speakers-section">
      <div className="row section__header justify-content-center">
        <div className="col-md-10">Winners</div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-9 col-xs-12 ">
          <div className="row">
            {Winnerslist.map((e) => (
              <WinnerCard
                key={e.linkedin}
                title={e.title}
                linkedin={e.linkedin}
                name={e.name}
                description={e.description}
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

import React from "react";
import ReactFAQ from "react-faq-component";
import "./styles/index.css";

const Faq = () => {
  const data = {
    // title: "FAQ's",
    rows: [
      {
        title: "What is HackerSpree",
        content:
          'Update here',
      }
    ],
  };

  return (
    <section className="faq-section" id="faq-section">
      <div className="row section__header justify-content-center">
        <div className="col-md-10">Frequently Asked Questions</div>
      </div>
      <div className="row justify-content-center">
        <div className=" col-md-9">
          <div className="faq-container">
            <ReactFAQ
              data={data}
              styles={{
                // bgColor: "#f5f5f5",
                titleTextColor: "black",
                rowTitleColor: "black",
                rowTitleTextSize: "1.1rem",
                rowContentColor: "#5b5e5b",
                rowContentTextSize: "1rem",
                rowContentPaddingTop: "10px",
                rowContentPaddingBottom: "10px",
                arrowColor: "blue",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;

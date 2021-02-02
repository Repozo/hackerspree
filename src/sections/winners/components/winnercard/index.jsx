import React from "react";
import LazyLoad from "react-lazyload";


const WinnerCard = ({
  name,
  title,
  description,
  a_description,
  add_description,
  linkedin,
  github,
  image,
}) => {
  return (
    <div className="col-md-6 col-lg-3  col-xs-6">
      <div className="speaker__card" data-state="#about">
        <div className="card-header">
          <LazyLoad>
            <div
              className="card-cover"
              style={{
                backgroundImage: `url('${image}')`,
              }}
            ></div>
          </LazyLoad>
          <img
            className="card-avatar lazy"
            src="images/loader.gif"
            data-src={image}
            alt="avatar"
          />
          <h1 className="card-fullname">{name}</h1>
          <h2 className="card-jobtitle">{title}</h2>
        </div>
        <div className="card-main">
          <div className="card-section is-active" id="about">
            <div className="card-content">
              <div className="card-subtitle">ABOUT</div>
              <p className="card-desc">{description}<br/>{a_description}<br/>{add_description}</p>
            </div>
            <div className="card-social">
             
    

              <a href={linkedin} target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z" />
                </svg>
              </a>
              {github !== null && (
                <a href={github} target="_blank" rel="noopener">
                  <svg xmlns="http://www.w3.org/2000/svg"
                   aria-label="GitHub" role="img"
                  viewBox="0 0 512 512"><rect
                  width="512" height="512"
                  rx="15%"
                   fill="#1B1817"/>
<path fill="#fff" d="M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-50c-71 16-86-28-86-28-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z"/></svg>

                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WinnerCard;

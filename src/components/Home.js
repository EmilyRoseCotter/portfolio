import React from "react";
import "../styles/Home.css";
import Emily from "../Assets/Emily.png";

const Home = () => {
  return (
    <div className="Home">
      <div className="Hero">
        <div className="heroHeadings">
          <h1>Hello, I&apos;m Emily.</h1>
          <h2 className="subTitle">
            An aspiring Software Engineer <br /> from the North-West of England.
          </h2>
        </div>
        <div className="heroImage">
          <img className="Avatar" src={Emily} alt="Emily" />
        </div>
      </div>
      <div className="curved upper">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
          <path
            fill="#10107a"
            fillOpacity="1"
            d="M0,96L60,85.3C120,75,240,53,360,80C480,107,600,181,720,176C840,171,960,85,1080,53.3C1200,21,1320,43,1380,53.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>
      <div className="curved">
        <h2>Heading</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
          <path
            fill="#ffff"
            fillOpacity="1"
            d="M0,96L60,85.3C120,75,240,53,360,80C480,107,600,181,720,176C840,171,960,85,1080,53.3C1200,21,1320,43,1380,53.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Home;

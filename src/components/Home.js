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
    </div>
  );
};

export default Home;

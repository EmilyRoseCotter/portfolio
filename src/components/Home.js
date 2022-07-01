import React from "react";
import "../styles/Home.css";
import Emily from "../Assets/Emily.png";

const Home = () => {
  return (
    <div className="Home">
      <div className="Hero">
        <h1>Hello, I&apos;m Emily.</h1>
        <img className="Avatar" src={Emily} alt="Emily" />
      </div>
    </div>
  );
};

export default Home;

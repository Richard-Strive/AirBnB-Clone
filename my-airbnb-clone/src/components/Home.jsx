import React from "react";
import "./componentsStyling/Home.css";
import Banner from "./subcomponents/Banner";

function Home() {
  return (
    <div className="home">
      <h1>I'm the home component</h1>
      <Banner />
    </div>
  );
}

export default Home;

import React from "react";
import { Button } from "@material-ui/core";
import "../subStylings/Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner_search">
        <Button className="banner_searchButton" variant="outlined">
          Search Date
        </Button>
      </div>
      <div className="banner_info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a differentknd of getaway to uncover the hidden gems near you
        </h5>
        <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
}

export default Banner;

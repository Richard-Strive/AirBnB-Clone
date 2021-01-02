import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Search from "./Search";
import "../subStylings/Banner.css";
import { useHistory } from "react-router-dom";

function Banner() {
  const history = useHistory();
  /* Ci permette di accedere al "push" "per andare indietro" */
  const [showDate, setDate] = useState(true);
  const handleDate = () => {
    if (showDate) {
      setDate(false);
    } else {
      setDate(true);
    }
  };
  return (
    <div className="banner">
      <div className="banner_search">
        {!showDate && <Search />}
        <Button
          className="banner_searchButton"
          variant="outlined"
          onClick={handleDate}
        >
          {(showDate && "Search Date") || "Hide Date"}
        </Button>
      </div>
      <div className="banner_info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a differentknd of getaway to uncover the hidden gems near you
        </h5>
        <Button variant="outlined" onClick={() => history.push("/search")}>
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;

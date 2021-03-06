import React, { useState } from "react";
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import { DateRangePicker } from "react-date-range";
import { useHistory } from "react-router-dom";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "../subStylings/Search.css";
function Search() {
  const history = useHistory();
  /* Ci permette di accedere al "push" "per andare indietro" */
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of guests
        <PeopleIcon />
      </h2>
      <input min={0} defaultValue={2} type="number" />
      <Button onClick={() => history.push("/search")}>Search AirBnB</Button>
    </div>
  );
}

export default Search;

import React from "react";
import SearchResult from "./subcomponents/SearchResult";
import "./componentsStyling/SearchPage.css";
import { Button } from "@material-ui/core";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p>62 stays· 26 august · 30 august · 2 guest</p>
        <h1>Stay nearby</h1>
        <Button variant="outlined">Cancellation</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://image.shutterstock.com/image-photo/stuck-box-600w-425342395.jpg"
        title="Testing"
        star={5}
        description="lovely place with a lot of nature"
        location="London"
        price={500}
        total={590}
      />
      <SearchResult
        img="https://image.shutterstock.com/image-photo/stuck-box-600w-425342395.jpg"
        title="Testing"
        star={5}
        description="lovely place with a lot of nature"
        location="London"
        price={500}
        total={590}
      />
      <SearchResult
        img="https://image.shutterstock.com/image-photo/stuck-box-600w-425342395.jpg"
        title="Testing"
        star={5}
        description="lovely place with a lot of nature"
        location="London"
        price={500}
        total={590}
      />
    </div>
  );
}

export default SearchPage;

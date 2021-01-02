import React from "react";
import "./componentsStyling/Home.css";
import Card from "./subcomponents/Card";
import Banner from "./subcomponents/Banner";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home_section">
        <Card
          src="https://image.shutterstock.com/image-photo/view-blue-domes-bell-towers-600w-1509942527.jpg"
          title="La Grecia"
          description="Tuffatevi nello splendido paese di miti e leggende. Indiementicabili emozioni vi attendo."
          price={1500}
        />
        <Card
          src="https://image.shutterstock.com/image-photo/view-blue-domes-bell-towers-600w-1509942527.jpg"
          title="La Grecia"
          description="Tuffatevi nello splendido paese di miti e leggende. Indiementicabili emozioni vi attendo."
          price={1500}
        />
        <Card
          src="https://image.shutterstock.com/image-photo/view-blue-domes-bell-towers-600w-1509942527.jpg"
          title="La Grecia"
          description="Tuffatevi nello splendido paese di miti e leggende. Indiementicabili emozioni vi attendo."
          price={1500}
        />
      </div>
      <div className="home_section">
        <Card
          src="https://image.shutterstock.com/image-photo/view-blue-domes-bell-towers-600w-1509942527.jpg"
          title="La Grecia"
          description="Tuffatevi nello splendido paese di miti e leggende. Indiementicabili emozioni vi attendo."
          price={1500}
        />
        <Card
          src="https://image.shutterstock.com/image-photo/view-blue-domes-bell-towers-600w-1509942527.jpg"
          title="La Grecia"
          description="Tuffatevi nello splendido paese di miti e leggende. Indiementicabili emozioni vi attendo."
          price={1500}
        />
        <Card
          src="https://image.shutterstock.com/image-photo/view-blue-domes-bell-towers-600w-1509942527.jpg"
          title="La Grecia"
          description="Tuffatevi nello splendido paese di miti e leggende. Indiementicabili emozioni vi attendo."
          price={1500}
        />
      </div>
    </div>
  );
}

export default Home;

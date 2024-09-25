import React from "react";
import "./App.css";
import Nuotraukos from "./components/Nuotraukos";
import camera from "./assets/camera.jpg";
import printer from "./assets/printer.jpg";
import tv from "./assets/tv.jpg";

function App() {
  const images = [
    { className: "camera", style: { height: "225px" }, src: camera, alt: "Camera Logo" },
    { className: "printer", style: { height: "150px" }, src: printer, alt: "Printer Logo" },
    { className: "tv", style: { height: "147px" }, src: tv, alt: "TV Logo" }
  ];

  return (
    <div className="container">
      <Nuotraukos images={images}/>
    </div>
  );
}

export default App;

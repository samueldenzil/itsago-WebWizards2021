import React from "react";
import "../styles/title.css";
import hotel_icon from "../images/hotel-icon.png";
import flight_icon from "../images/flight-icon.png";
import car_icon from "../images/car-img.png";
import more_icon from "../images/more-img.png";

function Title() {
  return (
    <div className="title">
      <div className="rectangle-3">
        <div className="sub-title">The one stop destination for all your</div>
        <h1 className="main-title">Dream Vacation</h1>
        <div className="search-bar">
          <div className="card">
            <a href="$" className="card-link">
              <img src={hotel_icon} alt="hotel-icon" />
              <div>Hotels</div>
            </a>
          </div>
          <div className="card">
            <a href="$" className="card-link">
              <img src={flight_icon} alt="flight-icon" />
              <div>Flights</div>
            </a>
          </div>
          <div className="card">
            <a href="$" className="card-link">
              <img src={car_icon} alt="car-icon" />
              <div>Cars</div>
            </a>
          </div>
          <div className="card">
            <a href="$" className="card-link">
              <img src={more_icon} alt="more-icon" />
              <div>More</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;

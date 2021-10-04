import React from "react";
import "../styles/hotels.css";
import paris_img from "../images/paris-img.png";
import sf_img from "../images/sf-img.png";
import rome_img from "../images/rome-img.png";
import udaipur_img from "../images/udaipur-img.png";
import amsterdam_img from "../images/amsterdam-img.png";
import rio_de_janeiro_img from "../images/rio-de-janeiro-img.png";

function Hotels() {
  return (
    <div className="hotel-section">
      <h1 className="hotel-section-heading">Explore the World</h1>

      {/* <div className="hotels">
        {hotels.map((hotel) => {
          return (
            <Hotel
              key={hotel.id}
              current_title={hotel.title_text}
              current_amount={hotel.amount_text}
              hotel_img={hotel.id}
            />
          );
        })}
      </div> */}
      <div className="hotels">
        <div className="hotel">
          <img src={paris_img} alt="" />
          <h3>Hotels in Paris</h3>
          <p>Starting from ₹22711</p>
        </div>

        <div className="hotel">
          <img src={sf_img} alt="" />
          <h3>Hotels in San Francisco</h3>
          <p>Starting from ₹11146</p>
        </div>

        <div className="hotel">
          <img src={rome_img} alt="" />
          <h3>Hotels in Rome</h3>
          <p>Starting from ₹14244</p>
        </div>
      </div>

      <div className="hotels">
        <div className="hotel">
          <img src={udaipur_img} alt="" />
          <h3>Hotels in Udaipur</h3>
          <p>Starting from ₹1422</p>
        </div>

        <div className="hotel">
          <img src={amsterdam_img} alt="" />
          <h3>Hotels in Amsterdam</h3>
          <p>Starting from ₹7843</p>
        </div>

        <div className="hotel">
          <img src={rio_de_janeiro_img} alt="" />
          <h3>Hotels in Rio De Janeiro</h3>
          <p>Starting from ₹14244</p>
        </div>
      </div>
    </div>
  );
}

export default Hotels;

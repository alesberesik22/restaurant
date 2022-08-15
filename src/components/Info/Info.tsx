import React from "react";
import Subhead from "../Subhead/Subhead";

import "./Info.css";

import food from "../../assets/images/food.png";

function Info() {
  return (
    <div className="app_info app_wrapper section_padding" id="home">
      <div className="app_wrapper_info">
        <Subhead title="Chase the new flavour" />
        <h1 className="app_info_h1">The key to fine dining</h1>
        <p className="app_info_description" style={{ margin: "2rem 0" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
          recusandae iusto, accusantium cupiditate ipsa, ea architecto iste
          doloremque id possimus nisi delectus cumque nemo omnis quas ab.
          Corrupti, delectus quos?
        </p>
        <button type="button" className="info_button">
          Explore Menu
        </button>
      </div>
      <div className="app_wrapper_image">
        <img src={food} alt="Header img" />
      </div>
    </div>
  );
}

export default Info;

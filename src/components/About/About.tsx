import React from "react";
import "./About.css";

import g from "../../assets/images/G.png";
import spoon from "../../assets/images/spoon.png";
import knife from "../../assets/images/knife.png";

function About() {
  return (
    <div className="about app_bg flex_center section_padding" id="#about">
      <div className="about_overlay flex_center">
        <img src={g} alt="g" />
      </div>
      <div className="about_content_left flex_center">
        <div className="about_content_h1">
          <h1 className="head_text">About us</h1>
          <img src={spoon} alt="spoon" className="spoon_img" />
          <p className="about_text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse culpa
            praesentium ut pariatur odit dolores repellat vero suscipit atque.
            Delectus vitae, laborum deleniti corporis ea architecto. Nulla error
            quisquam porro?
          </p>
          <button type="button" className="about_button">
            Know more
          </button>
        </div>
      </div>
      <div className="about_content_knife flex_center">
        <img src={knife} alt="knife" />
      </div>
      <div className="about_content_right">
        <div className="history_content_h1">
          <h1 className="head_text">Our History</h1>
          <img src={spoon} alt="spoon" className="spoon_img" />
          <p className="about_text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse culpa
            praesentium ut pariatur odit dolores repellat vero suscipit atque.
            Delectus vitae, laborum deleniti corporis ea architecto. Nulla error
            quisquam porro?
          </p>
          <button type="button" className="about_button">
            Know more
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;

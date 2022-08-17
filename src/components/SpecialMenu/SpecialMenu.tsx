import React from "react";
import "./SpecialMenu.css";

import Subhead from "../Subhead/Subhead";
import MenuItem from "../MenuItem/MenuItem";
import MenuData from "../../assets/MenuData/MenuData";

import menu from "../../assets/images/menu.png";

function SpecialMenu() {
  return (
    <div className="special_menu flex_center section_padding" id="#menu">
      <div className="special_menu_title">
        <Subhead title={"Special menu"} />
        <h1 className="special_menu_text">Today's Specials</h1>
      </div>
      <div className="special_menu_menu">
        <div className="special_menu_wine_beer flex_center">
          <p className="special_menu_wine_beer_heading">Wine and Beer</p>
          <div className="special_menu_wine_beer_itmes">
            {MenuData.wines.map((item, key) => (
              // <p>{item.title}</p>
              <MenuItem
                title={item.title}
                price={item.price}
                tags={item.tags}
                key={key}
              />
            ))}
          </div>
        </div>
        <div className="special_menu_menu_img">
          <img src={menu} alt={"menu_img"} />
        </div>
        <div className="special_menu_cocktail flex_center">
          <p className="special_menu_cocktail_heading">Wine and Beer</p>
          <div className="special_menu_cocktail_itmes">
            {MenuData.cocktails.map((item, key) => (
              <MenuItem
                title={item.title}
                price={item.price}
                tags={item.tags}
                key={key}
              />
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: "15px" }}>
        <button type="button" className="special_menu_button">
          View More
        </button>
      </div>
    </div>
  );
}

export default SpecialMenu;

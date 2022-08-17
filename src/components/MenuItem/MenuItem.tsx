import React from "react";
import "./MenuItem.css";

function MenuItem(props: any) {
  return (
    <div className="menu_item" key={props.key}>
      <div className="menu_item_head">
        <div className="menu_item_name">
          <p className="menu_item_p" style={{ color: "#DCCA87" }}>
            {props.title}
          </p>
        </div>
        <div className="menu_item_dash" />
        <div className="menu_item_price">
          <p className="menu_item_p">{props.price}</p>
        </div>
      </div>
      <div className="menu_item_tags">
        <p className="menu_item_tag" style={{ color: "#AAA" }}>
          {props.tags}
        </p>
      </div>
    </div>
  );
}

export default MenuItem;

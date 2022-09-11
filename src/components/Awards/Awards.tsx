import React from "react";
import "./Awards.css";

import Subhead from "../Subhead/Subhead";
import AwardsData from "./AwardsData";
import laurels from "../../assets/images/laurels.png";

const AwardCard = (props: any) => {
  return (
    <div className="award_card">
      <img src={props.awardImage} alt={"award"} />
      <div className="award_content">
        <p className="award_title">{props.awardTitle}</p>
        <p className="award_title" style={{ color: "var(--color-gray)" }}>
          {props.awardSubtitle}
        </p>
      </div>
    </div>
  );
};

function Awards() {
  return (
    <div className="awards section_padding" id="awards">
      <div className="awards_info">
        <Subhead title={"Awards & Recognition"} />
        <h1 className="head_text">Our Awards</h1>
        <div className="awards_data">
          {AwardsData.map((item, key) => (
            <AwardCard
              awardImage={item.imgUrl}
              awardTitle={item.title}
              awardSubtitle={item.subtitle}
            />
          ))}
        </div>
      </div>
      <div className="awards_image">
        <img src={laurels} alt={"laurels"} />
      </div>
    </div>
  );
}

export default Awards;

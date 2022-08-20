import React, { useRef } from "react";
import "./Gallery.css";
import gallery01 from "../../assets/images/gallery01.png";
import gallery02 from "../../assets/images/gallery02.png";
import gallery03 from "../../assets/images/gallery03.png";
import gallery04 from "../../assets/images/gallery04.png";

import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import Subhead from "../Subhead/Subhead";

function Gallery() {
  const images = [gallery01, gallery02, gallery03, gallery04];
  const scrollRef = useRef(null);

  const scroll = (direction: string) => {
    const { current } = scrollRef;
    // if (direction === "left") {
    //   current?.scrollLeft -= 300;
    // } else {
    //   current.scrollRight += 300;
    // }
  };
  return (
    <div className="gallery">
      <div className="gallery_content">
        <Subhead title={"Instagram"} />
        <h1 className="gallery_head_text">Photo Gallery</h1>
        <p className="gallery_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          officiis repellat cumque, possimus assumenda molestiae vero atque,
          natus qui sequi error dolorem praesentium corporis necessitatibus
          repellendus voluptatum architecto reiciendis hic.
        </p>
        <button type="button" className="gallery_button">
          View More
        </button>
      </div>
      <div className="gallery_images">
        <div className="gallery_images_container" ref={scrollRef}>
          {images.map((item, index) => (
            <div className="gallery_images_card" key={index}>
              <img src={item} alt={"gallery"} />
              <BsInstagram className="gallery_image_icon" />
            </div>
          ))}
        </div>
        <div className="gallery_images_arrows">
          <BsArrowLeftShort
            className="gallery_arrow_icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery_arrow_icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;

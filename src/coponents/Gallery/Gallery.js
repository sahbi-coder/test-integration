import React from "react";
import gallery1 from "../../images/gallery1.png";
import gallery2 from "../../images/gallery2.png";
import gallery3 from "../../images/gallery3.png";
import gallery4 from "../../images/gallery4.png";
import gallery5 from "../../images/gallery5.png";
import gallery6 from "../../images/gallery6.png";
import "./gallery.css";



function Gallery() {
 
  return (
    <div className="gallery">
      <h2 className="gallery-title">Our Food Gallery</h2>
      <div className="gallery-grid">
        <div className="gallery-grid-item">
          <img
            src={gallery1}
            alt="gallery item 1"
            className="gallery-grid-img"
          />
        </div>
        <div className="gallery-grid-item">
          <img
            src={gallery2}
            alt="gallery item 2"
            className="gallery-grid-img"
          />
        </div>
        <div className="gallery-grid-item">
          <img
            src={gallery3}
            alt="gallery item 3"
            className="gallery-grid-img"
          />
        </div>
        <div className="gallery-grid-item">
          <img
            src={gallery4}
            alt="gallery item 4"
            className="gallery-grid-img"
          />
        </div>
        <div className="gallery-grid-item">
          <img
            src={gallery5}
            alt="gallery item 5"
            className="gallery-grid-img"
          />
        </div>
        <div className="gallery-grid-item">
          <img
            src={gallery6}
            alt="gallery item 6"
            className="gallery-grid-img"
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;

import React from "react";
import dish from "../../images/enjoydish.png";
import rectangle from "../../images/rectagle.png";
import "./enjoyButtom.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

function EnjoyButtom() {
  const imgRef = useRef(null);
 
  const containerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
   
    gsap.to(imgRef.current, { x: -100, opacity: 0 });

    const t = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
      },
    });


   

    t.to(imgRef.current, { x: 0, opacity: 1, duration: 1 });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${rectangle} )`,
        backgroundSize: "cover",
        height: "50vh",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        overflow: "visible",
        margin: "10% 0 0",
      }}
      className="enjoybottom"
      ref = {containerRef}
    >
      <img
        src={dish}
        alt="rectangle"
        style={{
          height: "110%",
        }}
        className="enjoybottom-img"
        ref={imgRef}
      />
      
      <div
        style={{ width: "50%", padding: "5%", color: "white" }}
        className="enjoybottom-text-block"
      >
        <h2>Enjoy Best Meal</h2>
        <p>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
      </div>
    </div>
  );
}

export default EnjoyButtom;

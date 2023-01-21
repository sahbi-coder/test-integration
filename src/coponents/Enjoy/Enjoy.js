import React from "react";
import "./enjoy.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
function Enjoy() {
  const boxRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, { y: 100 });

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: boxRef.current,
        start: "20% center",
      },
    });

    t2.to(boxRef.current, { y:0});
  }, []);
  return (
    <div className="enjoy" ref={containerRef}>
      <div className="enjoy-box" ref={boxRef}>
        <div className="enjoy-layer"></div>
        <div className="enjoy-texts">
          <h2 className="enjoy-title">Enjoy Our Food</h2>
          <p className="enjoy-text">
            Our Food Quality Lorem ipsum is placeholder text commonly used in
            the graphic, print, and publishing industries for previewing layouts
            and visual mockups,graphic, print, and publishing industries for
            previewing layouts and visual mockups
          </p>
        </div>
      </div>
    </div>
  );
}

export default Enjoy;

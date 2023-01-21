import React from "react";
import QualityBg from "../../images/Quality.png";
import qualityimg1 from "../../images/qualityimg1.png";
import qualityimg2 from "../../images/qualityimg2.png";
import qualityimg3 from "../../images/qualityimg3.png";
import "./qulity.css";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function Quality() {
  const textRef = useRef(null);
  const refs = useRef([]);
  const containerRef = useRef(null);
  const setRefs = (el) => {
    el && refs.current.push(el);
  };

  useEffect(() => {
    refs.current.forEach((input) => {
      gsap.to(
        input,
        {  opacity: 0 },
       
      );
    });
    gsap.to(textRef.current,{x:-300,opacity:0})

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "20% center" ,
      },
    });
    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "20% center" ,
      },
    });
 
    refs.current.forEach((input) => {
      t1.to(
        input,
        { opacity: 1,duration:0.5},
       
      );
    });

    t2.to(textRef.current, { x: 0 ,opacity:1,duration:1});
  }, []);
  return (
    <div className="position-relative quality" ref={containerRef}>
      <img src={QualityBg} alt="background" className="w-100" />

      <div className="quality-texts" ref={textRef}>
        <h2 className="quality-header">Our Food Quality</h2>
        <p>
          Lorem ipsum is placeholder
          <br /> text commonly used in <br />
          the graphic, print, and <br />
          publishing industries <br />
          layouts and visual mockups.<br />
          for previewing 
        </p>
      </div>
      <img
        src={qualityimg1}
        alt="background-one"
        className="end-0 position-absolute "
        style={{ width: "30%", top: "-10%", zIndex: 10000 }}
        ref={(el)=>{setRefs(el)}}
      />
      <img
        src={qualityimg2}
        alt="background-two"
        className="bottom-0 end-0 position-absolute "
        style={{ transform: "translate(25%,0)", height: "57%" }}
        ref={(el)=>{setRefs(el)}}
      />
      <img
        src={qualityimg3}
        alt="background-three"
        className="bottom-0 start-0 position-absolute "
        style={{ transform: "translate(-5%,0)", height: "38%" }}
        ref={(el)=>{setRefs(el)}}
      />
    </div>
  );
}

export default Quality;

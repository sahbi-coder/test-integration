
import aboutImage from "../../images/about.png";
import './about.css'


import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function ColorSchemesExample() {
  const imgRef = useRef(null);
  const refs = useRef([]);
  const containerRef = useRef(null);
  const setRefs = (el) => {
    el && refs.current.push(el);
  };

  useEffect(() => {
    refs.current.forEach((input) => {
      gsap.to(
        input,
        { x: 100, opacity: 0 },
       
      );
    });
    gsap.to(imgRef.current,{x:-300,opacity:0})

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
        { x: 0, opacity: 1 },
       
      );
    });

    t2.to(imgRef.current, { x: 0 ,opacity:1,duration:1});
  }, []);
  return (
    <>
      <div
        className=" about position-relative top-0 left-0  d-flex height w-100 justify-content-center align-items-center"
        ref= {containerRef}
      >
        <div className="about-left"  ref={imgRef}>
          <img
            alt="background"
            src={aboutImage}
            className='about-img'
           
          />
        </div>
        <div className="about-right">
          <h2 className="about-title" ref={(ref)=>{setRefs(ref)}}>About Us</h2>

          <p className="about-text" ref={(ref)=>{setRefs(ref)}}>
            Lorem ipsum is placeholder text commonly used in <br />
            the graphic, print, and publishingindustries for
            <br /> previewing layouts and visual mockups.
          </p>
        </div>
      </div>
    </>
  );
}

export default ColorSchemesExample;

import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImage from "../../images/background1.png";
import dish from "../../images/dish.png";
import Nav from "../navbar/Navbar";
import "./home.css";
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
      gsap.fromTo(
        input,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 }
      );
    });

    gsap.fromTo(imgRef.current, { x: -300 }, { x: 0, duration: 1 });
  }, []);
  return (
    <>
      <div
        className="container-fluid p-0 position-relative W-100 p-relative"
        style={{ height: "100vh" }}
        ref={containerRef}
      >
        <Nav />
        <div
          style={{ height: "100%" }}
          className="position-absolute top-0 left-0  w-100"
        >
          <img
            src={backgroundImage}
            alt="background"
            className="w-100"
            style={{ height: "100%", objectFit: "cover" }}
          />
        </div>
        <div
          className="position-absolute top-0 left-0"
          style={{
            opacity: 0.75,
            backgroundColor: "#28282d",
            height: "100vh",
            width: "100%",
          }}
        ></div>
        <div
          className="position-absolute top-0 left-0  d-flex height w-100 justify-content-center align-items-center"
          style={{
            backgroundColor: "transparent",
            height: "100vh",
          }}
        >
          <div className="w-50">
            <img
              src={dish}
              alt="background"
              style={{
                height: "60vh",
                width: "95%",
                objectFit: "contain",
                marginTop: "20%",
              }}
              ref={imgRef}
            />
          </div>
          <div className="w-50" style={{ marginTop: "10%" }}>
            <h1
              className="home-title"
              ref={(el) => {
                setRefs(el);
              }}
            >
              Contact Us For
              <br />
              Best Breakfast
            </h1>

            <p
              className="home-text"
              ref={(el) => {
                setRefs(el);
              }}
            >
              Lorem ipsum dolor sit amet,
            </p>
            <p
              className="home-text"
              ref={(el) => {
                setRefs(el);
              }}
            >
              consectetur adipiscing elit.
            </p>
            <button
              className="home-button"
              ref={(el) => {
                setRefs(el);
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ColorSchemesExample;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterLogo from "../../images/footerlogo.png";
import facebook from "../../images/fbicon.png"
import tweeter from "../../images/twicon.png"
import instagram from "../../images/instaicon.png"
import Pinterest from "../../images/picon.png"

function Footer() {
  return (
    <footer
      style={{ backgroundColor: "rgb(53, 53, 59)", color: "white" }}
      className="d-flex p-3 justify-content-center align-items-center flex-column"
    >
      <div className="d-flex justify-content-center align-items-center my-2 my-lg-3">
        <img src={FooterLogo} alt="footer logo" style={{maxWidth:'100%',objectFit:'cover'}}/>
      </div>
      <div class="d-flex justify-content-around align-items-center flex-column flex-sm-row m-3 w-75">
        <div  class="mx-1 mx-md-0">
          <p>HOME</p>
        </div>
        <div class="mx-1 mx-md-0">
          <p>ABOUT</p>
        </div>
        <div class="mx-1 mx-md-0">
          <p>SERVICES</p>
        </div>
        <div class="mx-1 mx-md-0">
          <p>FOODS</p>
        </div>
        <div class="mx-1 mx-md-0">
          <p>CONTACT</p>
        </div>
        <div class="mx-1 mx-md-0">
          <p>LOCATION</p>
        </div>
      </div>
      <div className="pb-5">
        <img src={facebook} alt='facebook icon' className="m-1"/>
        <img src = {tweeter} alt='tweeter icon' className="m-1"/>
        <img src = {instagram} alt='instagram icon' className="m-1"/>
        <img src = {Pinterest} alt='printerest icon' className="m-1"/>
        

      </div>
    </footer>
  );
}

export default Footer;

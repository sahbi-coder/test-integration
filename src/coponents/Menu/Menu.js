import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../Card/Card";
import menu1 from "../../images/menu1.png";
import menu2 from "../../images/menu2.png";
import menu3 from "../../images/menu3.png";

function Menu() {
  return (
    <>
      <h2 className="p-5 text-white text-center">Our Menu</h2>
      <div className="d-flex p-5 justify-content-center flex-wrap">
        <Card src={menu1} />
        <Card src={menu2}/>
        <Card src={menu3} />
      </div>
    </>
  );
}

export default Menu;

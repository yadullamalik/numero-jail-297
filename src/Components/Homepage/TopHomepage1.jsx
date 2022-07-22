
import React from "react";

import Signup from "./Signup";
import Timer from "./Timer";
import "./TopHome.css"
const TopHomepage1 = () => {
  return (
    <>
    <div className="tophome-div-heading"> <h1>
        Time tracking for{" "}
        <span style={{ color: "rgb(229, 124, 216)" }}>
          <i>better</i>
        </span>{" "}
        work,
        <br /> not overwork.
      </h1></div>
    
   
      <div className="tophome-div-sign-timer">
       
          <Signup />
       
          <Timer />
       </div>
      <img style={{cursor:"pointer",width:"100%"}} src="https://github.com/Kgaurav113/homepage/blob/master/public/h2.JPG?raw=true" alt="" />
    </>
  );
};

export default TopHomepage1;

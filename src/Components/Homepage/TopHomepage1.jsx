
import React from "react";

import Signup from "./Signup";
import Timer from "./Timer";
import topstyle from "./TopHome.module.css"
const TopHomepage1 = () => {
  return (
    <>
    <div className={topstyle.tophome_div_heading}> <h1>
        Time tracking for{" "}
        <span style={{ color: "rgb(229, 124, 216)" }}>
          <i>better</i>
        </span>{" "}
        work,
        <br /> not overwork.
      </h1></div>
    
   
      <div className={topstyle.tophome_div_sign_timer}>
       
          <Signup />
       
          <Timer />
       </div>
      <img style={{cursor:"pointer",width:"100%"}} src="https://github.com/Kgaurav113/homepage/blob/master/public/h2.JPG?raw=true" alt="" />
    </>
  );
};

export default TopHomepage1;

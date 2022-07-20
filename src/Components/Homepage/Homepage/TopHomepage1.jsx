
import React from "react";

import Signup from "./Signup";
import Timer from "./Timer";

const TopHomepage1 = () => {
  return (
    <>
     
   
      <div style={{ display: "flex",backgroundColor:"rgb(44, 19, 56)"}}>
        <div>
          <Signup />
        </div>
        <div style={{ margin: "auto" }}>
          <Timer />
        </div>
      </div>
      <img style={{cursor:"pointer",width:"100%"}} src="https://github.com/Kgaurav113/homepage/blob/master/public/h2.JPG?raw=true" alt="" />
    </>
  );
};

export default TopHomepage1;

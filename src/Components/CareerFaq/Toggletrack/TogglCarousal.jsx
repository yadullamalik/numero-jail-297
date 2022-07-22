import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "https://i.postimg.cc/FRfFKj4L/togglC1.png" },
    { url: "" },
    { url: "" },
    
    { url: "" },
    { url: "" },
    { url: "" },
    { url: ""},
];

const Carousel  = () => {
  return (
    <div>
         <SimpleImageSlider
                width={"70%"}
                height={"63vh"}
                images={images}
                showBullets={true}
                showNavs={true}
                style={{ cursor: "pointer" , marginLeft:"14px" , marginTop:"20px"} }
                navSize={60}
                navMargin={20}
                border_Redias={"5px"}
                loop={true}
                autoPlay={true}
                autoPlayDelay={3.0}
                slidesPerView={2}
                
                
            />
    </div>
  )
}

export default Carousel
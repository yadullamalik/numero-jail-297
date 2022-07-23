import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "https://i.postimg.cc/FRfFKj4L/togglC1.png" },
    { url: "https://i.postimg.cc/KzmBytNh/ToggleC2.png" },
    { url: "https://i.postimg.cc/bwT29ZP6/TogglC3.png" },
     { url: "https://i.postimg.cc/Ghn80Fh7/TogglC4.png" },
    { url: "https://i.postimg.cc/QxSWg16w/TogglC5.png" },
    { url: "https://i.postimg.cc/Qx6HKsCr/TogglC6.png" },
    { url: "https://i.postimg.cc/XqjYXD0J/TogglC7.png"},
];

const Carousel  = () => {
  return (
    <div>
         <SimpleImageSlider
                width={"80%"}
                height={"60vh"}
                images={images}
                showBullets={true}
                showNavs={true}
                style={{ cursor: "pointer" , marginLeft:"14px" , marginTop:"20px"} }
                navSize={60}
                navMargin={20}
                border_Redias={"5px"}
                loop={true}
                // autoPlay={true}
                // autoPlayDelay={3.0}
                slidesPerView={2}
                
                
            />
    </div>
  )
}

export default Carousel
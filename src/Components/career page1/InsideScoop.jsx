import React,{useState} from "react";
import data from './data.json'
import "./styles/InsideScoop.css";

const InsideScoop = ()=>{

    return(
    <div>
        <img style={{
            marginLeft:"670px"
        }} src="https://public-assets.toggl.com/b/static/illo-megaphone-dark-f172b5380650e29d114fccee5268a0f5.gif"/>
    <h1 style={{
            marginLeft:"600px",
            color:"beige",
            fontSize: "50px",
            color: "#ffde91",
        }}>The Inside Scoop</h1>
    <p className="para_g">A sneak peek behind the scenes - from our living rooms to epic meetups around the world</p>
<button style={{
     padding: "15px 35px",
     fontSize:"15px",
     fontWeight: "bold",
     backgroundColor:"#ffde91",
     border:"#ffde91",
     borderRadius: "20px",
     color:"#2c1338",
     marginLeft:"650px",
     marginTop:"50px",
}} >Read more from our team</button>
    <div className="container">
    {data.map(item => (
    <div className="card" key={item.id}>
    <div className="card_image">
    <img className="image1" src={item.imgURL} alt={item.name} />
    </div>
    <p className="title">{item.title}</p>  
    <p className="inside_para">{item.para}</p> 
  <button className="btn4">ReadMore</button>                      
  </div>
    ))};
    </div>
    </div>
    )}
export default InsideScoop
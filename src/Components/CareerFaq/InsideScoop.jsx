import React,{useState} from "react";
import data from '../data.json'
import styles from "../styles/InsideScoop.modules.css";

const InsideScoop = ()=>{

    return(
    <div>
        <img className="inside" src="https://public-assets.toggl.com/b/static/illo-megaphone-dark-f172b5380650e29d114fccee5268a0f5.gif"/>
    <h1 className="mini">The Inside Scoop</h1>
    <p className="para-g">A sneak peek behind the scenes - from our living rooms to epic meetups around the world</p>
<button className="btn1">Read more from our team</button>
    <div className="container">
    {data.map(item => (
    <div className="card" key={item.id}>
    <div className="card-image">
    <img className="image1" src={item.imgURL} alt={item.name} />
    </div>
    <p className="title">{item.title}</p>  
    <p className="inside-para">{item.para}</p> 
  <button className="btn4">ReadMore</button>                      
  </div>
    ))};
    </div>
    </div>
    )}
export default InsideScoop
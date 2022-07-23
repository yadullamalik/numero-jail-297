import React from 'react'
import styles from "../styles/ToggleTrack.modules.css";
import TogglCarousel from './TogglCarousal';
const ToggleTrack = () => {
  return (
    <div>
      <div className='toggl-td1'>
        <div className='td-heading1'>
        <h2>We believe knowing where we’re going is more relevant than knowing where we are. We're guided by a strong “why”, a clear “how”, and a unique set of values. And we know it’ll take us into a spectacular future.</h2>
        <h1 style={{
           color:"#ffde91" ,
           fontFamily: "'GT Haptik Medium',sans-serif",
           fontSize: "50px",
           marginLeft: "-850px",
           marginTop: "100px",
        }}>Our Vision</h1>
         <p style={{
         width:"680px",
         color: "#fff3ed",
         fontFamily: "'GT Haptik Medium',sans-serif",
         fontSize:" 20px",
         textAlign:"left",
         marginLeft:" -140px",
         }}>We believe that work should be stress-free, rewarding, and empowering—and that it can be. We’re here to guard our users against dehumanization, surveillance, and invasive monitoring. And to help everyone spend their time on the work that matters.</p>
<img style={{
      marginLeft:" 700px",
      marginTop: "-160px",
}} src="https://public-assets.toggl.com/b/static/2e840d01109ccdc6a0b98598e3f462d4/2c7ea/vision.png"/> 
<div  style={{
   marginLeft: "-600px",
   marginTop: "100px",
}}>
<img src="https://public-assets.toggl.com/b/static/9e6ee747560eb4b0cba4d45dd322bfa3/bae40/mission.png"/>
 </div>
 <h1 style={{
width:" 850px",
marginLeft: "60px",
color:"#e47bd7",
fontFamily:"'GT Haptik Medium',sans-serif",
marginTop: "-300px",
fontSize: "50px",
 }}>Our Mission</h1>
<p style={{
   fontSize: "20px",
   textAlign: "left",
   color:" #fff3ed",
   width: "670px",
   marginLeft: "340px",
}}>We elevate productivity for solo users, small teams, agencies, and enterprises alike.
<br/>
<br/>
Toggl Track makes time tracking surprisingly easy and easily rewarding. Our users won’t spend their time inputting time, because our powerful tools will do this work for them. We aim to amaze our customers with insights so valuable we’ll feel like intelligent partners—more than just a collection of features.
 <br/>
 <br/>
 We’re not here to conform to trends. We’re here to set them, and if needed, break them. Toggl Track is the time tracker your team wants to use. It’s here to help build the future of work that we all deserve.</p>
 </div>
 </div> 
       
        <div className='toggle-td2'>

        <div style={{
          fontSize:" 45px",
          marginTop: "1080px",
          color:"black" ,
          fontWeight:" bold",
          // transform: "skewY(10deg)",
        }}>Our Values</div>
<p style={{
  width: "580px",
  // transform: "skewY(-10deg)",
  marginTop: "40px",
  fontSize: "19px",
  marginLeft: "500px",
}}>These seven values influence the way we act, both as individuals and as a team, and what we strive for. They also influence the way we work – in a Results-Oriented Work Environment. Learn more about how we ROWE.</p>

<div style={{
    // transform: "skewY(-10deg)", 
    marginTop: "100px",
    marginLeft:"160px",
}}> <TogglCarousel/>
  <p style={{
      width: "450px",
      marginLeft: "370px",
      marginTop: "70px",
  }}>Trust is pivotal not only to our culture but also for our product.
If you’d like to learn more,</p>
<div style={{
  width: "500px",
  height: "70px",
  border: "1px solid #f5cbef",
  marginLeft: "350px",
  marginTop: "58px",
  borderRadius:"40px",
  backgroundColor: "#f5cbef ",
}}>
  <p style={{
     marginLeft: "-110px",
  }}>Check out our statement against surveillance</p>
  <img style={{
      marginLeft: "370px",
      marginTop:"-115px",
  }} src="https://public-assets.toggl.com/b/static/c66709be1d6b12433fb7e0eb9c4d7bee/ba5dd/illo-bicycle.png"/>

</div>
</div>

 <div className='sd7'></div>
 <h1 style={{
   color:"#ffde91",
   fontFamily: "'GT Haptik Medium',sans-serif",
   fontSize: "50px",
   marginTop:"200px",
 }}>Are you in?</h1>
  <p style={{
    color:"#fdf1ec",
  }}>If all of the above resonated with you, come join us!</p>
  <button style={{
      height: "50px",
      padding: "15px 35px",
       fontSize: "13px",
       backgroundColor:"#ffde91",
       border:"#ffde91" ,
       borderRadius: "30px",
       marginTop:"20px",
  }}>Check out our job openings</button>
        </div>
 </div>
  )
}

export default ToggleTrack





























// import React from 'react'
// import styles from "../styles/ToggleTrack.modules.css";
// const ToggleTrack = () => {
//   return (
//     <>
//     <div>
// <div className='td1'>
//     <div className='td-heading1'>   <h1 >We believe knowing where we’re going is more relevant than knowing where we are. We're guided by a strong “why”, a clear “how”, and a unique set of values. And we know it’ll take us into a spectacular future.</h1></div>
//  <h1 className='vision'>Our Vision</h1>
//  <p className='td-para1'>We believe that work should be stress-free, rewarding, and empowering—and that it can be. We’re here to guard our users against dehumanization, surveillance, and invasive monitoring. And to help everyone spend their time on the work that matters.</p>
// <img className='td-img1' src="https://public-assets.toggl.com/b/static/2e840d01109ccdc6a0b98598e3f462d4/2c7ea/vision.png"/>

// <div  className='td-img2'>
// <img src="https://public-assets.toggl.com/b/static/9e6ee747560eb4b0cba4d45dd322bfa3/bae40/mission.png"/>
// </div>
// <h1 className='td-heading2'>Our Mission</h1>
// <p className='td-para2'>We elevate productivity for solo users, small teams, agencies, and enterprises alike.
// <br/>
// <br/>
// Toggl Track makes time tracking surprisingly easy and easily rewarding. Our users won’t spend their time inputting time, because our powerful tools will do this work for them. We aim to amaze our customers with insights so valuable we’ll feel like intelligent partners—more than just a collection of features.
// <br/>
// <br/>
// We’re not here to conform to trends. We’re here to set them, and if needed, break them. Toggl Track is the time tracker your team wants to use. It’s here to help build the future of work that we all deserve.</p>
// </div>

// <div className='td2'></div>
//     </div>


  
    
//     </>
//   )
// }

// export default ToggleTrack

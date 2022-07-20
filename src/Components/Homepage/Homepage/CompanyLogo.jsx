import React from 'react'
import "./CompanyLogo.css"
const CompanyLogo = () => {
  return (
    <div className='companylogo-main-div'>
        <div >
            <img  style={{width:"100%"}} src="https://i.postimg.cc/d34DDP24/comp-logo.png" alt="" />
           <div style={{background:"#2C1338",height:"150px"}}><button className='logobtn1'>Start Tracking for free</button><span style={{color:"violet",marginLeft:"20px",fontWeight:"bold"}}>or book a demo</span></div> 
        </div>
       
   <img style={{width:"100%"}}  src="https://i.postimg.cc/rFDXskyP/watch.png" alt="" />
   <img style={{width:"100%"}} src="https://i.postimg.cc/bJwV5xsB/inter.png" alt="" />
    </div>
  )
}

export default CompanyLogo
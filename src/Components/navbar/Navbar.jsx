import React, { useState } from 'react'
import "./Navbar.css"
import Product  from "./Product"
import Track from './Track'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react'
import Career from './Career'
const Navbar = () => {
  const [nav,setNav]=useState(false)
  console.log('nav:', nav)
  return (
    
    <div className='navbar-main' style={nav===true?{backgroundColor:"#FCE5D8",color:"black"}:{backgroundColor:"rgb(44, 19, 56)"}}>
        <div className='navbar-main1'>
            
            <div className=' navbar-sub2' >

                
            <img className="navbarlogo" style={nav===true?{width:"170px",height:"170px",marginTop:"-50px"}:null} src={nav===true?"https://i.postimg.cc/J0pYgp7h/62cc45b67755665152a8df78-2.png":"https://i.postimg.cc/15xn0jkm/logo.png"} alt="" />        
       
<Accordion allowToggle display='flex' className='toogle1'  >
  <AccordionItem>
 
    <h2>
      <AccordionButton  background='rgb(44, 19, 56); ' border='#412a4c ' style={nav===true?{backgroundColor:"#FCE5D8",color:"black"}:null} >

        <Box onClick={()=>{setNav(!nav)}} flex='1'lineHeight='30px' fontSize='15px' style={nav===true?{backgroundColor:"#FCE5D8",color:"black"}:null}  background='rgb(44, 19, 56); ' color='#ece1d7'>
        Product
        </Box>
        <AccordionIcon color=' #ece1d7' style={nav===true?{backgroundColor:"#FCE5D8",color:"black"}:null}  fontSize='30px'fontWeight='bold' />
      </AccordionButton>
    </h2>
    <AccordionPanel className='button1'>
    <div><Product/></div>
    </AccordionPanel>
  </AccordionItem>
 
  <AccordionItem>
    <h2>
      <AccordionButton  background='rgb(44, 19, 56); 'style={nav===true?{backgroundColor:"#FCE5D8",color:"black"}:null} border='#412a4c '>
        <Box flex='1'lineHeight='30px' fontSize='15px' style={nav===true?{backgroundColor:"#FCE5D8",color:"black"}:null}  background='rgb(44, 19, 56); ' color='#ece1d7' >
        Pricing
        </Box>
        
      </AccordionButton>
    </h2>
    
  </AccordionItem>
  
  <AccordionItem>
    <h2>
      <AccordionButton  background='rgb(44, 19, 56); 'style={nav===true?{backgroundColor:"#FCE5D8",color:"black"}:null} border='#412a4c '>
        <Box onClick={()=>{setNav(!nav)}} flex='1'lineHeight='30px' fontSize='15px' style={nav===true?{backgroundColor:"#FCE5D8",color:"black"}:null} background='rgb(44, 19, 56); ' color='#ece1d7'>
        WhyTrack
        </Box>
        <AccordionIcon color=' #ece1d7' style={nav===true?{backgroundColor:"#FCE5D8",color:"black"}:null} fontSize='30px' />
      </AccordionButton>
    </h2>
    <AccordionPanel className='button1'  >
   <div className='navbar-track'>
    <Track/></div>
      
    </AccordionPanel>
  </AccordionItem>
  <div className='line'></div>
  <AccordionItem>
    <h2>
      <AccordionButton  background='rgb(44, 19, 56); 'style={nav===true?{backgroundColor:"#FCE5D8",color:"black"}:null} border='#412a4c '>
        <Box onClick={()=>{setNav(!nav)}} flex='1'lineHeight='30px' fontSize='15px' textAlign='left'style={nav===true?{backgroundColor:"#FCE5D8",color:"black"}:null}  background='rgb(44, 19, 56); ' color='#ece1d7'>
        Careers
        </Box>
        <AccordionIcon color=' #ece1d7'style={nav===true?{backgroundColor:"#FCE5D8",color:"black"}:null} fontSize='30px'fontWeight='bold'  />
      </AccordionButton>
    </h2>
    <AccordionPanel  className='button1' >
    <div className='navbar-careers'>
      <Career/>
    </div>
      
    </AccordionPanel>
  </AccordionItem>
  <div className='line'></div>
  
  
  
   
 
</Accordion>
      
    
                
            </div>

        </div>
        <div className='navbar-main2'>
            <div className='navbar-book' style={nav===true?{backgroundColor:"#FCE5D8",color:"black"}:null}>Book A  Demo</div>
            <hr className='navbar-hr' />
            <div className='navbar-log' style={nav===true?{backgroundColor:"#FCE5D8",color:"black"}:null}> Log in</div>
          <button className='navbar-free' style={nav===true?{backgroundColor:"#E57CD8",color:"black",border:"none"}:{backgroundColor:"#FFF3ED",color:"#E57CD8",border:"none "}}>try for free</button>

        </div>
        
        

    </div>
    
    

  )
}

export default Navbar

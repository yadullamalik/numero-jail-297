import React from 'react'
import "./Navbar.modules.css"
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
  return (
    
    <div className='navbar_main' style={{backgroundColor:"rgb(44, 19, 56)"}}>
        <div className='navbar_main1'>
            
            <div className=' navbar_sub2' >

                
            <img className="navbarlogo" src="https://i.postimg.cc/15xn0jkm/logo.png" alt="" />        
       
<Accordion allowToggle display='flex' className='toogle1'  >
  <AccordionItem>
 
    <h2>
      <AccordionButton  background='rgb(44, 19, 56); ' border='#412a4c ' >

        <Box flex='1'lineHeight='30px' fontSize='15px'  background='rgb(44, 19, 56); ' color='#ece1d7'>
        Product
        </Box>
        <AccordionIcon color=' #ece1d7' fontSize='30px'fontWeight='bold' />
      </AccordionButton>
    </h2>
    <AccordionPanel className='button1'>
    <div><Product/></div>
    </AccordionPanel>
  </AccordionItem>
 
  <AccordionItem>
    <h2>
      <AccordionButton  background='rgb(44, 19, 56); ' border='#412a4c '>
        <Box flex='1'lineHeight='30px' fontSize='15px'   background='rgb(44, 19, 56); ' color='#ece1d7' >
        Pricing
        </Box>
        <AccordionIcon color=' #ece1d7' fontSize='30px'fontWeight='bold'  />
      </AccordionButton>
    </h2>
    
  </AccordionItem>
  
  <AccordionItem>
    <h2>
      <AccordionButton  background='rgb(44, 19, 56); ' border='#412a4c '>
        <Box flex='1'lineHeight='30px' fontSize='15px'  background='rgb(44, 19, 56); ' color='#ece1d7'>
        WhyTrack
        </Box>
        <AccordionIcon color=' #ece1d7' fontSize='30px' />
      </AccordionButton>
    </h2>
    <AccordionPanel className='button1'  >
   <div className='navbar_track'>
    <Track/></div>
      
    </AccordionPanel>
  </AccordionItem>
  <div className='line'></div>
  <AccordionItem>
    <h2>
      <AccordionButton  background='rgb(44, 19, 56); ' border='#412a4c '>
        <Box flex='1'lineHeight='30px' fontSize='15px' textAlign='left'  background='rgb(44, 19, 56); ' color='#ece1d7'>
        Careers
        </Box>
        <AccordionIcon color=' #ece1d7' fontSize='30px'fontWeight='bold'  />
      </AccordionButton>
    </h2>
    <AccordionPanel  className='button1' >
    <div className='navbar_careers'>
      <Career/>
    </div>
      
    </AccordionPanel>
  </AccordionItem>
  <div className='line'></div>
  
  
  
   
 
</Accordion>
      
    
                
            </div>

        </div>
        <div className='navbar_main2'>
            <div className='navbar_book'>Book A  Demo</div>
            <hr className='navbar_hr' />
            <div className='navbar_log'> Log in</div>
          <button className='navbar_free'>try for free</button>

        </div>
        
        

    </div>
    
    

  )
}

export default Navbar

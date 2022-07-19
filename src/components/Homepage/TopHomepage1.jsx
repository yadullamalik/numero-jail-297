import { Heading } from '@chakra-ui/react'
import React from 'react'

import Signup from './Signup'
import Timer from './Timer'

const TopHomepage1 = () => {
  return (
    <>
    <Heading color={"white"}>Time tracking for <span style={{color:"rgb(229, 124, 216)"}}><i>better</i></span>  work,<br/> not overwork.</Heading>
   
    <div style={{display:"flex"}}>

    <div>

<Signup/>

    </div>
    <div style={{margin:"auto"}}><Timer/></div>
</div>

</>
  )
}

export default TopHomepage1
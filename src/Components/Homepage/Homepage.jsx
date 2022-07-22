import React from 'react'
import CompanyLogo from './CompanyLogo'
import Footer from './Footer'
import FooterSignup from './FooterSignup'

import SecondHome from './SecondHome'



import TopHomepage1 from './TopHomepage1'

const Homepage = () => {
  return (
    <div>
        <TopHomepage1/>
        <SecondHome/>
        <CompanyLogo/>
        <FooterSignup/>
        <Footer/>
       
    </div>
  )
}

export default Homepage
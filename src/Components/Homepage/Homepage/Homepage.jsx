import React from 'react'
import CompanyLogo from './CompanyLogo'
import SecondHome from './SecondHome'
import { SignupHome } from '../Singuphome'

import TopHomepage1 from '../TopHomepage1'

const Homepage = () => {
  return (
    <div>
        <TopHomepage1/>
        <SecondHome/>
        <CompanyLogo/>
        <SignupHome/>
    </div>
  )
}

export default Homepage
import React from 'react'
import { AnnualPriceData } from "../Data/PriceData";
import BillingCard from './BillingCard';

const Annual = () => {
  return (
    <div style={{display:"flex", gap:"10px",margin:"auto",width:"85%"}}>
        {AnnualPriceData.map((el)=>{
           return <BillingCard key={el.MainHeading} data={el}/>
        })}
    </div>
  )
}

export default Annual
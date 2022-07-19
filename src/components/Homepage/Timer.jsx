import React, { useEffect, useState } from 'react'
import { BsAlarm, BsAlignEnd, BsStopBtn } from 'react-icons/bs';
import "./Timer.css"
const Timer = () => {
    const[second,setsecond]=useState(0)
    const[hours,setHours]=useState(0);
    const[hour,setHour]=useState(0);
    const[mintues,setmintues]=useState(0)
    var timer;
    useEffect(() =>{
    timer=setInterval(() =>{
    setsecond(second+1)
    if(second>59){
        setmintues(mintues+1)
        setsecond(0)
    }
    if(mintues>59){
        setHour(hour+1)
        setHours(0)
    }
  
    })
    return()=>clearInterval(timer)
    });
 

  return (
       <>
       <div className='timer'>
                 <div><p>Stand-up meeting</p></div>  
                   <div>
                    <h2>{hours<10 ? "0"+hours:hours}:{mintues<10 ? "0"+mintues:mintues} </h2>
                    </div>
                   <div className='stopicon'>
                    <div style={{backgroundColor:"white",width:"40%",justifyContent:"center",alignItems:"center",height:"60%",margin:"auto",marginTop:"5px"}}></div>
                   </div>
                   
                   </div>
       </>
  )
}

export default Timer
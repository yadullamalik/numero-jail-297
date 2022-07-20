import React, { useEffect, useState } from 'react'
import { BsPause, BsStop } from 'react-icons/bs';
import "./Timer.css";
const Timer= () => {
    const [second, setsecond] = useState(0);
  const [mintues, setmintues] = useState(0);
  const [hours, sethours] = useState(0);
  const[pause,setpause]=useState(false);

  useEffect(() => {
    let timer = setInterval(() => {
      if(pause){
      setsecond(second + 1);
      if (second === 59) {
        setmintues(mintues + 1);
        setsecond(0);
      }
      if (mintues === 59) {
        sethours(hours + 1);
        setmintues(0);
      }
    }
    }, 1000);

    return () => clearInterval(timer);
  });
 
 

  // for stop
  const stop = () => {
    setpause(!pause);
  };

  return (
    <>
      <div className="timer">
        <h1 className='timerh1'>Stand-up Meeting</h1>
          <div className="timer-container" >
           
            <h1 className='headingTimer'>
              {hours < 10?"0"+hours:hours}:
              {mintues < 10 ? "0" + mintues : mintues}:
              {second < 10 ? "0" + second : second}
            </h1>
          </div>
        
          <div> <button
            onClick={stop}
            style={{
              backgroundColor: "rgb(232, 113, 97)",
          height:"50px",
          width:"50px",
              fontSize: "20px",
             marginLeft:"30px",
             marginTop:"7px",
             padding:"10px",
             paddingLeft:"15px",
              borderRadius:"50%",
            }}
          >
           {(!pause)?< BsStop/>:<BsPause/>}
          </button></div>
         
        </div>
      <h1 className='textundertimer'>
“I love the ease of just clocking in <br/>and out with <span><i style={{color:"rgb(201, 108, 192)"}}>just one click!</i></span>”</h1>
<h1 className='textundertimer2'>-Quelani P.
</h1>
    </>
  );
}

export default Timer;
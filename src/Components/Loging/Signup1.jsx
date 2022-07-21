import React from 'react'
import Signstyle from "./Sign.module.css";
import Footer from '../Homepage/Footer';
const Signup1 = () => {
  return (
   
 
    <div>

<div className={Signstyle.signupheading}>
<img src="https://i.postimg.cc/QxzkyhCG/toggle-icon.png" alt="" />
  <h1 className={Signstyle.heads1top}>Sign up for a <i style={{color:"rgb(229, 124, 216)"}}>free</i> Toggl Track account</h1>
  <p className={Signstyle.paras1top} >All plans come with a free, 30-day trial of Toggl Track Premium—no credit card required.<br/>
Upgrade at the end of the trial or continue using Track for free forever.<br/>

Already have an account? Log in here.</p>
</div>
 <div className={Signstyle.flexdiv}>
<div className={Signstyle.main}>
  
<div className={Signstyle.top}>
      <button   type="submit" className={Signstyle.google}  > <img className={Signstyle.googleimg} src="https://img.icons8.com/color/452/google-logo.png" alt="google"/>Signup via Google</button>
       <button className={Signstyle.google}> <img className={Signstyle.googleimg} src="https://cdn.iconscout.com/icon/free/png-256/apple-853-675472.png" alt="apple"/> Sign up via Apple</button>
    </div> 
<br />
<br/>
<h3 className={Signstyle.h3inline}>OR</h3>
<br />
<form>

   
   
  <div className={Signstyle.forms}>
      <label>Email </label><br/>
      <input type="text" placeholder="Email" /> <br/>
      <label>Password</label><br/>
      <input type="text" placeholder="Password" />
  </div>
  
   <br/>
  <div>
       <button  type="submit" className={Signstyle.btn2log} >sign up via email</button>
       <p className={Signstyle.textundersubmit}>By signing up, you agree to our terms of service, privacy policy and to receiving marketing communication from Toggl Track. You can opt out anytime.</p>
  </div>
</form>

</div> 
<div><img src="https://i.postimg.cc/MZryZZDX/signtext.png" alt="" /></div>
</div>

<div> <Footer/></div>
 
</div>
  )
}

export default Signup1
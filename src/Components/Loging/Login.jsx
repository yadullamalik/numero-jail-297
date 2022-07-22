import React, { useState } from 'react'
import Footer from '../Homepage/Footer'
import logstyle from "./Login.module.css"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
 import { Link } from 'react-router-dom'
 import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const navigate = useNavigate();

  const [inpval, setInpval] = useState({
      email: "",
      password: ""
  })

  const [data, setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
      // console.log(e.target.value);


      const { value, name } = e.target;
      // console.log(value,name);


      setInpval(() => {
          return {
              ...inpval,
              [name]: value
          }
      })

  }

  const addData = (e) => {
      e.preventDefault();

      const getuserArr = localStorage.getItem("useryoutube");
      console.log(getuserArr);

      const { email, password } = inpval;
      if (email === "") {
          toast.error('email field is requred', {
              position: "top-center",
          });
      } else if (!email.includes("@")) {
          toast.error('plz enter valid email addres', {
              position: "top-center",
          });
      } else if (password === "") {
          toast.error('password field is requred', {
              position: "top-center",
          });
      } else if (password.length < 5) {
          toast.error('password length greater five', {
              position: "top-center",
          });
      } else {

          if (getuserArr && getuserArr.length) {
              const userdata = JSON.parse(getuserArr);
              const userlogin = userdata.filter((el, k) => {
                  return el.email === email && el.password === password
              });

              if (userlogin.length === 0) {
                  alert("invalid details")
              } else {
                  console.log("user login succesfulyy");

                  localStorage.setItem("user_login", JSON.stringify(userlogin))

                  navigate("/")
              }
          }
      }

  }
  return (
    <div className={logstyle.cont}>
 
    <div className={logstyle.wrap}  >

     
    </div>
    <div className={logstyle.centered}>
      <h3 className={logstyle.h2log} >Log in to your account</h3> 
      <h3 className={logstyle.h3log}>Let's get Tracking!</h3>
    </div>
 
<div className={logstyle.main}>

<form>

    <div className={logstyle.top}>
      <button   type="submit" className={logstyle.google}  > <img className={logstyle.googleimg} src="https://img.icons8.com/color/452/google-logo.png" alt="google"/>Signup via Google</button>
       <button className={logstyle.google}> <img className={logstyle.googleimg} src="https://cdn.iconscout.com/icon/free/png-256/apple-853-675472.png" alt="apple"/> Sign up via Apple</button>
    </div>
    <br/><br/><br/><br/>
  <div className={logstyle.forms}>
      <label>Email </label><br/>
      <input type="text" placeholder="Email"  name='email' onChange={getdata} isRequired/> <br/>
      <label>Password</label><br/>
      <input type="password" placeholder="Password"  name='password' onChange={getdata} isRequired/>
  </div>
   <div style={{
     textAlign:"right"
   }}>
        <span className={logstyle.forgot}>Forgot Password?</span>
   </div>
   <br/>
  <div>
       <button  type="submit" onClick={addData} className={logstyle.btn2log} >Log in</button>
  </div>
</form>
</div>
<div className={logstyle.bottom}>
 <p>Don't have an account?</p>
<Link to="/signup"><button className={logstyle.linkbutton}>Sign up for free</button></Link> 
 <br/><br/><br/>
</div>
<div> <Footer/></div>
 
</div>
  )
}

export default Login
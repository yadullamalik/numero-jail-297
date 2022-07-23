import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";
import style from "./Signup.module.css";
const Signup = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div className={style.signUpDiv}>
      <div className={style.signUpSecondDiv}>
        <h1>
          Sign up for <div className={style.skewed}> free</div>. No credit card
          required.
        </h1>
        <div className={style.inputDiv}>
          <Input placeholder="Basic usage" borderRadius="0px" />
          <InputGroup className={style.inputGroup} size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              borderRadius="0px"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? <ViewOffIcon /> : <ViewIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <div className={style.signupButton}>
            <p>Sign up with email</p>
          </div>
          <p>Or sign up with: </p>
          <div className={style.logoDiv}>
            <img
              src="https://www.svgrepo.com/show/333547/google.svg"
              alt="google"
            />
          </div>
          <div className={style.logoDiv}>
            <img
              src="https://www.svgrepo.com/show/333501/apple.svg"
              alt="apple"
            />
          </div>
        </div>
        <p>
          By signing up, you agree to our terms of service, privacy policy and
          to receiving marketing communication from Toggl Track. You can opt out
          anytime.
        </p>
      </div>
    </div>
  );
};

export default Signup;

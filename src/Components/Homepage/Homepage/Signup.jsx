import {
  Flex,
  Box,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  useColorModeValue,
  Text,
  Center,
  Heading,
  useToast,
} from "@chakra-ui/react";
import "./Signup.css";
import { BsApple, BsGoogle } from "react-icons/bs";
import { useReducer, useState } from "react";
// import {Link as RouterLink} from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

function reducer(state, action) {
  console.log("statechecking",state)
  switch (action.type) {
    case "email":
      return {
        ...state,
        email: action.payload,
      };
    case "password":
      return {
        ...state,
        password: action.payload,
      };

    default:
      return state;
  }
}
const initialState = {
  email: "",
  password: "",
};

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [state, dispatch] = useReducer(reducer,initialState);
  const toast = useToast()
  console.log(state);
 
  return (
    <Box>

<h1 className="Headingsignup-homepage">
        Time tracking for{" "}
        <span style={{ color: "rgb(229, 124, 216)" }}>
          <i>better</i>
        </span>{" "}
        work,
        <br /> not overwork.
      </h1>
    <Flex
      minH={"50vh"}
      align={"center"}
      marginLeft={"50px"}
      bg={useColorModeValue("rgb(44, 19, 56)")}
    >
    
      <Stack spacing={8} maxW={"lg"} py={12} px={6}>
      <p style={{color:"white" ,textAlign:"left" ,marginLeft:"50px"}}>Join 5 million users in using the world's best time tracking software</p>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("rgb(44, 19, 56)", "rgb(252, 229, 216)")}
          boxShadow={"lg"}
          p={8} width={"500px"} marginLeft={"50px"}
          
         
        >
          <Stack spacing={4} height={"100px"}>
            <FormControl id="email" isRequired>
              <Input
                type="email" 
                value={state.email} placeholder="Email" borderRadius={1}
                onChange={(e) =>
                  dispatch({ type: "email", payload: e.target.value })
                }
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <InputGroup >
                <Input 
                  type={showPassword ? "text" : "password"}
                  value={state.password} placeholder="Password" borderRadius={1}
                  onChange={(e) =>
                    dispatch({ type: "password", payload: e.target.value })
                  }
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack flexDirection={"row"} gap={"20px"}>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  width={"200px"}
                  bg={"rgb(229, 124, 216)"}
                  color={"white"}
                  borderRadius={"50px"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={() =>
                    toast({
                      title: 'Account created.',
                      description: "We've created your account for you.",
                      status: 'success',
                      duration: 9000,
                      isClosable: true,
                      position:"top"
                    })}
                >
                  Sign up with email
                </Button>
              </Stack>
              <Stack className="signuptext">
                <p style={{ color: "white", marginTop: "10px" }}>
                  Or sign up with:
                </p>
              </Stack>
              <Box>
                <BsGoogle color="white" margintop="10px" size={"40px"}/>
              </Box>
              <Box>
                <BsApple color="white" size={"40px"}/>
              </Box>
              
             
            </Stack>
         
          </Stack>
        </Box>
       
     
      </Stack>
    </Flex>
    </Box>
  );
}

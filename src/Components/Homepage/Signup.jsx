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
import { useNavigate } from "react-router-dom";


export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  
  const toast = useToast()
  
  const navigate = useNavigate();

    const [inpval, setInpval] = useState({
       
        email: "",
     
        password: ""
    })

   

    const [data,setData] = useState([]);
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
        console.log(inpval)

        const {  email, password } = inpval;

      
        if (email === ""  ) {
         

             toast.error('email field is requred',{
                position: "top-center",
            });
        } else if (!email.includes("@")) {
             toast.error('plz enter valid email address',{
                position: "top-center",
            });
        }  else if (password === "") {
             toast.error('password field is requred',{
                position: "top-center",
            });
        } else if (password.length < 5) {
             toast.error('password length greater five',{
                position: "top-center",
            });
        } else {
            console.log("data added succesfully");
           
            localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));

        }

}
  return (
    <Box>


    <Flex
      minH={"50vh"}
      align={"center"}
      marginLeft={"20px"}
      bg={useColorModeValue("rgb(44, 19, 56)")}
      color={"white"}
    >
    
      <Stack spacing={8} maxW={"lg"} py={12} px={6}>
      <p style={{color:"white" ,textAlign:"left" ,marginLeft:"50px"}}>Join 5 million users in using the world's best time tracking software</p>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("rgb(44, 19, 56)", "rgb(252, 229, 216)")}
          boxShadow={"lg"}
          p={8} width={"100%"} marginLeft={"50px"} 
          onClick={addData}
       
        >
          <Stack spacing={4} height={"100px"}>
            <FormControl id="email" isRequired>
              <Input
                type="email" 
                 placeholder="Email" borderRadius={1}
                name='email' onChange={getdata}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <InputGroup >
                <Input 
                  type={showPassword ? "text" : "password"}
                 placeholder="Password" borderRadius={1}
                 name='password' 
                 onChange={getdata} 
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
                    bg: " rgb(66, 60, 60)",
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
                <p style={{ color: "white", marginTop: "10px",width:"100px"}}>
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

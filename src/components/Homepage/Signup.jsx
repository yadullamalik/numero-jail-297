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
} from "@chakra-ui/react";
import { BsApple, BsGoogle } from "react-icons/bs";
import { useReducer, useState } from "react";
// import {Link as RouterLink} from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

function reducer(state, action) {
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
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("rgb(44, 19, 56)")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <p style={{ color: "white" }}>
          Join 5 million users in using the world's best time tracking software
        </p>

        <Box
          rounded={"lg"}
          bg={useColorModeValue("rgb(44, 19, 56)", "rgb(252, 229, 216)")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <Input
                type="email"
                value={state.email}
                onChange={(e) =>
                  dispatch({ type: "email", payload: e.target.value })
                }
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={state.password}
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
                >
                  Sign up with email
                </Button>
              </Stack>
              <Stack textAlign={"center"}>
                <p style={{ color: "white", marginTop: "10px" }}>
                  Or sign up with:
                </p>
              </Stack>
              <Stack>
                <BsGoogle color="white" />
              </Stack>
              <Stack>
                <BsApple color="white" />
              </Stack>{" "}
            </Stack>
            <Text color={"white"}>By signing up, you agree to our terms of service, privacy policy and to receiving marketing communication from Toggl Track. You can opt out anytime.</Text>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

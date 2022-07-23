import React, { useState } from "react";
import style from "./Navbar.module.css";
import Product from "./Product";
import Track from "./Track";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import Career from "./Career";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  // const navigate=useNavigate()
  console.log("nav:", nav);
  return (
    <div
      className={style.navbar_main}
      style={
        nav === true
          ? { backgroundColor: "#FCE5D8", color: "black" }
          : { backgroundColor: "rgb(44, 19, 56)" }
      }
    >
      <div className={style.navbar_main1}>
        <div className={style.navbar_sub2}>
          <Link to={"/"}>
            <h1
              style={{
                fontSize: "30px",
                margin: "0px 10px",
                color: "#e57cd8",
                fontWeight: "700",
              }}
            >
              toggl track
            </h1>
          </Link>

          <Accordion
            allowToggle
            display="flex"
            style={
              nav === false
                ? { borderTop: "1px solid rgb(44, 19, 56)" }
                : { borderTop: "1px solid #FCE5D8" }
            }
            className={style.toogle1}
          >
            <AccordionItem>
              <h2>
                <AccordionButton
                  background="rgb(44, 19, 56); "
                  border="#412a4c "
                  style={
                    nav === true
                      ? { backgroundColor: "#FCE5D8", color: "black" }
                      : null
                  }
                >
                  <Box
                    onClick={() => {
                      setNav(!nav);
                    }}
                    flex="1"
                    lineHeight="30px"
                    fontSize="15px"
                    style={
                      nav === true
                        ? { backgroundColor: "#FCE5D8", color: "black" }
                        : null
                    }
                    background="rgb(44, 19, 56); "
                    color="#ece1d7"
                  >
                    Product
                  </Box>
                  <AccordionIcon
                    color=" #ece1d7"
                    style={
                      nav === true
                        ? { backgroundColor: "#FCE5D8", color: "black" }
                        : null
                    }
                    fontSize="30px"
                    fontWeight="bold"
                  />
                </AccordionButton>
              </h2>
              <AccordionPanel className={style.button1}>
                <div>
                  <Product />
                </div>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton
                  background="rgb(44, 19, 56); "
                  style={
                    nav === true
                      ? { backgroundColor: "#FCE5D8", color: "black" }
                      : null
                  }
                  border="#412a4c "
                >
                  <Link to={"/price"}>
                    <Box
                      flex="1"
                      lineHeight="30px"
                      fontSize="15px"
                      style={
                        nav === true
                          ? { backgroundColor: "#FCE5D8", color: "black" }
                          : null
                      }
                      background="rgb(44, 19, 56); "
                      color="#ece1d7"
                    >
                      Pricing
                    </Box>
                  </Link>
                </AccordionButton>
              </h2>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton
                  background="rgb(44, 19, 56); "
                  style={
                    nav === true
                      ? { backgroundColor: "#FCE5D8", color: "black" }
                      : null
                  }
                  border="#412a4c "
                >
                  <Box
                    onClick={() => {
                      setNav(!nav);
                    }}
                    flex="1"
                    lineHeight="30px"
                    fontSize="15px"
                    style={
                      nav === true
                        ? { backgroundColor: "#FCE5D8", color: "black" }
                        : null
                    }
                    background="rgb(44, 19, 56); "
                    color="#ece1d7"
                  >
                    WhyTrack
                  </Box>
                  <AccordionIcon
                    color=" #ece1d7"
                    style={
                      nav === true
                        ? { backgroundColor: "#FCE5D8", color: "black" }
                        : null
                    }
                    fontSize="30px"
                  />
                </AccordionButton>
              </h2>
              <AccordionPanel className={style.button1}>
                <div className={style.navbar_track}>
                  <Track />
                </div>
              </AccordionPanel>
            </AccordionItem>
            <div className={style.line}></div>
            <AccordionItem>
              <h2>
                <AccordionButton
                  background="rgb(44, 19, 56); "
                  style={
                    nav === true
                      ? { backgroundColor: "#FCE5D8", color: "black" }
                      : null
                  }
                  border="#412a4c "
                >
                  <Box
                    onClick={() => {
                      setNav(!nav);
                    }}
                    flex="1"
                    lineHeight="30px"
                    fontSize="15px"
                    textAlign="left"
                    style={
                      nav === true
                        ? { backgroundColor: "#FCE5D8", color: "black" }
                        : null
                    }
                    background="rgb(44, 19, 56); "
                    color="#ece1d7"
                  >
                    Careers
                  </Box>
                  <AccordionIcon
                    color=" #ece1d7"
                    style={
                      nav === true
                        ? { backgroundColor: "#FCE5D8", color: "black" }
                        : null
                    }
                    fontSize="30px"
                    fontWeight="bold"
                  />
                </AccordionButton>
              </h2>
              <AccordionPanel className={style.button1}>
                <div className={style.navbar_careers}>
                  <Career />
                </div>
              </AccordionPanel>
            </AccordionItem>
            <div className={style.line}></div>
          </Accordion>
        </div>
      </div>
      <div className={style.navbar_main2}>
        <div
          className={style.navbar_book}
          style={
            nav === true ? { backgroundColor: "#FCE5D8", color: "black" } : null
          }
        >
          <Link to={"/demo"}>Book a demo</Link>
        </div>
        <div className={style.navbar_hr}></div>
        <div
          className={style.navbar_log}
          style={
            nav === true ? { backgroundColor: "#FCE5D8", color: "black" } : null
          }
        >
          {" "}
          <Link to={"/login"}>Log in</Link>
        </div>
        <button
          className={style.navbar_free}
          style={
            nav === true
              ? { backgroundColor: "#E57CD8", color: "black", border: "none" }
              : {
                  backgroundColor: "#FFF3ED",
                  color: "#E57CD8",
                  border: "none ",
                }
          }
        >
          try for free
        </button>
      </div>
    </div>
  );
};

export default Navbar;

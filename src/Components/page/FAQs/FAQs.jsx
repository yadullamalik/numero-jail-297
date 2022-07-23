import React from "react";
import { FaqsData } from "../Data/FAQs";
import style from "./FAQs.module.css"
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
const FAQs = () => {
  return (
    <div>
      <Accordion allowToggle allowMultiple={false}>
        {FaqsData.map((el, idx) => {
          return (
            <div key={idx} className={style.mainDiv}>
              <AccordionItem borderTop="1px solid black" borderBottom="0px">
                <h2>
                  <AccordionButton
                    _expanded={{ bg: "#E57CD8", color: "#412a4c" }}
                  >
                    <Box
                      flex="1"
                      textAlign="left"
                      marginTop={5}
                      marginBottom={5}
                      fontSize={22}
                      fontWeight="bold"
                    >
                      {el.Heading}
                    </Box>
                    <AccordionIcon boxSize={8} />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  bg="#E57CD8"
                  color="#412a4c"
                  textAlign="left"
                  pb={4}
                >
                  {el.Description}
                </AccordionPanel>
              </AccordionItem>
            </div>
          );
        })}
      </Accordion>
    </div>
  );
};

export default FAQs;

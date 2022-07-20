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
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      textAlign="left"
                      marginTop={5}
                      marginBottom={5}
                      fontSize={22}
                      fontWeight="bold"
                      color={"#fce5d8"}
                    >
                      {el.Heading}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel textAlign="left" pb={4}>
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

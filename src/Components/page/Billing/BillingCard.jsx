import React from "react";
import { CheckIcon } from "@chakra-ui/icons";
import style from "./BillingCard.module.css";
const BillingCard = ({ data }) => {
  return (
    <div className={style.mainBox}>
      <div className={style.firstHead}>{data.firstHead}</div>
      <div className={style.secondBox}>
        <div className={style.mainheadBox}>
          <h1 className={style.mainHeading}>{data.MainHeading}</h1>
          <p>{data.Description}</p>
        </div>
        <div className={style.priceDetailBox}>
          <h1>{data.Price}</h1>
          <p>{data.PriceDesc}</p>
        </div>
        <div className={style.hLine}></div>
        <div className={style.planBenefitBox}>
          {data.PlanBenefit.map((el) => (
            <div key={el} className={style.planDesc}>
              <CheckIcon boxSize={5} className={style.rightIcon} />
              <p style={{fontWeight:"500"}}>{el}</p>
            </div>
          ))}
        </div>
        <div className={style.startButtonDiv}>
          <button className={style.getStartButton}>{data.ButtonDesc}</button>
        </div>
      </div>
    </div>
  );
};

export default BillingCard;

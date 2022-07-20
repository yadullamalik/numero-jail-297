import React, { useState } from "react";
import Annual from "../Billing/Annual";
import Monthly from "../Billing/Monthly";
import style from "./Price.module.css";
// import Try from "./Try";
const Price = () => {
  const [show, setShow] = useState(true);
  console.log(show);
  return (
    <div className={style.mainPricingDiv}>
      <div className={style.mainHeadingDiv}>
        <h1 className={style.mainHeading}>Pricing Plans</h1>
        <p className={style.mainPara}>
          No credit card required. All plans come with a free, 30-day trial of
          our Premium features.
        </p>
      </div>
      <div className={style.billingMainDiv}>
        <div className={style.miniBillingDiv}>
          <div className={style.billingSaveDiv}>
            <p>Save 10%</p>
          </div>
          <p>Choose your billing:</p>
        </div>
        <div className={style.billingButtonDiv}>
          <button
            onClick={() => setShow(true)}
            className={
              (show == true && style.annaul) || style.billingButtonAnnual
            }
          >
            Annual
          </button>
          <button
            onClick={() => setShow(false)}
            className={
              (show == false && style.monthly) || style.billingButtonMonthly
            }
          >
            Monthly
          </button>
        </div>
        <div style={{ marginTop: "50px" }}>
          {show ? <Annual /> : <Monthly />}
        </div>
      </div>
    </div>
  );
};

export default Price;

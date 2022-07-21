import React, { useState } from "react";
import Annual from "../Billing/Annual";
import Monthly from "../Billing/Monthly";
import FAQs from "../FAQs/FAQs";
import Signup from "../signUp/Signup";
import style from "./Price.module.css";
// import Try from "./Try";
const Price = () => {
  const [show, setShow] = useState(true);
  //   const comparePlan = useRef(null);
  //   const scrollComparePlan = () => {
  //     comparePlan.current?.scrollIntoView({ behavior: "smooth" });
  //   };
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
              (show === true && style.annaul) || style.billingButtonAnnual
            }
          >
            Annual
          </button>
          <button
            onClick={() => setShow(false)}
            className={
              (show === false && style.monthly) || style.billingButtonMonthly
            }
          >
            Monthly
          </button>
        </div>
        <div style={{ marginTop: "50px" }}>
          {show ? <Annual /> : <Monthly />}
        </div>
      </div>
      <div className={style.paraDiv}>
        <p>
          All plans come with a free, 30-day trial of Toggl Track Premium—no
          credit card required. You can choose to upgrade at the end of the
          trial or continue using Track for free.
        </p>
        <p>Still unsure?</p>
        {/* <div onClick={scroolComaparePlan} className={style.compareButton}> */}
        <div className={style.compareButton}>
          <p>Compare all plan features</p>
        </div>
      </div>
      <div className={style.toggleTrackDiv}>
        <img src="https://i.postimg.cc/MKLQv3xn/img-2.png" alt=""/>
      </div>
      <div className={style.FAQsMainDiv}>
        <img className={style.brandImg} src="https://public-assets.toggl.com/b/static/1ede89b0d75ce5a9cd6476ba3f2d6cf4/83e96/brands-oneliner.avif" alt=""/>
        <h1 className={style.faq}>FAQs</h1>
        <FAQs />
        <div className={style.signupMainDiv}>
          <Signup />
        </div>
        <div className={style.onboardDiv}>
          <p>Onboarding a team?</p>
          <p>Book a demo</p>
        </div>
      </div>
    </div>
  );
};

export default Price;

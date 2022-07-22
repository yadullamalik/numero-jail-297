import React, { useRef, useState } from "react";
import Annual from "../Billing/Annual";
import Monthly from "../Billing/Monthly";
import FAQs from "../FAQs/FAQs";
import PlanCompare from "../PlanCompare/PlanCompare";
import Signup from "../signUp/Signup";
import style from "./Price.module.css";
const Price = () => {
  const [show, setShow] = useState(true);
  const comparePlan = useRef(null);
  const scrollComparePlan = () => {
    comparePlan.current?.scrollIntoView({ behavior: "smooth" });
  };
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
        {/* < onClick={scrollComparePlan} className={style.compareButton}> */}
        <div onClick={scrollComparePlan} className={style.compareButton}>
          <p>Compare all plan features</p>
        </div>
      </div>
      <div className={style.toggleTrackDiv}>
        <img src="https://i.postimg.cc/MKLQv3xn/img-2.png" alt="" />
      </div>
      <div className={style.FAQsMainDiv}>
        <img
          className={style.brandImg}
          src="https://public-assets.toggl.com/b/static/1ede89b0d75ce5a9cd6476ba3f2d6cf4/83e96/brands-oneliner.avif"
          alt=""
        />
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
      <div ref={comparePlan} className={style.planTableMainDiv}>
        <h1 className={style.planH1}>Full Plan Comparison</h1>
        <PlanCompare />
      </div>
      <div className={style.appDiv}>
        <h1 className={style.appH1}>Online, offline or on the go?</h1>
        <h1 className={style.appH1}>
          We <div className={style.skewed}>have an app</div> for that!
        </h1>
        <p className={style.para}>
          Your data instantly syncs across all apps and devices
        </p>
        <div className={style.appFirstDiv}>
          <div className={style.appCard}>
            <img
              src="https://public-assets.toggl.com/b/static/2038847e62390356691df99de87fece9/ae017/icon-mobile.png"
              alt=""
            ></img>
            <h1>MOBILE APPS</h1>
            <p>Start and stop tracking from anywhere</p>
            <div className={style.buttonDiv}>
              <div>
                <img
                  src="https://public-assets.toggl.com/b/static/e25cbb59a5a23262acbe030b4ce4891a/b2057/icon-apple.png"
                  alt=""
                />
                <p>iOS</p>
              </div>
              <div>
                <img
                  src="https://public-assets.toggl.com/b/static/57389a8f02dc9b6c20e88547b5b8b809/ec093/icon-android.png"
                  alt=""
                />
                <p>Android</p>
              </div>
            </div>
          </div>
          <div className={style.appCard}>
            <img
              src="https://public-assets.toggl.com/b/static/ed4bb21f30d3f3c03afab7f59b73bfd4/d265f/icon-desktop.png"
              alt=""
            ></img>
            <h1>DESKTOP APPS</h1>
            <p>For users who want to work with minimal distractions</p>
            <div className={style.buttonDiv}>
              <div>
                <img
                  src="https://public-assets.toggl.com/b/static/204f64a175de64c7d473278ae048f2f2/88208/icon-windows.png"
                  alt=""
                />
                <p>Windows</p>
              </div>
              <div>
                <img
                  src="https://public-assets.toggl.com/b/static/e25cbb59a5a23262acbe030b4ce4891a/b2057/icon-apple.png"
                  alt=""
                />
                <p>macOS</p>
              </div>
            </div>
          </div>
          <div className={style.appCard}>
            <img
              src="https://public-assets.toggl.com/b/static/cef7d9e046286fdfe97835e7c8df9119/05081/icon-webapp.png"
              alt=""
            ></img>
            <h1>WEB APP</h1>
            <p>To view time reports, manage projects, and teams</p>
            <div className={style.buttonDiv}>
              <div>Sign up for free</div>
            </div>
          </div>
          <div className={style.appCard}>
            <img
              src="https://public-assets.toggl.com/b/static/93ea6c69d64adf944aeaeaef409d57ee/77af7/icon-browser.png"
              alt=""
            ></img>
            <h1>BROWSER PLUGINS</h1>
            <p>100+ integrations with your favorite online tools</p>
            <div className={style.buttonDiv}>
              <div>
                <img
                  src="https://public-assets.toggl.com/b/static/332df9a3c112ad4f9957b2955ccd6e8a/ec733/chrome.png"
                  alt=""
                />
                <p>Chrome</p>
              </div>
              <div>
                <img
                  src="https://public-assets.toggl.com/b/static/319c6802313fdddaae75bbe61ec3501b/88208/firefox.png"
                  alt=""
                />
                <p>FireFox</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;

import style from "./EmployeeTimeTracking.module.css";
import { BiCaretRight } from "react-icons/bi";
import { Faq2 } from "../Faq/Faq2";

export const EmployeeTimeTracking = () => {
  const designCards = [
    {
      img: "https://public-assets.toggl.space/ae4e1ee7-9a08-426a-b230-a537a04e9aa6/static/780b1be4eb20e534d7864f6f3dc65895/d4f08/illo-desktop-mobile.avif",
      h: "Works everywhere",
      p: "Give your team more options. Let them track time from the web app, desktop and mobile apps, or even from their stopwatch.",
    },
    {
      img: "https://public-assets.toggl.space/ae4e1ee7-9a08-426a-b230-a537a04e9aa6/static/e1444ff4e5168185be80f7d13a9458e4/a1536/illo-creepy-eye.avif",
      h: "We say no to employee surveillance",
      p: "And you get a yes from your employees. Employee buy-in is key to accurate data, so we're committed to features that help empower employees.",
    },
    {
      img: "https://public-assets.toggl.space/ae4e1ee7-9a08-426a-b230-a537a04e9aa6/static/aaeb281e59e470758c049603db7f86a6/daf19/illo-ok-hand.avif",
      h: "Designed to be easy",
      p: "No instruction manual needed. Get your team onboard and start tracking. If you ever need help, our support team has a track record of responding within 3 hours!",
    },
  ];
  return (
    <div>
      <div className={style.heading_div}>
        <h1>
          Employee time tracking software
          <br /> your team will love
        </h1>
        <p>
          A sleek, intuitive employee time tracker that allows your team to
          track time on
          <br /> multiple platforms with just one click.
        </p>
        <p>Try Toggl Track today. No credit card required.</p>
        <div className={style.btns_div}>
          <button className={style.signup_btn}>Sign up for free</button>
          <button>
            Book a demo{" "}
            <span>
              <BiCaretRight />
            </span>
          </button>
        </div>
      </div>
      <div className={style.timesheet_div}>
        <div className={style.timesheet_flex}>
          <p>TRUSTED BY</p>
          <img
            src="https://public-assets.toggl.space/ae4e1ee7-9a08-426a-b230-a537a04e9aa6/static/f99eb40e82b76e7bc1642a43dfe5c2cc/de5fd/brands-employee-desktop.avif"
            alt=""
          />
        </div>
        <h1>
          An alternative to timesheets <br /> your employees will say{" "}
          <span>yes</span> to
        </h1>
        <div className={style.timesheet_flex_2}>
          <div>
            <div>
              <h2>Less timesheets, more time</h2>
              <p>
                Nobody likes timesheet entry. It's time-consuming and relies too
                much on memory. Our solution? Intuitive employee time tracking
                software for large teams, with accurate time reports you can
                export in seconds.
              </p>
            </div>
            <img
              style={{ marginTop: "200px" }}
              src="https://public-assets.toggl.space/ae4e1ee7-9a08-426a-b230-a537a04e9aa6/static/59e7925ceb89c4e8844b5d3cf0f9da15/4767a/feature-report-user-alt.avif"
              alt=""
            />
            <div>
              <h2>Seamless, second-nature time tracking for employees</h2>
              <p>
                Our employee time tracking solution keeps the end user in mind.
                Time tracking is a breeze with integrations with 100+ apps via
                our browser extensions, and our native calendar and project
                management integrations.
              </p>
            </div>
          </div>
          <div>
            <img
              style={{ marginTop: "100px" }}
              src="https://public-assets.toggl.space/ae4e1ee7-9a08-426a-b230-a537a04e9aa6/static/44cc4850fe2159d12bc9b92f294ea6b2/2ef11/feature-timesheets-one-click.avif"
              alt=""
            />
            <div>
              <h2>Bye-bye admin time</h2>
              <p>
                We're all about less admin for everyone, whether you're managing
                projects, teams, or an entire business. Filter, sort, and export
                your data by user, task, or project.
              </p>
            </div>
            <img
              src="https://public-assets.toggl.space/ae4e1ee7-9a08-426a-b230-a537a04e9aa6/static/048853ffbfd04412bc9e99c1a7d41a59/9ee29/feature-integrations-large.avif"
              alt=""
            />
          </div>
        </div>
        <img
          src="https://i.postimg.cc/1t2gqGLc/Screenshot-190.png"
          style={{ marginLeft: "200px", marginTop: "150px" }}
          alt=""
        />
        <h1>
          Designed to <span>empower</span> teams
        </h1>
        <div className={style.design_cards_div}>
          {designCards.map((e) => {
            return (
              <div key={e.h}>
                <img src={e.img} alt="" />
                <h2>{e.h}</h2>
                <p>{e.p}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Faq2 />
    </div>
  );
};

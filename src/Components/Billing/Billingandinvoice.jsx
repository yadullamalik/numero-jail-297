import style from "./EmployeeTimeTracking.module.css";
import { BiCaretRight } from "react-icons/bi";
import { Faq } from "../Faq/Faq";

export const Billinandinvoice = () => {
  const designCards = [
    {
      img: "https://public-assets.toggl.space/ae4e1ee7-9a08-426a-b230-a537a04e9aa6/static/7b895350a4c9d902b51951b23df9dc0f/99e84/illo-integrations.avif",
      h: "100+ integrations",
      p: "Use Toggl Track with the tools you already use. Embed a timer in 100+ popular tools with the Track browser extensions.",
    },
    {
      img: "https://public-assets.toggl.space/ae4e1ee7-9a08-426a-b230-a537a04e9aa6/static/47cd7aff2a75c9fbb42a3274372ed65b/cc937/illo-reminders.avif",
      h: "Reminders to help you remember",
      p: "Set up email reminders, desktop notifications, and Pomodoro timers so you never forget to track time.",
    },
    {
      img: "https://public-assets.toggl.space/ae4e1ee7-9a08-426a-b230-a537a04e9aa6/static/2a0360ce37c992839633143fb27b29b4/c4aba/illo-calendar-view.avif",
      h: "Calendar views",
      p: "Connect your calendar tools to see your daily and weekly events in Toggl Track, and even copy calendar events as time entries.",
    },
  ];
  return (
    <div>
      <div className={style.heading_div}>
        <h1>
          Track every billable hour and bill
          <br /> accurately
        </h1>
        <p>
          Leave behind messy spreadsheets and forgotten time cards. Easily track
          billable time
          <br /> with one click across multiple projects, tasks, and clients.
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
          <span>Seamless</span> to client billing with <br />
          streamlined time tracking
        </h1>
        <div className={style.timesheet_flex_2}>
          <div>
            <div>
              <h2>Track hours in real time</h2>
              <p>
                Cut out the guesswork and skip the messy spreadsheet entry.
                Track as you work with one click for a record of your workday.
                Like timesheets, except without the admin labor.
              </p>
            </div>
            <img
              src="https://public-assets.toggl.space/ae4e1ee7-9a08-426a-b230-a537a04e9aa6/static/35a77a8670fb4c01c652c61af940dc28/bca84/feature-project-billable-chart.avif"
              alt=""
            />
            <div>
              <h2>Track where you work–at your desk or on the go</h2>
              <p>
                With apps for mobile, desktop, and web that sync in real time, a
                browser plugin and hundreds of integrations, Track can fit into
                any workflow.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://public-assets.toggl.space/ae4e1ee7-9a08-426a-b230-a537a04e9aa6/static/45bd610bc7c83c35a1ad592b19ab0554/c0bd4/feature-one-click-options.avif"
              alt=""
            />
            <div>
              <h2>Bill accurately</h2>
              <p>
                Capture every billable minute worked across your entire team.
                Easy-to-export data to help you bill with razor-sharp accuracy,
                and get paid exactly what you deserve — cha-ching!
              </p>
            </div>
            <img
              src="https://public-assets.toggl.space/ae4e1ee7-9a08-426a-b230-a537a04e9aa6/static/d2ba9ec606ab24540563dc4d9747f200/3f826/feature-multi-platform.avif"
              alt=""
            />
          </div>
        </div>
        <img
          src="https://i.postimg.cc/2yY1KWCs/Screenshot-192.png"
          style={{ marginLeft: "200px", marginTop: "100px" }}
          alt=""
        />
        <h1>
          GET <span>accurate</span> data, whatever <br />
          your workflow
        </h1>
        <div
          className={`${style.design_cards_div} ${style.billing_design_cards_div}`}
        >
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
      <Faq />
    </div>
  );
};

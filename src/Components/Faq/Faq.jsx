import style from "./Faq.module.css";
import { BiCaretRight } from "react-icons/bi";
import { useState } from "react";
import { useEffect } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export const Faq = () => {
  const [f1, setf1] = useState(false);
  const [f2, setf2] = useState(false);
  const [f3, setf3] = useState(false);
  const [f4, setf4] = useState(false);
  const [f5, setf5] = useState(false);

  useEffect(() => {
    if (f1 === true) {
      setf2(false);
      setf3(false);
      setf4(false);
      setf5(false);
    }
  }, [f1]);
  useEffect(() => {
    if (f2 === true) {
      setf1(false);
      setf3(false);
      setf4(false);
      setf5(false);
    }
  }, [f2]);
  useEffect(() => {
    if (f3 === true) {
      setf1(false);
      setf2(false);
      setf4(false);
      setf5(false);
    }
  }, [f3]);
  useEffect(() => {
    if (f4 === true) {
      setf1(false);
      setf3(false);
      setf2(false);
      setf5(false);
    }
  }, [f4]);
  useEffect(() => {
    if (f5 === true) {
      setf1(false);
      setf3(false);
      setf4(false);
      setf2(false);
    }
  }, [f5]);

  return (
    <div className={style.faq_main_div}>
      <p
        style={{
          color: "#fce5d8",
          fontSize: "17px",
          lineHeight: "25px",
          fontWeight: "600",
          display: "flex",
          gap: "15px",
          marginLeft: "40%",
        }}
      >
        Onboarding a team?{" "}
        <span style={{ color: "#e57cd8" }}>
          <div style={{ display: "flex" }}>
            Book a demo <BiCaretRight style={{ marginTop: "4px" }} />
          </div>
        </span>
      </p>
      <h1 className={style.main_h1}>FAQs</h1>
      <div className={style.faq}>
        <div
          onClick={() => {
            setf1(!f1);
          }}
          style={f1 === true ? { backgroundColor: "#e57cd8" } : null}
        >
          <div>
            <h1 style={f1 === true ? { color: "#412a4c" } : null}>
              Can I create and send invoices using Toggl Track?
            </h1>
            <span style={f1 === true ? { color: "#412a4c" } : null}>
              {f1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </div>
          <p style={f1 === false ? { display: "none" } : null}>
            You can’t create and send invoices directly in Toggl Track. However,
            you can export your time tracking data to be used with any of your
            favorite accounting software.
          </p>
        </div>
        <div
          onClick={() => {
            setf2(!f2);
          }}
          style={f2 === true ? { backgroundColor: "#e57cd8" } : null}
        >
          <div>
            <h1 style={f2 === true ? { color: "#412a4c" } : null}>
              Is Toggl Track free for an unlimited number of users?
            </h1>
            <span style={f2 === true ? { color: "#412a4c" } : null}>
              {f2 ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </div>
          <p style={f2 === false ? { display: "none" } : null}>
            Toggl Track is free for teams of up to 5 members.
          </p>
        </div>
        <div
          onClick={() => {
            setf3(!f3);
          }}
          style={f3 === true ? { backgroundColor: "#e57cd8" } : null}
        >
          <div>
            <h1 style={f3 === true ? { color: "#412a4c" } : null}>
              How is the subscription fee calculated for paid plans?
            </h1>
            <span style={f3 === true ? { color: "#412a4c" } : null}>
              {f3 ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </div>
          <p style={f3 === false ? { display: "none" } : null}>
            You will be charged a monthly fee for each member of your team. For
            paid plans, this fee applies even if you have under 5 active users.
            You will not be charged for deactivated users. If you deactivate a
            user, all data associated with the deactivated user will be
            retained.
          </p>
        </div>
        <div
          onClick={() => {
            setf4(!f4);
          }}
          style={f4 === true ? { backgroundColor: "#e57cd8" } : null}
        >
          <div>
            <h1 style={f4 === true ? { color: "#412a4c" } : null}>
              Does Toggl Track have desktop or mobile apps? Are they free?
            </h1>
            <span style={f4 === true ? { color: "#412a4c" } : null}>
              {f4 ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </div>
          <p style={f4 === false ? { display: "none" } : null}>
            Yes, we’re on desktop and mobile. We have desktop apps for Windows
            and macOS, and mobile apps for iOS and Android. All of our apps are
            free to download and use.
          </p>
        </div>
        <div
          onClick={() => {
            setf5(!f5);
          }}
          style={f5 === true ? { backgroundColor: "#e57cd8" } : null}
          className={style.lastChild}
        >
          <div>
            <h1 style={f5 === true ? { color: "#412a4c" } : null}>
              What tools does Toggl Track integrate with?
            </h1>
            <span style={f5 === true ? { color: "#412a4c" } : null}>
              {f5 ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </div>
          <p style={f5 === false ? { display: "none" } : null}>
            Toggl Track has over 100+ integrations. Our Chrome and Safari
            browser extensions allow you to start the timer directly from online
            tools like Asana, Todoist, Xero, and more. The browser extensions
            come with features such as the Pomodoro Timer, idle detection, and
            tracking reminders—it’s the ultimate tool to help you stay focused
            on work.
          </p>
        </div>
      </div>
    </div>
  );
};

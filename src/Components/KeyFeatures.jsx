import { FeaturesCard } from "./FeaturesCard";
import "./KeyFeatures.css";
import { CgArrowLongRight } from "react-icons/cg";

export const KeyFeatures = () => {
  const cards1 = [
    {
      img: "https://public-assets.toggl.com/b/static/8500be9b3ef28cfb9293446ddd6f28a3/feature-timers.png",
      title: "One-Click Timers",
      desc: "Track time across the web app, desktop app, mobile app, or browser extension - with one click! All your entries will sync automatically.",
    },
    {
      img: "https://public-assets.toggl.com/b/static/bc5611683afd9f23db67c223c02f15e5/feature-cal-integration.png",
      title: "Calendar Integrations",
      desc: "Integrate your Outlook or Google Calendar into Toggl Track's Calendar view and create or start time entries based on calendar events. Available for our web and mobile apps.",
    },
    {
      img: "https://public-assets.toggl.com/b/static/d4ecf8623e191207b4aef924be6f8d3b/feature-favorites.png",
      title: "Favorite time entries",
      desc: "Pin your most frequently-used time entries to the top of your Timer page for easy access. Currently available for the web app, coming soon to other platforms.",
    },
  ];

  const cards2 = [
    {
      img: "https://public-assets.toggl.com/b/static/dc16bcc802fe68318016e002083b47d0/feature-timeline.png",
      title: "Background Tracking",
      desc: "Auto-track every application or website you use for more than 10 seconds with our Timeline feature - then turn that data into time entries.",
    },
    {
      img: "https://public-assets.toggl.com/b/static/3564bf4f714c41ebf64c711e2532c2e3/feature-autotracker.png",
      title: "Autotracker",
      desc: "For the forgetful among us, set up Toggl Track to trigger time entry suggestions based on the software you're currently using.",
    },
    {
      img: "https://public-assets.toggl.com/b/static/81089530d0f94f64ea34371d82de77ce/feature-jira.png",
      title: "Jira Sync",
      desc: "Enter your information once, into Jira. Jira Sync will ensure that your Toggl Track Workspace is synced up to your Jira data so you can start tracking time right away—with up-to-date Jira data.",
    },
  ];
  const cards3 = [
    {
      img: "https://public-assets.toggl.com/b/static/3c080da045d0117b821dc255d1677d6c/feature-time-reports.png",
      title: "Summary, Detailed, & Weekly Reports",
      desc: "Select the level of detail you want to see, filter and sort your data, and create simple, client-ready visuals and reports via CSV or PDF.",
    },
    {
      img: "https://public-assets.toggl.com/b/static/383198f0c0874c4c07d5731a3aa79881/feature-email-reports.png",
      title: "Schedule Reports to Email",
      desc: "Schedule your favorite reports to regularly arrive in your inbox so you’ll always stay up to date without the need to log into Toggl.",
    },
  ];
  const cards4 = [
    {
      img: "https://public-assets.toggl.com/b/static/a1fc813547f41e7e031c968be460fea8/feature-saved-reports.png",
      title: "Saved Reports",
      desc: "Set up your preferred reports with specified filters and date ranges. Share the saved report link with your clients so they can view them online.",
    },
    {
      img: "https://public-assets.toggl.com/b/static/205ee8a7c7013e2c60ffa661cd251780/feature-rounding.png",
      title: "Time Rounding",
      desc: "Whether you track seconds, minutes, or 6-minute increments, automatically round time entries up or down to the nearest interval of your choice.",
    },
  ];
  return (
    <div>
      <div className="main_h1_div">
        <h1 className="main_h1">
          <span>Everything you need in</span>
          <br />
          <span>
            <span style={{ color: "palevioletred", fontFamily: "MV Boli" }}>
              one
            </span>{" "}
            package
          </span>
        </h1>
      </div>
      <div className="mini-nav">
        <div>
          <span>Time Tracking</span>
        </div>
        <div>
          <span className="mini-nav-span">Reporting</span>
        </div>
        <div>
          <span className="mini-nav-span">Project & Revenue Tracking</span>
        </div>
        <div>
          <span className="mini-nav-span">Team Scheduling & Management</span>
        </div>
      </div>
      <div className="time-tracking">
        <div>
          <h1 className="h1">Time Tracking</h1>
          <p className="p">There's more than one way to track time</p>
        </div>
        <div className="feature-cards">
          <div>
            {cards1.map((e) => {
              return <FeaturesCard key={e.title} {...e} />;
            })}
          </div>
          <div>
            {cards2.map((e) => {
              return <FeaturesCard key={e.title} {...e} />;
            })}
          </div>
        </div>
      </div>
      <div className="over-app">
        <div className="over-app-2">
          <div className="over-app-3">
            <div className="over-app-4">
              <div className="over-app-5">
                <div className="over-app-5-1">
                  <h1>
                    Over 100+ App <br />
                    Integrations
                  </h1>
                  <p>
                    Toggl Track's browser extensions allow you to start the
                    timer directly from online tools like Asana, Todoist, Trello
                    and more. With features like the Pomodoro Timer, idle
                    detection, and tracking reminders, it’s the ultimate tool to
                    help you stay focused on work.
                  </p>
                  <p>Currently available on Chrome and Firefox.</p>
                  <button>See all integrations</button>
                </div>
                <div className="over-app-5-2">
                  <div className="over-app-5-2-1">
                    <img
                      src="	https://public-assets.toggl.com/b/static/integrations-desktop-157a92c40e917125dc69d3ba8e043165.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="time-tracking">
        <div>
          <h1 className="h1">Reporting</h1>
          <p className="p">Powerful reporting to reveal actionable insights</p>
        </div>
        <div className="feature-cards">
          <div>
            {cards3.map((e) => {
              return <FeaturesCard key={e.title} {...e} />;
            })}
          </div>
          <div>
            {cards4.map((e) => {
              return <FeaturesCard key={e.title} {...e} />;
            })}
          </div>
        </div>
        <div>
          <h4 className="reporting-h4">
            LOOKING FOR A SPECIFIC USE CASE RELATED TO TIME REPORTING?
          </h4>
          <div className="small-boxes">
            <div>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTUiIGhlaWdodD0iNTUiIHZpZXdCb3g9IjAgMCA1NSA1NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjEuNzQ2NSIgY3k9IjIyLjc0NjUiIHI9IjIxLjc0NjUiIGZpbGw9IiNGMkJERUMiLz4KPGNpcmNsZSBjeD0iNDAuMzg2MyIgY3k9IjEyLjY1MDIiIHI9IjExLjI2MTYiIGZpbGw9IiNFNTdDRDgiLz4KPHBhdGggZD0iTTQwLjc2NTMgMTkuMTU0M0M0MC41NzAzIDE5LjE1NDMgNDAuNDEwNyAxOS4wODc4IDQwLjI4NjYgMTguOTU0OEM0MC4xNjI0IDE4LjgzMDcgNDAuMTAwNCAxOC42NzU1IDQwLjEwMDQgMTguNDg5NFYxNy41ODVDMzkuNTU5NiAxNy41NDk2IDM5LjA3NjQgMTcuNDY1NCAzOC42NTA4IDE3LjMzMjRDMzguMjM0MSAxNy4xOTA1IDM3Ljg3NTEgMTcuMDM1NCAzNy41NzM2IDE2Ljg2NjlDMzcuMzY5NyAxNi43NTE3IDM3LjI0MTEgMTYuNTk2NSAzNy4xODggMTYuNDAxNUMzNy4xNDM2IDE2LjIwNjQgMzcuMTU2OSAxNi4wMjAyIDM3LjIyNzggMTUuODQyOUMzNy4yOTg4IDE1LjY2NTYgMzcuNDE4NSAxNS41NDE1IDM3LjU4NjkgMTUuNDcwNkMzNy43NTU0IDE1LjM5OTYgMzcuOTU0OCAxNS40MzA3IDM4LjE4NTQgMTUuNTYzNkMzOC40MzM2IDE1LjcwNTUgMzguNzU3MiAxNS44NDI5IDM5LjE1NjIgMTUuOTc1OUMzOS41NjQgMTYuMSA0MC4wNTE2IDE2LjE2MjEgNDAuNjE5IDE2LjE2MjFDNDEuMjg0IDE2LjE2MjEgNDEuNzYyNyAxNi4wNDY4IDQyLjA1NTMgMTUuODE2M0M0Mi4zNDc5IDE1LjU3NjkgNDIuNDk0MSAxNS4yNzk5IDQyLjQ5NDEgMTQuOTI1M0M0Mi40OTQxIDE0LjYzMjcgNDIuMzkyMiAxNC4zOTM0IDQyLjE4ODMgMTQuMjA3MkM0MS45ODQ0IDE0LjAyMSA0MS42MjA5IDEzLjg3MDMgNDEuMDk3OCAxMy43NTVMMzkuNjg4MSAxMy40NDkxQzM4LjA4MzQgMTMuMTAzNCAzNy4yODEgMTIuMjYxMSAzNy4yODEgMTAuOTIyNEMzNy4yODEgMTAuMTc3NyAzNy41MzM3IDkuNTUyNjMgMzguMDM5MSA5LjA0NzI3QzM4LjU1MzMgOC41MzMwNiAzOS4yNDA0IDguMjIyNzUgNDAuMTAwNCA4LjExNjM3VjcuMTcyMTZDNDAuMTAwNCA2Ljk4NTk3IDQwLjE2MjQgNi44MzA4MiA0MC4yODY2IDYuNzA2N0M0MC40MTA3IDYuNTczNzEgNDAuNTcwMyA2LjUwNzIyIDQwLjc2NTMgNi41MDcyMkM0MC45NTE1IDYuNTA3MjIgNDEuMTA2NiA2LjU3MzcxIDQxLjIzMDggNi43MDY3QzQxLjM2MzcgNi44MzA4MiA0MS40MzAyIDYuOTg1OTcgNDEuNDMwMiA3LjE3MjE2VjguMTAzMDdDNDEuNzg0OSA4LjEzODUzIDQyLjE1NzIgOC4yMjI3NSA0Mi41NDczIDguMzU1NzRDNDIuOTQ2MyA4LjQ4ODczIDQzLjI5MjEgOC42NzA0OCA0My41ODQ2IDguOTAwOTlDNDMuNzUzMSA5LjAzMzk4IDQzLjg1MDYgOS4xODkxMyA0My44NzcyIDkuMzY2NDRDNDMuOTAzOCA5LjUzNDg5IDQzLjg3MjggOS42OTQ0OCA0My43ODQxIDkuODQ1MkM0My43MDQzIDkuOTg3MDUgNDMuNTc1OCAxMC4wODQ2IDQzLjM5ODUgMTAuMTM3OEM0My4yMyAxMC4xODIxIDQzLjAzMDUgMTAuMTM3OCA0Mi44IDEwLjAwNDhDNDIuNTQyOSA5Ljg1NDA2IDQyLjI1NDggOS43MzQzOCA0MS45MzU2IDkuNjQ1NzJDNDEuNjE2NCA5LjU0ODE5IDQxLjIzNTIgOS40OTk0MyA0MC43OTE5IDkuNDk5NDNDNDAuMjI0NSA5LjQ5OTQzIDM5Ljc3NjggOS42Mjc5OSAzOS40NDg3IDkuODg1MDlDMzkuMTI5NiAxMC4xMzMzIDM4Ljk3IDEwLjQ2MTQgMzguOTcgMTAuODY5MkMzOC45NyAxMS4xNzA2IDM5LjA2NzUgMTEuNDE0NCAzOS4yNjI2IDExLjYwMDZDMzkuNDU3NiAxMS43Nzc5IDM5Ljc5MDEgMTEuOTE5OCA0MC4yNiAxMi4wMjYyTDQxLjcwOTUgMTIuMzQ1NEM0Mi41NjA2IDEyLjUzMTUgNDMuMTg1NyAxMi44Mjg1IDQzLjU4NDYgMTMuMjM2NEM0My45ODM2IDEzLjYzNTMgNDQuMTgzMSAxNC4xNjI4IDQ0LjE4MzEgMTQuODE4OUM0NC4xODMxIDE1LjU2MzYgNDMuOTI2IDE2LjE3NTQgNDMuNDExOCAxNi42NTQxQzQyLjkwNjQgMTcuMTI0IDQyLjI0NTkgMTcuNDIxIDQxLjQzMDIgMTcuNTQ1MlYxOC40ODk0QzQxLjQzMDIgMTguNjc1NSA0MS4zNjgyIDE4LjgzMDcgNDEuMjQ0MSAxOC45NTQ4QzQxLjExOTkgMTkuMDg3OCA0MC45NjA0IDE5LjE1NDMgNDAuNzY1MyAxOS4xNTQzWiIgZmlsbD0iIzJDMTMzOCIvPgo8cGF0aCBkPSJNMjUuODgzMiAyNy4yODc2QzIwLjY0MDggMzAuOTc2NyAxNy41MzQxIDMwLjcxNzggMTUuMzk4MyAzMC41ODg0QzcuNTAyMjcgMzMuNTAwNiAtMy40NzQ1MSA0MS4zMDU2IDE1Ljc4NjYgNDkuMjI3NUMzOS44NjMxIDU5LjEyOTkgNDcuNjI1NyA0OC43NTM0IDQ5Ljk1OTYgNDYuNTA5MkM1NS4wMDc5IDQxLjY1NTEgNTQuNDI1NCAyNC43NjM0IDUzLjg0MjkgMjIuNjI3NkM1My4zNzY5IDIwLjkxOSA1MS40NDgyIDIwLjQ5MTggNTAuNTQyMSAyMC40OTE4QzQ3LjI0MTMgMTkuOTA4NiA0NS43NTI3IDIyLjgyMTggNDUuNjg4IDI0Ljc2MzRDNDUuNjg4IDI0Ljc2MzQgNDYuNDY0NyAzNC4yNzc1IDQ1LjY4OCAzNy4xOUM0NS4wNjY3IDM5LjUxOTkgNDIuNTgxNCA0MC40OTA4IDQxLjQxNjQgNDAuNjg0OUMzOS42Njg5IDQwLjk0MzggMzUuMzk3MyA0MC44MDE0IDMyLjI5MDYgMzguMTYwOEMyOS4xODQgMzUuNTIwMSAzMC42MDc5IDMzLjQzNjEgMzEuNzA4MSAzMi43MjQyTDM3LjcyNzMgMjguODQwOUMzOC41MDM5IDI3Ljk5OTUgMzkuNTkxMiAyNS44NTA4IDM3LjcyNzMgMjMuOTg2OEMzNS44NjMzIDIyLjEyMjggMzQuMTAyOCAyMi4zMDQgMzMuNDU1NiAyMi42Mjc2TDI1Ljg4MzIgMjcuMjg3NloiIGZpbGw9IiM0MTJBNEMiLz4KPHJlY3QgeD0iMS45NDE0MSIgeT0iMzAuMTI0IiB3aWR0aD0iMTAuNDg0OSIgaGVpZ2h0PSIxOS40MTY1IiByeD0iMS4wNTUwOCIgZmlsbD0iI0U1N0NEOCIvPgo8L3N2Zz4K"
                alt=""
              />
              <div className="small-box-div">
                <h4>Billing and invoicing</h4>
                <p>
                  Capture every billable minute so you can invoice with ease and
                  precision
                </p>
              </div>
              <div className="right-icon">
                <CgArrowLongRight />
              </div>
            </div>
            <div>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTciIGhlaWdodD0iNTciIHZpZXdCb3g9IjAgMCA1NyA1NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swXzEwNTdfMTYyNSIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjU3IiBoZWlnaHQ9IjU3Ij4KPHJlY3Qgd2lkdGg9IjU3IiBoZWlnaHQ9IjU3IiBmaWxsPSIjQzRDNEM0Ii8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMF8xMDU3XzE2MjUpIj4KPHBhdGggZD0iTTQ5LjA5OTMgMzguMjAxMUM0Ni4xODE3IDUxLjIyOTcgMzMuNjk2MiA1OC45OTU3IDIxLjIxMTUgNTUuNTQ3M0M4LjcyNjc0IDUyLjA5OSAwLjk3MTM5NyAzOC43NDI1IDMuODg4OTggMjUuNzEzOUM2LjgwNjU3IDEyLjY4NTMgMTkuMjkyIDQuOTE5MyAzMS43NzY4IDguMzY3NjFMMjYuNDk0MSAzMS45NTc1TDQ5LjA5OTMgMzguMjAxMVoiIGZpbGw9IiM1NjQyNjAiLz4KPHBhdGggZD0iTTU0Ljc1MjcgMzQuMjIxMkM1Ny42NzAzIDIxLjE5MjYgNDkuOTE0OSA3LjgzNiAzNy40MzAyIDQuMzg3N0wzMi4xNDc1IDI3Ljk3NzZMNTQuNzUyNyAzNC4yMjEyWiIgZmlsbD0iI0U1N0NEOCIvPgo8L2c+Cjwvc3ZnPgo="
                alt=""
              />
              <div className="small-box-div">
                <h4>Reporting and transparency</h4>
                <p>
                  Get a big picture overview or dig into details with insightful
                  reports
                </p>
              </div>
              <div className="right-icon">
                <CgArrowLongRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

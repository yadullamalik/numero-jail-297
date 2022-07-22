import { FeaturesCard } from "./FeaturesCard";
import "./KeyFeatures.css";
import { BiCaretRight } from "react-icons/bi";
import { SpecificCard } from "./SpecificCard";
import { useRef } from "react";
import { useState } from "react";

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
  const users_card = [
    {
      desc: "“Toggl Track increased our profitability by at least 20%. We found out where the team was spending too much time on clients.”",
    },
    {
      desc: "“Toggl Track keeps me focused. I can say goodbye to the guilt that comes with multi-tasking or going off-topic.”",
    },
    {
      desc: "“Toggl Track has given us actual data about our labor; we're able to see how much time each step of our creative process takes.”",
    },
  ];
  const cards5 = [
    {
      img: "https://public-assets.toggl.com/b/static/7bd9521be3f8f6eb386c94d845cd0efd/feature-project-dashboard.png",
      title: "Project Dashboard",
      desc: "Forecast timelines, budgets, and track progress as you go. Spot problems early and fight off scope creep with easy-to-read visual data.",
    },
    {
      img: "https://public-assets.toggl.com/b/static/b85f4cb1f10b6a532049c9554a01cc8a/feature-project-alerts.png",
      title: "Project Estimates & Alerts",
      desc: "Get an alert as your project approaches its estimated end, so you'll instantly know when you're nearing the red.",
    },
  ];
  const cards6 = [
    {
      img: "https://public-assets.toggl.com/b/static/cc69f1b43256b2832be70e1efdaf474e/feature-billables.png",
      title: "Billable Rates",
      desc: "Assign billable rates by workspace, team member, project, or project member to clearly see what activities are generating revenue.",
    },
    {
      img: "https://public-assets.toggl.com/b/static/e66477e10b8dd7bbedf14fb48ea836f0/feature-insights.png",
      title: "Insights",
      desc: "Get actionable insights on your profitability with our Insights feature. With Insights, you can define labor costs for each team member to see how your expenses stack up against your billable rates.",
    },
  ];
  const specificCards1 = [
    {
      img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTUiIGhlaWdodD0iNTUiIHZpZXdCb3g9IjAgMCA1NSA1NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjEuNzQ2NSIgY3k9IjIyLjc0NjUiIHI9IjIxLjc0NjUiIGZpbGw9IiNGMkJERUMiLz4KPGNpcmNsZSBjeD0iNDAuMzg2MyIgY3k9IjEyLjY1MDIiIHI9IjExLjI2MTYiIGZpbGw9IiNFNTdDRDgiLz4KPHBhdGggZD0iTTQwLjc2NTMgMTkuMTU0M0M0MC41NzAzIDE5LjE1NDMgNDAuNDEwNyAxOS4wODc4IDQwLjI4NjYgMTguOTU0OEM0MC4xNjI0IDE4LjgzMDcgNDAuMTAwNCAxOC42NzU1IDQwLjEwMDQgMTguNDg5NFYxNy41ODVDMzkuNTU5NiAxNy41NDk2IDM5LjA3NjQgMTcuNDY1NCAzOC42NTA4IDE3LjMzMjRDMzguMjM0MSAxNy4xOTA1IDM3Ljg3NTEgMTcuMDM1NCAzNy41NzM2IDE2Ljg2NjlDMzcuMzY5NyAxNi43NTE3IDM3LjI0MTEgMTYuNTk2NSAzNy4xODggMTYuNDAxNUMzNy4xNDM2IDE2LjIwNjQgMzcuMTU2OSAxNi4wMjAyIDM3LjIyNzggMTUuODQyOUMzNy4yOTg4IDE1LjY2NTYgMzcuNDE4NSAxNS41NDE1IDM3LjU4NjkgMTUuNDcwNkMzNy43NTU0IDE1LjM5OTYgMzcuOTU0OCAxNS40MzA3IDM4LjE4NTQgMTUuNTYzNkMzOC40MzM2IDE1LjcwNTUgMzguNzU3MiAxNS44NDI5IDM5LjE1NjIgMTUuOTc1OUMzOS41NjQgMTYuMSA0MC4wNTE2IDE2LjE2MjEgNDAuNjE5IDE2LjE2MjFDNDEuMjg0IDE2LjE2MjEgNDEuNzYyNyAxNi4wNDY4IDQyLjA1NTMgMTUuODE2M0M0Mi4zNDc5IDE1LjU3NjkgNDIuNDk0MSAxNS4yNzk5IDQyLjQ5NDEgMTQuOTI1M0M0Mi40OTQxIDE0LjYzMjcgNDIuMzkyMiAxNC4zOTM0IDQyLjE4ODMgMTQuMjA3MkM0MS45ODQ0IDE0LjAyMSA0MS42MjA5IDEzLjg3MDMgNDEuMDk3OCAxMy43NTVMMzkuNjg4MSAxMy40NDkxQzM4LjA4MzQgMTMuMTAzNCAzNy4yODEgMTIuMjYxMSAzNy4yODEgMTAuOTIyNEMzNy4yODEgMTAuMTc3NyAzNy41MzM3IDkuNTUyNjMgMzguMDM5MSA5LjA0NzI3QzM4LjU1MzMgOC41MzMwNiAzOS4yNDA0IDguMjIyNzUgNDAuMTAwNCA4LjExNjM3VjcuMTcyMTZDNDAuMTAwNCA2Ljk4NTk3IDQwLjE2MjQgNi44MzA4MiA0MC4yODY2IDYuNzA2N0M0MC40MTA3IDYuNTczNzEgNDAuNTcwMyA2LjUwNzIyIDQwLjc2NTMgNi41MDcyMkM0MC45NTE1IDYuNTA3MjIgNDEuMTA2NiA2LjU3MzcxIDQxLjIzMDggNi43MDY3QzQxLjM2MzcgNi44MzA4MiA0MS40MzAyIDYuOTg1OTcgNDEuNDMwMiA3LjE3MjE2VjguMTAzMDdDNDEuNzg0OSA4LjEzODUzIDQyLjE1NzIgOC4yMjI3NSA0Mi41NDczIDguMzU1NzRDNDIuOTQ2MyA4LjQ4ODczIDQzLjI5MjEgOC42NzA0OCA0My41ODQ2IDguOTAwOTlDNDMuNzUzMSA5LjAzMzk4IDQzLjg1MDYgOS4xODkxMyA0My44NzcyIDkuMzY2NDRDNDMuOTAzOCA5LjUzNDg5IDQzLjg3MjggOS42OTQ0OCA0My43ODQxIDkuODQ1MkM0My43MDQzIDkuOTg3MDUgNDMuNTc1OCAxMC4wODQ2IDQzLjM5ODUgMTAuMTM3OEM0My4yMyAxMC4xODIxIDQzLjAzMDUgMTAuMTM3OCA0Mi44IDEwLjAwNDhDNDIuNTQyOSA5Ljg1NDA2IDQyLjI1NDggOS43MzQzOCA0MS45MzU2IDkuNjQ1NzJDNDEuNjE2NCA5LjU0ODE5IDQxLjIzNTIgOS40OTk0MyA0MC43OTE5IDkuNDk5NDNDNDAuMjI0NSA5LjQ5OTQzIDM5Ljc3NjggOS42Mjc5OSAzOS40NDg3IDkuODg1MDlDMzkuMTI5NiAxMC4xMzMzIDM4Ljk3IDEwLjQ2MTQgMzguOTcgMTAuODY5MkMzOC45NyAxMS4xNzA2IDM5LjA2NzUgMTEuNDE0NCAzOS4yNjI2IDExLjYwMDZDMzkuNDU3NiAxMS43Nzc5IDM5Ljc5MDEgMTEuOTE5OCA0MC4yNiAxMi4wMjYyTDQxLjcwOTUgMTIuMzQ1NEM0Mi41NjA2IDEyLjUzMTUgNDMuMTg1NyAxMi44Mjg1IDQzLjU4NDYgMTMuMjM2NEM0My45ODM2IDEzLjYzNTMgNDQuMTgzMSAxNC4xNjI4IDQ0LjE4MzEgMTQuODE4OUM0NC4xODMxIDE1LjU2MzYgNDMuOTI2IDE2LjE3NTQgNDMuNDExOCAxNi42NTQxQzQyLjkwNjQgMTcuMTI0IDQyLjI0NTkgMTcuNDIxIDQxLjQzMDIgMTcuNTQ1MlYxOC40ODk0QzQxLjQzMDIgMTguNjc1NSA0MS4zNjgyIDE4LjgzMDcgNDEuMjQ0MSAxOC45NTQ4QzQxLjExOTkgMTkuMDg3OCA0MC45NjA0IDE5LjE1NDMgNDAuNzY1MyAxOS4xNTQzWiIgZmlsbD0iIzJDMTMzOCIvPgo8cGF0aCBkPSJNMjUuODgzMiAyNy4yODc2QzIwLjY0MDggMzAuOTc2NyAxNy41MzQxIDMwLjcxNzggMTUuMzk4MyAzMC41ODg0QzcuNTAyMjcgMzMuNTAwNiAtMy40NzQ1MSA0MS4zMDU2IDE1Ljc4NjYgNDkuMjI3NUMzOS44NjMxIDU5LjEyOTkgNDcuNjI1NyA0OC43NTM0IDQ5Ljk1OTYgNDYuNTA5MkM1NS4wMDc5IDQxLjY1NTEgNTQuNDI1NCAyNC43NjM0IDUzLjg0MjkgMjIuNjI3NkM1My4zNzY5IDIwLjkxOSA1MS40NDgyIDIwLjQ5MTggNTAuNTQyMSAyMC40OTE4QzQ3LjI0MTMgMTkuOTA4NiA0NS43NTI3IDIyLjgyMTggNDUuNjg4IDI0Ljc2MzRDNDUuNjg4IDI0Ljc2MzQgNDYuNDY0NyAzNC4yNzc1IDQ1LjY4OCAzNy4xOUM0NS4wNjY3IDM5LjUxOTkgNDIuNTgxNCA0MC40OTA4IDQxLjQxNjQgNDAuNjg0OUMzOS42Njg5IDQwLjk0MzggMzUuMzk3MyA0MC44MDE0IDMyLjI5MDYgMzguMTYwOEMyOS4xODQgMzUuNTIwMSAzMC42MDc5IDMzLjQzNjEgMzEuNzA4MSAzMi43MjQyTDM3LjcyNzMgMjguODQwOUMzOC41MDM5IDI3Ljk5OTUgMzkuNTkxMiAyNS44NTA4IDM3LjcyNzMgMjMuOTg2OEMzNS44NjMzIDIyLjEyMjggMzQuMTAyOCAyMi4zMDQgMzMuNDU1NiAyMi42Mjc2TDI1Ljg4MzIgMjcuMjg3NloiIGZpbGw9IiM0MTJBNEMiLz4KPHJlY3QgeD0iMS45NDE0MSIgeT0iMzAuMTI0IiB3aWR0aD0iMTAuNDg0OSIgaGVpZ2h0PSIxOS40MTY1IiByeD0iMS4wNTUwOCIgZmlsbD0iI0U1N0NEOCIvPgo8L3N2Zz4K",
      h: "Billing and invoicing",
      p: "Capture every billable minute so you can invoice with ease and precision",
    },
    {
      img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTciIGhlaWdodD0iNTciIHZpZXdCb3g9IjAgMCA1NyA1NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swXzEwNTdfMTYyNSIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjU3IiBoZWlnaHQ9IjU3Ij4KPHJlY3Qgd2lkdGg9IjU3IiBoZWlnaHQ9IjU3IiBmaWxsPSIjQzRDNEM0Ii8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMF8xMDU3XzE2MjUpIj4KPHBhdGggZD0iTTQ5LjA5OTMgMzguMjAxMUM0Ni4xODE3IDUxLjIyOTcgMzMuNjk2MiA1OC45OTU3IDIxLjIxMTUgNTUuNTQ3M0M4LjcyNjc0IDUyLjA5OSAwLjk3MTM5NyAzOC43NDI1IDMuODg4OTggMjUuNzEzOUM2LjgwNjU3IDEyLjY4NTMgMTkuMjkyIDQuOTE5MyAzMS43NzY4IDguMzY3NjFMMjYuNDk0MSAzMS45NTc1TDQ5LjA5OTMgMzguMjAxMVoiIGZpbGw9IiM1NjQyNjAiLz4KPHBhdGggZD0iTTU0Ljc1MjcgMzQuMjIxMkM1Ny42NzAzIDIxLjE5MjYgNDkuOTE0OSA3LjgzNiAzNy40MzAyIDQuMzg3N0wzMi4xNDc1IDI3Ljk3NzZMNTQuNzUyNyAzNC4yMjEyWiIgZmlsbD0iI0U1N0NEOCIvPgo8L2c+Cjwvc3ZnPgo=",
      h: "Reporting and transparency",
      p: "Get a big picture overview or dig into details with insightful reports",
    },
  ];
  const specificCards2 = [
    {
      img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1MyA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjYuNSIgY3k9IjI2LjUiIHI9IjI2LjUiIGZpbGw9IiM0MTJBNEMiLz4KPGNpcmNsZSBjeD0iMjYuNSIgY3k9IjI2LjUwMDIiIHI9IjE5LjcyMDkiIGZpbGw9IiNGNUNCRUYiLz4KPGNpcmNsZSBjeD0iMjYuNjM1NCIgY3k9IjI2LjYzNTIiIHI9IjE0LjMxIiBmaWxsPSIjRTU3Q0Q4Ii8+CjxjaXJjbGUgY3g9IjI2LjM1MjEiIGN5PSIyNi4zNTIxIiByPSI4LjQ4IiBmaWxsPSIjRkZERTkxIi8+CjxwYXRoIGQ9Ik0yMS44MjM1IDIyLjg2MzJMMjcuMDE5NiAyOC4wNTkzTDM4LjQ1MDkgMTYuNjI3OSIgc3Ryb2tlPSIjNDEyQTRDIiBzdHJva2Utd2lkdGg9IjIuNTk4MDQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K",
      h: "Project budgeting",
      p: "Stay on track with budgets and deadlines. Eliminate scope creep and overwork",
    },
    {
      img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTQiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1NCA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGxpbmUgeDE9IjEuMTA0MTciIHkxPSItMS4xMDQxNyIgeDI9IjcuNjQyNTciIHkyPSItMS4xMDQxNyIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDEzOTcgLTAuNzEyNzcxIDAuNzIxODkzIDAuNjkyMDA0IDM5LjY0NiAxNC43NzE1KSIgc3Ryb2tlPSIjRTg4OURDIiBzdHJva2Utd2lkdGg9IjIuMjA4MzQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8bGluZSB4MT0iMS4xMDQxNyIgeTE9Ii0xLjEwNDE3IiB4Mj0iMTQuMTE0NiIgeTI9Ii0xLjEwNDE3IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjk0MzE5NCAtMC4zMzIyNDEgMC4zNDAwNTMgMC45NDA0MDYgMzkuNjQ2IDIwLjEzMjgpIiBzdHJva2U9IiNERDZGRDEiIHN0cm9rZS13aWR0aD0iMi4yMDgzNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxsaW5lIHgxPSIxLjEwNDE3IiB5MT0iLTEuMTA0MTciIHgyPSI3LjY4NDU0IiB5Mj0iLTEuMTA0MTciIHRyYW5zZm9ybT0ibWF0cml4KC0wLjkyNTA1OCAtMC4zNzk4MjcgMC4zODg0MDUgLTAuOTIxNDg5IDkuMTMwMTMgMTUuMjg1MikiIHN0cm9rZT0iI0U4ODlEQyIgc3Ryb2tlLXdpZHRoPSIyLjIwODM0IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPGxpbmUgeDE9IjEuMTA0MTciIHkxPSItMS4xMDQxNyIgeDI9IjE0LjAyNDkiIHkyPSItMS4xMDQxNyIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuNjYzNzkyIC0wLjc0NzkxNyAwLjc1NjQ3NCAtMC42NTQwMjQgMTQuMTgwOSAxMy4zMTU0KSIgc3Ryb2tlPSIjREQ2RkQxIiBzdHJva2Utd2lkdGg9IjIuMjA4MzQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMzIuMDU1NCAxNC40MzYxSDI0LjU0MjZMMTAuNTM2NiAyOC4wNjY0TDE2Ljg2ODggMzQuNjY2OUwyMi45MzI3IDI4LjgxNzdWNTJIMzIuMDU1NFYxNC40MzYxWiIgZmlsbD0iIzQxMkE0QyIvPgo8L3N2Zz4K",
      h: "For freelancers",
      p: "All things project and billing-related for the solopreneur juggling multiple clients and budgets",
    },
  ];
  const cards7 = [
    {
      img: "https://public-assets.toggl.com/b/static/780df679661aefbf3e7038f36d982e14/feature-team-activity.png",
      title: "Team Dashboard",
      desc: "Check in on your team, so you can see who is over capacity and who might be able to lend a hand.",
    },
    {
      img: "https://public-assets.toggl.com/b/static/8460ac6c46a2667068fe9c093241439a/feature-required.png",
      title: "Required Fields",
      desc: "Say goodbye to manual auditing! Set required fields to ensure your team fills in all the information you need for accurate reporting.",
    },
  ];
  const cards8 = [
    {
      img: "https://public-assets.toggl.com/b/static/fbfb7112c78af47d3182a4f94504b0df/feature-tracking-reminders.png",
      title: "Email Tracking Reminders",
      desc: "Automate email reminders to gently nudge team members who haven't tracked their target number of hours.",
    },
    {
      img: "https://public-assets.toggl.com/b/static/4c1a6ba95e1c276c88add60359d47a63/feature-audits.png",
      title: "Time Audits",
      desc: "Quickly find time entries that have not been assigned to a project or task, or that seem too short or too long.",
    },
  ];
  const specificCards3 = [
    {
      img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1MyA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGVsbGlwc2UgY3g9IjI2LjQwNzMiIGN5PSIzMS43NTQzIiByeD0iMTkuMzM1MyIgcnk9IjIxLjI0NTUiIGZpbGw9IiNGRUZCRkEiLz4KPHBhdGggZD0iTTE4LjQ4MjQgMzkuNDE4NkMyMC43MDEyIDQzLjI0OTcgMjguOTQyNSA0OC4xMjU4IDM1LjI4MiAzOS4wNzAzIiBzdHJva2U9IiNGMkJERUMiIHN0cm9rZS13aWR0aD0iMS43NTIxOSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxlbGxpcHNlIGN4PSIyNi40MDczIiBjeT0iMzEuNzU0MyIgcng9IjE5LjMzNTMiIHJ5PSIyMS4yNDU1IiBmaWxsPSIjRkVGQkZBIi8+CjxwYXRoIGQ9Ik0xOC40ODI0IDM5LjQxODZDMjAuNzAxMiA0My4yNDk3IDI4Ljk0MjUgNDguMTI1OCAzNS4yODIgMzkuMDcwMyIgc3Ryb2tlPSIjRjJCREVDIiBzdHJva2Utd2lkdGg9IjEuNzUyMTkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8ZWxsaXBzZSBjeD0iMjYuNDA3MyIgY3k9IjMxLjc1NDMiIHJ4PSIxOS4zMzUzIiByeT0iMjEuMjQ1NSIgZmlsbD0iI0ZFRkJGQSIvPgo8cGF0aCBkPSJNMTguNDgyNCAzOS40MTg2QzIwLjcwMTIgNDMuMjQ5NyAyOC45NDI1IDQ4LjEyNTggMzUuMjgyIDM5LjA3MDMiIHN0cm9rZT0iI0YyQkRFQyIgc3Ryb2tlLXdpZHRoPSIxLjc1MjE5IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTEyLjA2ODggMzAuOTc3MkM3LjIxNDk5IDMyLjE2MjQgNy4xMzI2MyAzNS4wNjIyIDcuNTMzNjYgMzYuNTk0MkM4LjM2OTQyIDM4LjA5NjkgNy44MjQ0NiAzNy43MDUxIDcuNTMzNjYgMzYuNTk0MkM2LjkzMjc4IDM1LjUxMzkgNS42MTgxOSAzMy40NTQzIDIuOTgyMjggMjkuOTc4N0MtMTEuMDUwMiAxMS40NzYxIDI4LjU3NiAtMC42Mzk1MDIgMzYuMTQ4MSAwLjAyNjExMTZDNDYuMTQzMyAwLjAyNjExMTYgNjEuNTkwNSAxMS42MDc5IDQ3LjA1MiAyMy45ODgzQzMyLjUxMzUgMzYuMzY4NyAzNi4xNDgxIDIwLjk5MjkgMjkuMzMzMiAyMC45OTI5QzI5LjMzMzIgMjAuOTkyOSA2LjYxNjg2IDE2LjIwMDUgMTIuMDY4OCAzMC45NzcyWiIgZmlsbD0iI0U1N0NEOCIvPgo8L3N2Zz4K",
      h: "Employee time tracking",
      p: "Loved by teams and team leads. Error-free timesheet data and ease of use",
    },
    {
      img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1MyA1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjYuNSIgY3k9IjI2LjUiIHI9IjI2LjUiIGZpbGw9IiM0MTJBNEMiLz4KPGNpcmNsZSBjeD0iMjYuNSIgY3k9IjI2LjUwMDIiIHI9IjE5LjcyMDkiIGZpbGw9IiNGNUNCRUYiLz4KPGNpcmNsZSBjeD0iMjYuNjM1NCIgY3k9IjI2LjYzNTIiIHI9IjE0LjMxIiBmaWxsPSIjRTU3Q0Q4Ii8+CjxjaXJjbGUgY3g9IjI2LjM1MjEiIGN5PSIyNi4zNTIxIiByPSI4LjQ4IiBmaWxsPSIjRkZERTkxIi8+CjxwYXRoIGQ9Ik0yMS44MjM1IDIyLjg2MzJMMjcuMDE5NiAyOC4wNTkzTDM4LjQ1MDkgMTYuNjI3OSIgc3Ryb2tlPSIjNDEyQTRDIiBzdHJva2Utd2lkdGg9IjIuNTk4MDQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K",
      h: "Payroll",
      p: "Calculate payroll for contractors and employees based on accurate data",
    },
  ];
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const handleScroll1 = () => {
    ref1.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleScroll2 = () => {
    ref2.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleScroll3 = () => {
    ref3.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleScroll4 = () => {
    ref4.current?.scrollIntoView({ behavior: "smooth" });
  };

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
          <span onClick={handleScroll1}>Time Tracking</span>
        </div>
        <div>
          <span onClick={handleScroll2} className="mini-nav-span">
            Reporting
          </span>
        </div>
        <div>
          <span onClick={handleScroll3} className="mini-nav-span">
            Project & Revenue Tracking
          </span>
        </div>
        <div>
          <span onClick={handleScroll4} className="mini-nav-span">
            Team Scheduling & Management
          </span>
        </div>
      </div>
      <div ref={ref1} className="time-tracking">
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
                  <p>
                    Currently available on{" "}
                    <span className="pink-span">Chrome</span> and{" "}
                    <span className="pink-span">Firefox</span>.
                  </p>
                  <button className="over-app-btn">See all integrations</button>
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
      <div ref={ref2} className="time-tracking">
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
        <h4 className="reporting-h4">
          LOOKING FOR A SPECIFIC USE CASE RELATED TO TIME REPORTING?
        </h4>
        <div className="specific-div">
          {specificCards1.map((e) => {
            return (
              <div key={e.h}>
                <SpecificCard {...e} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="users-love-us">
        <div>
          <h1
            style={{
              color: "#e57cd8",
              marginBottom: "-5px",
              fontSize: "50px",
              fontWeight: "500",
            }}
          >
            Users <span style={{ fontFamily: "MV Boli" }}>love</span> us!
          </h1>
          <p style={{ color: "#fff3ed", fontSize: "24px" }}>
            And we know you will too.
          </p>
        </div>
        <div>
          <img
            src="https://i.postimg.cc/zG4Z6QFC/Screenshot-184.png"
            style={{ width: "105%", marginLeft: "-60px" }}
            alt=""
          />
        </div>
        <div className="users-card">
          {users_card.map((e) => {
            return (
              <div key={e.desc}>
                <p>{e.desc}</p>
                <p>
                  Read the case study <BiCaretRight />
                </p>
              </div>
            );
          })}
        </div>
        <button className="users-btn">Try Toggl Track for free</button>
      </div>
      <div ref={ref3} className="time-tracking">
        <div>
          <h1 className="h1">Project & Revenue Tracking</h1>
          <p className="p">Where planning and profits meet</p>
        </div>
        <div className="feature-cards">
          <div>
            {cards5.map((e) => {
              return <FeaturesCard key={e.title} {...e} />;
            })}
          </div>
          <div>
            {cards6.map((e) => {
              return <FeaturesCard key={e.title} {...e} />;
            })}
          </div>
        </div>
      </div>
      <div className="specific-main-div">
        <h4 className="reporting-h4">
          LOOKING FOR A SPECIFIC USE CASE RELATED TO PROJECT OR REVENUE
          MANAGEMENT?
        </h4>
        <div className="specific-div">
          {specificCards2.map((e) => {
            return (
              <div key={e.h}>
                <SpecificCard {...e} />
              </div>
            );
          })}
        </div>
      </div>
      <div ref={ref4} className="time-tracking">
        <div>
          <h1 className="h1">Team Scheduling & Management</h1>
          <p className="p">Where planning and profits meet</p>
        </div>
        <div className="feature-cards">
          <div>
            {cards7.map((e) => {
              return <FeaturesCard key={e.title} {...e} />;
            })}
          </div>
          <div>
            {cards8.map((e) => {
              return <FeaturesCard key={e.title} {...e} />;
            })}
          </div>
        </div>
      </div>
      <div className="specific-main-div">
        <h4 className="reporting-h4">
          LOOKING FOR A SPECIFIC USE CASE RELATED TO PROJECT OR REVENUE
          MANAGEMENT?
        </h4>
        <div className="specific-div">
          {specificCards3.map((e) => {
            return (
              <div key={e.h}>
                <SpecificCard {...e} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="on-off-div">
        <h1 className="on-off-h1">
          Online, offline or on the go? <br /> We <span>have an app</span> for
          that!
        </h1>
        <p>Your data instantly syncs across all apps and devices</p>
        <img
          src="https://i.postimg.cc/jdpgn7cQ/Screenshot-186.png"
          style={{ marginBottom: "80px" }}
          alt=""
        />
      </div>
      <div className="last-div">
        <h1>
          Let us help you get on{" "}
          <span style={{ color: "palevioletred", fontFamily: "MV Boli" }}>
            Track
          </span>
          .
        </h1>
        <img
          src="https://i.postimg.cc/x1dZ226B/Screenshot-188.png"
          width="80%"
          alt=""
        />
      </div>
    </div>
  );
};

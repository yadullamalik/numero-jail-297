import React from "react";
import style from "./Plan.module.css";
import {
  TimeTracking,
  TeamManagement,
  Reporting,
  ProjectManagement,
  Integration,
} from "../Data/PlanData";
import { CheckIcon } from "@chakra-ui/icons";
const PlanCompare = () => {
  return (
    <div>
      <table className={style.mainTable}>
        <thead>
          <tr className={style.bestValueTR}>
            <th></th>
            <th></th>
            <th></th>
            <th>Best Value</th>
            <th></th>
          </tr>
          <tr className={style.headRow}>
            <th className={style.firstHead}>
              <div className={style.h1SecondDiv}></div>
            </th>
            <th className={style.tableHead}>
              <div className={style.h1SecondDiv}>
                <p>Free</p>
                <div className={style.startButtonDiv}>
                  <button className={style.getStartButton}>Get Started</button>
                </div>
              </div>
            </th>
            <th className={style.tableHead}>
              <div className={style.h1SecondDiv}>
                <p>Starter</p>
                <div className={style.startButtonDiv}>
                  <button className={style.getStartButton}>Get Started</button>
                </div>
              </div>
            </th>
            <th className={style.tableHead}>
              <div className={style.h1SecondDiv}>
                <p>Premium</p>
                <div className={style.startButtonDiv}>
                  <button className={style.getStartButton}>Get Started</button>
                </div>
              </div>
            </th>
            <th className={style.tableHead}>
              <div className={style.h1SecondDiv}>
                <p>Enterprise</p>
                <div className={style.startButtonDiv}>
                  <button className={style.getStartButton}>Book a Demo</button>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className={style.miniHeading}>
            <td>TimeTracking</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {TimeTracking.map((el) => {
            return (
              <tr className={style.rowData}>
                <td>{el.Feature}</td>
                <td>
                  {el.Free ? (
                    <CheckIcon boxSize={5} className={style.rightIcon} />
                  ) : null}
                </td>
                <td>
                  {el.Starter ? (
                    <CheckIcon boxSize={5} className={style.rightIcon} />
                  ) : null}
                </td>
                <td>
                  {el.Premium ? (
                    <CheckIcon boxSize={5} className={style.rightIcon} />
                  ) : null}
                </td>
                <td>
                  {el.Enterprise ? (
                    <CheckIcon boxSize={5} className={style.rightIcon} />
                  ) : null}
                </td>
              </tr>
            );
          })}

          <tr className={style.miniHeading}>
            <td>Team Management</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {TeamManagement.map((el) => {
            return (
              <tr className={style.rowData}>
                <td>{el.Feature}</td>
                <td>
                  {el.Free ? (
                    <CheckIcon boxSize={5} className={style.rightIcon} />
                  ) : null}
                </td>
                <td>
                  {el.Starter ? (
                    <CheckIcon boxSize={5} className={style.rightIcon} />
                  ) : null}
                </td>
                <td>
                  {el.Premium ? (
                    <CheckIcon boxSize={5} className={style.rightIcon} />
                  ) : null}
                </td>
                <td>
                  {el.Enterprise ? (
                    <CheckIcon boxSize={5} className={style.rightIcon} />
                  ) : null}
                </td>
              </tr>
            );
          })}

          <tr className={style.miniHeading}>
            <td>Reporting</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {Reporting.map((el) => {
            return (
              <tr className={style.rowData}>
                <td>{el.Feature}</td>
                <td>
                  {el.Free ? (
                    <CheckIcon boxSize={5} className={style.rightIcon} />
                  ) : null}
                </td>
                <td>
                  {el.Starter ? (
                    <CheckIcon boxSize={5} className={style.rightIcon} />
                  ) : null}
                </td>
                <td>
                  {el.Premium ? (
                    <CheckIcon boxSize={5} className={style.rightIcon} />
                  ) : null}
                </td>
                <td>
                  {el.Enterprise ? (
                    <CheckIcon boxSize={5} className={style.rightIcon} />
                  ) : null}
                </td>
              </tr>
            );
          })}

          <tr className={style.miniHeading}>
            <td>Project Management</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {ProjectManagement.map((el) => {
            return (
              <tr className={style.rowData}>
                <td>{el.Feature}</td>
                <td>
                  {el.Free ? (
                    <CheckIcon boxSize={5} className={style.rightIcon} />
                  ) : null}
                </td>
                <td>
                  {el.Starter ? (
                    <CheckIcon boxSize={5} className={style.rightIcon} />
                  ) : null}
                </td>
                <td>
                  {el.Premium ? (
                    <CheckIcon boxSize={5} className={style.rightIcon} />
                  ) : null}
                </td>
                <td>
                  {el.Enterprise ? (
                    <CheckIcon boxSize={5} className={style.rightIcon} />
                  ) : null}
                </td>
              </tr>
            );
          })}

          <tr className={style.miniHeading}>
            <td>Integration</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {Integration.map((el) => {
            return (
              <tr className={style.rowData}>
                <td>{el.Feature}</td>
                <td>
                  {el.Free ? (
                    <CheckIcon boxSize={5} className={style.rightIcon} />
                  ) : null}
                </td>
                <td>
                  {el.Starter ? (
                    <CheckIcon boxSize={5} className={style.rightIcon} />
                  ) : null}
                </td>
                <td>
                  {el.Premium ? (
                    <CheckIcon boxSize={5} className={style.rightIcon} />
                  ) : null}
                </td>
                <td>
                  {el.Enterprise ? (
                    <CheckIcon boxSize={5} className={style.rightIcon} />
                  ) : null}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PlanCompare;

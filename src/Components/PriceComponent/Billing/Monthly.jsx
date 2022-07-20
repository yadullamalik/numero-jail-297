import React from "react";
import { MonthlyPriceData } from "../Data/PriceData";
import BillingCard from "./BillingCard";

const Annual = () => {
  return (
    <div style={{ display: "flex", gap: "10px", margin: "auto", width: "85%" }}>
      {MonthlyPriceData.map((el) => {
        return <BillingCard key={el.MainHeading} data={el} />;
      })}
    </div>
  );
};

export default Annual;

import React from "react";
import DailyAverages from "./DailyAverages.js";
import StatsDashboard from "./StatsDashboard.js";

const Statistics = ({ sessions, user }) => {
  return (
    <>
      <StatsDashboard sessions={sessions} user={user} />
      <DailyAverages sessions={sessions} user={user} />
    </>
  );
};

export default Statistics;

import React from "react";
import Dashboard from "./dashBoard";
import DonutChart from "./donutChart";
import QuickActions from "./quickAction";
import EventPage from "./eventCard";
import ProgressLine from "./progress";
import Layout from "../../Layout/index";

const LandingPage = () => {
  return (
    <Layout>
      <Dashboard />
      <DonutChart />
      <QuickActions />
      <EventPage />
      <ProgressLine />
    </Layout>


  );
};

export default LandingPage;

import React from "react";


import LandingPage from "../Pages/Landing";
import JobFormPage from "../Pages/JobForms";

export const appRoutes = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/JobFormPage",
    element: <JobFormPage />,
  },
];

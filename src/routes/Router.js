import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
// const Alerts = lazy(() => import("../views/ui/Alerts"));
// const Badges = lazy(() => import("../views/ui/Badges"));
// const Buttons = lazy(() => import("../views/ui/Buttons"));
const Visits = lazy(() => import("../views/Visits"));
const LogASale = lazy(() => import("../views/LogASale"));
const Messages = lazy(() => import("../views/Messgs"));
const Settings = lazy(() => import("../views/Settings"));
const Account = lazy(() => import("../views/Account"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const  Appointments = lazy(() => import("../views/ Appointments"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Support = lazy(() => import("../views/ui/Support"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));

/*****Routes******/

const mode = "login";

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/dashboard" /> },
      // { path: "/dashboard", exact: true, element: <Starter /> },
      { path: "/dashboard", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <Account /> },
      { path: "/alerts", exact: true, element: <Messages /> },
      { path: "/badges", exact: true, element: <Visits /> },
      { path: "/buttons", exact: true, element: <LogASale /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Settings/> },
      { path: "/table", exact: true, element: <Appointments /> },
      { path: "/forms", exact: true, element: <Support /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
    ],
  },
];

export default ThemeRoutes;

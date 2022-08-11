import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

/****Layouts*****/

const FullLayout = lazy(() => import('../layouts/FullLayout.js'));

/***** Pages ****/

const Starter = lazy(() => import('../views/Starter.js'));
const Visits = lazy(() => import('../views/Visits'));
const LogASale = lazy(() => import('../views/LogASale'));
const Messages = lazy(() => import('../views/Messgs'));
const Settings = lazy(() => import('../views/Settings'));
const Account = lazy(() => import('../views/Account'));
const Appointments = lazy(() => import('../views/ Appointments'));
const Support = lazy(() => import('../views/ui/Support'));

/*****Routes******/

const ThemeRoutes = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to='/dashboard' /> },
      { path: '/dashboard', exact: true, element: <Starter /> },
      { path: '/account', exact: true, element: <Account /> },
      { path: '/messages', exact: true, element: <Messages /> },
      { path: '/visits', exact: true, element: <Visits /> },
      { path: '/logsale', exact: true, element: <LogASale /> },
      { path: '/settings', exact: true, element: <Settings /> },
      { path: '/appointments', exact: true, element: <Appointments /> },
      { path: '/support', exact: true, element: <Support /> },
    ],
  },
];

export default ThemeRoutes;

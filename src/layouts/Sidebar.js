<<<<<<< HEAD
import { Button, Nav, NavItem } from 'reactstrap'
import { Link, useLocation } from 'react-router-dom'
import user1 from '../assets/images/users/user4.jpg'
import probg from '../assets/images/bg/download.jpg'

const navigation = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: 'bi bi-speedometer2',
  },
  {
    title: 'Messages',
    href: '/messages',
    icon: 'bi bi-bell',
  },
  {
    title: 'Visits',
    href: '/visits',
    icon: 'bi bi-patch-check',
  },
  {
    title: 'Log A Sale',
    href: '/logsale',
    icon: 'bi bi-hdd-stack',
  },
  {
    title: 'Appointments',
    href: '/appointments',
    icon: 'bi bi-layout-split',
  },
  // {
  //   title: "About",
  //   href: "/cards",
  //   icon: "bi bi-card-text",
  // },
  {
    title: 'Support',
    href: '/support',
    icon: 'bi bi-textarea-resize',
  },
  // {
  //   title: "Support",
  //   href: "/breadcrumbs",
  //   icon: "bi bi-link",
  // },
  {
    title: 'Settings',
    href: '/settings',
    icon: 'bi bi-columns',
  },
  {
    title: 'Account',
    href: '/account',
    icon: 'bi bi-people',
  },
]

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById('sidebarArea').classList.toggle('showSidebar')
  }
  let location = useLocation()

  // const logoutHandler = () => {
  //   <Link
  //     to={'/'}
  //   ></Link>;
  // };
=======
import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import user1 from "../assets/images/users/user4.jpg";
import probg from "../assets/images/bg/download.jpg";

const navigation = [
  {
    title: "Dashboard",
    href: "/starter",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Alert",
    href: "/alerts",
    icon: "bi bi-bell",
  },
  {
    title: "Badges",
    href: "/badges",
    icon: "bi bi-patch-check",
  },
  {
    title: "Buttons",
    href: "/buttons",
    icon: "bi bi-hdd-stack",
  },
  {
    title: "Cards",
    href: "/cards",
    icon: "bi bi-card-text",
  },
  {
    title: "Grid",
    href: "/grid",
    icon: "bi bi-columns",
  },
  {
    title: "Table",
    href: "/table",
    icon: "bi bi-layout-split",
  },
  {
    title: "Forms",
    href: "/forms",
    icon: "bi bi-textarea-resize",
  },
  {
    title: "Breadcrumbs",
    href: "/breadcrumbs",
    icon: "bi bi-link",
  },
  {
    title: "About",
    href: "/about",
    icon: "bi bi-people",
  },
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();
>>>>>>> f6f914f (Alpha phase complete)

  return (
    <div>
      <div className="d-flex align-items-center"></div>
      <div
        className="profilebg"
        style={{ background: `url(${probg}) no-repeat` }}
      >
        <div className="p-3 d-flex">
<<<<<<< HEAD
          <img
            src={localStorage.getItem('avatar') || user1}
            alt="user"
            width="50"
            className="rounded-circle"
          />
=======
          <img src={user1} alt="user" width="50" className="rounded-circle" />
>>>>>>> f6f914f (Alpha phase complete)
          <Button
            color="white"
            className="ms-auto text-white d-lg-none"
            onClick={() => showMobilemenu()}
          >
            <i className="bi bi-x"></i>
          </Button>
        </div>
<<<<<<< HEAD
        <div className="bg-dark text-white p-2 opacity-75">
          {!window.localStorage.getItem('fullname')
            ? 'Sbusiso Nkala (active)'
            : window.localStorage.getItem('fullname')}
        </div>
=======
        <div className="bg-dark text-white p-2 opacity-75">Steave Rojer</div>
>>>>>>> f6f914f (Alpha phase complete)
      </div>
      <div className="p-3 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
<<<<<<< HEAD
                onClick={showMobilemenu}
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? 'active nav-link py-3'
                    : 'nav-link text-secondary py-3'
=======
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "active nav-link py-3"
                    : "nav-link text-secondary py-3"
>>>>>>> f6f914f (Alpha phase complete)
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
          <Button
            color="danger"
            tag="a"
<<<<<<< HEAD
            target="_self"
            className="mt-3"
            href="http://localhost:3000/"
            onClick={() => {
              window.localStorage.removeItem('token')
            }}
          >
            Logout
=======
            target="_blank"
            className="mt-3"
            href="https://wrappixel.com/templates/materialpro-react-admin/?ref=33"
          >
            Upgrade To Pro
>>>>>>> f6f914f (Alpha phase complete)
          </Button>
        </Nav>
      </div>
    </div>
<<<<<<< HEAD
  )
}

export default Sidebar
=======
  );
};

export default Sidebar;
>>>>>>> f6f914f (Alpha phase complete)

import {
  CardGiftcard,
  ConnectWithoutContact,
  Home,
  People,
  RateReview,
  TipsAndUpdates,
  Verified,
  Work,
} from "@mui/icons-material";
import {
  Facebook,
  GitHub,
  LinkedIn,
  Loop,
  Reddit,
  WhatsApp,
} from "@mui/icons-material";
import "./menu.scss";
const Menu = ({ menuOpen, setMenuOpen }) => {
  const menuItem = [
    {
      id: 1,
      element: "Profile",
      href: "profile",
      icon: <Home />,
    },
    {
      id: 2,
      element: "About Me",
      href: "about",
      icon: <People />,
    },
    {
      id: 3,
      element: "What I DO",
      href: "services",
      icon: <Verified />,
    },
    {
      id: 4,
      element: "Skills",
      href: "services",
      icon: <Verified />,
    },
    {
      id: 5,
      element: "Projects",
      href: "projects",
      icon: <Work />,
    },
    {
      id: 6,
      element: "Certification",
      href: "certification",
      icon: <CardGiftcard />,
    },
    {
      id: 7,
      element: "QA Guidelines ",
      href: "guidance",
      icon: <TipsAndUpdates />,
    },
    {
      id: 8,
      element: "Contact",
      href: "contact",
      icon: <ConnectWithoutContact />,
    },
  ];
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        {menuItem.map((d) => (
          <li key={d.id} onClick={() => setMenuOpen(false)}>
            <span>{d.icon} </span>
            <a href={`#${d.href}`}>{d.element}</a>
          </li>
        ))}
      </ul>
      <div className="menu-footer">
        {/* <div className="social-links mb-2 p">
          <a href="">
            <Facebook className="icon text-white" />
          </a>
          <a href="">
            <LinkedIn className="icon text-white" />
          </a>
          <a href="">
            <GitHub className="icon text-white" />
          </a>
          <a href="">
            <WhatsApp className="icon text-white" />
          </a>
        </div> */}
        <p> Copyright © 2024 Sagar Parajuli | All rights are reserved.</p>
      </div>
    </div>
  );
};

export default Menu;

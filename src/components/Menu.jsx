import { FaAward, FaHome } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import {
  MdCardGiftcard,
  MdConnectWithoutContact,
  MdTipsAndUpdates,
  MdVerified,
  MdWork,
} from "react-icons/md";
import { Link } from "react-router-dom";
const Menu = ({ menuOpen, setMenuOpen }) => {
  const menuItem = [
    {
      id: 1,
      element: "Profile",
      href: "profile",
      icon: <FaHome />,
    },
    {
      id: 2,
      element: "About Me",
      href: "about",
      icon: <IoPersonCircle />,
    },
    {
      id: 3,
      element: "What I DO",
      href: "services",
      icon: <MdVerified />,
    },
    {
      id: 4,
      element: "Skills",
      href: "services",
      icon: <FaAward />,
    },
    {
      id: 5,
      element: "Projects",
      href: "projects",
      icon: <MdWork />,
    },
    {
      id: 6,
      element: "Certification",
      href: "certification",
      icon: <MdCardGiftcard />,
    },
    {
      id: 7,
      element: "QA Guidelines ",
      href: "guidance",
      icon: <MdTipsAndUpdates />,
    },
    {
      id: 8,
      element: "Contact",
      href: "contact",
      icon: <MdConnectWithoutContact />,
    },
  ];
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        {menuItem.map((d) => (
          <li
            key={d.id}
            onClick={() => setMenuOpen(false)}
            className="p-2 mb-4 rounded-1 "
          >
            <span className="h5">{d.icon} </span>
            <Link href={`#${d.href}`}>{d.element}</Link>
          </li>
        ))}
      </ul>
      <div className="menu-footer">
        <p className="small">
          {" "}
          Copyright © 2024 Sagar Parajuli | All rights are reserved | Designed
          by Lanisha Koirala.
        </p>
      </div>
    </div>
  );
};

export default Menu;

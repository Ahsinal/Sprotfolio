import { useEffect, useState } from "react";
import { FaAward, FaHome } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import {
  MdCardGiftcard,
  MdConnectWithoutContact,
  MdTipsAndUpdates,
  MdVerified,
  MdWork,
} from "react-icons/md";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = ({ menuOpen, setMenuOpen }) => {
  const [windowChange, setWindowChange] = useState(false);

  useEffect(() => {
    const changeNavbarPosition = () => {
      if (window.scrollY >= 100) {
        setWindowChange(true);
      } else {
        setWindowChange(false);
      }
    };
    window.addEventListener("scroll", changeNavbarPosition);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", changeNavbarPosition);
    };
  }, []);

  const menuItem = [
    {
      id: 1,
      element: "Profile",
      href: "#profile",
      icon: <FaHome />,
    },
    {
      id: 2,
      element: "About Me",
      href: "#about",
      icon: <IoPersonCircle />,
    },
    {
      id: 3,
      element: "What I Do",
      href: "#services",
      icon: <MdVerified />,
    },
    {
      id: 4,
      element: "Skills",
      href: "#services",
      icon: <FaAward />,
    },
    {
      id: 5,
      element: "Projects",
      href: "#projects",
      icon: <MdWork />,
    },
    {
      id: 6,
      element: "Certification",
      href: "/certification",
      icon: <MdCardGiftcard />,
    },
    {
      id: 7,
      element: "QA Guidelines",
      href: "/guidance",
      icon: <MdTipsAndUpdates />,
    },
    {
      id: 8,
      element: "Contact",
      href: "#contact",
      icon: <MdConnectWithoutContact />,
    },
  ];

  return (
    <>
      <div className={`navbarr ${menuOpen && "active"}`}>
        <div className="wrapper">
          <div className="left">
            <a as="Link" href="/" className="logo">
              SP
            </a>
            <div className="d-none d-lg-flex">
              <div className="itemContainer">
                <IoPersonCircle className="icon" />
                <span>+1 437-878-5778</span>
              </div>

              <div className="itemContainer">
                <MdMail className="icon" />
                <span>parajuli.sagar1998@gmail.com</span>
              </div>

              <div className="itemContainer">
                <FaLocationDot className="icon" />
                <span>Toronto, Ontario, Canada</span>
              </div>

              <div className="itemContainer">
                <Link to="assets/cv.pdf" download="cv.pdf">
                  <FaCloudDownloadAlt className="icon" />
                  <span>Download CV</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="hamberger" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
      </div>

      <div className={`menu ${menuOpen && "active"}`}>
        <ul>
          {menuItem.map((d) => (
            <li
              key={d.id}
              onClick={() => setMenuOpen(false)}
              className="p-2 mb-4 rounded-1"
            >
              <span className="h5">{d.icon}</span>
              <Link to={d.href}>{d.element}</Link>
            </li>
          ))}
        </ul>
        <div className="menu-footer">
          <p className="small">
            Copyright © 2024 Sagar Parajuli | All rights are reserved | Designed
            by Lanisha Koirala.
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;

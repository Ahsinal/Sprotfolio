import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoPersonCircle } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { Link } from "react-router-dom";
const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <div className={"navbarr " + (menuOpen && "active")}>
        <div className="wrapper">
          <div className="left">
            <a as="Link" href="/" className="logo">
              SP
            </a>
            <div className=" d-none d-lg-flex">
              <div className="itemContainer ">
                <IoPersonCircle className="icon" />
                <span>+1 437-878-5778</span>
              </div>

              <div className="itemContainer">
                <MdMail className="icon" />
                <span>parajuli.sagar1998@gmail.com</span>
              </div>

              <div className="itemContainer">
                <FaLocationDot className="icon" />
                <span>Toronto,Ontario,Canada</span>
              </div>

              <div className="itemContainer">
                <Link href="assets/cv.pdf" download="cv.pdf">
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
    </>
  );
};
export default Header;

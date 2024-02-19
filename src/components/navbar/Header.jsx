import "./navbar.scss";
import {
  Person,
  Mail,
  LocationCityRounded,
  CloudDownload,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <div className={"navbarr " + (menuOpen && "active")}>
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo">
              SP
            </a>
            <div className=" d-none d-lg-flex">
              <div className="itemContainer ">
                <Person className="icon" />
                <span>+1 437-878-5778</span>
              </div>

              <div className="itemContainer">
                <Mail className="icon" />
                <span>parajuli.sagar1998@gmail.com</span>
              </div>

              <div className="itemContainer">
                <LocationCityRounded className="icon" />
                <span>Toronto,Ontario,Canada</span>
              </div>

              <div className="itemContainer">
                <a href="assets/cv.pdf" download="cv.pdf" >
                  <CloudDownload className="icon" /><span>Download CV</span>
                </a>
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
// const Header= ()=> {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   return (
//     <>
//       <section className="headerr">
//         <Navbar expand="lg" className="py-2 w-100 ">
//           <Container>
//             <Navbar.Brand href="/" className="fw-bold text-light d-lg-none">
//               SP
//             </Navbar.Brand>
//             <div className="d-flex align-items-center gap-1 py-2 d-lg-none">
//               <Button variant="outline-light" size="sm" onClick={handleShow}>
//                 <FaBars className="" />
//               </Button>
//             </div>
//             {/* for small screen */}

//             <div className="d-none d-lg-flex align-items-center justify-content-between w-100  gap-1 py-2">
//               <Navbar.Brand href="/" className="fw-bold text-light">
//                 SP
//               </Navbar.Brand>
//               <div className="d-flex align-items-center gap-1 py-2">
//                 <IoPersonCircle className="me-2" />
//                 <span className="me-4">+1 437-878-5778</span>

//                 <IoMdMail className="me-2" />
//                 <span className="me-4">parajuli.sagar1998@gmail.com</span>

//                 <CiLocationOn className="me-2" />
//                 <span className="me-4">30 Nuffled Drive,Toronto</span>
//               </div>

//               <Button variant="outline-light" size="sm" onClick={handleShow}>
//                 <FaBars className="" />
//               </Button>
//             </div>
//           </Container>
//         </Navbar>
//       </section>
//     </>
//   );
// }
export default Header;

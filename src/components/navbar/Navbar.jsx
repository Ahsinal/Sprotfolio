import './navbar.scss'
import {Person,Mail, LocationCityRounded } from "@mui/icons-material"
const Navbar = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={'navbarr ' + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>SP</a>
          <div className="itemContainer">
            <Person className='icon'/>
            <span>+1 437-878-5778</span>
          </div>

          <div className="itemContainer">
            <Mail className='icon'/>
            <span>parajuli.sagar1998@gmail.com</span>
          </div>

          <div className="itemContainer">
            <LocationCityRounded className='icon'/>
            <span>30 Nuffled Drive,Toronto</span>
          </div>
        </div>

        <div className="right">
          <div className="hamberger" onClick={()=>setMenuOpen(!menuOpen)}>
          <span className='line1'></span>
          <span className='line2'></span>
          <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
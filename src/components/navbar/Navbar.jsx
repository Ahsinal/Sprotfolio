import './navbar.scss'
import {Person,Mail} from "@mui/icons-material"
const Navbar = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={'navbarr ' + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>SP</a>
          <div className="itemContainer">
            <Person className='icon'/>
            <span>98426000000</span>
          </div>

          <div className="itemContainer">
            <Mail className='icon'/>
            <span>sp@gmail.com</span>
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
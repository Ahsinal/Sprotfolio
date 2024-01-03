import { CardGiftcard, ConnectWithoutContact, Home, People, RateReview, TipsAndUpdates, Verified, Work } from '@mui/icons-material';
import './menu.scss'
const Menu = ({menuOpen,setMenuOpen}) => {
    const menuItem=[
        {
            id:1,
            element:"Profile",
            href:"profile",
            icon:<Home/>
        },
        {
            id:2,
            element:"About Me",
            href:"about",
            icon:<People/>
        },{
            id:3,
            element:"Work Experience",
            href:"portfolio",
            icon:<Verified/>
        },
        {
            id:4,
            element:"Projects",
            href:"works",
            icon:<Work/>
        },
        {
            id:5,
            element:"Testimonials",
            href:"testimonials",
            icon:<RateReview/>
        },
        {
            id:6,
            element:"Certification",
            href:"certification",
            icon:<CardGiftcard/>
        },
        {
            id:7,
            element:"Contact",
            href:"contact",
            icon:<ConnectWithoutContact/>
        },
        {
            id:8,
            element:"QA Guidelines",
            href:"contact",
            icon:<TipsAndUpdates/>
        },
    ];  
  return (
    <div className={'menu ' + (menuOpen && "active")}>
        <ul>
           {
            menuItem.map((d)=>(
                <li key={d.id} onClick={()=>setMenuOpen(false)}>
                    <span>{d.icon} </span>
                <a href={`#${d.href}`}>{d.element}</a>
            </li>
            ))
           }
        </ul>
        <div className="menu-footer">
           <p> Copyright © 2024 Sagar Parajuli | All rights are reserved.</p>
        </div>
    </div>
  )
}

export default Menu
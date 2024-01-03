import './intro.scss'
import { init } from 'ityped'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import {Facebook, GitHub, LinkedIn, Reddit, WhatsApp} from '@mui/icons-material';
import { useEffect,useRef } from 'react';
const Intro = () => {
  const textRef =useRef(null);

  useEffect(()=>{
    const textElement=textRef.current;
    if(textElement){
      init(textElement, { 
        backDelay:1500, 
        showCursor:true,
        strings: ['Associate', 'Engineer','Testing Automation'],
      });
    }
  },[]);
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/sp2.png" alt="" />
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Sagar Parajuli</h1>
          <h3>QA <span ref={textRef}></span></h3>

          <div className="social-links">  
            <Facebook className='icon'/>
            <LinkedIn className='icon'/>
            <GitHub className='icon'/>
            <WhatsApp className='icon'/>
            <Reddit className='icon'/>
          </div>

          <div className="buttonContainer">
            <a href=""><button>Download CV</button></a>
            <button>Guidance</button>
          </div>
        </div>
        {/* <a href="#protfolio">
            <ExpandCircleDownIcon className='icon'/>
          </a> */}
      </div>
    </div>
  )
}

export default Intro
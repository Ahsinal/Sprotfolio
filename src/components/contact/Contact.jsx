import './contact.scss'
import {Email, FmdGood, Phone,Send} from '@mui/icons-material/';
const Contact = () => {
  return (
    <div className='contact' id='contact'>
      {/* <div className="left">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjEpnR4_UimrLUXbcon7mCE-4f-1prTtLpVo5sT-TRppdZDQgDSyzRuPE1jDzNTuUnf6s&usqp=CAU" alt="" />
      </div>

      <div className="right">
        <h2>Contact</h2>
        <form action="">
          <input type="text" placeholder='E-mail' />
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </form>
      </div> */}

      <div className="content">
        <h2>Contact Me</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ducimus at repellat sint placeat delectus itaque accusantium quisquam. 
        </p>
      </div>

      <div className="container">
        <div className="containerInfo">
          <div className="box">
            <div className="icon">
              <FmdGood/>
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>30 Nuffled Drive,Toronto</p>
            </div>
          </div>

          <div className="box">
            <div className="icon">
              <Phone/>
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>+1 437-878-5778</p>
            </div>
          </div>

          <div className="box">
            <div className="icon">
              <Email className='muicon'/>
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>parajuli.sagar1998@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="contactForm">
          <form action="">
            <h2>Leave A Message </h2>
            <div className="inputBox">
              <input type="text" name='' required />
              <span>Full Name </span>
            </div>

            <div className="inputBox">
              <input type="email" name='' required />
              <span>Email </span>
            </div>

            <div className="inputBox">
              <textarea name="" id=""  required></textarea>
              <span>Your Message </span>
            </div>

            <div className="inputBox">
              <input type="submit" name=''  value='Send' />
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Contact
import React from 'react'
import './Popup.css'
import '../../App.css'

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className="popup-inner">
          <button className="close-btn" onClick={() => props.setTrigger(false)}><i className="fa-solid fa-x"></i></button>
        <div className="info">
          <div className='white-card'>
            <div className="popUpInTouch">
              <p className='ta-c popUpInTouchP fw'>Lets keep in Touch </p>
            </div>
            <h2 className='ta-c fw'> Get 20% off </h2>
            <p className='popUpInTouchInfo ta-c'>Necessary up knowledge it tolerably. 
              Unwilling departure education is be dashwoods or an. 
              Use off agreeable law unwilling sir deficient curiosity instantly. 
              Easy mind life fact with see has bore ten any chatty.</p>
            <div className="email-input">
              <input type="email" className='email' placeholder='Enter your email'/>
            </div>
            <div className="sign-up-btn">
              <button className='btn-signUp'>SIGN UP NOW</button>
            </div>  
          </div>

        </div>
        
        { props.children }
      </div>
    </div>
  ) : "";
}

export default Popup;
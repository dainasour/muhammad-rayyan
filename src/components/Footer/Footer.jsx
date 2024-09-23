import React, { useEffect, useState } from 'react';
import './Footer.css';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import user_icon from '../../assets/user_icon.svg';
import LinkedIn from '../../assets/linkedIn.svg';

const Footer = () => {

const [year , setYear] = useState(new Date().getFullYear());

useEffect(() => {
  setYear(new Date().getFullYear());
},[])

  return (
    <div className='footer'>
      <ToastContainer />
      <div className="footer-top">
        <div className="footer-top-left">
          <h1>Rayyan</h1>
          <p>I am continuously enhancing my web development skills and am eager to contribute to innovative projects.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="User Icon" />
            <input type="email" placeholder='Enter your email' autoComplete='off'/>
          </div>
          <div onClick={() => toast.success("Subscribed Successfully")} className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © {year} Muhammad Rayyan. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

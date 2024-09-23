import React from 'react';
import './Hero.css';
import man_emoji1 from "../../assets/man_emoji1.jfif";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from '../../assets/resume/dummy.pdf';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={man_emoji1} alt="" />
      <h1><span>I'm Muhammad Rayyan,</span> web developer based in Pakistan. </h1>
      <p>I'm motivated and detail-oriented web developer with a strong foundation in React JS and Node JS. I'm eager to apply my skills to build dynamic and user-friendly web applications. I'm proficient in HTML, CSS, JavaScript, and have a passion for creating engaging digital experiences.</p>
      <div className="hero-action">
        <div className="hero-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
        </div>
        <div className="hero-resume"><a href={resume} target='_blank'>My resume</a></div>
      </div>
    </div>
  )
}

export default Hero

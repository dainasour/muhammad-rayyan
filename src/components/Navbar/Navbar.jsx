// import React, { useRef, useState } from 'react';
// import './Navbar.css';
// import underline from '../../assets/nav_underline.svg';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
// import menu_open from '../../assets/menu_open.svg';
// import menu_close from '../../assets/menu_close.svg';


// const Navbar = () => {

//   const [menu , setMenu] = useState("home");
//   const menuRef = useRef();

//   const openMenu = () => {
//     menuRef.current.style.right="0";
//   }

//   const closeMenu = () => {
//     menuRef.current.style.right="-350px";
//   }

//   return (
//     <div className='navbar'>
//       {/* <img src={logo} alt="" /> */}
      
//       <h1 className='nav-name'>Rayyan</h1>
//       <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
//       <ul ref={menuRef} className='nav-menu'>
//         <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
//         <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} alt=""/> : <></>}</li>
//         <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu === "about" ? <img src={underline} alt=""/> : <></>}</li>
//         <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu === "services" ? <img src={underline} alt=""/> : <></>}</li>
//         <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("projects")}>Projects</p></AnchorLink>{menu === "projects" ? <img src={underline} alt=""/> : <></>}</li>
//         <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src={underline} alt=""/> : <></>}</li>
//       </ul>
//       <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
//     </div>
//   )
// }

// export default Navbar

import React, { useRef, useState } from 'react';
import './Navbar.css';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Control menu open state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close state
  };

  return (
    <div className='navbar'>
      <h1 className='nav-name'>Rayyan</h1>

      {/* Show the open icon only when the menu is closed */}
      {!isMenuOpen && (
        <img src={menu_open} onClick={toggleMenu} alt="Open Menu" className='nav-mob-open' />
      )}

      {/* Navigation menu */}
      <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        {/* Show the close icon only when the menu is open */}
        {isMenuOpen && (
          <img src={menu_close} onClick={toggleMenu} alt="Close Menu" className="nav-mob-close" />
        )}
        
        <li>
          <AnchorLink className='anchor-link' href='#home' onClick={() => { setMenu("home"); toggleMenu(); }}>
            <p>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about' onClick={() => { setMenu("about"); toggleMenu(); }}>
            <p>About Me</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#services' onClick={() => { setMenu("services"); toggleMenu(); }}>
            <p>Services</p>
          </AnchorLink>
          {menu === "services" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#work' onClick={() => { setMenu("projects"); toggleMenu(); }}>
            <p>Projects</p>
          </AnchorLink>
          {menu === "projects" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact' onClick={() => { setMenu("contact"); toggleMenu(); }}>
            <p>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt="underline" />}
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;

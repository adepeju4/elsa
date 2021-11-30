
import { useState } from 'react';
import { Link} from 'react-router-dom';

import { NavbarContainer, Logo,NavMenu, NavLinks, NavItem } from "../styles/navbar.module.scss";
import Mobile from './MobileNav/Mobile.js';

function Navbar() {
  

       const [match, setMatch] = useState(
    window.matchMedia("(max-width: 790px)").matches
  );

 

  const handler = (e) => setMatch(e.matches);
  window.matchMedia("(max-width: 790px)").addEventListener("change", handler);

    const menuList = [
    { path: "/gallery", target: "Gallery" },
    { path: "/about", target: "About us" },
    { path: "/contact", target: "Contact us" },
  ];


    return (
      <>
        <div className={NavbarContainer}>
          <div className={Logo}>
            <Link to="/">Elsa</Link>
          </div>
          {!match ? (
            <div className={NavMenu}>
              <ul className={NavLinks}>
                <li className={NavItem}>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li className={NavItem}>
                  <Link to="/about">About Us</Link>
                </li>
                <li className={NavItem}>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          ) : (
          
              <Mobile menulist={menuList} />
          
          )}
        </div>
      </>
    );
}

export default Navbar

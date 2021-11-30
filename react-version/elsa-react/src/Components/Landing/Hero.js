import React from 'react';
import { Link } from 'react-router-dom';
import ScrollButton from '../ScrollToElement/ScrollBtn';
import { BsArrowDown } from "react-icons/bs";

import {
  Container,
  Caption,
  Subtitle,
  Cta,
  ContactUsBtn,
  SignUpBtn,
  
} from "../../styles/hero.module.scss";

function Hero() {
    return (
      <div className={Container}>
        <div className={Caption}>
          <h3>Find your Dream House!</h3>
          <p className={Subtitle}>
            Elsa Homes is a property consulting company based in Nigeria. We
            also provide a marketplace for home buyers to meet and discuss with
            home sellers over properties they are interested in purchasing.
          </p>
          <div className={Cta}>
            <Link to="/gallery" className={SignUpBtn}>
              View Homes
            </Link>
            <Link to="/contact" className={ContactUsBtn}>
              Contact Us
            </Link>
          </div>
        </div>
      
        <ScrollButton ScrollIcon={BsArrowDown}/>
      </div>
    );
}

export default Hero

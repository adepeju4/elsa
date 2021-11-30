import React from 'react';
import { Link } from 'react-scroll';

import {
  ScrollBtn,
  Btn,
  ArrowDown,
  Rotate
} from "../../styles/hero.module.scss";
function ScrollButton({ScrollIcon}) {
    return (
      <div className={ScrollBtn}>
        <div className={Btn}>
        <div className={Rotate}></div>
          <Link to="info" spy={true} smooth={true}>
            <ScrollIcon className={ArrowDown} />
          </Link>
        </div>
      </div>
    );
}

export default ScrollButton

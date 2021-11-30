import React from 'react';
import {
  GiMushroomHouse,
  GiHouseKeys,
  GiVikingLonghouse,
} from "react-icons/gi";
import { Container, Heading, Content, Card, CardIcon, CardContent, CardHeading, CardBody } from '../../styles/info.module.scss';

function InfoSection() {
    return (
      <div className={Container} id="info">
        <div className={Heading}>
          <h3>Services Offered By Elsa</h3>
          <p>
            Our services ranges beyond good price. We also offer consultancy and
            good home qualities for sale and for rent.
          </p>
        </div>
        <div className={Content}>
          <div className={Card}>
                    <div className={CardIcon}>
                        <GiHouseKeys/>
            </div>
            <div className={CardContent}>
              <div className={CardHeading}>
                <h3>Buy Properties</h3>
              </div>
              <div className={CardBody}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam unde ipsa necessitatibus, nostrum itaque possimus magni
                  ut sequi sapiente eius aspernatur voluptate nemo voluptatum
                  ad, consectetur similique vitae ipsam porro.
                </p>
              </div>
            </div>
          </div>
          <div className={Card}>
            <div className={CardIcon}><GiMushroomHouse/></div>
            <div className={CardContent}>
              <div className={CardHeading}>
                <h3>Sell Properties</h3>
              </div>
              <div className={CardBody}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam unde ipsa necessitatibus, nostrum itaque possimus magni
                  ut sequi sapiente eius aspernatur voluptate nemo voluptatum
                  ad, consectetur similique vitae ipsam porro.
                </p>
              </div>
            </div>
          </div>
          <div className={Card}>
                    <div className={CardIcon}>
                        <GiVikingLonghouse/>
            </div>
            <div className={CardContent}>
              <div className={CardHeading}>
                <h3>Rent Properties</h3>
              </div>
              <div className={CardBody}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam unde ipsa necessitatibus, nostrum itaque possimus magni
                  ut sequi sapiente eius aspernatur voluptate nemo voluptatum
                  ad, consectetur similique vitae ipsam porro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default InfoSection

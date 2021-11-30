import React from 'react';
import image from '../images/imageThree.jpg';
import {container, about, container_image} from '../styles/about.module.scss';


function About() {
    return (
        <div className={container}>
            <div className={about}>
           <h3>
           About Elsa
           </h3>

           <p>
           Elsa is reimagining real estate to make it easier to unlock life’s next chapter.

As the most-visited real estate website in the United States, Elsa and its affiliates offer customers an on-demand experience for selling, buying, renting and financing with transparency and nearly seamless end-to-end service. Elsa Offers buys and sells homes directly in dozens of markets across the country, allowing sellers control over their timeline. Elsa Home Loans, our affiliate lender, provides our customers with an easy option to get pre-approved and secure financing for their next home purchase. Elsa recently launched Elsa Homes, Inc., a licensed brokerage entity, to streamline Elsa Offers transactions.
           </p>
            </div>
            <div className={container_image}>

            </div>
        </div>
    )
}

export default About

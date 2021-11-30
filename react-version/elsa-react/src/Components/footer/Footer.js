import styles from "../../styles/footer.module.scss";
import AppStore from '../../assets/AppStore.png'
import GooglePlay from '../../assets/GooglePlay.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
import youtube from '../../assets/youtube.png'
import { useLocation } from "react-router-dom";


const Footer = () => {

  const location = useLocation()
  return (
    <>
      {location.pathname === '/' ? (<div className={styles.footer}>

        <div>
          <p>Company</p>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>FAQs</p>
        </div>

        <div>
          <p>About</p>
          <p>Company Team</p>
          <p>Blog</p>
        </div>

        <div>
          <p>SIGN UP TO OUR NEWSLETTER</p>

          <input
            type="text"
            className={styles.footer_input}
            placeholder="Your email address"
          />
        </div>

        <div>
          <p>Download Elsa</p>

          <img className={styles.download} src={AppStore} />

          <img className={styles.download} src={GooglePlay}/>
        </div>

        <div>
          <p>CONTACT US</p>
          <p>+2348123456780</p>
          
        </div>

        <div>
          <p>Join us on</p>
          <img src={facebook} className={styles.facebook} />
          <img src={twitter} className={styles.twitter} />
          <img src={instagram} className={styles.instagram} />
          <img src={youtube} className={styles.youtube} />
        </div>
        
      </div>): (<></>)}
      
    </>

  );
};

export default Footer;
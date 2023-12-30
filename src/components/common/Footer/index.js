import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faAndroid, faFacebook, faTwitter, faInstagram, faTiktok, faSnapchat } from '@fortawesome/free-brands-svg-icons';
import mastercardLogo from '../../../assets/images/footer/mastero.png';
import amexLogo from '../../../assets/images/footer/american-express.png';
import paypalLogo from '../../../assets/images/footer/paypal.png';
import ebayLogo from '../../../assets/images/footer/ebay.png';
import gpayLogo from '../../../assets/images/footer/gpay.png';
import monoBank from '../../../assets/images/footer/monobank.png';
import discoverLogo from '../../../assets/images/footer/discover.png';
import payoneer from '../../../assets/images/footer/payoneer.png';
import applePay from '../../../assets/images/footer/apple-pay.png';
import amazon from '../../../assets/images/footer/amazon-logo.png';
import westUnion from '../../../assets/images/footer/westernunion.png';
import bitPay from '../../../assets/images/footer/bitpay.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="container">

        <div className="left">
          <div className='company-help-care-wrapper'>
            <div className="section company-info ">
              <h3>COMPANY INFO</h3>
              <ul>
                <li>About</li>
                <li>Social Responsibility</li>
                <li>Affiliate</li>
                <li>Fashion Blogger</li>
              </ul>
            </div>
            <div className="section help-support">
              <h3>HELP & SUPPORT</h3>
              <ul>
                <li>Shipping Info</li>
                <li>Returns</li>
                <li>How to Order</li>
                <li>How to Track</li>
                <li>Size Chart</li>
              </ul>
            </div>
            <div className="section customer-care">
              <h3>CUSTOMER CARE</h3>
              <ul>
                <li>Contact Us</li>
                <li>Payment</li>
                <li>Bonus Point</li>
                <li>Notices</li>
              </ul>
            </div>
          </div>
          <div class=" legal">
            <h5><span>2010-2023</span>All Rights Reserved</h5>
            <ul>
              <li><Link to="">Privacy Center</Link></li>
              <li><Link to="">Privacy & Cookies Policy</Link></li>
              <li><Link to="">Manage Cookies</Link></li>
              <li><Link to="">Terms & Conditions</Link></li>
              <li><Link to="">Copyright Notice</Link></li>
              <li><Link to="">Imprint</Link></li>
            </ul>
          </div>
        </div>

        <div className='right'>
          <div>
            <div className='social-platforms-wrapper'>
              <div className="section socials">
                <h3>SOCIALS</h3>
                <ul>
                  <li><FontAwesomeIcon icon={faFacebook} /></li>
                  <li><FontAwesomeIcon icon={faTwitter} /></li>
                  <li><FontAwesomeIcon icon={faInstagram} /></li>
                  <li><FontAwesomeIcon icon={faTiktok} /></li>
                  <li><FontAwesomeIcon icon={faSnapchat} /></li>
                </ul>
              </div>
              <div className="section platforms">
                <h3>PLATFORMS</h3>
                <ul>
                  <li><FontAwesomeIcon icon={faAndroid} /> </li>
                  <li><FontAwesomeIcon icon={faApple} /> </li>
                </ul>
              </div>
            </div>


            <div class="subscription-form">
              <h5>SIGN UP</h5>
              <form>
                <input type="email" placeholder="Your email" required />
                <button type="submit">SUBSCRIBE</button>
              </form>
              <p>By clicking the SUBSCRIBE button, you are agreeing to our <Link to="" style={{ color: "#1251CE", fontWeight: "bold" }}>Privacy & Cookie Policy</Link>.</p>
            </div>
          </div>

          <div>


            <div className="section payment-type">
              <h5>WE ACCEPT</h5>
              <ul>
                <li><img src={mastercardLogo} alt="Mastercard" /></li>
                <li><img src={paypalLogo} alt="PayPal" /></li>
                <li><img src={gpayLogo} alt="Google Pay" /></li>
                <li><img src={ebayLogo} alt="eBay" /></li>
                <li><img src={monoBank} alt="Mono Bank" /></li>
                <li><img src={discoverLogo} alt="Discover" /></li>
                <li><img src={westUnion} alt="Western Union" /></li>
                <li><img src={payoneer} alt="Payoneer" /></li>
                <li><img src={applePay} alt="Apple Pay" /></li>
                <li><img src={amexLogo} alt="American Express" /></li>
                <li><img src={amazon} alt="Amazon" /></li>
                <li><img src={bitPay} alt="BitPay" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

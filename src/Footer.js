import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="sec1">
        <div className="footer-section">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
          <div className="email-signup">
            <input type="email" placeholder="Enter your e-mail..." className="email-input" />
            <button className="subscribe-button">SUBSCRIBE</button>
          </div>
        </div>

        <div className="footer-section">
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h3 className="currency-title">CURRENCY</h3>
          <div className="currency-selector">
            <img src="./us.png" alt="US Flag" className="currency-flag" />
            <span>USD</span>
          </div>
          <p className="currency-note">Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>
      </div>



      <div className='l'>
        <div className="footer-bottom">
          <div className="quick-links">
            <div>
              <h3>mettā muse</h3>
              <ul>
                <li>About Us</li>
                <li>Stories</li>
                <li>Artisans</li>
                <li>Boutiques</li>
                <li>Contact Us</li>
                <li>EU Compliances Docs</li>
              </ul>
            </div>
            <div>
              <h3>QUICK LINKS</h3>
              <ul>
                <li>Orders & Shipping</li>
                <li>Join/Login as a Seller</li>
                <li>Payment & Pricing</li>
                <li>Return & Refunds</li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          
          
            <div className="footer-bottom-content">
              <div className="social-section">
                <h3>FOLLOW US</h3>
                <div className="social-icons">
                  <img src="./insta.png" alt="Instagram" />
                  <img src="./a.png" alt="LinkedIn" />
                </div>

                <div className="payment-section">
                  <h3>mettā muse ACCEPTS</h3>
                  <div className="payment-methods">
                    <img src="./Group 136188.png" alt="Google Pay" className="payment-icon" />
                    <img src="./Group 136190.png" alt="Mastercard" className="payment-icon" />
                    <img src="./Group 136192.png" alt="PayPal" className="payment-icon" />
                    <img src="./Group 136193.png" alt="American Express" className="payment-icon" />
                    <img src="./Group 136194.png" alt="Apple Pay" className="payment-icon" />
                    <img src="./Group 136195.png" alt="OPay" className="payment-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <p className="copyright">Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
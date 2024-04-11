import React from 'react';

import footerLists from '../assets/data/footer-nav';
import socialLists from '../assets/data/social-lists';
import logo from "../assets/images/logo.png";
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer-area'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-2">
                    <div className="footer-logo">
                        <a href="/">
                            <img src={logo} alt="logo" />
                        </a>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="footer-widget">
                        <ul className="footer-nav"> 
                            {footerLists.map(({ id, links, name }) => (
                                <li key={id}>
                                    <a href={links}>
                                        {name}
                                    </a>
                                </li>
                            ))}  
                        </ul>
                        <ul className="footer-social">
                            {socialLists.map(({ id, links, icon }) => (
                                <li key={id}>
                                    <a href={links}>
                                        {icon}
                                    </a>
                                </li>
                            ))}  
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="footer-newsletter">
                        <div className="h5">Subscribe to Our Newsletter</div>
                        <form action="/">
                            <input type="email" name="email" placeholder='Email Address'/>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="copy-right text-center">
                        <div className="h6">Privacy Policy <a href="/">AVNPAD</a> Terms of Use</div>
                        <p>&copy; All right Reserved by AVN PAD</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
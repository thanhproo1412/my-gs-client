import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const faFacebookFIcon = <FontAwesomeIcon icon={faFacebookF} />
const faTwitterIcon = <FontAwesomeIcon icon={faTwitter} />
const faYoutubeIcon = <FontAwesomeIcon icon={faYoutube} />

export const MyFooter = () => {

    return (
        <div>
            <div class="footer-block">
                <div id="x97gk87d">
                    <a href="/affiliates" title="Affiliates" class="k8d37b6db4">affiliates</a>
                </div>
                <div id="footer-logo">
                    <img src="https://digitalupgrade.com/images/footerlogo.png" width="910" height="173" alt="Footer Logo" class="img-fluid" />
                </div>
                <div id="socials-bar">
                    <a href="https://www.facebook.com/dupgrade/" target="_blank" rel="noopener noreferrer" title="Facebook">
                        {faFacebookFIcon}
                    </a>
                    <a href="https://twitter.com/digital_upgrade?lang=en" target="_blank" rel="noopener noreferrer" title="Twitter">
                        {faTwitterIcon}
                    </a>
                    <a href="https://www.linkedin.com/company/digital-upgrade" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                        {faYoutubeIcon}
                    </a>
                </div>
                <div id="footer-menu">
                    <a href="/home" target="_blank" rel="noopener" title="HOME">HOME</a>
                    <a href="/about" target="_blank" rel="noopener" title="ABOUT">ABOUT</a>
                    <a href="/it-solutions" target="_blank" rel="noopener" title="IT SOLUTIONS">IT SOLUTIONS</a>
                    <a href="/security" target="_blank" rel="noopener" title="SECURITY">SECURITY</a>
                    <a href="/creative-design" class="footer-link" target="_blank" rel="noopener" title="CREATIVE DESIGN">CREATIVE DESIGN</a>
                    <a href="/consulting" target="_blank" rel="noopener" title="CONSULTING">CONSULTING</a>
                    <a href="/clients" rel="noopener" target="_blank" title="CLIENTS">CLIENTS</a>
                    <a href="/contact" target="_blank" rel="noopener" title="CONTACT">CONTACT</a>
                </div>
                <div id="footer-contact">
                    <div class="contact-info">
                        <div id="contact-top">
                            <h3>Contact</h3>
                            <p><i class="bi bi-caret-up-square-fill"></i>Digital Upgrade</p>
                            <p><i class="bi bi-geo-fill"></i>816 N. 9th Ave. Evansville, IN 47712</p>
                            <p><i class="bi bi-phone-fill"></i>(812) 266-9176</p>
                        </div>
                        <div id="contact-bottom">
                            <h3>Hours</h3>
                            <p><i class="bi bi-calendar-check-fill"></i>Monday - Friday</p>
                            <p><i class="bi bi-clock-fill"></i>9 AM - 5 PM</p>
                        </div>
                    </div>
                    <div id="contact-buttons">
                        <a href="tel:18122669176" title="Call Us">
                            <i class="bi bi-telephone-outbound-fill"></i>CALL US
                        </a>
                        <a href="/contact" title="Send a Message">
                            <i class="bi bi-envelope-fill"></i>SEND A MESSAGE
                        </a>
                    </div>
                </div>
                <div id="footer-partners">
                    <p>OUR COMPANY PARTNERS</p>
                    <img src="https://digitalupgrade.com/images/googlelogo.png" width="83" height="28" alt="Google Logo" />
                    <img src="https://digitalupgrade.com/images/cyberpowerlogo.png" width="125" height="24" alt="Cyberpower Logo" />
                </div>
            </div>
        </div>
    )
}
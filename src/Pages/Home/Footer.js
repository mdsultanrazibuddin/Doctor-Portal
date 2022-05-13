import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer style={{
            background:`url(${footer})`,
            backgroundSize:`cover`
        }} class=" p-10 ">
        <div className='footer'>
            <div>
            <span class="footer-title">Services</span> 
            <Link class="link link-hover">Branding</Link>
            <Link class="link link-hover">Design</Link>
            <Link class="link link-hover">Marketing</Link>
            <Link class="link link-hover">Advertisement</Link>
            </div> 
            <div>
            <span class="footer-title">Company</span> 
            <Link class="link link-hover">About us</Link>
            <Link class="link link-hover">Contact</Link>
            <Link class="link link-hover">Jobs</Link>
            <Link class="link link-hover">Press kit</Link>
            </div> 
            <div>
            <span class="footer-title">Legal</span> 
            <Link class="link link-hover">Terms of use</Link>
            <Link class="link link-hover">Privacy policy</Link>
            <Link className="link link-hover">Cookie policy</Link>
            </div>  
        </div>
        
        
            <div className="footer footer-center p-4text-base-content mt-10">
                <p>Copyright © 2022 - All right reserved by Doctors Portal</p>
            </div>

      </footer>
    );
};

export default Footer;
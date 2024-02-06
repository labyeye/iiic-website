import React from 'react';
import './footer.css';
import './iiic_logo.png'

export default function Footer() {
    return (
        <footer>
            <div className="row">
                <div className="col">
                    <img src="./iiic_logo.png" alt="iiic_logo" className="logo"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, dolor tenetur. Sunt!</p>
                </div>
                <div className="col">
                    <h3>Office <div className="underline"><span></span></div> </h3>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                    <p>Lorem, ipsum.</p>
                    <p className='email-id'>mail@gmail.com</p>
                    <h4>+91 12345 67890</h4>
                </div>
                <div className="col">
                    <h3>Links<div className="underline"><span></span></div></h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h3>Newsletter<div className="underline"><span></span></div></h3>
                    <form>
                        <i className="fa-regular fa-envelope" />
                        <input type="email" placeholder="Enter your email" required/>
                        <button type='submit'><i className="fa-solid fa-arrow-right" /></button>
                    </form>
                    <div className="social-icons">
                        <i className="fa-brands fa-linkedin" />
                        <i className="fa-brands fa-instagram" />
                        <i className="fa-brands fa-whatsapp" />
                    </div>
                </div>
            </div>
            <hr />
            <p className='copyright'>IIIC &copy; 2024 - All Rights Reserved</p>
        </footer>
    );
}
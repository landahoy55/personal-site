import React from 'react';
import './Footer.css';
import Subtitle from '../subtitle/Subtitle';
import avatar from './pete.png';


const Footer = () => (
    <footer>
            <Subtitle text={'Get in Touch'} />
            <div className="footerTopRow">
                <div className="footerTopRowLeft">
                        <div><i className="fab fa-linkedin fa-3x"></i></div>
                        <div><i className="fab fa-github fa-3x"></i></div>
                </div>
                <div className="footerTopRowRight">
                    <p className="email">hello@petermalone.co</p>
                    <img src={avatar} alt=""/>
                </div>
            </div>
            <hr/>
                <div>
                    <p className="signOff">2019 Pete Malone <br/> Built in Bristol, via Devon</p>
                </div>
     </footer>
);


export default Footer;
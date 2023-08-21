import React from 'react';


import vk from '../../assets/vk.svg';
import telegram from '../../assets/telegram.svg';
import insta from '../../assets/insta.svg';
import facebook from '../../assets/facebook.svg';

import './footer.scss'
const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__wrapper">
                    <span className='footer__tel'><a href="tel:+79001111111">+7-900-111-11-11</a></span>
                    <ul>
                        <a href="https://vk.com"><li><img src={vk} alt=""/></li></a>
                        <a href="https://t.me/uno_mass"><li><img src={telegram} alt=""/></li></a>
                        <a href="https://vk.com"><li><img src={insta} alt=""/></li></a>
                        <a href="https://vk.com"><li><img src={facebook} alt=""/></li></a>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
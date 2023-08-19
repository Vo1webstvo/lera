import React from 'react';

import logo from '../../assets/logo.png'
import vk from '../../assets/vk.svg';
import telegram from '../../assets/telegram.svg';
import insta from '../../assets/insta.svg';
import facebook from '../../assets/facebook.svg';

import './header.scss'
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/Routes";



const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__wrapper">
                    <Link to={ROUTES.HOME}>
                        <div className="header__logo">
                            <img src={logo} alt="logo"/>

                        </div>
                    </Link>
                    <div className="header__info">
                            Лера Иванова <br/>
                        г. Санкт-Петербург
                    </div>
                    <div className="header__link">
                        <ul className="header__ul">
                            <li className="header__item">
                                <a href='https://vk.com'> <img src={vk} alt="vk"/> </a>
                            </li>
                            <li className="header__item">
                                <a href= 'https://t.me/uno_mass'> <img src={telegram} alt="telegram"/> </a>
                            </li>
                            <li className="header__item">
                                <a href= 'https://instagram.com'> <img src={insta} alt="insta"/> </a>
                            </li>
                            <li className="header__item">
                                <a href= 'https://facebook.com'> <img src={facebook} alt="facebook"/> </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className='line'/>
            </div>
        </header>
    );
};

export default Header;
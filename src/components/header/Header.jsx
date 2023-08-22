import React from 'react';

import {NavLink} from "react-router-dom";
import {ROUTES} from "../../utils/Routes";

import logo from '../../assets/logo.svg'

import './header.scss'





const Header = () => {
    return (
        <header className='header'>
                    <div className="container">
                        <nav className="header__nav">
                            <ul>
                                <NavLink to={ROUTES.HOME}><img src={logo} alt="logo"/></NavLink>
                                <NavLink to={ROUTES.HOME}><li>Главная</li></NavLink>
                                <NavLink to={ROUTES.ME}><li>Обо мне</li></NavLink>
                                {/*<NavLink to={ROUTES.REVIEWS}><li>Отзывы</li></NavLink>*/}
                                <NavLink to={ROUTES.PRICE}><li>Стоимоть занятий</li></NavLink>
                                <NavLink to={ROUTES.CONTACTS}><li>Контакты</li></NavLink>
                            </ul>
                        </nav>
                    </div>
        </header>
    );
};

export default Header;
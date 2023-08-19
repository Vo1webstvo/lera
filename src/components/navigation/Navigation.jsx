import React from 'react';

import {NavLink} from "react-router-dom";
import {ROUTES} from "../../utils/Routes";

import './navigation.scss'

const Navigation = () => {
    const navItem = [
        {name: 'home', label: 'Главная'},
        {name: 'for me', label: 'Обо мне'},
        {name: 'price', label: 'Оформить'},
        {name: 'contact', label: 'Контакты'},
    ]

    return (
        <section className='navigation'>
            <div className="container">
                <nav>
                    <ul className='navigation__ul'>
                        <NavLink to={ROUTES.HOME}>
                                        <li className='navigation__item'>
                                            Главная
                                        </li>
                        </NavLink>
                        <NavLink to={ROUTES.ME}>
                            <li className='navigation__item'>
                                Обо мне
                            </li>
                        </NavLink>
                        <NavLink to={ROUTES.CONTACTS}>
                            <li className='navigation__item'>
                                Контакты
                            </li>
                        </NavLink>


                    </ul>
                </nav>
            </div>
        </section>
    );
};

export default Navigation;
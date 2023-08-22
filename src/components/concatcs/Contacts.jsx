import React from 'react';

import mail from '../../assets/contacts/mail.svg'
import vk from '../../assets/vk.svg';
import telegram from '../../assets/telegram.svg';
import insta from '../../assets/insta.svg';
import facebook from '../../assets/facebook.svg';

import Header from "../header/Header";

import './contacts.scss'
const Contacts = () => {
    return (
        <>
            <Header/>
            <div className="contacts">
                <div className="container">
                    <h2>Контакты для связи со мной</h2>
                    <div className="contacts__text">
                        Для заказа моей услуги переводчика или по другим вопросам, пишите на приведенные ниже контакты. <br/> <br/>
                        <span>Отвечаю стабильно с 9.00 до 18.00 по Московскому времени. Выходные суббота и воскресенье (На связи постоянно, написать можно, но отвечу только в понедельник, если не сильно срочно 😊)</span>
                    </div>

                    <div className="contacts__item">
                        <div className="contacts__item-wrapper">
                            <img src={mail} alt="mail"/>
                            <div className="contacts__link">
                                <a href='mailtu:123@gmail.com' className="contacts__descr">123@gmail.com
                                </a>
                                <span>Электронная почта</span>
                            </div>
                        </div>

                        <div className="contacts__item-wrapper mt10">
                            <img src={vk} alt="mail"/>
                            <div className="contacts__link">
                                <a href='https://vk.com' className="contacts__descr">https://vk.com/
                                </a>
                                <span>Вконтакте</span>
                            </div>
                        </div>

                        <div className="contacts__item-wrapper mt10">
                            <img src={telegram} alt="mail"/>
                            <div className="contacts__link">
                                <a href='https://t.me/uno_mass' className="contacts__descr">https://t.me/uno_mass
                                </a>
                                <span>Телеграм</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Contacts;

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

import Header from "../header/Header";

import my1 from '../../assets/myphoto/1.jpg'
import my2 from '../../assets/myphoto/2.jpg'
import my3 from '../../assets/myphoto/3.jpg'

import './forme.scss'
const ForMe = () => {
    return (
        <>
            <Header/>
            <div className='forme'>
                <div className="container">
                    <h2 className='forme__title'>Обо мне</h2>
                    <div className="forme__wrapper">
                        <div className="forme__slider">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={30}
                                keyboard={{
                                    enabled: true,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Keyboard, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide><img src={my1} alt="lera"/></SwiperSlide>
                                <SwiperSlide><img src={my2} alt="lera"/></SwiperSlide>
                                <SwiperSlide><img src={my3} alt="lera"/></SwiperSlide>
                            </Swiper>
                        </div>
                        <ul className="forme__descr">
                            <li className="forme__list">
                                <span> <b>Профессиональное образование:</b> </span>
                                высшее
                            </li>
                            <li className="forme__list">
                                <span> <b>Вуз:</b> </span>
                                МГУ
                            </li>
                            <li className="forme__list">
                                <span> <b>Год окончания:</b> </span>
                                2020
                            </li>
                            <li className="forme__list">
                                <span> <b>Специальность</b> :</span>
                                учитель-переводчик
                            </li>
                            <li className="forme__list">
                                <span> <b>Дата выдачи диплома:</b> </span>
                                2021
                            </li>
                            <li className="forme__list">
                                <span> <b>Место работы:</b> </span>
                                Кремль
                            </li>
                            <li className="forme__list">
                                <span> <b>Общий трудовой стаж:</b> </span>
                                100 лет
                            </li>
                            <li className="forme__list">
                                <span> <b>Педагогический стаж:</b> </span>
                                50 лет
                            </li>
                            <li className="forme__list">
                                <span> <b>Опыт репититорства</b> </span>
                                50 лет
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForMe;
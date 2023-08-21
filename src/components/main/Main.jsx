import React from 'react';

import bigban from '../../assets/bg/bigban.jpeg'

import './main.scss'
const Main = () => {
    return (
        <section className='main'>
                <div className="main__wrapper">
                    <img src={bigban} alt="bigban"/>
                    <h1>Изучай <br/> английский <br/> с <span>ValerieiEnglish <br/> Club</span></h1>
                    <div className="main__text">
                        Для всех англоманов, кто хочет раз и навсегда разобраться в грамматике, обсудить фильм или просто поговорить о жизни на английском
                    </div>
                    <button className="btn">Стартуем!</button>
                </div>
        </section>
    );
};

export default Main;
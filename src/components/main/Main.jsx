import React from 'react';

import lang from '../../assets/lang.svg'
import myPhoto from '../../assets/myPhoto.png'

import './main.scss'
const Main = () => {
    return (
        <section className='main'>
            <div className="container">
                <h2>Услуги рипетиторства</h2>
                <div className="main__lang">
                    <img src={lang} alt="language"/>
                    Языки: Английский, Русский, Немецкий
                </div>
                <div className="main__descr">
                    <div className="text">
                        Предоставляю услуги по рипетиторству / переводу статей, текстов....
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci delectus enim explicabo facere harum, laboriosam laborum libero quasi soluta voluptatibus. Consequuntur distinctio eveniet natus placeat quidem quis quo quos, tenetur!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eum, harum iure magnam perferendis veniam. Amet consequatur deserunt distinctio, dolorem facere fugit itaque nisi, praesentium quod, repudiandae similique sit voluptate.
                    </div>
                    <div className="photo">
                        {/*<img src={myPhoto} alt=""/>*/}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;
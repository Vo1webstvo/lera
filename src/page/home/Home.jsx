import React from 'react';

import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import Footer from '../../components/footer/Footer'

import './home.scss'
const Home = () => {
    return (
        <div className='container'>
            <div className='home'>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;
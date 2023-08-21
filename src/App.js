import React from "react";


import {Routes, Route} from "react-router-dom";

import './App.css'
import ForMe from "./components/forMe/ForMe";
import Contacts from "./components/concatcs/Contacts";
import Main from './components/main/Main'
import './styles/button.scss';
import Header from "./components/header/Header";
import Footer from './components/footer/Footer'
import Home from "./page/home/Home";

function App() {
  return (
    <div className="App">
        <div className="container">
                {/*<Header/>*/}
                <Routes>
                    <Route exact path={'/'} element={<Home/>}/>
                    <Route exact path={'/me'} element={<ForMe/>}/>
                    <Route exact path={'/contacts'} element={<Contacts/>}/>
                </Routes>
                <Footer/>
        </div>
    </div>
  );
}

export default App;

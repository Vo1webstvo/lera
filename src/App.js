import React from "react";


import {Routes, Route} from "react-router-dom";

import './App.css'

import ForMe from "./components/forMe/ForMe";
import Contacts from "./components/concatcs/Contacts";
import './styles/button.scss';
import Home from "./page/home/Home";
import Reviews from "./components/reviews/Reviews";
import Price from "./components/price/Price";

function App() {
  return (
    <div className="App">
                {/*<Header/>*/}
                <Routes>
                    <Route exact path={'/'} element={<Home/>}/>
                    <Route exact path={'/me'} element={<ForMe/>}/>
                    <Route exact path={'/contacts'} element={<Contacts/>}/>
                    <Route exact path={'/reviews'} element={<Reviews/>}/>
                    <Route exact path={'/price'} element={<Price/>} />
                </Routes>
    </div>
  );
}

export default App;

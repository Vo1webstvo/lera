
import {Routes, Route} from "react-router-dom";

import './App.css'
import ForMe from "./components/forMe/ForMe";
import Contacts from "./components/concatcs/Contacts";
import Home from "./page/Home";
import './styles/button.scss';
import Header from "./components/header/Header";
import React from "react";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="App">
        <Header/>
        <Navigation/>
        <Routes>
            <Route exact path={'/'} element={<Home/>}/>
            <Route exact path={'/me'} element={<ForMe/>}/>
            <Route exact path={'/contacts'} element={<Contacts/>}/>
        </Routes>

    </div>
  );
}

export default App;

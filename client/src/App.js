// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import Auth from './hoc/auth'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element = {<LandingPage/>}/>
        <Route exact path="/login" element = {<LoginPage/>}/>
        <Route exact path="/register" element = {<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


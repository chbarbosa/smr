import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'
import Footer from './components/template/Footer'
import Header from './components/template/Header'
import './App.css';

export default props =>
    <BrowserRouter>
        <div className="app">
            <Header />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>
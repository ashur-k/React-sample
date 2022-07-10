import React from 'react';
//import { Container } from 'react-bootstrap'
//import { BrowserRouter as Routes, Route } from 'react-router-dom'
import { Header, Footer } from './pages';
import { Navbar } from './components';
import './App.css';



const App = () => {
    return (
        <div className='App'>
            <div>
                <Navbar />
                <Header />
                <Footer />
            </div>
        </div>
    )
}

export default App
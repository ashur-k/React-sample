import React from 'react';
import { Header, Footer } from './pages';
import { Navbar, NavbarItems } from './components';
import { Container } from 'react-bootstrap'
import './App.css';

// removed className='gradient__bg' from line 12


const App = () => {
    return (
    <div>    
        <div className='main'>
            <Navbar />
            <Header />
            {/* <NavbarItems />                  */}
        </div>
        <Footer /> 
    </div> 
    )
}

export default App
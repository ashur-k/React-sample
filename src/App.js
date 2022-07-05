import React from 'react';
import { Header, Footer } from './pages';
import { Navbar, NavbarItems } from './components';
import { Container } from 'react-bootstrap'
import './App.css';
import CustomerCard from './components/customer-card/Customer-Card';

// removed className='gradient__bg' from line 12


const App = () => {

    return (
    <div>    
        <div className='main'>
            <Navbar />
            <Header />
            {/* <CustomerCard /> */}
        </div>
        <Footer /> 
    </div> 
    )
}

export default App
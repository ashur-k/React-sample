import React from 'react';
import './header.css';
import { CRM } from '../../components';

const Header = () => {

  

  const component_values = [
    "I need a CRM to know my customers",
    "I need an accountant",
    "I need analytics",
    "I need inventory management",
    "I need HR system",
    "I need Payroll system",
  ]

  return (
    <div className="uniflow__header section__padding">
      <div className='uniflow__header-top'>
         <h3>
            Are you a one man start-up, or you hire 50+ people?
           </h3>
           <p>
             Our all in one solution is for you?
          </p>
      </div>
      <div className="uniflow__header-content">
        <div className='header__content-body'>
          <div className='header__content__body-heading'>
            <h1>Busisness management for SMB</h1>
            <p>Decentralise & automate your business today</p>
          </div>
          <div className='header__content__body-footer'>
            <p>First 1000 companies gets 1 year service for FREE</p>
            <div className="uniflow__header__content__body__footer-input">
              <input type="tel" placeholder="Enter your phone number"/>
              <button type="button">1000 space left!</button>
            </div>
            <p className='header__content__body__footer-text'>Release date December 2022</p>
          </div>
        </div>
        
          

        <div className='header_content-comps'>
        <div className='display-none mobile-display'>
         <h3>
            Are you a one man start-up, or you hire 50+ people?
           </h3>
           <p>
             Our all in one solution is for you?
          </p>
        </div>

          {
            component_values.map(value => (
              <CRM text={value}/>
              ))
          }
        </div>
        
      </div>
      
      
    </div>
  )
}

export default Header
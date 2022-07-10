import React from 'react';
import './header.css';
import { CRM } from '../../components';
import customerComponentsData from '../../data/customerComponentsData';
import MobileCard from '../../components/mobile-card-version/MobileCard';
import coffeeShop from '../../assests/coffee-shop.svg';


const Header = () => {


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
            <h1>Business management for SMB</h1>
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
            customerComponentsData.map(value => (
              <CRM key={value.id} text={value.title} desc={value.desc} svg={value.svg} />
              ))
          }
        </div>
        
      </div>

      {/* <MobileCard 
        text={"I need a decentralised account"}
        desc={"Start taking payments directly into your own decentralised account. Take payments regardless of whether your user wants to pay using normal currency or crypto currency.Let your users pay using Universal coin to avoid merchant costs of 3-4% per transaction"}
        svg={coffeeShop}
        /> */}
      
    </div>
  )
}

export default Header
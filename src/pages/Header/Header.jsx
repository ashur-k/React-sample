import React from 'react';
import './header.css';
import { CRM } from '../../components';
import image from '../../assests/uniflow.png';

const Header = () => {

  

  const component_values = [
    { 
      id: 1,
      title: "I need a CRM to know my customers",
      desc: "Some description here 1",
      svg: image
    },
    { 
      id: 2,
      title: "I need Payroll system",
      desc: "Some description here 2",
      svg: image
    },
    { 
      id: 3,
      title: "I need HR system",
      desc: "Some description here 3",
      svg: image
    },
    { 
      id: 4,
      title:   "I need inventory management",
      desc: "Some description here 4",
      svg: image
    },
    { 
      id: 5,
      title: "I need analytics",
      desc: "Some description here 5",
      svg: image
    },
    { 
      id: 7,
      title: "I need an accountant",
      desc: "Some description here 7",
      svg: image
    },    
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
              <CRM key={value.id} text={value.title} desc={value.desc} svg={value.svg}/>
              ))
          }
        </div>        
      </div>  
    </div>
  )
}

export default Header
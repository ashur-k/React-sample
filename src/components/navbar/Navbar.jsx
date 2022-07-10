import React, { useState } from 'react';
import { RiMenuLine, RiCloseLine} from 'react-icons/ri';
import { NavbarItems } from '../../components';
import './navbar.css';


const Navbar = () => {

  const [ toggleMenu, setToggleMenu ] = useState(false)

  return (
    <div className='uniflow__navbar'>
      <div className='uniflow__navbar-links'>
        <div className='uniflow__navbar-links_logo'>
          <svg width="56" height="40" viewBox="0 0 56 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.8705 15.8199C7.71499 15.8199 4.01581 12.6468 0.75208 9.84718C-0.151379 9.07228 -0.255583 7.7116 0.519427 6.80814C1.29433 5.90457 2.65501 5.80047 3.55847 6.57548C6.64493 9.22304 9.31048 11.5095 14.8705 11.5095C20.4307 11.5095 23.0964 9.22293 26.1831 6.57548C29.447 3.77588 33.1464 0.602783 40.302 0.602783C47.4574 0.602783 51.1568 3.77567 54.4207 6.57527C55.3242 7.35006 55.4286 8.71086 54.6536 9.61432C53.8787 10.5179 52.5182 10.6223 51.6147 9.84718C48.5279 7.19963 45.8621 4.91318 40.302 4.91318C34.7417 4.91318 32.0761 7.19974 28.9894 9.84718C25.7254 12.6468 22.026 15.8199 14.8705 15.8199ZM28.9894 21.6355C32.0761 18.988 34.7418 16.7015 40.302 16.7015C45.8623 16.7015 48.5281 18.988 51.6147 21.6355C52.5182 22.4104 53.8788 22.3063 54.6537 21.4028C55.4286 20.4993 55.3245 19.1387 54.4209 18.3638C51.157 15.5643 47.4576 12.3911 40.302 12.3911C33.1464 12.3911 29.447 15.5642 26.1831 18.3638C23.0964 21.0112 20.4307 23.2978 14.8705 23.2978C9.31037 23.2978 6.64493 21.0113 3.55847 18.3638C2.65501 17.5889 1.29444 17.6929 0.519427 18.5964C-0.255583 19.4999 -0.151379 20.8606 0.75208 21.6355C4.01591 24.435 7.7151 27.6082 14.8705 27.6082C22.026 27.6081 25.7254 24.435 28.9894 21.6355ZM28.9894 33.4237C32.0761 30.7762 34.7418 28.4896 40.302 28.4896C45.8623 28.4896 48.5281 30.7762 51.6147 33.4237C52.5182 34.1986 53.8788 34.0945 54.6537 33.191C55.4286 32.2874 55.3245 30.9269 54.4209 30.152C51.157 27.3525 47.4576 24.1793 40.302 24.1793C33.1464 24.1793 29.447 27.3524 26.1831 30.152C23.0964 32.7994 20.4307 35.086 14.8705 35.086C9.3107 35.086 6.64504 32.7995 3.55858 30.1522L3.55836 30.152C2.6549 29.3773 1.29444 29.4814 0.519427 30.3847C-0.255475 31.2882 -0.151271 32.6489 0.752188 33.4238C4.01602 36.2234 7.71531 39.3964 14.8705 39.3964C22.026 39.3964 25.7254 36.2233 28.9894 33.4237Z" fill="url(#paint0_linear_1009_785)"/>
          <defs>
          <linearGradient id="paint0_linear_1009_785" x1="29.9034" y1="39.3964" x2="27.5866" y2="0.602783" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0074FF"/>
          <stop offset="0.508068" stop-color="#FF00E5"/>
          <stop offset="1" stop-color="#FED500"/>
          </linearGradient>
          </defs>
        </svg>
        <h1>Uniflow</h1>
        </div>
        <div className='uniflow__navbar-links_container'>
            <p><a href="#main">Main</a></p>
            <p><a href="#features">Features</a></p>
            <p><a href="#meetus">Meet us</a></p>
        </div>
      </div>
      <div className='uniflow__navbar-sign'>
          <p>Personal</p>
          <p>Business</p>
      </div>
      <div className='uniflow__navbar-menu'>
        <div className='display-none nav-btn-mobile-display'>
          <p>Personal</p>
        </div>
          <div>
          {
            toggleMenu
              ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
              : <RiMenuLine color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
          }</div>
          <div className='display-none nav-btn-mobile-display'>
            <p>Business</p>
          </div>
          {
             toggleMenu && (
              <div className="uniflow__navbar-menu_container scale-up-center">
                <div className="uniflow__navbar-menu_container-links">
                  <NavbarItems />
                </div>

                
                <div className="uniflow__navbar-menu_container-links-sign">
                  <p>Personal</p>
                  
                  <p>Business</p>
                </div>
              </div>
            )
          }
      </div>
    </div>
  )
}

export default Navbar
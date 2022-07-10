import React from 'react';
import './mobilecard.css'

const MobileCard = ({text, desc, svg}) => {
  return (
    <div className='mobile-Frame-2010' id="alert-dialog-title">
        <div className='mobile-Frame-1931'>
            <div className='mobile-Frame-1930'>
                <div className='mobile-Frame-1933' id="alert-dialog-description">
                    <h3>{text}</h3>
                    <div className='mobile-Frame-2035'>
                        <div className='mobile-Frame-2034'>
                            <p>
                            {desc}
                            </p>
                            <div className='mobile-Frame-1816'>
                                <img src={svg} />
                            </div>
                        </div>
                        

                    </div>

                </div>
                
                
            </div>
        </div>
    </div>
  )
}

export default MobileCard
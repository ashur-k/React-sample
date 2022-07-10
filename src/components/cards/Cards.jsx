import { Dialog } from '@mui/material';
import React from 'react';
import './cards.css'


const Cards = ({text, desc, svg, open, closeDialog }) => {

  return (
    <Dialog
        fullWidth 
        open={open} 
        onClose={() => closeDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
            
    <div className='Frame-2010' id="alert-dialog-title">
        <div className='Frame-1931'>
            <div className='Frame-1930'>
                <div className='Frame-1933' id="alert-dialog-description">
                    <h3>{text}</h3>
                    <div className='Frame-2035'>
                        <div className='Frame-2034'>
                            <p className='mobile-display-none '>
                                {desc}
                            </p>
                            <div className='Frame-1816'>
                                <p>Sign up</p>
                            </div>
                        </div>
                        <div className='Frame-2033'>
                            <img src={svg}/>
                        </div>
                    </div>

                </div>
                
                
            </div>
        </div>
    </div>
    </Dialog>

  )
}

export default Cards
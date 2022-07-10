import React, {useState } from 'react';
import { Cards } from '../../components';
import './crm.css'

const CRM = ({text, desc, svg}) => {
  
  const [ toggleCard, setToggleCard ] = useState(false)
 
  return (
    <div className='uniflow__crm'>
      <p onClick={() => setToggleCard(!toggleCard)}><a href="#crm">{text}</a></p>
    <div>
    {
      toggleCard && (
        <Cards text={text} desc={desc} svg={svg} open={toggleCard} closeDialog={setToggleCard} />
      )
    }
    </div>
  </div>
  )
}

export default CRM
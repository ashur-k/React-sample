import React, {useState} from 'react';
import { CustomerCard } from '../../components';
import './crm.css';

const CRM = ({text}) => {

  const [ toggleCard, setToggleCard ] = useState(false)

  console.log(text)
  return (
    <div className='uniflow__crm'>
      <p onClick={() => setToggleCard(!toggleCard)}><a href="#crm">{text}</a></p>
      <div>
        {
          toggleCard && (
            <CustomerCard />
          )
        }
      </div>
      
    </div>
  )
}

export default CRM
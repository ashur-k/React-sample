import React, {useState, useEffect} from 'react';
import { CustomerCard } from '../../components';
import './crm.css';

const CRM = ({text, desc}) => {

  const [ toggleCard, setToggleCard ] = useState(false)
  console.log(toggleCard)
  const [ cardText, setCardText ] = useState("")
  const [ cardDesc, setCardDesc ] = useState("")  
  
    // UseEffect to update data to ProjectsData
    useEffect(() => {     
      setCardText(text)
      setCardDesc(desc)
    }, [text,desc]);   
  


  return (
    <div className='uniflow__crm'>
      <p onClick={() => setToggleCard(!toggleCard)}><a href="#crm">{text}</a></p>
      <div>
        {
          toggleCard && (
            <CustomerCard text={cardText} desc={cardDesc} open={toggleCard} closeDialog={setToggleCard}/>
          )
        }
      </div>
      
    </div>
  )
}

export default CRM
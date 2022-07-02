import React from 'react'
import './crm.css'

const CRM = ({text}) => {
  console.log(text)
  return (
    <div className='uniflow__crm'>
      <p><a href="#crm">{text}</a></p>
    </div>
  )
}

export default CRM
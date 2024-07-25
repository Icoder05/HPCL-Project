import React from 'react'
import './Home.css'
import arrow from '../../assets/dark-arrow.png'


const Firestation = () => {
  return (
    <div className='firestation'>
        <div className="Firestation-text">
            <h1>We Ensure Safety of The Mumbai Refinery</h1>
            <p> 
            This is an effort towards providing you with the information related to Fire & Safety. 
            As you are aware Safety forms a integral & important part of our day-to-day activities,
            and need for information for carrying out jobs safely can not be over-emphasized, thus this site was born…
            </p>
            <button className='btn'>Explore More<img src={arrow} alt=''/></button>
        </div>
       

    </div>
  )
}

export default Firestation
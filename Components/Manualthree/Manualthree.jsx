import React from 'react'
import './Manualthree.css'
import swp_list from '../../assets/SWP/swp.pdf'

const Manualthree = () => {
  return (
    <div className='swp'>
        <iframe src={swp_list} frameborder="0"></iframe>
    </div>
  )
}

export default Manualthree
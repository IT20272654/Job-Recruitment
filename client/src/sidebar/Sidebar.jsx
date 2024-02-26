import React from 'react'
import Location from './Location'
import Salary from './Salary'

const Sidebar = ({haddleChange, haddleClick}) => {
  return (
    <div className='space-y-5'>
        <div className=''>
        <h3 className='text-lg font-bold mb-2'>Filters</h3>
        <Location haddleChange={haddleChange}/>
        <Salary haddleChange={haddleChange} haddleClick = {haddleClick}/> 
        
        
        </div>
    </div>
  )
}

export default Sidebar
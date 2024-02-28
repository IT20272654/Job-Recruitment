import React from 'react'
import Button from './Button'
import InputField from '../components/InputField'

const Salary = ({haddleChange,haddleClick}) => {
  return (
    <div>
        <h4 className='text-lg font medium mb-2'>Salary</h4>
        {/* <div className='mb-4'>
            <Button onClickHaddler={haddleClick} value="" tittle="Hourly"/>
            <Button onClickHaddler={haddleClick} value="Monthly" tittle="Monthly"/>
            <Button onClickHaddler={haddleClick} value="Yearly" tittle="Yearly"/>
        </div> */}
        <div>
        <label className='sidebar-label-container'>
                <input
                 type="radio" 
                 name="test2" 
                 id="test2" value="" 
                 onChange={haddleChange} 
                 />
                <span className='checkmark'></span>All
            </label>
            <InputField
             haddleChange={haddleChange} 
             value={30} 
             tittle="< 30000"
             name="test2"
             />
            <InputField
             haddleChange={haddleChange} 
             value={50} 
             tittle="< 50000"
             name="test2"
             />
            <InputField
             haddleChange={haddleChange} 
             value={80} 
             tittle="< 80000"
             name="test2"
             />
            <InputField
             haddleChange={haddleChange} 
             value={100} 
             tittle="< 100000"
             name="test2"
             />             
        </div>
    </div>
  )
}

export default Salary




















import React from 'react'
import InputField from '../components/InputField'


const Location = ({haddleChange}) => {
  return (
    <div>
        <h4 className='text-lg font medium mb-2'>Location</h4>
        <div>

            <label className='sidebar-label-container'>
                <input
                 type="radio" 
                 name="test" 
                 id="test" value="" 
                 onChange={haddleChange} 
                 />
                <span className='checkmark'></span>All
            </label>
            <InputField
             haddleChange={haddleChange} 
             value="london" 
             tittle="London" 
             name="test"
             />
            <InputField
             haddleChange={haddleChange} 
             value="seattle" 
             tittle="Seattle" 
             name="test"
             />
            <InputField
             haddleChange={haddleChange} 
             value="madrid" 
             tittle="Madrid" 
             name="test"
             />
            <InputField
             haddleChange={haddleChange} 
             value="san francisco" 
             tittle="San Francisco" 
             name="test"
             /> 
            <InputField
             haddleChange={haddleChange} 
             value="boston" 
             tittle="Boston" 
             name="test"
            /> 



        </div>
    </div>
  )
}

export default Location
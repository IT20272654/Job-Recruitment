import React from 'react'
import Button from './Button'

const Salary = ({haddleChange,haddleClick}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Salary</h4>
        <div>
            <Button onClickHaddler={haddleClick} value="" tittle="Hourly"/>
            <Button onClickHaddler={haddleClick} value="Monthly" tittle="Monthly"/>
            <Button onClickHaddler={haddleClick} value="Yearly" tittle="Yearly"/>


        </div>
    </div>
  )
}

export default Salary
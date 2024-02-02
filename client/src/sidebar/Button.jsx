import React from 'react'

const Button = ({onClickHaddler, value, tittle}) => {
  return (
    <button onClick={onClickHaddler} value={value} className={`px-4 py border text-base hover:bg-blue hover:text-white`}>
        {tittle}
    </button>
  )
}

export default Button
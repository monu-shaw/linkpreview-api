import React, { useState } from 'react'

function Error(props) {
  const [errorData, setErrorData] = useState({...props.errorData})
  return (
    <div className='text-danger text-center'>
        <p className='fs-6'>Error: <span className='fst-italic'>{' '+errorData.code}</span></p>
        <p className='fs-6'>Message: <span className='fst-italic'>{' '+errorData.message}</span></p>
    </div>
  )
}

export default Error
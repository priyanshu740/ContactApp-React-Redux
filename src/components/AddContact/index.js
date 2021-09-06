import React from 'react'

const index = () => {

  const prevDef = (e) => {
    e.preventDefault()
  }
  return (
    <div className='add-data'>
      <h1>ADD STUDENT</h1>
      <form className='add-form'>
        <input placeholder='enter ur name' type='text' className='input-data'/>
        <input placeholder='email' type='text' className='input-data'/>
        <input placeholder='phone number' type='number' className='input-data'/>
        <button onClick={prevDef} className='sub-btn'>submit</button>
      </form>
    </div>
  )
}

export default index

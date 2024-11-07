import React from 'react'
import "./css/Loader.css"
function Loader() {
  return (
    <div className='loader' >
      <img src="loading.svg" alt="" />
      <span className='loader-text' >
        <span className='bounce'>C</span>
        <span className='bounce'>o</span>
        <span className='bounce'>d</span>
        <span className='bounce'>i</span>
        <span className='bounce'>f</span>
        <span className='bounce'>y</span>
      </span>
    </div>
  )
}

export default Loader;

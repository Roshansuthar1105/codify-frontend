import React from 'react'
import { NavLink } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='container' >
      Error 404 page not found
      <NavLink to='/' > Return to home </NavLink>
    </div>
  )
}

export default ErrorPage

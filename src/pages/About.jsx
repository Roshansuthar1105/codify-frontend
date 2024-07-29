import React from 'react'
import '../components/css/Pages.css'
import { useAuth } from '../store/auth';
function About() {
  const {isLoggedIn} = useAuth();
  const {userdata} = useAuth();
  return (
    <div className='container' >
      <h2>this is about page.</h2>
  <li>
        user
        {userdata.username}
         user
  
    </li>    
    </div>
  )
}

export default About;
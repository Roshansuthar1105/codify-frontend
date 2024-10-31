import React from 'react'
import { NavLink } from 'react-router-dom'
import '../components/css/ErrorPage.css'
function ErrorPage() {
  return (
    <div className='container error-container' >
      <div className="gradient-background"></div>
      <div className="error-content">
        <img 
          src="https://cdni.iconscout.com/illustration/premium/thumb/404-error-illustration-download-in-svg-png-gif-file-formats--concept-ui-ux-empty-state-page-pack-design-development-illustrations-3119148.png?f=webp" 
          alt="404 Error Illustration" 
          style={{
            width: "300px",
            marginBottom: "2rem"
          }}
        />
        {/* <h1 className="error-title">404</h1> */}
        <p className="error-message">Oops! Page not found</p>
        <p className="error-description">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <NavLink to="/" className="cta-button">
          Return to Home
        </NavLink>
      </div>
    </div>
  )
}

export default ErrorPage

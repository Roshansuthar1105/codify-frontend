import { Link } from "react-router-dom";

const CallToAction = () => {
    return (
        <>
      {/* Call to Action Section */}
      <div className="final-cta-section">
        <h2>Ready to Start Your <span style={{ color: "var(--bg_buttons)" }}>Learning Journey?</span></h2>
        <p>Join thousands of successful learners and transform your career today</p>
        <div className="cta-buttons">
          <Link to="/courses" className="primary-cta">
            Browse Courses
          </Link>
          <Link to="/signup" className="secondary-cta">
            Sign Up Now
          </Link>
        </div>
      </div>

        </>
    )
}

export default CallToAction;
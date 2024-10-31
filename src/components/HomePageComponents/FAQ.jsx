const FAQ = () => {
    return (
        <>
            {/* FAQ Section */}
            <div className="faq-section">
                <h2>Frequently Asked <span style={{ color: "var(--bg_buttons)" }}>Questions</span></h2>
                <div className="faq-grid">
                    <details className="faq-item">
                        <summary>How do I get started?</summary>
                        <p>Simply sign up for an account and browse our course catalog. You can start with any course that interests you!</p>
                    </details>
                    <details className="faq-item">
                        <summary>Are the courses self-paced?</summary>
                        <p>Yes, all our courses are self-paced. Learn at your own convenience and schedule.</p>
                    </details>
                    <details className="faq-item">
                        <summary>Do I get a certificate upon completion?</summary>
                        <p>Yes! You'll receive a verified certificate for each course you complete, which you can share on your resume and LinkedIn profile.</p>
                    </details>
                    <details className="faq-item">
                        <summary>What kind of support is available?</summary>
                        <p>We offer community forums, direct mentor support, and regular Q&A sessions to help you succeed in your learning journey.</p>
                    </details>
                    <details className="faq-item">
                        <summary>Are there any prerequisites?</summary>
                        <p>Most beginner courses have no prerequisites. For advanced courses, recommended prerequisites are clearly listed in the course description.</p>
                    </details>
                </div>
            </div>
        </>
    )
}

export default FAQ;
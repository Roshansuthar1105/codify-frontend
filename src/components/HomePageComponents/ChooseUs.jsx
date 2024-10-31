const ChooseUs = () => {
    return (
        <>
            {/* Why Choose Us Section */}
            <div className="why-choose-us">
                <h2>Why Choose <span style={{ color: "var(--bg_buttons)" }}>Our Platform</span></h2>
                <div className="benefits-grid">
                    <div className="benefit-card">
                        <i className="benefit-icon">🎯</i>
                        <h3>Industry-Relevant Content</h3>
                        <p>Courses designed to match current industry demands</p>
                    </div>
                    <div className="benefit-card">
                        <i className="benefit-icon">💡</i>
                        <h3>Project-Based Learning</h3>
                        <p>Build real-world projects for your portfolio</p>
                    </div>
                    <div className="benefit-card">
                        <i className="benefit-icon">🤝</i>
                        <h3>Community Support</h3>
                        <p>Join a thriving community of learners and mentors</p>
                    </div>
                    <div className="benefit-card">
                        <i className="benefit-icon">📈</i>
                        <h3>Career Growth</h3>
                        <p>Get the skills needed for career advancement</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChooseUs;
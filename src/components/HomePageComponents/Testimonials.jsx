const Testimonials = () => {
    return (
        <>
            {/* Testimonials Section */}
            <div className="testimonials-section">
                <h2>What Our <span style={{ color: "var(--bg_buttons)" }}>Students Say</span></h2>
                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <div className="testimonial-content">
                            <p>"The courses here transformed my career path. The practical approach to learning made all the difference."</p>
                            <div className="testimonial-author">
                                <h4>Sarah Johnson</h4>
                                <p>Frontend Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="testimonial-content">
                            <p>"I went from knowing nothing about coding to landing my dream job in just 6 months. The structured learning path was exactly what I needed."</p>
                            <div className="testimonial-author">
                                <h4>Michael Chen</h4>
                                <p>Full Stack Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="testimonial-content">
                            <p>"The community support and expert guidance helped me overcome every challenge. Best learning investment I've made!"</p>
                            <div className="testimonial-author">
                                <h4>Emma Rodriguez</h4>
                                <p>Backend Engineer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials;
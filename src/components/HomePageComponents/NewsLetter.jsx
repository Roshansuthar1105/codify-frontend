const NewsLatter = () => {
    return (
        <>
            {/* Newsletter Section */}
            <div className="newsletter-section">
                <h2>Stay Updated with <span style={{ color: "var(--bg_buttons)" }}>Latest Courses</span></h2>
                <p>Subscribe to our newsletter and never miss new courses and learning opportunities</p>
                <form className="newsletter-form">
                    <input type="email" placeholder="Enter your email" />
                    <button type="submit" className="subscribe-button">Subscribe</button>
                </form>
            </div>
        </>
    )
}

export default NewsLatter;
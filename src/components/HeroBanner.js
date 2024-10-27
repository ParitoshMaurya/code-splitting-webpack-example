import React from 'react';
import ReactDOM from 'react-dom';

const heroBannerStyle = {
    backgroundColor: '#f0f0f0',
    padding: '2rem',
    textAlign: 'center',
    marginBottom: '2rem'
};

const headingStyle = {
    fontSize: '2.5rem',
    marginBottom: '1rem'
};

const paragraphStyle = {
    fontSize: '1.2rem'
};

const HeroBannerComponent = () => (
    <div style={heroBannerStyle} className="hero-banner">
        <h2 style={headingStyle}>Discover Amazing Things</h2>
        <p style={paragraphStyle}>Welcome to our fantastic website where you can explore and learn.</p>
    </div>
);

class HeroBanner {
    constructor(el) {
        ReactDOM.render(<HeroBannerComponent />, el);
    }
}

export default HeroBanner;

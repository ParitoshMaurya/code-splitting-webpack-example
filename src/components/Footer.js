import React from 'react';
import ReactDOM from 'react-dom';

const footerStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%'
};

const FooterComponent = () => (
    <footer style={footerStyle}>
        <p>&copy; 2023 Your Company Name. All rights reserved.</p>
    </footer>
);

class Footer {
    constructor(el) {
        ReactDOM.render(<FooterComponent />, el);
    }
}

export default Footer;

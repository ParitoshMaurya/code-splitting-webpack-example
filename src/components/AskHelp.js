import React from 'react';
import ReactDOM from 'react-dom';

const askHelpStyle = {
    backgroundColor: '#e9ecef',
    padding: '2rem',
    borderRadius: '8px',
    textAlign: 'center',
    maxWidth: '400px',
    margin: '0 auto 2rem'
};

const headingStyle = {
    color: '#333',
    marginBottom: '1rem'
};

const paragraphStyle = {
    marginBottom: '1rem'
};

const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer'
};

const AskHelpComponent = () => (
    <div style={askHelpStyle} className="ask-help">
        <h3 style={headingStyle}>Need Help?</h3>
        <p style={paragraphStyle}>If you have any questions, feel free to ask!</p>
        <button style={buttonStyle}>Get Help</button>
    </div>
);

class AskHelp {
    constructor(el) {
        ReactDOM.render(<AskHelpComponent />, el);
    }
}

export default AskHelp;

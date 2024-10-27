import React from 'react';
import ReactDOM from 'react-dom';

const headerStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const navStyle = {
  display: 'flex',
  listStyle: 'none'
};

const navItemStyle = {
  marginLeft: '1rem'
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none'
};

const HeaderComponent = () => (
    <header style={headerStyle}>
        <h1>Welcome to Our Website</h1>
        <nav>
            <ul style={navStyle}>
                <li style={navItemStyle}><a href="#" style={linkStyle}>Home</a></li>
                <li style={navItemStyle}><a href="#" style={linkStyle}>About</a></li>
                <li style={navItemStyle}><a href="#" style={linkStyle}>Contact</a></li>
            </ul>
        </nav>
    </header>
);

class Header {
    constructor(el) {
        ReactDOM.render(<HeaderComponent />, el);
    }
}

export default Header;

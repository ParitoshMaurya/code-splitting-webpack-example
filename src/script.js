import React from 'react';
import { getRandomColor } from './utils/colorUtils';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import AskHelp from './components/AskHelp';
import Footer from './components/Footer';
import Timer from './components/Timer';

document.addEventListener('DOMContentLoaded', function() {
    // Add basic styling to body
    document.body.style.fontFamily = 'Arial, sans-serif';
    document.body.style.margin = '0';
    document.body.style.padding = '0';

    // Find all elements with data-component attribute and render appropriate components
    const componentMap = {
        'header': Header,
        'hero-banner': HeroBanner,
        'ask-help': AskHelp,
        'footer': Footer,
        'timer': Timer
    };

    document.querySelectorAll('[data-component]').forEach(el => {
        const componentName = el.getAttribute('data-component');
        const Component = componentMap[componentName];
        if (Component) {
            new Component(el);
        }
    });

    // Keep the existing functionality
    const changeColorBtn = document.getElementById('changeColorBtn');
    
    // Style the button
    changeColorBtn.style.backgroundColor = '#4CAF50';
    changeColorBtn.style.border = 'none';
    changeColorBtn.style.color = 'white';
    changeColorBtn.style.padding = '15px 32px';
    changeColorBtn.style.textAlign = 'center';
    changeColorBtn.style.textDecoration = 'none';
    changeColorBtn.style.display = 'inline-block';
    changeColorBtn.style.fontSize = '16px';
    changeColorBtn.style.margin = '4px 2px';
    changeColorBtn.style.cursor = 'pointer';
    changeColorBtn.style.borderRadius = '4px';
    
    changeColorBtn.addEventListener('click', function() {
        document.body.style.backgroundColor = getRandomColor();
    });
});

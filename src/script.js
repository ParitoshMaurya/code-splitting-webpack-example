import { getRandomColor } from './utils/colorUtils';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import AskHelp from './components/AskHelp';

// List of components to be chunked
const chunkedComponents = ["Timer", "Footer"];

document.addEventListener('DOMContentLoaded', function() {
    // Add basic styling to body
    document.body.style.fontFamily = 'Arial, sans-serif';
    document.body.style.margin = '0';
    document.body.style.padding = '0';

    // Find all elements with data-component attribute and render appropriate components
    document.querySelectorAll('[data-component]').forEach(el => {
        const componentName = el.getAttribute('data-component');
        if (chunkedComponents.includes(componentName)) {
            // Dynamically import chunked components
            import(/* webpackChunkName: "[request]" */ `./components/${componentName}`)
                .then(module => {
                    const Component = module.default;
                    new Component(el);
                })
                .catch(error => console.error(`Error loading component ${componentName}:`, error));
        } else {
            // Render non-chunked components
            let Component;
            switch(componentName) {
                case 'Header':
                    Component = Header;
                    break;
                case 'HeroBanner':
                    Component = HeroBanner;
                    break;
                case 'AskHelp':
                    Component = AskHelp;
                    break;
            
                default:
                    console.error(`Unknown component: ${componentName}`);
                    return;
            }
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

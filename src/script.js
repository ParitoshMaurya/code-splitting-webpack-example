import { getRandomColor } from './utils/colorUtils';

document.addEventListener('DOMContentLoaded', function() {
    // Add basic styling to body
    document.body.style.fontFamily = 'Arial, sans-serif';
    document.body.style.margin = '0';
    document.body.style.padding = '0';

    // Find all elements with data-component attribute and render appropriate components
    document.querySelectorAll('[data-component]').forEach(el => {
        const componentName = el.getAttribute('data-component');
        import(/* webpackChunkName: "[request]" */ `./components/${componentName}`)
            .then(module => {
                const Component = module.default;
                new Component(el);
            })
            .catch(error => console.error(`Error loading component ${componentName}:`, error));
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

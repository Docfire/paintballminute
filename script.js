// script.js

// Add interactive features for the paintball landing page

// Function to handle user interactions
function setupInteractiveFeatures() {
    // Example: Add event listeners to buttons, etc.
    const buttons = document.querySelectorAll('.interactive-button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Button clicked!'); // Placeholder for actual interaction
        });
    });
}

// Initialize the interactive features when the document is ready
document.addEventListener('DOMContentLoaded', setupInteractiveFeatures);
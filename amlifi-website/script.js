// Main JavaScript file for AMPLIFI website

document.addEventListener('DOMContentLoaded', function() {
  // Initialize any components or features
  initializeThemeToggle();
  attachEventListeners();
});

// Theme toggle functionality (light/dark mode)
function initializeThemeToggle() {
  // You can implement a theme toggle functionality here
  console.log('Theme toggle initialized');
}

// Attach any event listeners to elements
function attachEventListeners() {
  // Example: Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // You can add more event listeners here
}

// Example function for a contact form submission
function handleContactForm(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  
  // Here you would typically send the form data to a server
  console.log('Form submitted with data:', Object.fromEntries(formData));
  
  // Display a success message to the user
  alert('Thank you for contacting us! We will get back to you soon.');
  form.reset();
} 
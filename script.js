// Page Navigation with Slide Animation
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link[data-page]');
    const footerLinks = document.querySelectorAll('.footer-links a[data-page]');
    const pages = document.querySelectorAll('.page');
    
    // Function to switch pages with slide animation
    function switchPage(targetPage) {
        const currentPage = document.querySelector('.page.active');
        const newPage = document.querySelector(`.${targetPage}-page`);
        
        if (!newPage || currentPage === newPage) return;
        
        // Remove active class from current page
        currentPage.classList.remove('active');
        currentPage.classList.add('slide-out');
        
        // Add active class to new page after a short delay
        setTimeout(() => {
            // Reset all pages
            pages.forEach(page => {
                page.classList.remove('active', 'slide-out');
            });
            
            // Activate new page
            newPage.classList.add('active');
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 300);
    }
    
    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-page');
            switchPage(targetPage);
        });
    });
    
    // Add click event listeners to footer links
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-page');
            if (targetPage) {
                switchPage(targetPage);
            }
        });
    });
    
    // Initialize: Home page is active by default
    const homePage = document.querySelector('.home-page');
    if (homePage) {
        homePage.classList.add('active');
    }

    // Register/Login Modal Functionality
    const registerBtn = document.getElementById('registerBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const authModal = document.getElementById('authModal');
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const registerFormElement = document.getElementById('registerFormElement');
    const loginFormElement = document.getElementById('loginFormElement');
    const closeModal = document.querySelector('.close-modal');

    // Open modal with register form
    registerBtn.addEventListener('click', function() {
        authModal.classList.add('active');
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
    });

    // Close modal
    closeModal.addEventListener('click', function() {
        authModal.classList.remove('active');
    });

    // Close modal when clicking outside
    authModal.addEventListener('click', function(e) {
        if (e.target === authModal) {
            authModal.classList.remove('active');
        }
    });

    // Register form submit
    registerFormElement.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const password = document.getElementById('regPassword').value;
        const confirmPassword = document.getElementById('regConfirmPassword').value;
        
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        // Switch to login form after successful registration
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
        
        // Pre-fill email in login form
        const regEmail = document.getElementById('regEmail').value;
        document.getElementById('loginEmail').value = regEmail;
        
        alert('Registration successful! Please login.');
    });

    // Login form submit
    loginFormElement.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Hide modal
        authModal.classList.remove('active');
        
        // Show logout button, hide register button
        registerBtn.style.display = 'none';
        logoutBtn.style.display = 'block';
        
        alert('Login successful!');
    });

    // Logout button click
    logoutBtn.addEventListener('click', function() {
        // Show register button, hide logout button
        registerBtn.style.display = 'block';
        logoutBtn.style.display = 'none';
        
        // Clear forms
        registerFormElement.reset();
        loginFormElement.reset();
        
        alert('Logged out successfully!');
    });
});


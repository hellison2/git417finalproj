// strict mode 
"use strict";






// light mode dark mode 
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // is dark mode on
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    // create dark mode
    if (userPrefersDark) {
        body.classList.add('dark-mode');
    }

    // choose what theme you want
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
    });
});











// tickets section (product display)
function showProduct(productId) {
    // hide not selected
    var products = document.querySelectorAll('.product');
    products.forEach(function(product) {
        product.style.display = 'none';
    });

    // only show selected 
    var selectedProduct = document.getElementById(productId);
    if (selectedProduct) {
        selectedProduct.style.display = 'block';
    }
}

// default to single ga pass
document.addEventListener('DOMContentLoaded', function() {
    showProduct('single');
});

// button connection
document.querySelectorAll('.buttons').forEach(function(button) {
    button.addEventListener('click', function() {
        var productId = button.getAttribute('data-product-id');
        showProduct(productId);
    });
});











// guessing game section
function guessNumber() {
    // input
    const userGuess = document.getElementById("userGuess").value;

    // get random number
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    // answer 
    const result = document.getElementById("result");

    // let them know if they won or not
    if (userGuess == randomNumber) {
        result.textContent = `WOOHOOOOOOO! Guess who just won a VIP Pass to Red Rock Fest 2024? That's right, ${randomNumber} was correct. YOU WON!!!`;
    } else {
        result.textContent = `Oopsies, looks like you guessed the wrong number. The winning draw was ${randomNumber}. Give it another shot!`;
    }
}











// contact section
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Clear anything before 
    document.querySelectorAll('.error').forEach(function(error) {
        error.style.display = 'none';
    });
    
    // define variables
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const commentsInput = document.getElementById('comments');
    const contactMethodInput = document.querySelector('input[name="contactMethod"]:checked');
    
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();
    const comments = commentsInput.value.trim();
    const contactMethod = contactMethodInput ? contactMethodInput.value : null;

    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    
    let isValid = true;
    
    // rules
    if (!firstName) {
        document.getElementById('firstNameError').textContent = 'First name is required.';
        document.getElementById('firstNameError').style.display = 'block';
        isValid = false;
    }
    
    if (!lastName) {
        document.getElementById('lastNameError').textContent = 'Last name is required.';
        document.getElementById('lastNameError').style.display = 'block';
        isValid = false;
    }
    
    if (!comments) {
        document.getElementById('commentsError').textContent = 'Comments are required.';
        document.getElementById('commentsError').style.display = 'block';
        isValid = false;
    }
    
    if (!contactMethod) {
        document.getElementById('contactMethodError').textContent = 'Please select your preferred contact method.';
        document.getElementById('contactMethodError').style.display = 'block';
        isValid = false;
    }
    
    if (contactMethod === 'phone' && !phone) {
        document.getElementById('phoneError').textContent = 'Phone number is required.';
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }
    
    if (contactMethod === 'email' && !email) {
        document.getElementById('emailError').textContent = 'Email address is required.';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }
    
    if (phone && !phoneRegex.test(phone)) {
        document.getElementById('phoneError').textContent = 'Invalid phone number. Must be 10 digits.';
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }
    
    if (email && !emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email address.';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }
    
    if (isValid) {
        const customer = {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email,
            comments: comments,
            contactMethod: contactMethod.value
        };
        
        // reset
        document.getElementById('contactForm').reset();
        
        // thank you message
        const submissionMessage = document.getElementById('submissionMessage');
        submissionMessage.innerHTML = `
            <p>Thanks for chatting, ${customer.firstName} ${customer.lastName}!</p>
            <p>You'll hear back from us soon via ${customer.contactMethod}.</p>
            <p><strong>Your message:</strong> ${customer.comments}</p>
        `;
        submissionMessage.style.display = 'block';
    }
});
 document.getElementById('registerForm').addEventListener('submit', function(event) {
        // Prevent form submission for validation
        event.preventDefault();
        
        // Clear previous error messages
        clearErrors();

        // Get form fields
        const username = document.getElementById('registerUsername').value.trim();
        const email = document.getElementById('registerEmail').value.trim();
        const password = document.getElementById('registerPassword').value.trim();
        const confirmPassword = document.getElementById('registerConfirmPassword').value.trim();
        const termsChecked = document.getElementById('termsAndConditions').checked;

        let valid = true;

        // Check username
        if (username === "") {
            document.getElementById('usernameError').textContent = "Username is required!";
            document.getElementById('usernameError').style.display = 'inline';
            valid = false;
        }

        // Check email
        if (email === "") {
            document.getElementById('emailError').textContent = "Email is required!";
            document.getElementById('emailError').style.display = 'inline';
            valid = false;
        }

        // Check password
        if (password === "") {
            document.getElementById('passwordError').textContent = "Password is required!";
            document.getElementById('passwordError').style.display = 'inline';
            valid = false;
        }

        // Check confirm password
        if (confirmPassword === "") {
            document.getElementById('confirmPasswordError').textContent = "Please confirm your password!";
            document.getElementById('confirmPasswordError').style.display = 'inline';
            valid = false;
        } else if (password !== confirmPassword) {
            document.getElementById('confirmPasswordError').textContent = "Passwords do not match!";
            document.getElementById('confirmPasswordError').style.display = 'inline';
            valid = false;
        }

        // Check terms and conditions
        if (!termsChecked) {
            document.getElementById('termsError').textContent = "You must agree to the terms and conditions!";
            document.getElementById('termsError').style.display = 'inline';
            valid = false;
        }

        // If all validations pass, submit the form
        if (valid) {
            document.getElementById('registerForm').submit();
        }
    });

    // Clear all error messages
    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.textContent = '');
        errorMessages.forEach(error => error.style.display = 'none');
    }

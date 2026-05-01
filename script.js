// Elements for Signup
const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');

// Helper function to handle signup validation
if (signupForm) {
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirm-password');
  const passwordError = document.getElementById('password-error');

  signupForm.addEventListener('submit', function (event) {
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    if (password !== confirmPassword) {
      event.preventDefault();
      passwordError.textContent = 'Passwords do not match';
      confirmPasswordInput.style.borderColor = 'var(--error)';
    } else {
      passwordError.textContent = '';
      confirmPasswordInput.style.borderColor = 'var(--border)';
      console.log('Signup form submitted successfully');
      // In a real app, you would send data to the server here
    }
  });

  confirmPasswordInput.addEventListener('input', function () {
    if (passwordError.textContent !== '') {
      passwordError.textContent = '';
      confirmPasswordInput.style.borderColor = 'var(--border)';
    }
  });
}

// Helper function to handle login simulation
if (loginForm) {
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    console.log('Logging in with:', email);
    
    const submitBtn = loginForm.querySelector('button');
    const originalText = submitBtn.textContent;
    
    submitBtn.disabled = true;
    submitBtn.textContent = 'Signing in...';
    
    // Simulate API call
    setTimeout(() => {
      alert('Login successful! (Simulated)');
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }, 1500);
  });
}
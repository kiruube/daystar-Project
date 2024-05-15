const validation = (event) => {
  let error = 0;

  // Email validation
  const email = document.getElementById('email');
  const emailError = document.querySelector('.emailerror');

  if (email.value.trim() === '') {
      email.style.border = "1px solid red"
      emailError.textContent = 'Email is required!';
      emailError.style = 'color:red;'
      error++;
  } else {
      // Check if email format is valid using a regular expression
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value.trim())) {
          emailError.textContent = 'Please enter a valid email address!';
          emailError.style='color: red;'
          error++;
      } else {
          emailError.textContent = '';
      }
  }

  // Password validation
  const password = document.getElementById('password');
  const passwordError = document.querySelector('.passworderror');

  if (password.value.trim() === '') {
      password.style.border = "1px solid red"
      passwordError.textContent = 'Password is required!';
      passwordError.style = 'color:red;'
      error++;
  } else if (password.value.length < 8) {
      passwordError.textContent = 'Password must be at least 8 characters!';
      passwordError.style = 'color: red;'
      error++;
  } else {
      passwordError.textContent = '';
  }

  if (error > 0) {
      event.preventDefault();
  }
};

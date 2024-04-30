document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
  
    const setError = (element, message) => {
      const inputControl = element.parentElement;
      const errorDisplay = inputControl.querySelector(".error");
      errorDisplay.innerText = message;
      inputControl.classList.add("error");
      inputControl.classList.remove("success");
    };
  
    const setSuccess = (element) => {
      const inputControl = element.parentElement;
      const errorDisplay = inputControl.querySelector(".error");
      errorDisplay.innerText = ""; // Clear error message
      inputControl.classList.add("success");
      inputControl.classList.remove("error");
    };
  
    const validateInput = () => {
      const emailValue = email.value.trim();
      const passwordValue = password.value.trim();
  
      // Email validation
      if (!emailValue) {
        setError(email, "Email is required");
      } else if (!isValidEmail(emailValue)) {
        setError(email, "Provide a valid email address");
      } else {
        setSuccess(email);
      }
  
      // Password validation
      if (!passwordValue) {
        setError(password, "Password is required");
      } else if (passwordValue.length < 8) {
        setError(password, "Password should be at least 8 characters");
      } else {
        setSuccess(password);
      }
    };
  
    const isValidEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      validateInput();
    });
  });
  
const form = document.getElementById("checkoutForm");

  function validateForm() {
    let isValid = true;

    // Reset error messages
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function (errorMessage) {
      errorMessage.textContent = "";
    });

    // Validate person picking up
    const personPickingUp = document.getElementById("personPickingUp").value.trim();
    if (personPickingUp === "") {
      document.getElementById("personPickingUpError").textContent = "Please enter the name of the person picking up the baby";
      isValid = false;
    }

    // Validate contact number
    const contactNumber = document.getElementById("contactNumber").value.trim();
    if (contactNumber === "") {
      document.getElementById("contactNumberError").textContent = "Please enter a contact number";
      isValid = false;

    return isValid;
  }

  }


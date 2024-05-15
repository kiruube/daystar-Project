const form = document.getElementById("checkinForm");

  function validateForm() {
    let isValid = true;

    // Reset error messages
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function (errorMessage) {
      errorMessage.textContent = "";
    });

    // Validate baby name
    const babyName = document.getElementById("babyName").value.trim();
    if (babyName === "") {
      document.getElementById("babyNameError").textContent = "Please select a baby's name";
      isValid = false;
    }

    // Validate person brought
    const personBrought = document.getElementById("personBrought").value.trim();
    if (personBrought === "") {
      document.getElementById("personBroughtError").textContent = "Please enter the name of the person who brought the baby";
      isValid = false;
    }

    // Validate contact brought
    const contactBrought = document.getElementById("contactBrought").value.trim();
    if (contactBrought === "") {
      document.getElementById("contactBroughtError").textContent = "Please enter the contact information for the person who brought the baby";
      isValid = false;
    }

    // Validate period of stay
    const periodOfStay = document.querySelector('input[name="periodOfStay"]:checked');
    if (!periodOfStay) {
      document.getElementById("periodOfStayError").textContent = "Please select the period of stay for the baby";
      isValid = false;
    }

    // Validate sitter
    const sitter = document.getElementById("sitter").value.trim();
    if (sitter === "") {
      document.getElementById("sitterError").textContent = "Please select a sitter for the baby";
      isValid = false;
    }

    return isValid;
  }


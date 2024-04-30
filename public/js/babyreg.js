//Form validation
const form = document.getElementById("babyRegistrationForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validateForm()) {
    // Form submission logic
    alert("Baby Registered successfully!");
    form.reset();
  }
});

// Parent Responsibility Validation
const parentResponsibility = document.querySelector('input[name="parentResponsibility"]:checked');
if (!parentResponsibility) {
document.getElementById("parentResponsibilityError").textContent = "Please select parental responsibility";
isValid = false;
}


// Show/hide guardian details based on orphan status
const isOrphanYes = document.getElementById("isOrphanYes");
const guardianDetails = document.getElementById("guardianDetails");
isOrphanYes.addEventListener("change", function () {
  guardianDetails.style.display = this.checked ? "block" : "none";
});

function validateForm() {
  let isValid = true;

  // Reset error messages
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach(function (errorMessage) {
    errorMessage.textContent = "";
  });

  // Child's Information validation
  const childName = form.elements["childName"].value.trim();
  if (childName === "") {
    document.getElementById("childNameError").textContent =
      "Child's name is required";
    isValid = false;
  }

  const gender = form.elements["gender"].value;
  if (gender === "") {
    document.getElementById("genderError").textContent =
      "Gender is required";
    isValid = false;
  }

  const dateOfBirth = form.elements["dateOfBirth"].value.trim();
  if (dateOfBirth === "") {
    document.getElementById("dateOfBirthError").textContent =
      "Date of birth is required";
    isValid = false;
  }

  // Parents' Information validation
  const fatherName = form.elements["fatherName"].value.trim();
  if (fatherName === "") {
    document.getElementById("fatherNameError").textContent =
      "Father's name is required";
    isValid = false;
  }

  const fatherPhone = form.elements["fatherPhone"].value.trim();
  if (fatherPhone === "") {
    document.getElementById("fatherPhoneError").textContent =
      "Father's phone number is required";
    isValid = false;
  }

  const fatherEmail = form.elements["fatherEmail"].value.trim();
  if (fatherEmail === "") {
    document.getElementById("fatherEmailError").textContent =
      "Father's email is required";
    isValid = false;
  }

  const fatherNationality =
    form.elements["fatherNationality"].value.trim();
  if (fatherNationality === "") {
    document.getElementById("fatherNationalityError").textContent =
      "Father's nationality is required";
    isValid = false;
  }

  const fatherOccupation = form.elements["fatherOccupation"].value.trim();
  if (fatherOccupation === "") {
    document.getElementById("fatherOccupationError").textContent =
      "Father's occupation is required";
    isValid = false;
  }

  const motherName = form.elements["motherName"].value.trim();
  if (motherName === "") {
    document.getElementById("motherNameError").textContent =
      "Mother's name is required";
    isValid = false;
  }

  const motherPhone = form.elements["motherPhone"].value.trim();
  if (motherPhone === "") {
    document.getElementById("motherPhoneError").textContent =
      "Mother's phone number is required";
    isValid = false;
  }

  const motherEmail = form.elements["motherEmail"].value.trim();
  if (motherEmail === "") {
    document.getElementById("motherEmailError").textContent =
      "Mother's email is required";
    isValid = false;
  }

  const motherNationality =
    form.elements["motherNationality"].value.trim();
  if (motherNationality === "") {
    document.getElementById("motherNationalityError").textContent =
      "Mother's nationality is required";
    isValid = false;
  }

  const motherOccupation = form.elements["motherOccupation"].value.trim();
  if (motherOccupation === "") {
    document.getElementById("motherOccupationError").textContent =
      "Mother's occupation is required";
    isValid = false;
  }

  // Other Information validation
  const location = form.elements["location"].value.trim();
  if (location === "") {
    document.getElementById("locationError").textContent =
      "location is required";
    isValid = false;
  }

  const nationality = form.elements["nationality"].value.trim();
  if (nationality === "") {
    document.getElementById("nationalityError").textContent =
      "Nationality is required";
    isValid = false;
  }

  const religion = form.elements["religion"].value.trim();
  if (religion === "") {
    document.getElementById("religionError").textContent =
      "Religion is required";
    isValid = false;
  }

  //Medical Details
  const medicalBackground =
    form.elements["medicalBackground"].value.trim();
  if (medicalBackground === "") {
    document.getElementById("medicalBackgroundError").textContent =
      "Medical background is required";
    isValid = false;
  }

  const doctorPhone = form.elements["doctorPhone"].value.trim();
  if (doctorPhone === "") {
    document.getElementById("doctorPhoneError").textContent =
      "Doctor's phone number  is required";
    isValid = false;
  }

  const doctorEmail = form.elements["doctorEmail"].value.trim();
  if (doctorEmail === "") {
    document.getElementById("doctorEmailError").textContent =
      "Doctor's email is required";
    isValid = false;
  }

  const hosptial = form.elements["hospital"].value.trim();
  if (hosptial === "") {
    document.getElementById("hospitalError").textContent =
      "Hospital is required";
    isValid = false;
  }
  
  const babyNumber = form.elements["babyNumber"].value.trim();
  if (babyNumber === "") {
    document.getElementById("babyNumberError").textContent =
      "Baby Number is required";
    isValid = false;
  }

  // Validate guardian details if child is an orphan
  if (isOrphanYes.checked) {
    const guardianName = form.elements["guardianName"].value.trim();
    if (guardianName === "") {
      document.getElementById("guardianNameError").textContent =
        "Guardian's name is required";
      isValid = false;
    }

    const guardianPhone = form.elements["guardianPhone"].value.trim();
    if (guardianPhone === "") {
      document.getElementById("guardianPhoneError").textContent =
        "Guardian's phone number is required";
      isValid = false;
    }

    const guardianEmail = form.elements["guardianEmail"].value.trim();
    if (guardianEmail === "") {
      document.getElementById("guardianEmailError").textContent =
        "Guardian's email is required";
      isValid = false;
    }

    const relationshipStatus =
      form.elements["relationshipStatus"].value.trim();
    if (relationshipStatus === "") {
      document.getElementById("relationshipStatusError").textContent =
        "Relationship status with the child is required";
      isValid = false;
    }
  }

  return isValid;
}
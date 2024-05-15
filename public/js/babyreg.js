const validation = (event) => {
  let error = 0;

  // Child's Information
  if (childName.value == "") {
    childName.style.border = "1px solid red";
    childNameError.textContent = "Child's Name is required!";
    childNameError.style = "color: red;";
    error++;
  } else {
    childName.style.border = "1px solid green";
    childNameError.textContent = "";
  }

  // Gender validation
  if (gender.value == "") {
    gender.style.border = "1px solid red";
    genderError.textContent = "Please select Gender!";
    genderError.style = "color: red;";
    error++;
  } else {
    gender.style.border = "1px solid green";
    genderError.textContent = "";
  }

  // Date of Birth validation
  if (dateOfBirth.value == "") {
    dateOfBirth.style.border = "1px solid red";
    dateOfBirthError.textContent = "Date of Birth is required!";
    dateOfBirthError.style = "color: red;";
    error++;
  } else {
    dateOfBirth.style.border = "1px solid green";
    dateOfBirthError.textContent = "";
  }

  // Father's Name validation
  if (fatherName.value == "") {
    fatherName.style.border = "1px solid red";
    fatherNameError.textContent = "Father's Name is required!";
    fatherNameError.style = "color: red;";
    error++;
  } else {
    fatherName.style.border = "1px solid green";
    fatherNameError.textContent = "";
  }

  // Father's Telephone Number validation
  const fatherPhone = document.getElementById("fatherPhone");
  const fatherPhoneError = document.getElementById("fatherPhoneError");
  const phoneRegex = /^\d{10}$/; // Regex for ten digits

  if (!phoneRegex.test(fatherPhone.value.trim())) {
    fatherPhone.style.border = "1px solid red";
    fatherPhoneError.textContent =
      "Please enter a valid ten-digit phone number!";
    fatherPhoneError.style = "color: red;";
    error++;
  } else {
    fatherPhone.style.border = "1px solid green";
    fatherPhoneError.textContent = "";
  }

  // Father's Email validation
  const fatherEmail = document.getElementById("fatherEmail");
  const fatherEmailError = document.getElementById("fatherEmailError");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for email format

  if (!emailRegex.test(fatherEmail.value.trim())) {
    fatherEmail.style.border = "1px solid red";
    fatherEmailError.textContent = "Please enter a valid email address!";
    fatherEmailError.style = "color: red;";
    error++;
  } else {
    fatherEmail.style.border = "1px solid green";
    fatherEmailError.textContent = "";
  }

  // Father's Nationality validation
  if (fatherNationality.value == "") {
    fatherNationality.style.border = "1px solid red";
    fatherNationalityError.textContent = "Father's Nationality is required!";
    fatherNationalityError.style = "color: red;";
    error++;
  } else {
    fatherNationality.style.border = "1px solid green";
    fatherNationalityError.textContent = "";
  }

  // Mother's Name validation
  if (motherName.value == "") {
    motherName.style.border = "1px solid red";
    motherNameError.textContent = "Mother's Name is required!";
    motherNameError.style = "color: red;";
    error++;
  } else {
    motherName.style.border = "1px solid green";
    motherNameError.textContent = "";
  }

  // Mother's Telephone Number validation
  const motherPhone = document.getElementById("motherPhone");
  const motherPhoneError = document.getElementById("motherPhoneError");
  if (!phoneRegex.test(motherPhone.value.trim())) {
    motherPhone.style.border = "1px solid red";
    motherPhoneError.textContent =
      "Please enter a valid ten-digit phone number!";
    motherPhoneError.style = "color: red;";
    error++;
  } else {
    motherPhone.style.border = "1px solid green";
    motherPhoneError.textContent = "";
  }

  // Mother's Email validation
  const motherEmail = document.getElementById("motherEmail");
  const motherEmailError = document.getElementById("motherEmailError");
  if (!emailRegex.test(motherEmail.value.trim())) {
    motherEmail.style.border = "1px solid red";
    motherEmailError.textContent = "Please enter a valid email address!";
    motherEmailError.style = "color: red;";
    error++;
  } else {
    motherEmail.style.border = "1px solid green";
    motherEmailError.textContent = "";
  }

  // Mother's Nationality validation
  if (motherNationality.value == "") {
    motherNationality.style.border = "1px solid red";
    motherNationalityError.textContent = "Mother's Nationality is required!";
    motherNationalityError.style = "color: red;";
    error++;
  } else {
    motherNationality.style.border = "1px solid green";
    motherNationalityError.textContent = "";
  }

  // Father's Occupation validation
  if (fatherOccupation.value == "") {
    fatherOccupation.style.border = "1px solid red";
    fatherOccupationError.textContent = "Father's Occupation is required!";
    fatherOccupationError.style = "color: red;";
    error++;
  } else {
    fatherOccupation.style.border = "1px solid green";
    fatherOccupationError.textContent = "";
  }

  // Mother's Occupation validation
  if (motherOccupation.value == "") {
    motherOccupation.style.border = "1px solid red";
    motherOccupationError.textContent = "Mother's Occupation is required!";
    motherOccupationError.style = "color: red;";
    error++;
  } else {
    motherOccupation.style.border = "1px solid green";
    motherOccupationError.textContent = "";
  }

  // Medical Background validation
  if (medicalBackground.value == "") {
    medicalBackground.style.border = "1px solid red";
    medicalBackgroundError.textContent = "Medical Background is required!";
    medicalBackgroundError.style = "color: red;";
    error++;
  } else {
    medicalBackground.style.border = "1px solid green";
    medicalBackgroundError.textContent = "";
  }

  // Doctor's Name validation
  if (doctor.value == "") {
    doctor.style.border = "1px solid red";
    doctorError.textContent = "Doctor's Name is required!";
    doctorError.style = "color: red;";
    error++;
  } else {
    doctor.style.border = "1px solid green";
    doctorError.textContent = "";
  }

  // Doctor's Telephone Number validation
  const doctorPhone = document.getElementById("doctorPhone");
  const doctorPhoneError = document.getElementById("doctorPhoneError");
  if (!phoneRegex.test(doctorPhone.value.trim())) {
    doctorPhone.style.border = "1px solid red";
    doctorPhoneError.textContent =
      "Please enter a valid ten-digit phone number!";
    doctorPhoneError.style = "color: red;";
    error++;
  } else {
    doctorPhone.style.border = "1px solid green";
    doctorPhoneError.textContent = "";
  }

  // Doctor's Email validation
  const doctorEmail = document.getElementById("doctorEmail");
  const doctorEmailError = document.getElementById("doctorEmailError");
  if (!emailRegex.test(doctorEmail.value.trim())) {
    doctorEmail.style.border = "1px solid red";
    doctorEmailError.textContent = "Please enter a valid email address!";
    doctorEmailError.style = "color: red;";
    error++;
  } else {
    doctorEmail.style.border = "1px solid green";
    doctorEmailError.textContent = "";
  }

  // Hospital validation
  if (hospital.value == "") {
    hospital.style.border = "1px solid red";
    hospitalError.textContent = "Hospital is required!";
    hospitalError.style = "color: red;";
    error++;
  } else {
    hospital.style.border = "1px solid green";
    hospitalError.textContent = "";
  }

  // Baby Number validation
  if (babyNumber.value == "") {
    babyNumber.style.border = "1px solid red";
    babyNumberError.textContent = "Baby Number is required!";
    babyNumberError.style = "color: red;";
    error++;
  } else {
    babyNumber.style.border = "1px solid green";
    babyNumberError.textContent = "";
  }

  // Validate photo
  const photoInput = document.getElementById("photo");
  const photoError = document.getElementById("photoError");
  if (photoInput.files.length < 4) {
    photoInput.style.border = "1px solid red";
    photoError.textContent = "Please upload four passport photos.";
    photoError.style = "color: red;";
    error++;
  } else {
    photoInput.style.border = "1px solid green";
    photoError.textContent = "";
  }

  // Validate location
  const locationInput = document.getElementById("location");
  const locationError = document.getElementById("locationError");
  if (locationInput.value.trim() === "") {
    locationInput.style.border = "1px solid red";
    locationError.textContent = "Location is required!";
    locationError.style = "color: red;";
    error++;
  } else {
    locationInput.style.border = "1px solid green";
    locationError.textContent = "";
  }

  // Validate nationality input
  const nationalityInput = document.getElementById("nationality");
  const nationalityError = document.getElementById("nationalityError");
  if (nationalityInput.value.trim() === "") {
    nationalityInput.style.border = "1px solid red";
    nationalityError.textContent = "Nationality is required!";
    nationalityError.style = "color: red;";
    error++;
  } else {
    nationalityInput.style.border = "1px solid green";
    nationalityError.textContent = "";
  }

  // Validate religion input
  const religionInput = document.getElementById("religion");
  const religionError = document.getElementById("religionError");
  if (religionInput.value.trim() === "") {
    religionInput.style.border = "1px solid red";
    religionError.textContent = "Religion is required!";
    religionError.style = "color: red;";
    error++;
  } else {
    religionInput.style.border = "1px solid green";
    religionError.textContent = "";
  }

  // Validate parental responsibility
  const parentResponsibility = document.querySelector(
    'input[name="parentResponsibility"]:checked'
  );
  const parentResponsibilityError = document.getElementById(
    "parentResponsibilityError"
  );
  if (!parentResponsibility) {
    document
      .querySelectorAll('input[name="parentResponsibility"]')
      .forEach(function (el) {
        el.style.border = "1px solid red";
      });
    parentResponsibilityError.textContent =
      "Please select who has parental responsibility.";
    parentResponsibilityError.style = "color: red;";
    error++;
  } else {
    document
      .querySelectorAll('input[name="parentResponsibility"]')
      .forEach(function (el) {
        el.style.border = "1px solid green";
      });
    parentResponsibilityError.textContent = "";
  }

  // Validate guardian's details if displayed
  const guardianName = document.getElementById("guardianName");
  const guardianNameError = document.getElementById("guardianNameError");
  if (guardianName.value.trim() === "") {
    guardianName.style.border = "1px solid red";
    guardianNameError.textContent = "Guardian's Name is required!";
    guardianNameError.style = "color: red;";
    error++;
  } else {
    guardianName.style.border = "1px solid green";
    guardianNameError.textContent = "";
  }

  const guardianPhone = document.getElementById("guardianPhone");
  const guardianPhoneError = document.getElementById("guardianPhoneError");
  if (guardianPhone.value.trim() === "") {
    guardianPhone.style.border = "1px solid red";
    guardianPhoneError.textContent = "Guardian's Telephone Number is required!";
    guardianPhoneError.style = "color: red;";
    error++;
  } else {
    guardianPhone.style.border = "1px solid green";
    guardianPhoneError.textContent = "";
  }

  const guardianEmail = document.getElementById("guardianEmail");
  const guardianEmailError = document.getElementById("guardianEmailError");
  if (guardianEmail.value.trim() === "") {
    guardianEmail.style.border = "1px solid red";
    guardianEmailError.textContent = "Guardian's Email is required!";
    guardianEmailError.style = "color: red;";
    error++;
  } else {
    guardianEmail.style.border = "1px solid green";
    guardianEmailError.textContent = "";
  }

  const relationshipStatus = document.getElementById("relationshipStatus");
  const relationshipStatusError = document.getElementById(
    "relationshipStatusError"
  );
  if (relationshipStatus.value.trim() === "") {
    relationshipStatus.style.border = "1px solid red";
    relationshipStatusError.textContent =
      "Relationship Status with the Child is required!";
    relationshipStatusError.style = "color: red;";
    error++;
  } else {
    relationshipStatus.style.border = "1px solid green";
    relationshipStatusError.textContent = "";
  }

  // If any errors, prevent form submission
  if (error > 0) {
    event.preventDefault();
  }
};

// Toggle guardian details based on orphan status
document.querySelectorAll('input[name="isOrphan"]').forEach(function (el) {
  el.addEventListener("change", function () {
    const guardianDetails = document.getElementById("guardianDetails");
    if (this.value === "yes") {
      guardianDetails.style.display = "block";
    } else {
      guardianDetails.style.display = "none";
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const parentResponsibilityRadios = document.getElementsByName('parentResponsibility');
  const fatherDetails = document.getElementById('fatherDetails').querySelectorAll('input, textarea');
  const motherDetails = document.getElementById('motherDetails').querySelectorAll('input, textarea');
  const guardianDetails = document.getElementById('guardianDetails').querySelectorAll('input, textarea');
  
  function toggleFields() {
    const selectedValue = document.querySelector('input[name="parentResponsibility"]:checked').value;

    if (selectedValue === 'father') {
      fatherDetails.forEach(input => input.disabled = false);
      motherDetails.forEach(input => {
        input.disabled = true;
        input.value = ''; // clear the fields
      });
      guardianDetails.forEach(input => {
        input.disabled = true;
        input.value = ''; // clear the fields
      });
    } else if (selectedValue === 'mother') {
      fatherDetails.forEach(input => {
        input.disabled = true;
        input.value = ''; // clear the fields
      });
      motherDetails.forEach(input => input.disabled = false);
      guardianDetails.forEach(input => {
        input.disabled = true;
        input.value = ''; // clear the fields
      });
    } else if (selectedValue === 'both') {
      fatherDetails.forEach(input => input.disabled = false);
      motherDetails.forEach(input => input.disabled = false);
      guardianDetails.forEach(input => {
        input.disabled = true;
        input.value = ''; // clear the fields
      });
    } else if (selectedValue === 'other') {
      fatherDetails.forEach(input => {
        input.disabled = true;
        input.value = ''; // clear the fields
      });
      motherDetails.forEach(input => {
        input.disabled = true;
        input.value = ''; // clear the fields
      });
      guardianDetails.forEach(input => input.disabled = false);
    }
  }

  parentResponsibilityRadios.forEach(radio => {
    radio.addEventListener('change', toggleFields);
  });

  // Initial check to set correct state on page load
  toggleFields();
});

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

document.getElementById('babyRegistrationForm').addEventListener('submit', function (event) {
  let error = 0;

  // Validation rules
  const requiredTextFields = [
    { id: 'childName', errorMsg: "Child's Name is required!" },
    { id: 'gender', errorMsg: "Please select Gender!" },
    { id: 'dateOfBirth', errorMsg: "Date of Birth is required!" },
    { id: 'fatherName', errorMsg: "Father's Name is required!" },
    { id: 'motherName', errorMsg: "Mother's Name is required!" },
    { id: 'location', errorMsg: "Location is required!" },
    { id: 'nationality', errorMsg: "Nationality is required!" },
    { id: 'religion', errorMsg: "Religion is required!" },
    { id: 'doctor', errorMsg: "Doctor's Name is required!" },
    { id: 'hospital', errorMsg: "Hospital is required!" },
    { id: 'babyNumber', errorMsg: "Baby Number is required!" },
    { id: 'guardianName', errorMsg: "Guardian's Name is required!" },
    { id: 'relationshipStatus', errorMsg: "Relationship Status with the Child is required!" },
    { id: 'fatherNationality', errorMsg: "Father's Nationality is required!"},
    { id: 'fatherOccupation', errorMsg: "Father's Occupation is required!"},
    { id: 'motherNationality', errorMsg: "Mother's Nationality is required!"},
    { id: 'motherOccupation', errorMsg: "Mother's Occupation is required!"},
    { id: 'medicalBackground', errorMsg: "Medical Background is required!"}
  ];
  
  const requiredEmailFields = [
    { id: 'fatherEmail', errorMsg: "Please enter a valid email address!" },
    { id: 'motherEmail', errorMsg: "Please enter a valid email address!" },
    { id: 'doctorEmail', errorMsg: "Please enter a valid email address!" },
    { id: 'guardianEmail', errorMsg: "Please enter a valid email address!" }
  ];
  
  const requiredTelFields = [
    { id: 'fatherPhone', errorMsg: "Please enter a valid ten-digit phone number!" },
    { id: 'motherPhone', errorMsg: "Please enter a valid ten-digit phone number!" },
    { id: 'doctorPhone', errorMsg: "Please enter a valid ten-digit phone number!" },
    { id: 'guardianPhone', errorMsg: "Please enter a valid ten-digit phone number!" }
  ];

  requiredTextFields.forEach(field => {
    const input = document.getElementById(field.id);
    const errorElement = document.getElementById(field.id + 'Error');
    if (input && !input.disabled && input.value.trim() === '') {
      input.style.border = '1px solid red';
      errorElement.textContent = field.errorMsg;
      errorElement.style.color = 'red';
      error++;
    } else if (input) {
      input.style.border = '1px solid green';
      errorElement.textContent = '';
    }
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  requiredEmailFields.forEach(field => {
    const input = document.getElementById(field.id);
    const errorElement = document.getElementById(field.id + 'Error');
    if (input && !input.disabled && !emailRegex.test(input.value.trim())) {
      input.style.border = '1px solid red';
      errorElement.textContent = field.errorMsg;
      errorElement.style.color = 'red';
      error++;
    } else if (input) {
      input.style.border = '1px solid green';
      errorElement.textContent = '';
    }
  });

  const phoneRegex = /^\d{10}$/;
  requiredTelFields.forEach(field => {
    const input = document.getElementById(field.id);
    const errorElement = document.getElementById(field.id + 'Error');
    if (input && !input.disabled && !phoneRegex.test(input.value.trim())) {
      input.style.border = '1px solid red';
      errorElement.textContent = field.errorMsg;
      errorElement.style.color = 'red';
      error++;
    } else if (input) {
      input.style.border = '1px solid green';
      errorElement.textContent = '';
    }
  });

  // Validate parental responsibility
  const parentResponsibility = document.querySelector('input[name="parentResponsibility"]:checked');
  const parentResponsibilityError = document.getElementById("parentResponsibilityError");
  if (!parentResponsibility) {
    document.querySelectorAll('input[name="parentResponsibility"]').forEach(function (el) {
      el.style.border = "1px solid red";
    });
    parentResponsibilityError.textContent = "Please select who has parental responsibility.";
    parentResponsibilityError.style = "color: red;";
    error++;
  } else {
    document.querySelectorAll('input[name="parentResponsibility"]').forEach(function (el) {
      el.style.border = "1px solid green";
    });
    parentResponsibilityError.textContent = "";
  }

  // If any errors, prevent form submission
  if (error > 0) {
    event.preventDefault();
  }
});

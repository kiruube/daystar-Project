const validation = (event) => {
  let error = 0;

  // Full Name validation
  const fullName = document.getElementById('fullName');
  const fullNameError = document.getElementById('fullNameError');
  if (fullName.value.trim() === '') {
      fullName.style.border = '1px solid red';
      fullNameError.textContent = 'Full Name is required!';
      fullNameError.style.color = 'red';
      error++;
  } else {
      fullName.style.border = '1px solid green';
      fullNameError.textContent = '';
  }

  // Gender validation
  const gender = document.getElementById('gender');
  const genderError = document.getElementById('genderError');
  if (gender.value === '') {
      gender.style.border = '1px solid red';
      genderError.textContent = 'Please select Gender!';
      genderError.style.color = 'red';
      error++;
  } else {
      gender.style.border = '1px solid green';
      genderError.textContent = '';
  }

  // Date of Birth validation
  const dateOfBirth = document.getElementById('dateOfBirth');
  const dateOfBirthError = document.getElementById('dateOfBirthError');
  if (dateOfBirth.value.trim() === '') {
      dateOfBirth.style.border = '1px solid red';
      dateOfBirthError.textContent = 'Date of Birth is required!';
      dateOfBirthError.style.color = 'red';
      error++;
  } else {
      dateOfBirth.style.border = '1px solid green';
      dateOfBirthError.textContent = '';
  }

  // Religion validation
  const religion = document.getElementById('religion');
  const religionError = document.getElementById('religionError');
  if (religion.value.trim() === '') {
      religion.style.border = '1px solid red';
      religionError.textContent = 'Religion is required!';
      religionError.style.color = 'red';
      error++;
  } else {
      religion.style.border = '1px solid green';
      religionError.textContent = '';
  }

  // Telephone Number validation
  const phone = document.getElementById('phone');
  const phoneError = document.getElementById('phoneError');
  const phoneRegex = /^\d{10}$/; // Regex for ten digits

  if (!phoneRegex.test(phone.value.trim())) {
      phone.style.border = '1px solid red';
      phoneError.textContent = 'Please enter a valid ten-digit phone number!';
      phoneError.style.color = 'red';
      error++;
  } else {
      phone.style.border = '1px solid green';
      phoneError.textContent = '';
  }

  // Email validation
  const email = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for email format

  if (!emailRegex.test(email.value.trim())) {
      email.style.border = '1px solid red';
      emailError.textContent = 'Please enter a valid email address!';
      emailError.style.color = 'red';
      error++;
  } else {
      email.style.border = '1px solid green';
      emailError.textContent = '';
  }

  // Nationality validation
  const nationality = document.getElementById('nationality');
  const nationalityError = document.getElementById('nationalityError');
  if (nationality.value.trim() === '') {
      nationality.style.border = '1px solid red';
      nationalityError.textContent = 'Nationality is required!';
      nationalityError.style.color = 'red';
      error++;
  } else {
      nationality.style.border = '1px solid green';
      nationalityError.textContent = '';
  }

  // National ID Number (NIN) validation
  const nin = document.getElementById('nin');
  const ninError = document.getElementById('ninError');
  const ninRegex = /^(CM|CF)\d{8}[A-Z]{4}$/;
  if (!ninRegex.test(nin.value.trim())) {
      nin.style.border = '1px solid red';
      ninError.textContent = 'Please enter a valid National ID Number (NIN)!';
      ninError.style.color = 'red';
      error++;
  } else {
      nin.style.border = '1px solid green';
      ninError.textContent = '';
  }

  // Next of Kin validation
  const nok = document.getElementById('nok');
  const nokError = document.getElementById('nokError');
  if (nok.value.trim() === '') {
      nok.style.border = '1px solid red';
      nokError.textContent = 'Next of Kin is required!';
      nokError.style.color = 'red';
      error++;
  } else {
      nok.style.border = '1px solid green';
      nokError.textContent = '';
  }

  // Level of Education validation
  const education = document.getElementById('education');
  const educationError = document.getElementById('educationError');
  if (education.value.trim() === '') {
      education.style.border = '1px solid red';
      educationError.textContent = 'Level of Education is required!';
      educationError.style.color = 'red';
      error++;
  } else {
      education.style.border = '1px solid green';
      educationError.textContent = '';
  }

  // Recommender's Name validation
  const recommendersName = document.getElementById('recommendersName');
  const recommendersNameError = document.getElementById('recommendersNameError');
  if (recommendersName.value.trim() === '') {
      recommendersName.style.border = '1px solid red';
      recommendersNameError.textContent = 'Recommender\'s Name is required!';
      recommendersNameError.style.color = 'red';
      error++;
  } else {
      recommendersName.style.border = '1px solid green';
      recommendersNameError.textContent = '';
  }

  // Kabalaga Resident validation
  const kabalagaResident = document.getElementById('kabalagaResident');
  const kabalagaResidentError = document.getElementById('kabalagaResidentError');
  if (!kabalagaResident.checked) {
      kabalagaResidentError.textContent = 'Please confirm if you are a resident of Kabalaga!';
      kabalagaResidentError.style.color = 'red';
      error++;
  } else {
      kabalagaResidentError.textContent = '';
  }

  // Role validation
  const role = document.getElementById('role');
  const roleError = document.getElementById('roleError');
  if (role.value.trim() === '') {
      role.style.border = '1px solid red';
      roleError.textContent = 'Role is required!';
      roleError.style.color = 'red';
      error++;
  } else {
      role.style.border = '1px solid green';
      roleError.textContent = '';
  }

  // Staff Number validation
  const staffNumber = document.getElementById('staffNumber');
  const staffNumberError = document.getElementById('staffNumberError');
  if (staffNumber.value.trim() === '') {
      staffNumber.style.border = '1px solid red';
      staffNumberError.textContent = 'Staff Number is required!';
      staffNumberError.style.color = 'red';
      error++;
  } else {
      staffNumber.style.border = '1px solid green';
      staffNumberError.textContent = '';
  }

  if (error > 0) {
      event.preventDefault();
  }
};

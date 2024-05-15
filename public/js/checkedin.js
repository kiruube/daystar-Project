const validation = (event) => {
    let error = 0;

  // Validate baby name
  const babyName = document.getElementById('babyName');
  const babyNameError = document.getElementById('babyNameError');
  if (babyName.value.trim() === '') {
    babyName.style.border = '1px solid red';
    babyNameError.textContent = 'Baby Name is required!';
    babyNameError.style = 'color: red;';
    error++;
  } else {
    babyName.style.border = '1px solid green';
    babyNameError.textContent = '';
  }

  // Validate person who brought the baby
  const personBrought = document.getElementById('personBrought');
  const personBroughtError = document.getElementById('personBroughtError');
  if (personBrought.value.trim() === '') {
    personBrought.style.border = '1px solid red';
    personBroughtError.textContent = 'Person Who Brought is required!';
    personBroughtError.style = 'color: red;';
    error++;
  } else {
    personBrought.style.border = '1px solid green';
    personBroughtError.textContent = '';
  }

  // Validate contact for person who brought the baby
  const contactBrought = document.getElementById('contactBrought');
  const contactBroughtError = document.getElementById('contactBroughtError');
  if (contactBrought.value.trim() === '') {
    contactBrought.style.border = '1px solid red';
    contactBroughtError.textContent = 'Contact for Person Who Brought is required!';
    contactBroughtError.style = 'color: red;';
    error++;
  } else {
    contactBrought.style.border = '1px solid green';
    contactBroughtError.textContent = '';
  }

  // Validate period of stay
  const periodOfStay = document.querySelector('input[name="periodOfStay"]:checked');
  const periodOfStayError = document.getElementById('periodOfStayError');
  if (!periodOfStay) {
    document.querySelectorAll('input[name="periodOfStay"]').forEach(el => {
      el.style.border = '1px solid red';
    });
    periodOfStayError.textContent = 'Please select the period of stay.';
    periodOfStayError.style = 'color: red;';
    error++;
  } else {
    document.querySelectorAll('input[name="periodOfStay"]').forEach(el => {
      el.style.border = '1px solid green';
    });
    periodOfStayError.textContent = '';
  }

  // Validate sitter selection
  const sitter = document.getElementById('sitter');
  const sitterError = document.getElementById('sitterError');
  if (sitter.value.trim() === '') {
    sitter.style.border = '1px solid red';
    sitterError.textContent = 'Please assign a sitter.';
    sitterError.style = 'color: red;';
    error++;
  } else {
    sitter.style.border = '1px solid green';
    sitterError.textContent = '';
  }
    if (error > 0) {
        event.preventDefault();
    }
  };
  
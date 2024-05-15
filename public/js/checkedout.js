const validation = (event) => {
    let error = 0;

    
  // Validate person picking up the baby
  const personPickingUp = document.getElementById('personPickingUp');
  const personPickingUpError = document.getElementById('personPickingUpError');
  if (personPickingUp.value.trim() === '') {
    personPickingUp.style.border = '1px solid red';
    personPickingUpError.textContent = 'Person Picking Up is required!';
    personPickingUpError.style = 'color: red;';
    error++;
  } else {
    personPickingUp.style.border = '1px solid green';
    personPickingUpError.textContent = '';
  }

  // Validate contact number
  const contactNumber = document.getElementById('contactNumber');
  const contactNumberError = document.getElementById('contactNumberError');
  const contactNumberPattern = /^[0-9]+$/;
  if (contactNumber.value.trim() === '') {
    contactNumber.style.border = '1px solid red';
    contactNumberError.textContent = 'Contact Number is required!';
    contactNumberError.style = 'color: red;';
    error++;
  } else if (!contactNumberPattern.test(contactNumber.value.trim())) {
    contactNumber.style.border = '1px solid red';
    contactNumberError.textContent = 'Contact Number must be numeric!';
    contactNumberError.style = 'color: red;';
    error++;
  } else {
    contactNumber.style.border = '1px solid green';
    contactNumberError.textContent = '';
  }

    if (error > 0) {
        event.preventDefault();
    }
  };
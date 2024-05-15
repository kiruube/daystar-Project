const validation = (event) => {
  let error = 0;

  // Record type validation
  let formValid = false; // by default, the input is false, checked or not
  const recordType = document.getElementsByName("recordType"); // get all radio buttons with the name 'recordType'
  const expenseRadioError = document.getElementById("expenseRadioError"); // get the error message element

  for (var i = 0; i < recordType.length; i++) {
    // confirming if the radio button has been checked
    if (recordType[i].checked) {
      formValid = true; // changes validation to true if checked
      break;
    }
  }
  if (!formValid) {
    expenseRadioError.textContent = "Record Type is required";
    expenseRadioError.style.color = "red";
    error++;
  } else {
    expenseRadioError.textContent = "";
  }

  // Reference Number validation
  if (recordRefNo.value == "") {
    recordRefNo.style.border = "1px solid red";
    recordRefNoError.textContent = "Reference Number is required!";
    recordRefNoError.style = "color: red;";
    error++;
  } else {
    recordRefNo.style.border = "1px solid green";
    recordRefNoError.textContent = "";
  }

  //Date validation
  if (recordDate.value == "") {
    recordDate.style.border = "1px solid red";
    recordDateError.textContent = "Date is required!";
    recordDateError.style = "color: red;";
    error++;
  } else {
    recordDate.style.border = "1px solid green";
    recordDateError.textContent = "";
  }

  //Date validation
  if (recordDescription.value == "") {
    recordDescription.style.border = "1px solid red";
    recordDescriptionError.textContent = "Description is required!";
    recordDescriptionError.style = "color: red;";
    error++;
  } else {
    recordDescription.style.border = "1px solid green";
    recordDescriptionError.textContent = "";
  }

  //Amount validation
  if (recordAmount.value == "") {
    recordAmount.style.border = "1px solid red";
    recordAmountError.textContent = "Amount (UGX) is required!";
    recordAmountError.style = "color: red;";
    error++;
  } else {
    recordAmount.style.border = "1px solid green";
    recordAmountError.numberContent = "";
  }

  if (error > 0) {
    event.preventDefault();
  }
};

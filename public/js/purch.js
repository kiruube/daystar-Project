const validation = (event) => {
  let error = 0;

// Validate item name
const itemName = document.getElementById('itemName');
const itemNameError = document.getElementById('itemNameError');
if (itemName.value.trim() === '') {
  itemName.style.border = '1px solid red';
  itemNameError.textContent = 'Item Name is required!';
  itemNameError.style =  'color:red;';
  error++;
} else {
  itemName.style.border = '1px solid green';
  itemNameError.textContent = '';
}

// Validate date of delivery
const date = document.getElementById('date');
const dateError = document.getElementById('dateError');
if (date.value.trim() === '') {
  date.style.border = '1px solid red';
  dateError.textContent = 'Date Of Delivery is required!';
  dateError.style = 'color:red;';
  error++;
} else {
  date.style.border = '1px solid green';
  dateError.textContent = '';
}

// Validate item unit
const itemUnit = document.getElementById('itemUnit');
const itemUnitError = document.getElementById('itemUnitError');
if (itemUnit.value.trim() === '') {
  itemUnit.style.border = '1px solid red';
  itemUnitError.textContent = 'Unit (Kg, L, pcs) is required!';
  itemUnitError.style= 'color:red;';
  error++;
} else {
  itemUnit.style.border = '1px solid green';
  itemUnitError.textContent = '';
}

// Validate item quantity
const itemQuantity = document.getElementById('itemQuantity');
const itemQuantityError = document.getElementById('itemQuantityError');
if (itemQuantity.value.trim() === '' || itemQuantity.value <= 0) {
  itemQuantity.style.border = '1px solid red';
  itemQuantityError.textContent = 'Quantity must be a positive number!';
  itemQuantityError.style = 'color:red;';
  error++;
} else {
  itemQuantity.style.border = '1px solid green';
  itemQuantityError.textContent = '';
}

// Validate rate
const rate = document.getElementById('rate');
const rateError = document.getElementById('rateError');
if (rate.value.trim() === '' || rate.value <= 0) {
  rate.style.border = '1px solid red';
  rateError.textContent = 'Rate (UGX) must be a positive number!';
  rateError.style = 'color:red;';
  error++;
} else {
  rate.style.border = '1px solid green';
  rateError.textContent = '';
}

// Validate total amount
const total = document.getElementById('total');
const totalError = document.getElementById('totalError');
if (total.value.trim() === '' || total.value <= 0) {
  total.style.border = '1px solid red';
  totalError.textContent = 'Total Amount (UGX) must be a positive number!';
  totalError.style = 'color:red;';
  error++;
} else {
  total.style.border = '1px solid green';
  totalError.textContent = '';
}

// Validate item description
const itemDescription = document.getElementById('itemDescription');
const itemDescriptionError = document.getElementById('itemDescriptionError');
if (itemDescription.value.trim() === '') {
  itemDescription.style.border = '1px solid red';
  itemDescriptionError.textContent = 'Description is required!';
  itemDescriptionError.style = 'color:red;';
  error++;
} else {
  itemDescription.style.border = '1px solid green';
  itemDescriptionError.textContent = '';
}

// Validate supplier
const supplier = document.getElementById('supplier');
const supplierError = document.getElementById('supplierError');
if (supplier.value.trim() === '') {
  supplier.style.border = '1px solid red';
  supplierError.textContent = 'Supplier is required!';
  supplierError.style = 'color:red;';
  error++;
} else {
  supplier.style.border = '1px solid green';
  supplierError.textContent = '';
}

// Validate item image (optional)
const itemImage = document.getElementById('itemImage');
const itemImageError = document.getElementById('itemImageError');
if (itemImage.files.length === 0) {
  itemImage.style.border = '1px solid red';
  itemImageError.textContent = 'Item Image is required!';
  itemImageError.style = 'color:red;';
  error++;
} else {
  itemImage.style.border = '1px solid green';
  itemImageError.textContent = '';
}

// If any errors, prevent form submission
if (error > 0) {
  event.preventDefault();
}
};

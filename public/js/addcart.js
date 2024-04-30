document.addEventListener('DOMContentLoaded', function() {
    const addItemForm = document.getElementById('addItemForm');
    const itemList = document.getElementById('itemList');

    // Function to add a new item to the list
    function addItemToTable(name, price, unit, description, image) {
        // Create new table row
        const newRow = itemList.insertRow();

        // Insert cells for each column
        const nameCell = newRow.insertCell();
        const priceCell = newRow.insertCell();
        const unitCell = newRow.insertCell();
        const descriptionCell = newRow.insertCell();
        const imageCell = newRow.insertCell();
        const actionCell = newRow.insertCell();

        // Set innerHTML of cells
        nameCell.innerHTML = name;
        priceCell.innerHTML = price;
        unitCell.innerHTML = unit;
        descriptionCell.innerHTML = description;
        // Display image if provided
        if (image) {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(image);
            img.width = 10; // Adjust image width as needed
            imageCell.appendChild(img);
        }
        // Add edit and delete buttons to action cell
        actionCell.innerHTML = '<button onclick="editItem(this)">Update</button> <button onclick="deleteItem(this)">Delete</button>';
    }

    // Function to handle form submission
    addItemForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        // Get form data
        const itemName = document.getElementById('itemNameInput').value;
        const itemPrice = document.getElementById('itemPriceInput').value;
        const itemUnit = document.getElementById('itemUnitInput').value;
        const itemDescription = document.getElementById('itemDescriptionInput').value;
        const itemImage = document.getElementById('itemImageInput').files[0]; // Get first selected image file

        // Add item to table
        addItemToTable(itemName, itemPrice, itemUnit, itemDescription, itemImage);

        // Reset form fields
        addItemForm.reset();
    });

    // Function to handle editing an item
    window.editItem = function(button) {
    
    };

    // Function to handle deleting an item
    window.deleteItem = function(button) {
        // Your delete item functionality here
        // For example, you can remove the table row corresponding to the deleted item
    };
});

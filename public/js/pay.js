// Add event listeners to all forms with action="/clearPayment"
document.querySelectorAll('form[action="/clearPayment"]').forEach(form => {
    form.addEventListener('submit', async event => {
        event.preventDefault(); // Prevent default form submission
        
        // Get sitterId from the hidden input field
        const sitterId = form.querySelector('input[name="sitterId"]').value;

        try {
            // Send a POST request to clear the payment
            const response = await fetch('/clearPayment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ sitterId })
            });

            if (!response.ok) {
                throw new Error('Failed to clear payment');
            }

            // Update the table cell values to 0
            const row = form.closest('tr'); // Find the closest table row
            row.querySelector('.assigned-babies-count').textContent = '0';
            row.querySelector('.payment').textContent = '0';

            // Optionally, disable the button or provide feedback to the user
            form.querySelector('button[type="submit"]').disabled = true;
        } catch (error) {
            console.error('Error:', error.message);
        }
    });
});

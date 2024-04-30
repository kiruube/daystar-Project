document.addEventListener('DOMContentLoaded', () => {
    // Fetch baby registrations from backend API using fetch()
    fetch('http://localhost:3700/.../....')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse response body as JSON
        })
        .then(babies => {
            populateTable(babies);
        })
        .catch(error => {
            console.error('Error fetching baby registered babies:', error);
        });

    // Function to populate the table with baby registration data
    function populateTable(babies) {
        const tableBody = document.getElementById('babyTableBody');

        // Clear existing table rows
        tableBody.innerHTML = '';

        // Loop through each baby object and create table rows
        babies.forEach(baby => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${baby.number}</td>
                <td>${baby.name}</td>
                <td>${baby.dateOfBirth}</td>
                <td>${baby.gender}</td>
                <td>${baby.parentGuardian}</td>
                <td>${baby.contact}</td>
                <td>${baby.email}</td>
                <td>${baby.location}</td>
            `;
            tableBody.appendChild(row);
        });
    }
});

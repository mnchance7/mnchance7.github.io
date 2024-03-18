// Arrays to store person names and salaries
let persons = [];
let salaries = [];

// Function to add a salary
function addSalary() {
    const name = document.getElementById('personName').value.trim();
    const salary = parseFloat(document.getElementById('personSalary').value);

 
    if (!name || isNaN(salary)) {
        alert('Please enter a valid name and a numeric salary.');
        return;
    }
    persons.push(name);
    salaries.push(salary);

    document.getElementById('personName').value = '';
    document.getElementById('personSalary').value = '';
    document.getElementById('personName').focus();

    // Update the dropdown for modifySalary
    updateSelectPersonDropdown();
}

function modifySalary() {
    const select = document.getElementById('selectPerson');
    const newName = select.options[select.selectedIndex].text;
    const newSalary = parseFloat(document.getElementById('newSalary').value);

    if (isNaN(newSalary)) {
        alert('Please enter a numeric value for the salary.');
        return;
    }

    const index = persons.indexOf(newName);
    if (index !== -1) {
        salaries[index] = newSalary;
    }

    // Reset modify fields
    document.getElementById('newSalary').value = '';
    select.selectedIndex = 0; // Reset dropdown selection
}

// Function to display average salary and highest salary
function displayResults() {
    const resultsDiv = document.getElementById('results');
    const averageSalary = salaries.reduce((acc, curr) => acc + curr, 0) / salaries.length;
    const highestSalary = Math.max(...salaries);

    resultsDiv.innerHTML = `
        <h2>Results</h2>
        <p>Average Salary: ${averageSalary.toFixed(2)}</p>
        <p>Highest Salary: ${highestSalary.toFixed(2)}</p>
    `;
}

function displaySalary() {
    const tbody = document.getElementById('results_table').getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''; // Clear existing rows

    persons.forEach((person, index) => {
        const row = tbody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = person;
        cell2.textContent = salaries[index].toFixed(2);
    });
}

function updateSelectPersonDropdown() {
    const select = document.getElementById('selectPerson');
    select.innerHTML = ''; // Clear existing options

    persons.forEach((person) => {
        const option = document.createElement('option');
        option.textContent = person;
        select.appendChild(option);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('personName').focus();
});

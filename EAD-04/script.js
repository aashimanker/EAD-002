// Initialize an empty string to store the input
let input = "";

// Function to clear the entire input
function Clear() {
    input = ""; // Reset the input to an empty string
    document.getElementById('res').value = input; // Update the display
}

// Function to remove the last character from the input
function Back() {
    input = input.slice(0, -1); // Remove the last character from the input string
    document.getElementById('res').value = input; // Update the display
}

// Function to add the clicked button's value to the input
function Solve(value) {
    input += value; // Append the clicked value to the input string
    document.getElementById('res').value = input; // Update the display
}

// Function to calculate and display the result
function Result() {
    try {
        input = eval(input); // Use eval() to evaluate the input as a mathematical expression
        document.getElementById('res').value = input; // Display the result
    } catch (e) {
        document.getElementById('res').value = "Error"; // If there's an error, display "Error"
    }
}


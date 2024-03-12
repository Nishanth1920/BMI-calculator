// Get references to elements
const form = document.getElementById("bmiForm");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const resultDiv = document.getElementById("result");
const heightError = document.getElementById("heightError");
const weightError = document.getElementById("weightError");

// Function to calculate BMI
function calculateBMI(height, weight) {
    // Convert height from cm to meters
    const heightInMeters = height / 100;
    // Calculate BMI
    const bmi = weight / (heightInMeters * heightInMeters);
    // Return BMI rounded to two decimal places
    return bmi.toFixed(2);
}

// Function to display BMI result
function displayResult(bmi) {
    resultDiv.textContent = "Your BMI is: " + bmi;
}

// Function to handle form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Clear previous errors
    heightError.textContent = "";
    weightError.textContent = "";

    // Get height and weight inputs
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    // Validate height and weight inputs
    if (isNaN(height) || height <= 0) {
        heightError.textContent = "Please enter a valid height.";
        return;
    }

    if (isNaN(weight) || weight <= 0) {
        weightError.textContent = "Please enter a valid weight.";
        return;
    }

    // Calculate and display BMI
    const bmi = calculateBMI(height, weight);
    displayResult(bmi);
});

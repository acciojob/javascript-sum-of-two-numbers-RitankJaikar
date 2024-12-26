// Prompt the user for the first number
const firstInput = prompt("Enter the first number:");
// Prompt the user for the second number
const secondInput = prompt("Enter the second number:");

// Parse the inputs to numbers
const num1 = parseFloat(firstInput);
const num2 = parseFloat(secondInput);

// Validate inputs and calculate the sum
if (isNaN(num1) || isNaN(num2)) {
  alert("Invalid input. Please enter a valid number.");
} else {
  const sum = num1 + num2;
  alert(`The sum of ${num1} and ${num2} is ${sum}.`);
}

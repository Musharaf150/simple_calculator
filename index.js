#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number: ", type: "number", name: "firstNumber" },
    { message: "Enter second number: ", type: "number", name: "secondNumber" },
    {
        message: "Choose the Operation what you want to perform",
        type: "list",
        name: "operator",
        choices: [
            "ADDITION",
            "SUBTRACTION",
            "MULTIPLICATION",
            "DIVISION",
            "MUDOLUS",
        ],
    },
]);
if (answer.operator === "ADDITION") {
    console.log(`${answer.operator} of Number ${answer.firstNumber} and ${answer.secondNumber} is`, answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "SUBTRACTION") {
    console.log(`${answer.operator} of Number ${answer.firstNumber} and ${answer.secondNumber} is`, answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "MULTIPLICATION") {
    console.log(`${answer.operator} of Number ${answer.firstNumber} and ${answer.secondNumber} is`, answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "DIVISION") {
    console.log(`${answer.operator} of Number ${answer.firstNumber} and ${answer.secondNumber} is`, answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "MUDOLUS") {
    console.log(`${answer.operator} of Number ${answer.firstNumber} and ${answer.secondNumber} is`, answer.firstNumber % answer.secondNumber);
}
else {
    console.log("invalid input");
}

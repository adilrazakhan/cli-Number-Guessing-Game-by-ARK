#!/usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please Guess a Number:",
    },
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("Congratuation! You Guessed Right Number,");
}
else {
    console.log("You Guesses Wrong Number.");
}

#! /usr/bin/env node

//importing inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";
import { log } from "console";

//Disply a colourfull wellcome message
console.log(chalk.bold.cyanBright("\n\t\t code with Naureen-word-counter"));
console.log("=".repeat(60));

//prompt the user to enter a sentence
let answer = await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:"Enter a sentence",
    }
]);

//Triming the sentence and splittig it into words based on "spaces"

let words = answer.sentence.trim().split(" ");

//Analysis of user inpout sentence
console.log("=".repeat(60));
console.log(chalk.bold("- sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - word count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));



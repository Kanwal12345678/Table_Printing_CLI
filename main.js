#!/usr/bin/env node
//importing inquirer
import inquirer from "inquirer";
//importing chalk
import chalk from "chalk";
//printing the welcome message
console.log(chalk.magenta.bold.italic(" \t\n || Wellcome to my Table Printing app || \t\n"));
//declaring a boolean variable
let myTable = true;
//do while loop to print the table  
while (myTable) {
    let num = await inquirer.prompt([{
            name: "num",
            type: "number",
            message: chalk.yellowBright("Enter a number")
        }]);
    let num1 = num.num;
    for (let i = 1; i <= 10; i++) {
        console.log(chalk.greenBright(`${num1} * ${i} = ${num1 * i}`));
    }
    let answer = await inquirer.prompt([{
            name: "again",
            type: "confirm",
            message: chalk.yellowBright("Do you want to continue?")
        }]);
    myTable = answer.again;
}

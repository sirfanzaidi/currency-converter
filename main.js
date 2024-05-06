#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.redBright("Currency Converter"));
let ForaxRates = {
    PKR: "1",
    Aus: "180",
    Can: "203",
    yuan: "38.41",
    Euro: "295.7",
    Yen: "1.91",
    Riyal: "73.25",
};
let UserIquiry = await inquirer.prompt([
    {
        name: "convertFromm",
        message: "select your currency convert from",
        type: "list",
        choices: ["PKR", "Aus", "Can", "yuan", "Euro", "Yen", "Riyal"],
    },
    {
        name: "convertto",
        message: "select your currency convert to",
        type: "list",
        choices: ["PKR", "Aus", "Can", "yuan", "Euro", "Yen", "Riyal"],
    },
    {
        name: "calculate",
        message: "select amount of your currncy",
        type: "input",
    },
]);
let CconvertedFrom = ForaxRates[UserIquiry.convertFromm];
let Cconvertedto = ForaxRates[UserIquiry.convertto];
let converted_Amount = UserIquiry.calculate;
let pakAmount = converted_Amount / CconvertedFrom;
let convertedAmount = pakAmount * Cconvertedto;
console.log(`converted amount = ${convertedAmount} `);

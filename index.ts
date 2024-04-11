#! /usr/bin/env node

import inquirer from "inquirer";

const currency:any = {
 
  USD: 1,
  GBP: 0.91,
  EUR: 0.76,
  INR: 74.57,
  PKR: 280,
};

let user_Answer = await inquirer.prompt([
  {
    name: "from",
    message: "Enter your Currency",
    type: "list",
    choices: ["USD", "GBP", "EUR", "INR", "PKR"],

  },
  { name: "to",
  message: "Enter to Currency",
  type: "list",
  choices: ["USD", "GBP", "EUR", "INR", "PKR"],
  },
  {

    name:"amount",
    message:"Enter your Amount",
    type:"number",
  }
]
);
let fromAmount=currency[user_Answer.from];
let toAmount=currency[user_Answer.to];
let amount=user_Answer.amount
let baseAmount=amount/fromAmount;
let convertedAmount=baseAmount*toAmount;
console.log(convertedAmount);

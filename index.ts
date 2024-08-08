import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 2003;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin code",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("Correct pin code");

  let operationAnswer = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select any one option",
      type: "list",
      choices: ["withdraw", "check balance"],
    },
  ]);

  if (operationAnswer.operation === "withdraw") {
    let amountAnswer = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter your amount",
        type: "number",
      },
    ]);

    if (amountAnswer.amount > myBalance) {
      console.log("Insufficient balance.");
    } else {
      myBalance -= amountAnswer.amount;
      console.log("Your remaining balance is: " + myBalance);
    }

  } else if (operationAnswer.operation === "check balance") {
    console.log("Your balance is: " + myBalance);
  }

} else {
  console.log("Incorrect pin code");
}

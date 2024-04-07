#! /usr/bin/env node

import inquirer from "inquirer"

let answer = await inquirer.prompt ([
    {
        type: 'number',
        name: 'num1',
        message: 'Enter the first Number',

    },
    {
        type: 'number',
        name: 'num2',
        message: 'Enter the second Number',

    },
    {
        type: 'list',
        name: 'operator',
        message: 'Select the Operator',
        choices: ["Add","Sub","Multiply","Divide"],
    },
])

let result: number

if (answer.operator === 'Add') {
    result = answer.num1 + answer.num2 ;
    console.log("The answer is " + result);
} 

else if (answer.operator === 'Sub') {
    result = answer.num1 - answer.num2 ;
    console.log("The answer is " + result);
}

else if (answer.operator === 'Multiply') {
    result = answer.num1 * answer.num2 ;
    console.log("The answer is " + result);
}

else if (answer.operator === 'Divide') {
    result = answer.num1 / answer.num2 ;
    console.log("The answer is " + result);
}
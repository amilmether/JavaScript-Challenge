const prompt = require("prompt-sync")()

function getnum (num){
    while (true){
    const number = parseFloat(prompt("Enter Number" + num + ": "))
        if (isNaN(number)){
        console.log("invaild number")
    }else {
        return number
    }
}
}
const number1 = getnum('One')
const number2 = getnum("Two")
const operator = prompt("Enter the Operator + / * - %: ")

let Result;
switch (operator) {
    case "+":
        Result = number1 + number2
        console.log(Result)
        break;
    case "-":
        Result = number1 - number2
        console.log(Result)
        break;
    case "/":
        try{
            Result = number1 / number2
        } catch{
            console.log("dividing by zero not allowed")
        }
        console.log(Result)
    case "*":
        Result = number1 * number2
        console.log(Result)
        break;
    case "%":
        Result = number1 % number2
        console.log(Result)
        break;
    default:
        console.log("Enter the correct operator")
        break;
}


function checknum (num){
    while (true){
    const number = parseFloat(prompt("Enter Number" + num + ": "))
        if (isNaN(number)){
        console.log("invaild number")
    }else {
        return number
    }
}
}
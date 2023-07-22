const leftNumber = +prompt("Enter first number 1: ")
const operator = prompt("Enter the operator : ")
const rightNumber = +prompt("Enter second number: ")
if(isNaN(leftNumber)|| isNaN(rightNumber)){
    console.log("It is not a valid number")
}
if(operator === "/"){
    console.log(leftNumber / rightNumber)
}
if(operator === "*"){
    console.log(leftNumber * rightNumber)
}
if(operator === "-"){
    console.log(leftNumber - rightNumber)
}

if(operator === "+"){
    console.log(leftNumber + rightNumber)
}

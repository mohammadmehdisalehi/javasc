function cal(num1,num2,op){

    if (!isNaN(num1 + num2)){
        switch(op){
            case '+':return(num1+num2);
            case '-':return(num1-num2);
            case '*':return(num1*num2);
            case '/':{
                if (num2!=0){
                return(num1/num2);
                }else{return("Divide by zero error")}
               

            }
            default:return(" The Operator is invalid !");
        }

    }
    return ('Not numerical value')
}

const leftNumber = +prompt("Enter first number 1: ")
const operator = prompt("Enter the operator (+,-,*,/): ")
const rightNumber = +prompt("Enter second number: ")

console.log(cal(leftNumber,rightNumber,operator))
function avg(num1,num2,num3,num4,num5)
{
  let avgValue=  (num1+num2+num3+num4+num5)/5
  if (avgValue<12){
    console.log("Failure try another time.")
  }
  return avgValue
}
const n1 = +prompt("Enter first number: ")
const n2 = +prompt("Enter second number: ")
const n3 = +prompt("Enter third number: ")
const n4 = +prompt("Enter fourth number: ")
const n5 = +prompt("Enter fifth number: ")
console.log(avg(n1,n2,n3,n4,n5))
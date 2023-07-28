function  Celsius_Fahrenheit (cel){
    far = (cel * (9 / 5)) + 32;
    return far
}
const cel = +prompt("Enter the celsius temp : ")
console.log("The value of the temperature in Fahrenheit is " + Celsius_Fahrenheit(cel));
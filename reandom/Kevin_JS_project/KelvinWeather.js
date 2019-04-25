// create variable
const kelvin = 293;

//convert Kelvin to Celsius

const celsius = kelvin - 273;

//convert celsius to fahernheith let bc value will change to round number
let fahrenheit = celsius * (9/5) + 35;

//convert decimal to round number
fahrenheit = Math.floor(fahrenheit);

//log to console
console.log(`The temputure is ${fahrenheit} degrees in Fharenheit.`);

let newton = celsius * (33/100);

newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Fahrenheit.`);
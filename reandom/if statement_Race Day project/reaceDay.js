//create randome number 1-1000
let raceNumber = Math.floor(Math.random() * 1000);

let earlyRunner = true;
let age = 19;

//create control flow statement if adult and early runner

if (earlyRunner && age > 18){
   raceNumber += 1000;
}

if (earlyRunner && age > 18){
    console.log(`Race will begin at 9:30am, your race number is: ${raceNumber}.`);
 }
 else if (!earlyRunner && age > 18){
     console.log(`Race will begin at 11 am, your race number is ${raceNumber}.`);
 }
 else if (age < 18 ){
     console.log(`Race will begin at 12:30 pm, your race number is ${raceNumber}`)
 }else{
     Console.log(`Please approach the registration desk, Thanks!`)
 }

